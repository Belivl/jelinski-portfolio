import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface GoldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function GoldButton({ children, className, ...props }: GoldButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Motion values for smooth interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const targetRotation = useMotionValue(0);

  // Smooth springs
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  const smoothRotation = useSpring(targetRotation, {
    stiffness: 40, // Much lower stiffness for that "slow" feel
    damping: 15,
  });

  // Transform rotation to CSS variable format
  const rotationStyle = useTransform(smoothRotation, (v) => `${v}deg`);

  // Ref to track the current unwrapped target angle
  const currentAngleRef = useRef(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Clamp values for border effect (torch effect stays relative to button)
      const clampedX = Math.max(0, Math.min(x, rect.width));
      const clampedY = Math.max(0, Math.min(y, rect.height));

      // Calculate rotation based on viewport center for global effect
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      // Raw angle from -180 to 180
      const rawAngle =
        Math.atan2(e.clientY - viewportCenterY, e.clientX - viewportCenterX) *
          (180 / Math.PI) +
        90;

      // Angle unwrapping logic to ensure the spring takes the shortest path
      let delta = rawAngle - (currentAngleRef.current % 360);
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      const unwrappedAngle = currentAngleRef.current + delta;
      currentAngleRef.current = unwrappedAngle;

      mouseX.set(clampedX);
      mouseY.set(clampedY);
      targetRotation.set(unwrappedAngle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, targetRotation]);

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden rounded-md group transition-transform active:scale-95 group hover:-translate-y-1 hover:cursor-pointer",
        "w-fit flex items-center justify-center px-8 py-3 ", // Default size, adjustable via className
        className
      )}
      style={{
        // @ts-ignore
        "--rotation": rotationStyle,
        "--mouse-x": useTransform(smoothX, (v) => `${v}px`),
        "--mouse-y": useTransform(smoothY, (v) => `${v}px`),
      }}
      {...props}
    >
      {/* Layer 0: Base Gold */}
      <div className="absolute inset-0 z-0 bg-[#FBE5BB]" />
      {/* Layer 1:  Radial Waves (Bump Map) */}
      <div
        className="absolute inset-0 z-10 opacity-[0.05]"
        style={{
          background: `
            repeating-radial-gradient(
              circle at center,
              transparent 0,
              #111 2px,
              transparent 4px
            )
          `,
        }}
      />
      {/* Layer 2:  Radial Waves Gradient (Bump Map) */}
      <div
        className="absolute inset-0 z-10 opacity-50 mix-blend-soft-light"
        style={{
          background: `
            repeating-radial-gradient(
              circle at center,
              transparent 0,
              #111 2px,
              transparent 5px,
              #111 7px,
              transparent 8px,
              #111 11px,
              transparent 15px
            )
          `,
        }}
      />

      {/* Layer 3: Anisotropic Reflection (Rotating Conic Gradient) */}
      <div
        className="absolute inset-0 z-10 opacity-50 mix-blend-multiply"
        style={{
          background: `
            conic-gradient(
              from var(--rotation),
              #000000 0deg,
              rgba(255,255,255,0.8) 20deg,
              #000000 40deg,
              rgba(255,255,255,0.8) 160deg,
              #000000 200deg,
              rgba(255,255,255,0.8) 220deg,
              #000000 240deg,
              rgba(255,255,255,0.8) 340deg,
              #000000 360deg
            )
          `,
        }}
      />
      {/* Layer 4: Anisotropic Reflection 2 (Rotating Conic Gradient) */}
      <div
        className="absolute inset-0 z-10 opacity-50 mix-blend-multiply"
        style={{
          background: `
            conic-gradient(
              from var(--rotation),
              #000000 0deg,
              transparent 90deg,
              #000000 180deg,
              transparent 270deg,
              #000000 360deg
            )
          `,
        }}
      />

      {/* Layer 5: Gold Overlay */}
      <div
        className="absolute inset-0 z-20 mix-blend-soft-light pointer-events-none group-hover:bg-[#E6CB99]"
        style={{
          backgroundColor: "#D9B166", // Pure Gold
          boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
        }}
      />

      {/* Layer 6: Gold Tint/Shine to enhance metallic feel */}
      <div
        className="absolute inset-0 z-20 mix-blend-soft-light pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent 60%)",
        }}
      />

      {/* Layer 6.5: Static Bevel Effect */}
      <div
        className="absolute inset-0 z-30 pointer-events-none rounded-[inherit] mix-blend-soft-light"
        style={{
          borderLeft: "4px solid rgba(255, 255, 255, 0.6)",
          borderTop: "4px solid rgba(255, 255, 255, 0.8)",
          borderRight: "4px solid rgba(0, 0, 0, 0.4)",
          borderBottom: "4px solid rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* Layer 7: Light Responsive Border */}
      <div
        className="absolute inset-0 z-30 pointer-events-none rounded-[inherit] border-amber-900/40 border-2 mix-blend-soft-light"
        style={{
          background: `radial-gradient(150px circle at var(--mouse-x) var(--mouse-y), rgba(233, 202, 115, 0.9), rgba(0, 0, 0, 0.4) 100%)`,
          padding: "3px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Content */}
      <div className="textStrokeGOLD">
        <div className="relative flex items-center z-40 font-black text-sm uppercase goldTxtStroke bg-gray-900 whitespace-nowrap">
          {children}
        </div>
      </div>
    </motion.button>
  );
}
