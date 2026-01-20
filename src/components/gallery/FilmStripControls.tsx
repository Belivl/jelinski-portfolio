import { motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilmStripControlsProps {
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  className?: string;
}

export function FilmStripControls({
  onClose,
  onNext,
  onPrev,
  className,
}: FilmStripControlsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 flex flex-col justify-between p-4 md:p-8",
        className
      )}
    >
      {/* Top Bar */}
      <div className="flex w-full items-start justify-between pointer-events-auto">
        <div className="flex items-center gap-4">
          {/* Brand / Logo placeholder if needed */}
        </div>

        {/* Eject / Close Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 border-2 border-neutral-800 shadow-[0_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none active:translate-y-[4px] transition-all"
        >
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <X className="w-6 h-6 text-red-500 group-hover:text-red-400" />
        </motion.button>
      </div>

      {/* Side Navigation Buttons (Desktop) */}
      <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 pointer-events-auto hidden md:block">
        <motion.button
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] border-b-4 border-r-2 border-black shadow-xl active:border-b-0 active:translate-y-1 transition-all"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-full" />
          <ChevronLeft className="w-8 h-8 text-neutral-400 group-hover:text-amber-500 transition-colors" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 pointer-events-auto hidden md:block">
        <motion.button
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] border-b-4 border-l-2 border-black shadow-xl active:border-b-0 active:translate-y-1 transition-all"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-full" />
          <ChevronRight className="w-8 h-8 text-neutral-400 group-hover:text-amber-500 transition-colors" />
        </motion.button>
      </div>

      {/* Bottom Bar (Mobile Nav) */}
      <div className="flex w-full items-end justify-center pointer-events-auto md:hidden pb-8 gap-8">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onPrev}
          className="w-14 h-14 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          className="w-14 h-14 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
