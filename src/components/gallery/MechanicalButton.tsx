import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";
import { GlowContent } from "./GlowContent";

interface MechanicalButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  active?: boolean;
  variant?: "default" | "danger" | "warning";
}

export function MechanicalButton({
  children,
  className,
  active = false,
  variant = "default",
  ...props
}: MechanicalButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96, y: 2 }}
      className={cn(
        "group relative flex items-center justify-center px-6 py-3 rounded-sm font-medium transition-all outline-none select-none",
        // Base structure (Sides/Depth)
        "bg-[#151515] border-b-4 border-r-2 border-black/50 shadow-[2px_2px_10px_rgba(0,0,0,0.5),inset_1px_3px_5px_rgba(255,255,255,0.1)]",
        // Pressed state simulation (via CSS active pseudo-class basics, refined by motion)
        "active:border-b-0 active:border-r-0 active:translate-y-[4px] active:shadow-none",
        className
      )}
      {...props}
    >
      {/* Top Surface */}
      <div
        className={cn(
          "absolute inset-0 bg-[#252525] rounded-sm transition-all duration-300 border-t border-white plastic-texture",
          "shadow-[inset_2px_2px_4px_rgba(255,255,255,0.05),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]",
          active &&
            "bg-[#2a2a2a] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.6),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]",
          variant === "danger" && "bg-red-900/20 hover:bg-red-900/30",
          variant === "warning" && "bg-amber-900/20 hover:bg-amber-900/30"
        )}
      >
        {/* Shiny Highlight Border (Top-Left) */}
        <div className="absolute inset-0 rounded-sm border-t border-l border-white/10 pointer-events-none opacity-50" />

        {/* Spreading Surface Glow */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none",
            active && "opacity-100"
          )}
          style={{
            background:
              variant === "danger"
                ? "radial-gradient(circle at 12px 50%, rgba(239, 68, 68, 0.1) 0%, transparent 60%)"
                : "radial-gradient(circle at 12px 50%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* LED / Indicator */}
      {/* <div
        className={cn(
          "absolute top-1/2 left-3 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/50 shadow-inner transition-all duration-300",
          active &&
            "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9),0_0_4px_rgba(255,255,255,0.5)]",
          variant === "danger" &&
            active &&
            "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9),0_0_4px_rgba(255,255,255,0.5)]",
          !active && "bg-[#111]"
        )}
      /> */}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex items-center gap-2 text-neutral-400 group-hover:text-neutral-200 transition-all duration-300",
          active && "text-neutral-100",
          variant === "danger" && "text-red-400 group-hover:text-red-300",
          variant === "danger" && active && "text-red-200"
        )}
      >
        <GlowContent
          active={active}
          variant={variant === "danger" ? "danger" : "default"}
          className="group-hover:opacity-100"
        >
          {children}
        </GlowContent>
      </div>
    </motion.button>
  );
}
