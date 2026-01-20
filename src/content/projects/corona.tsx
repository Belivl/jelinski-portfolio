import { SmartImage } from "@/components/ui/SmartImage";
import { motion } from "motion/react";
import { SameHeightRow } from "../../components/mdx/SameHeightRow";
import { useMemo, useRef } from "react";

const TiltBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const boundingRef = useRef<DOMRect | null>(null);

  // Randomized duration for floating effect
  const duration = useMemo(() => 3 + Math.random() * 2, []);
  const delay = useMemo(() => Math.random() * 2, []);

  return (
    <div className={`perspective-dramatic ${className}`}>
      {/* Container for idle floating animation */}
      <motion.div
        animate={{
          y: [-2, 2],
          rotateZ: [-0.5, 0.5],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay,
        }}
        className="w-full h-full"
      >
        {/* Container for interactive tilt effect */}
        <div
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            if (!boundingRef.current) return;
            const x = ev.clientX - boundingRef.current.left;
            const y = ev.clientY - boundingRef.current.top;
            const xPercentage = x / boundingRef.current.width;
            const yPercentage = y / boundingRef.current.height;
            const xRotation = (xPercentage - 0.5) * 20;
            const yRotation = (0.5 - yPercentage) * 20;

            ev.currentTarget.style.setProperty(
              "--x-rotation",
              `${yRotation}deg`,
            );
            ev.currentTarget.style.setProperty(
              "--y-rotation",
              `${xRotation}deg`,
            );
            ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
            ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
          }}
          className="group relative w-full h-full transition-all ease-out hover:transform-[rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] duration-200 hover:z-50"
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
          {/* Lighting overlay that follows the cursor */}
          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)] rounded-lg" />
        </div>
      </motion.div>
    </div>
  );
};

export function CoronaPost() {
  return (
    <div className="flex flex-col gap-9 rounded-md w-full">
      <div className="grid place-items-center py-24">
        <SmartImage
          className="w-[60%]"
          src="https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864600/gfx/2021/corona%20fighters/Michal_Jelinski_MGLS3_IG1_grupa2_plik3_mcyncm.png"
          alt=""
        />
      </div>
      <SameHeightRow
        gap={16}
        roundEvery={true}
        images={[
          {
            src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_Package(1)_SjKm3pELY.avif?updatedAt=1768492291815&ik-s=4a5a62f14866c4c9efd3b44aaad2e2353229393e",
            alt: "",
          },
          {
            src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/TestRenderV2-2_z_RP77_h7.avif?updatedAt=1768492292043&ik-s=0a1cdf10005a905bd9823163d2ce4a69dd0c73ab",
            alt: "",
          },
          {
            src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_Package1_Hb3AykBJL.avif?updatedAt=1768492375798&ik-s=ea278f6c3145a1145e4b33055920509aa0a37b7d",
            alt: "",
          },
        ]}
      ></SameHeightRow>
      <div className="grid place-items-center">
        <SmartImage
          className="w-full"
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_plik4_ShIxg8D_k.avif?updatedAt=1768492292878&ik-s=7b0d6c454e0f495dad8f43e9511caff4cc3f25de"
          alt=""
        />
      </div>
      <div className="w-full grid grid-cols-3 rounded-sm  border shadow-xl light:border-neutral-500 dark:border-neutral-800 p-8">
        <TiltBox className="scale-75">
          <SmartImage
            src="https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864539/gfx/2021/corona%20fighters/CardF-Bottle_jywret.png"
            alt="VIII"
            className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
          />
        </TiltBox>
        <TiltBox className="scale-75">
          <SmartImage
            src="https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864530/gfx/2021/corona%20fighters/CardF-Drugstore_ut34zo.png"
            alt="VIII"
            className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
          />
        </TiltBox>
        <TiltBox className="scale-75">
          <SmartImage
            src="https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864482/gfx/2021/corona%20fighters/CardF-Gloves_vv0cie.png"
            alt="VIII"
            className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
          />
        </TiltBox>
      </div>
      <div>
        <h3>Video</h3>
      </div>
      <div className="grid grid-flo-row gap-8">
        <iframe
          className="w-full h-auto rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200 aspect-video"
          src="https://res.cloudinary.com/dcmfq9hg5/video/upload/v1766523472/gfx/2021/corona%20fighters/MJ-CoronaFightersV1_tyxrc8.mp4"
          title="MJ-CoronaFightersV1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="w-full h-auto rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200 aspect-video"
          src="https://res.cloudinary.com/dcmfq9hg5/video/upload/v1766523492/gfx/2021/corona%20fighters/animtestFighters1_xkbjr3.mp4"
          title="MJ-CoronaFightersV1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
