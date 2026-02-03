import { useEffect, useRef } from "react";
import { debounce } from "@/lib/utils";

// --- Shaders ---
const SAKURA_POINT_VSH = `
uniform mat4 uProjection;
uniform mat4 uModelview;
uniform vec3 uResolution;
uniform vec3 uOffset;
uniform vec3 uDOF;  //x:focus distance, y:focus radius, z:max radius
uniform vec3 uFade; //x:start distance, y:half distance, z:near fade start

attribute vec3 aPosition;
attribute vec3 aEuler;
attribute vec2 aMisc; //x:size, y:fade

varying vec3 pposition;
varying float psize;
varying float palpha;
varying float pdist;

varying vec3 normX;
varying vec3 normY;
varying vec3 normZ;
varying vec3 normal;

varying float diffuse;
varying float specular;
varying float rstop;
varying float distancefade;

void main(void) {
    vec4 pos = uModelview * vec4(aPosition + uOffset, 1.0);
    gl_Position = uProjection * pos;
    gl_PointSize = aMisc.x * uProjection[1][1] / -pos.z * uResolution.y * 0.5;
    
    pposition = pos.xyz;
    psize = aMisc.x;
    pdist = length(pos.xyz);
    palpha = smoothstep(0.0, 1.0, (pdist - 0.1) / uFade.z);
    
    vec3 elrsn = sin(aEuler);
    vec3 elrcs = cos(aEuler);
    mat3 rotx = mat3(
        1.0, 0.0, 0.0,
        0.0, elrcs.x, elrsn.x,
        0.0, -elrsn.x, elrcs.x
    );
    mat3 roty = mat3(
        elrcs.y, 0.0, -elrsn.y,
        0.0, 1.0, 0.0,
        elrsn.y, 0.0, elrcs.y
    );
    mat3 rotz = mat3(
        elrcs.z, elrsn.z, 0.0, 
        -elrsn.z, elrcs.z, 0.0,
        0.0, 0.0, 1.0
    );
    mat3 rotmat = rotx * roty * rotz;
    normal = rotmat[2];
    
    mat3 trrotm = mat3(
        rotmat[0][0], rotmat[1][0], rotmat[2][0],
        rotmat[0][1], rotmat[1][1], rotmat[2][1],
        rotmat[0][2], rotmat[1][2], rotmat[2][2]
    );
    normX = trrotm[0];
    normY = trrotm[1];
    normZ = trrotm[2];
    
    const vec3 lit = vec3(0.6917144638660746, 0.6917144638660746, -0.20751433915982237);
    
    float tmpdfs = dot(lit, normal);
    if(tmpdfs < 0.0) {
        normal = -normal;
        tmpdfs = dot(lit, normal);
    }
    diffuse = 0.4 + tmpdfs;
    
    vec3 eyev = normalize(-pos.xyz);
    if(dot(eyev, normal) > 0.0) {
        vec3 hv = normalize(eyev + lit);
        specular = pow(max(dot(hv, normal), 0.0), 20.0);
    }
    else {
        specular = 0.0;
    }
    
    float dist_scaling = 1.0 + (pdist / 50.0); // Increase blur radius as distance increases
    rstop = clamp((abs(pdist - uDOF.x) - uDOF.y) / (uDOF.z * dist_scaling), 0.0, 1.0);
    rstop = pow(rstop, 0.5);
    distancefade = min(1.0, exp((uFade.x - pdist) * 0.69315 / uFade.y));
}
`;

