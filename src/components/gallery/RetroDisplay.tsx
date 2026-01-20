import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { MapPin, Calendar, Camera } from "lucide-react";
import { GlowContent } from "./GlowContent";

interface RetroDisplayProps {
  title?: string;
  place?: string;
  date?: string;
  camera?: string;
  className?: string;
}

export function RetroDisplay({
  title,
  place,
  date,
  camera,
  className,
}: RetroDisplayProps) {
  return (
    <div
      className={cn(
        "relative bg-[#0a0f0a] border-4 border-[#1a1f1a] border-b-4 border-t-4 border-t-black/10 border-b-[#2c352c] rounded-lg overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] p-2 flex flex-col justify-center min-h-[100px] min-w-[300px]",
        className
      )}
    >
      {/* Screen Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-transparent via-neutral-500/5 to-transparent bg-size-[100%_4px]" />
      <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <div className="relative z-0 flex flex-col gap-1 font-mono text-neutral-300">
        <GlowContent blurAmount="blur-sm" glowOpacity="opacity-40">
          <motion.h2
            key={title}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl font-bold uppercase ml-1 tracking-wider truncate drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]"
          >
            {title || "NO DATA"}
          </motion.h2>
        </GlowContent>

        <div className="flex flex-col gap-1 text-xs md:text-sm text-neutral-300/70 ml-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 truncate">
              <GlowContent blurAmount="blur-sm" glowOpacity="opacity-30">
                <MapPin className="w-3 h-3" />
              </GlowContent>
              {place || "---"}
            </span>
            <span className="flex items-center gap-1.5 truncate">
              <GlowContent blurAmount="blur-sm" glowOpacity="opacity-30">
                <Calendar className="w-3 h-3" />
              </GlowContent>
              {date || "---"}
            </span>
          </div>
          <span className="flex items-center gap-1.5 truncate">
            <GlowContent blurAmount="blur-sm" glowOpacity="opacity-30">
              <Camera className="w-3 h-3" />
            </GlowContent>
            {camera || "---"}
          </span>
        </div>
      </div>
    </div>
  );
}
