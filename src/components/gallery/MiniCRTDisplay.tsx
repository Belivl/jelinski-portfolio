import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MiniCRTDisplayProps {
  value: string | number;
  className?: string;
  isLoading?: boolean;
}

export function MiniCRTDisplay({
  value,
  className,
  isLoading,
}: MiniCRTDisplayProps) {
  return (
    <div
      className={cn(
        "relative w-full h-8 rounded-md bg-black overflow-hidden border-2 border-neutral-800 shadow-[0_0_10px_rgba(0,0,0,0.5),inset_0_2px_5px_rgba(0,0,0,0.8)] flex items-center justify-center plastic-texture",
        className
      )}
    >
      {/* CRT Glass Effect */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent" />
        {/* Curvature Shadow */}
        <div className="absolute inset-0 shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]" />
      </div>

      {/* Screen Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-size-[100%_2px,3px_100%] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,255,255,0.02),rgba(0,0,255,0.06))]" />
        {/* Noise/Grain */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-0">
        <motion.span
          key={value}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className={cn(
            "font-mono text-sm font-bold tracking-tighter text-neutral-100 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]",
            isLoading && "animate-pulse"
          )}
        >
          {isLoading ? "..." : value}
        </motion.span>
      </div>

      {/* Phosphor Ghosting (Optional subtle effect) */}
      <div className="absolute inset-0 z-0 bg-white/2 pointer-events-none" />
    </div>
  );
}