const SAKURA_POINT_FSH = `
precision highp float;

uniform vec3 uDOF;  //x:focus distance, y:focus radius, z:max radius
uniform vec3 uFade; //x:start distance, y:half distance, z:near fade start

const vec3 fadeCol = vec3(0.08, 0.03, 0.06);

varying vec3 pposition;
varying float psize;
varying float palpha;
varying float pdist;

varying vec3 normX;
varying vec3 normY;
varying vec3 normZ;
varying vec3 normal;

varying float diffuse;
varying float specular;
varying float rstop;
varying float distancefade;

float ellipse(vec2 p, vec2 o, vec2 r) {
    vec2 lp = (p - o) / r;
    return length(lp) - 1.0;
}

void main(void) {
    vec3 p = vec3(gl_PointCoord - vec2(0.5, 0.5), 0.0) * 2.0;
    vec3 d = vec3(0.0, 0.0, -1.0);
    float nd = normZ.z;
    if(abs(nd) < 0.0001) discard;
    
    float np = dot(normZ, p);
    vec3 tp = p + d * np / nd;
    vec2 coord = vec2(dot(normX, tp), dot(normY, tp));
    
    // Elongated ellipse with pinched tip
    vec2 p_petal = coord;
    p_petal.x *= 2.2; // Width scale for elongation
    float pinch = 1.2 - coord.y * 0.7; // Pinching at the tip (coord.y > 0)
    p_petal.x /= max(0.2, pinch);
    float r = length(p_petal) - 1.0;
    
    if(r > rstop) discard;
    
    // Saturation gradient: Pale base to saturated vibrant pink tip
    float sat = smoothstep(-0.6, 1.0, coord.y);
    vec3 col_base = vec3(1.0, 0.73, 0.26);
    vec3 col_tip = vec3(0.95, 0.61, 0); // High saturation pink
    vec3 col = mix(col_base, col_tip, sat);
    
    // Adjust luminance based on SDF for depth
    col = mix(col, col * 0.85, smoothstep(-0.2, 1.0, r));
    col = col * diffuse + specular;
    
    col = mix(fadeCol, col, distancefade);
    
    float alpha = (rstop > 0.001)? (0.5 - r / (rstop * 2.0)) : 1.0;
    alpha = smoothstep(0.0, 1.0, alpha) * palpha;
    
    gl_FragColor = vec4(col * 0.5, alpha);
}
`;

const FX_COMMON_VSH = `
uniform vec3 uResolution;
attribute vec2 aPosition;

varying vec2 texCoord;
varying vec2 screenCoord;

void main(void) {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    texCoord = aPosition.xy * 0.5 + vec2(0.5, 0.5);
    screenCoord = aPosition.xy * vec2(uResolution.z, 1.0);
}
`;

const FX_BRIGHTBUF_FSH = `
precision highp float;
uniform sampler2D uSrc;
varying vec2 texCoord;

void main(void) {
    vec4 col = texture2D(uSrc, texCoord);
    gl_FragColor = vec4(col.rgb * 2.0 - vec3(0.5), col.a);
}
`;

const FX_DIRBLUR_R4_FSH = `
precision highp float;
uniform sampler2D uSrc;
uniform vec2 uDelta;
uniform vec4 uBlurDir; //dir(x, y), stride(z, w)
varying vec2 texCoord;

void main(void) {
    vec4 col = texture2D(uSrc, texCoord);
    col = col + texture2D(uSrc, texCoord + uBlurDir.xy * uDelta);
    col = col + texture2D(uSrc, texCoord - uBlurDir.xy * uDelta);
    col = col + texture2D(uSrc, texCoord + (uBlurDir.xy + uBlurDir.zw) * uDelta);
    col = col + texture2D(uSrc, texCoord - (uBlurDir.xy + uBlurDir.zw) * uDelta);
    gl_FragColor = col / 5.0;
}
`;

const PP_FINAL_VSH = `
uniform vec3 uResolution;
attribute vec2 aPosition;
varying vec2 texCoord;
varying vec2 screenCoord;
void main(void) {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    texCoord = aPosition.xy * 0.5 + vec2(0.5, 0.5);
    screenCoord = aPosition.xy * vec2(uResolution.z, 1.0);
}
`;

const PP_FINAL_FSH = `
precision highp float;
uniform sampler2D uSrc;
uniform sampler2D uBloom;
varying vec2 texCoord;
void main(void) {
    vec4 srccol = texture2D(uSrc, texCoord) * 2.0;
    vec4 bloomcol = texture2D(uBloom, texCoord);
    vec4 col = srccol + bloomcol * (vec4(1.0) + srccol);
    col *= smoothstep(1.0, 0.0, pow(length((texCoord - vec2(0.5)) * 2.0), 1.2) * 0.5);
    col = pow(col, vec4(0.45454545454545));
    
    // Calculate alpha based on visible content
    float alpha = clamp(srccol.a + bloomcol.a, 0.0, 1.0);
    gl_FragColor = vec4(col.rgb, alpha);
}
`;

