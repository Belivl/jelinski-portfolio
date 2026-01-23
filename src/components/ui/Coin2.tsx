import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Coin2({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-64 h-64 rounded-full shadow-xl shadow-black/80 inset-shadow-sm inset-shadow-neutral-100 -translate-y-[2px]",
        className,
      )}
    >
      {/* Rotating Container for the Coin Texture */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.5,
        }}
      >
        {/* Layer 0: Base Gold */}
        <div className="absolute inset-0 z-0 bg-[#FBE5BB]" />

        {/* Layer 1: Radial Waves (Bump Map) */}
        <div
          className="absolute inset-0 z-10 opacity-[0.08]"
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

        {/* Layer 2: Radial Waves Gradient (Bump Map) - Varied */}
        <div
          className="absolute inset-0 z-10 opacity-80 mix-blend-soft-light"
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

        {/* Layer 3: Anisotropic Reflection */}
        <div
          className="absolute inset-0 z-10 opacity-40 mix-blend-multiply"
          style={{
            background: `
              conic-gradient(
                from 0deg,
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

        {/* Layer 5: Gold Overlay */}
        <div
          className="absolute inset-0 z-20 mix-blend-soft-light pointer-events-none"
          style={{
            backgroundColor: "#D9B166",
            boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
          }}
        />
      </motion.div>
      {/* Center Display */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none ">
        <div className="w-48 h-48 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden  shadow-[0_2px_10px_rgba(0,0,0,0.5), inset_0_2px_10px_rgba(0,0,0,0.5)] border-t border-t-white/10">
          {children}
        </div>
      </div>
    </div>
  );
}