// --- Math Utilities ---
const Vector3 = {
  create: (x: number, y: number, z: number) => ({ x, y, z }),
  dot: (v0: any, v1: any) => v0.x * v1.x + v0.y * v1.y + v0.z * v1.z,
  cross: (v: any, v0: any, v1: any) => {
    v.x = v0.y * v1.z - v0.z * v1.y;
    v.y = v0.z * v1.x - v0.x * v1.z;
    v.z = v0.x * v1.y - v0.y * v1.x;
  },
  normalize: (v: any) => {
    let l = v.x * v.x + v.y * v.y + v.z * v.z;
    if (l > 0.00001) {
      l = 1.0 / Math.sqrt(l);
      v.x *= l;
      v.y *= l;
      v.z *= l;
    }
  },
  arrayForm: (v: any) => new Float32Array([v.x, v.y, v.z]),
};

const Matrix44 = {
  createIdentity: () =>
    new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  loadProjection: (
    m: Float32Array,
    aspect: number,
    vdeg: number,
    near: number,
    far: number,
  ) => {
    const h = near * Math.tan(((vdeg * Math.PI) / 180.0) * 0.5) * 2.0;
    const w = h * aspect;
    m.fill(0);
    m[0] = (2.0 * near) / w;
    m[5] = (2.0 * near) / h;
    m[10] = -(far + near) / (far - near);
    m[11] = -1.0;
    m[14] = (-2.0 * far * near) / (far - near);
  },
  loadLookAt: (m: Float32Array, vpos: any, vlook: any, vup: any) => {
    const frontv = Vector3.create(
      vpos.x - vlook.x,
      vpos.y - vlook.y,
      vpos.z - vlook.z,
    );
    Vector3.normalize(frontv);
    const sidev = Vector3.create(1, 0, 0);
    Vector3.cross(sidev, vup, frontv);
    Vector3.normalize(sidev);
    const topv = Vector3.create(1, 0, 0);
    Vector3.cross(topv, frontv, sidev);
    Vector3.normalize(topv);
    m[0] = sidev.x;
    m[1] = topv.x;
    m[2] = frontv.x;
    m[3] = 0;
    m[4] = sidev.y;
    m[5] = topv.y;
    m[6] = frontv.y;
    m[7] = 0;
    m[8] = sidev.z;
    m[9] = topv.z;
    m[10] = frontv.z;
    m[11] = 0;
    m[12] = -(vpos.x * m[0] + vpos.y * m[4] + vpos.z * m[8]);
    m[13] = -(vpos.x * m[1] + vpos.y * m[5] + vpos.z * m[9]);
    m[14] = -(vpos.x * m[2] + vpos.y * m[6] + vpos.z * m[10]);
    m[15] = 1.0;
  },
  multiplyVector: (m: Float32Array, v: number[]) => {
    const x = v[0],
      y = v[1],
      z = v[2],
      w = v[3] ?? 1.0;
    const nx = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    const ny = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    const nz = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    const nw = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return [nx, ny, nz, nw];
  },
};

class BlossomParticle {
  velocity = [0, 0, 0];
  rotation = [0, 0, 0];
  position = [0, 0, 0];
  euler = [0, 0, 0];
  size = 1.0;
  alpha = 1.0;
  zkey = 0.0;
  mouseVelocity = [0, 0, 0];

  setVelocity(vx: number, vy: number, vz: number) {
    this.velocity = [vx, vy, vz];
  }
  setRotation(rx: number, ry: number, rz: number) {
    this.rotation = [rx, ry, rz];
  }
  setPosition(nx: number, ny: number, nz: number) {
    this.position = [nx, ny, nz];
  }
  setEulerAngles(rx: number, ry: number, rz: number) {
    this.euler = [rx, ry, rz];
  }
  setSize(s: number) {
    this.size = s;
  }

  update(dt: number) {
    // Current position increment
    this.position[0] += (this.velocity[0] + this.mouseVelocity[0]) * dt;
    this.position[1] += (this.velocity[1] + this.mouseVelocity[1]) * dt;
    this.position[2] += (this.velocity[2] + this.mouseVelocity[2]) * dt;

    // Euler update
    this.euler[0] += this.rotation[0] * dt;
    this.euler[1] += this.rotation[1] * dt;
    this.euler[2] += this.rotation[2] * dt;

    // Decay mouse effect
    this.mouseVelocity[0] *= 0.55;
    this.mouseVelocity[1] *= 0.55;
    this.mouseVelocity[2] *= 0.55;
  }
}

export function SakuraRain2() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: true }) ||
      (canvas.getContext("experimental-webgl", {
        alpha: true,
      }) as WebGLRenderingContext);
    if (!gl) return;

    // --- State Management ---
    const renderSpec: any = {
      width: 0,
      height: 0,
      aspect: 1,
      array: new Float32Array(3),
      halfWidth: 0,
      halfHeight: 0,
      halfArray: new Float32Array(3),
      setSize(w: number, h: number) {
        this.width = w;
        this.height = h;
        this.aspect = w / h;
        this.array[0] = w;
        this.array[1] = h;
        this.array[2] = this.aspect;
        this.halfWidth = Math.floor(w / 2);
        this.halfHeight = Math.floor(h / 2);
        this.halfArray = new Float32Array([
          this.halfWidth,
          this.halfHeight,
          this.halfWidth / this.halfHeight,
        ]);
      },
    };

    const pointFlower: any = {
      numFlowers: 10, // Even more subtle count
      offset: new Float32Array([0, 0, 0]),
      fader: Vector3.create(0, 10, 0),
      area: Vector3.create(20, 20, 20),
    };

    const camera = {
      position: Vector3.create(0, 0, 100),
      lookat: Vector3.create(0, 0, 0),
      up: Vector3.create(0, 1, 0),
      dof: Vector3.create(10, 6, 12),
      matrix: Matrix44.createIdentity(),
    };

    const projection = {
      angle: 60,
      nearfar: new Float32Array([0.1, 100]),
      matrix: Matrix44.createIdentity(),
    };
    const timeInfo = {
      start: Date.now(),
      prev: Date.now(),
      delta: 0,
      elapsed: 0,
    };
    const effectLib: any = {};

    // --- Helper Functions ---
    const compileShader = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
        return null;
      }
      return sh;
    };

    const createShader = (
      vtx: string,
      frg: string,
      uniforms: string[],
      attrs: string[],
    ) => {
      const vs = compileShader(gl.VERTEX_SHADER, vtx);
      const fs = compileShader(gl.FRAGMENT_SHADER, frg);
      if (!vs || !fs) return null;
      const prog = gl.createProgram() as any;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(prog));
        return null;
      }
      prog.uniforms = {};
      uniforms.forEach(
        (u) => (prog.uniforms[u] = gl.getUniformLocation(prog, u)),
      );
      prog.attributes = {};
      attrs.forEach(
        (a) => (prog.attributes[a] = gl.getAttribLocation(prog, a)),
      );
      return prog;
    };

    const createRenderTarget = (w: number, h: number) => {
      const rt: any = {
        width: w,
        height: h,
        sizeArray: new Float32Array([w, h, w / h]),
        dtxArray: new Float32Array([1 / w, 1 / h]),
      };
      rt.frameBuffer = gl.createFramebuffer();
      rt.renderBuffer = gl.createRenderbuffer();
      rt.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, rt.texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        w,
        h,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.bindFramebuffer(gl.FRAMEBUFFER, rt.frameBuffer);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        rt.texture,
        0,
      );
      gl.bindRenderbuffer(gl.RENDERBUFFER, rt.renderBuffer);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);
      gl.framebufferRenderbuffer(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.RENDERBUFFER,
        rt.renderBuffer,
      );
      return rt;
    };

    const setViewports = () => {
      renderSpec.setSize(gl.canvas.width, gl.canvas.height);
      gl.viewport(0, 0, renderSpec.width, renderSpec.height);
      const rtList = ["mainRT", "wFullRT0", "wFullRT1", "wHalfRT0", "wHalfRT1"];
      rtList.forEach((name) => {
        const w = name.includes("Half")
          ? renderSpec.halfWidth
          : renderSpec.width;
        const h = name.includes("Half")
          ? renderSpec.halfHeight
          : renderSpec.height;
        renderSpec[name] = createRenderTarget(w, h);
      });
    };

    const createEffectProgram = (
      vtx: string,
      frg: string,
      exunifs: string[] = [],
    ) => {
      const prog = createShader(
        vtx,
        frg,
        ["uResolution", "uSrc", "uDelta", ...exunifs],
        ["aPosition"],
      );
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW,
      );
      return { program: prog, buffer };
    };

    const smoothstepHelper = (edge0: number, edge1: number, x: number) => {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    };

    // --- Core Logic ---
    const initScene = () => {
      pointFlower.area.x = pointFlower.area.y * renderSpec.aspect;
      pointFlower.fader.x = 10.0;
      pointFlower.fader.y = pointFlower.area.z;
      pointFlower.fader.z = 0.1;
      const PI2 = Math.PI * 2;
      for (let i = 0; i < pointFlower.numFlowers; i++) {
        const p = pointFlower.particles[i];
        const vel = Vector3.create(
          Math.random() * 2 - 1 * 0.3 + 0.5,
          Math.random() * 0.5 - 1.0,
          Math.random() * 2 - 1 * 0.3 + 0.2,
        );
        Vector3.normalize(vel);
        const v = 0.5 + Math.random() * 0.5;
        p.setVelocity(vel.x * v, vel.y * v, vel.z * v);
        p.setRotation(
          (Math.random() * 2 - 1) * PI2 * 0.3,
          (Math.random() * 2 - 1) * PI2 * 0.3,
          (Math.random() * 2 - 1) * PI2 * 0.3,
        );
        p.setPosition(
          (Math.random() * 2 - 1) * pointFlower.area.x,
          (Math.random() * 2 - 1) * pointFlower.area.y,
          (Math.random() * 2 - 1) * pointFlower.area.z,
        );
        p.setEulerAngles(
          Math.random() * PI2,
          Math.random() * PI2,
          Math.random() * PI2,
        );
        p.setSize(0.5 + Math.random() * 0.3);
      }
      camera.position.z = pointFlower.area.z + projection.nearfar[0];
      projection.angle =
        ((Math.atan2(
          pointFlower.area.y,
          camera.position.z + pointFlower.area.z,
        ) *
          180) /
          Math.PI) *
        2;
      Matrix44.loadProjection(
        projection.matrix,
        renderSpec.aspect,
        projection.angle,
        projection.nearfar[0],
        projection.nearfar[1],
      );
    };

    const renderAnim = () => {
      const now = Date.now();
      timeInfo.delta = (now - timeInfo.prev) / 1000;
      timeInfo.elapsed = (now - timeInfo.start) / 1000;
      timeInfo.prev = now;

      // Update Particles
      const PI2 = Math.PI * 2;
      for (let i = 0; i < pointFlower.numFlowers; i++) {
        const p = pointFlower.particles[i];

        // Apply mouse repulsion using screen-space distance (Cylindrical Force)
        if (mousePos.current.active) {
          // Project particle to screen space
          // 1. View Space
          const v_cam = Matrix44.multiplyVector(camera.matrix, [
            p.position[0],
            p.position[1],
            p.position[2],
            1.0,
          ]);
          // 2. Clip Space
          const v_clip = Matrix44.multiplyVector(projection.matrix, v_cam);
          // 3. NDC (Normalized Device Coordinates)
          const ndcX = v_clip[0] / v_clip[3];
          const ndcY = v_clip[1] / v_clip[3];

          // Compare to mouse NDC
          const dx = ndcX - mousePos.current.x;
          // mousePos.current.y is 1 at bottom, NDC y is -1 at bottom. So invert mouse Y for comparison.
          const dy = ndcY - -mousePos.current.y;

          const distSq = dx * dx + dy * dy;
          const screenRadiusSq = 0.15 * 0.15; // Screen-space interaction radius

          if (distSq < screenRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Stronger force since we are in screen space units [-1, 1]
            const force = (1.0 - dist / 0.15) * 15.0;

            // Push away from mouse ray in world space (X/Y)
            p.mouseVelocity[0] += (dx / dist) * force;
            p.mouseVelocity[1] += (dy / dist) * force;
            // Kick slightly in Z for depth feel
            p.mouseVelocity[2] += force * 0.5;
          }
        }

        p.update(timeInfo.delta);

        [0, 1, 2].forEach((j) => {
          const lim =
            j === 0
              ? pointFlower.area.x
              : j === 1
                ? pointFlower.area.y
                : pointFlower.area.z;
          if (Math.abs(p.position[j]) - p.size * 0.5 > lim)
            p.position[j] += p.position[j] > 0 ? -lim * 2 : lim * 2;
          p.euler[j] = ((p.euler[j] % PI2) + PI2) % PI2;
        });

        // Distance based alpha fade
        const zDist =
          (p.position[2] + pointFlower.area.z) / (pointFlower.area.z * 2);
        p.alpha = (1.0 - smoothstepHelper(0.4, 1.0, zDist)) * 0.6;

        p.zkey =
          camera.matrix[2] * p.position[0] +
          camera.matrix[6] * p.position[1] +
          camera.matrix[10] * p.position[2] +
          camera.matrix[14];
      }
      pointFlower.particles.sort((a: any, b: any) => a.zkey - b.zkey);

      Matrix44.loadLookAt(
        camera.matrix,
        camera.position,
        camera.lookat,
        camera.up,
      );

      // Render Passes
      gl.bindFramebuffer(gl.FRAMEBUFFER, renderSpec.mainRT.frameBuffer);
      gl.viewport(0, 0, renderSpec.mainRT.width, renderSpec.mainRT.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Particles
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      const flower = pointFlower.program;
      gl.useProgram(flower);
      gl.uniformMatrix4fv(
        flower.uniforms.uProjection,
        false,
        projection.matrix,
      );
      gl.uniformMatrix4fv(flower.uniforms.uModelview, false, camera.matrix);
      gl.uniform3fv(flower.uniforms.uResolution, renderSpec.array);
      gl.uniform3fv(flower.uniforms.uDOF, Vector3.arrayForm(camera.dof));
      gl.uniform3fv(
        flower.uniforms.uFade,
        Vector3.arrayForm(pointFlower.fader),
      );

      const data = new Float32Array(pointFlower.numFlowers * 8);
      for (let i = 0; i < pointFlower.numFlowers; i++) {
        const p = pointFlower.particles[i];
        const off = i * 8;
        data[off] = p.position[0];
        data[off + 1] = p.position[1];
        data[off + 2] = p.position[2];
        data[off + 3] = p.euler[0];
        data[off + 4] = p.euler[1];
        data[off + 5] = p.euler[2];
        data[off + 6] = p.size;
        data[off + 7] = p.alpha;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, pointFlower.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
      gl.vertexAttribPointer(
        flower.attributes.aPosition,
        3,
        gl.FLOAT,
        false,
        32,
        0,
      );
      gl.enableVertexAttribArray(flower.attributes.aPosition);
      gl.vertexAttribPointer(
        flower.attributes.aEuler,
        3,
        gl.FLOAT,
        false,
        32,
        12,
      );
      gl.enableVertexAttribArray(flower.attributes.aEuler);
      gl.vertexAttribPointer(
        flower.attributes.aMisc,
        2,
        gl.FLOAT,
        false,
        32,
        24,
      );
      gl.enableVertexAttribArray(flower.attributes.aMisc);

      for (let i = 0; i < 2; i++) {
        const zpos = (i + 1) * -2;
        [
          [-1, -1],
          [-1, 1],
          [1, -1],
          [1, 1],
        ].forEach((off) => {
          pointFlower.offset[0] = pointFlower.area.x * off[0];
          pointFlower.offset[1] = pointFlower.area.y * off[1];
          pointFlower.offset[2] = pointFlower.area.z * zpos;
          gl.uniform3fv(flower.uniforms.uOffset, pointFlower.offset);
          gl.drawArrays(gl.POINTS, 0, pointFlower.numFlowers);
        });
      }
      pointFlower.offset.fill(0);
      gl.uniform3fv(flower.uniforms.uOffset, pointFlower.offset);
      gl.drawArrays(gl.POINTS, 0, pointFlower.numFlowers);

      // Post Process
      gl.disable(gl.DEPTH_TEST);
      const bindRT = (rt: any) => {
        gl.bindFramebuffer(gl.FRAMEBUFFER, rt.frameBuffer);
        gl.viewport(0, 0, rt.width, rt.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      };

      bindRT(renderSpec.wHalfRT0);
      const mkB = effectLib.mkBrightBuf;
      gl.useProgram(mkB.program);
      gl.uniform3fv(mkB.program.uniforms.uResolution, renderSpec.array);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, renderSpec.mainRT.texture);
      gl.uniform1i(mkB.program.uniforms.uSrc, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, mkB.buffer);
      gl.vertexAttribPointer(
        mkB.program.attributes.aPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0,
      );
      gl.enableVertexAttribArray(mkB.program.attributes.aPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      for (let i = 0; i < 2; i++) {
        const p = 1.5 + i,
          s = 2.0 + i;
        bindRT(renderSpec.wHalfRT1);
        const blur = effectLib.dirBlur;
        gl.useProgram(blur.program);
        gl.uniform3fv(blur.program.uniforms.uResolution, renderSpec.array);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, renderSpec.wHalfRT0.texture);
        gl.uniform1i(blur.program.uniforms.uSrc, 0);
        gl.uniform2fv(
          blur.program.uniforms.uDelta,
          renderSpec.wHalfRT0.dtxArray,
        );
        gl.uniform4f(blur.program.uniforms.uBlurDir, p, 0, s, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, blur.buffer);
        gl.vertexAttribPointer(
          blur.program.attributes.aPosition,
          2,
          gl.FLOAT,
          false,
          0,
          0,
        );
        gl.enableVertexAttribArray(blur.program.attributes.aPosition);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        bindRT(renderSpec.wHalfRT0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, renderSpec.wHalfRT1.texture);
        gl.uniform1i(blur.program.uniforms.uSrc, 0);
        gl.uniform2fv(
          blur.program.uniforms.uDelta,
          renderSpec.wHalfRT1.dtxArray,
        );
        gl.uniform4f(blur.program.uniforms.uBlurDir, 0, p, 0, s);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, renderSpec.width, renderSpec.height);
      const final = effectLib.finalComp;
      gl.useProgram(final.program);
      gl.uniform3fv(final.program.uniforms.uResolution, renderSpec.array);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, renderSpec.mainRT.texture);
      gl.uniform1i(final.program.uniforms.uSrc, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, renderSpec.wHalfRT0.texture);
      gl.uniform1i(final.program.uniforms.uBloom, 1);
      gl.bindBuffer(gl.ARRAY_BUFFER, final.buffer);
      gl.vertexAttribPointer(
        final.program.attributes.aPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0,
      );
      gl.enableVertexAttribArray(final.program.attributes.aPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafRef.current = requestAnimationFrame(renderAnim);
    };

    // --- Initialization ---
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setViewports();
      initScene();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      mousePos.current.active = true;
    };

    const handleMouseLeave = () => {
      mousePos.current.active = false;
    };

    pointFlower.program = createShader(
      SAKURA_POINT_VSH,
      SAKURA_POINT_FSH,
      ["uProjection", "uModelview", "uResolution", "uOffset", "uDOF", "uFade"],
      ["aPosition", "aEuler", "aMisc"],
    );
    pointFlower.buffer = gl.createBuffer();
    pointFlower.particles = Array.from(
      { length: pointFlower.numFlowers },
      () => new BlossomParticle(),
    );

    effectLib.mkBrightBuf = createEffectProgram(
      FX_COMMON_VSH,
      FX_BRIGHTBUF_FSH,
    );
    effectLib.dirBlur = createEffectProgram(FX_COMMON_VSH, FX_DIRBLUR_R4_FSH, [
      "uBlurDir",
    ]);
    effectLib.finalComp = createEffectProgram(PP_FINAL_VSH, PP_FINAL_FSH, [
      "uBloom",
    ]);

    const debouncedResize = debounce(resize, 200);

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resize();
    rafRef.current = requestAnimationFrame(renderAnim);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} id="sakura" className="w-full h-full block" />
    </div>
  );
}
