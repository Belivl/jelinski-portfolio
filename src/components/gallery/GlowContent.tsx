import React from "react";
import { cn } from "@/lib/utils";

interface GlowContentProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  variant?: "default" | "danger" | "amber";
  glowOpacity?: string; // Tailwind opacity class like "opacity-70"
  blurAmount?: string; // Tailwind blur class like "blur-md"
}

export function GlowContent({
  children,
  active = true,
  className,
  variant = "default",
  glowOpacity = "opacity-70",
  blurAmount = "blur-md",
}: GlowContentProps) {
  const colorClass =
    variant === "danger"
      ? "text-red-500"
      : variant === "amber"
      ? "text-amber-400"
      : "text-emerald-400";

  const coreColorClass =
    variant === "danger"
      ? "text-red-400"
      : variant === "amber"
      ? "text-amber-300"
      : "text-emerald-300";

  return (
    <div className={cn("relative flex items-center gap-2", className)}>
      {/* 1. Base Content (The source) */}
      <div className="relative z-10 flex items-center gap-2">{children}</div>

      {/* 2. Soft Bloom Layer (Large Blur) */}
      <div
        className={cn(
          "absolute inset-0 flex items-center gap-2 transition-all duration-300 pointer-events-none",
          blurAmount,
          active ? glowOpacity : "opacity-0",
          colorClass
        )}
        aria-hidden="true"
      >
        {children}
      </div>

      {/* 3. Sharp Core Glow Layer (Intense Center) */}
      <div
        className={cn(
          "absolute inset-0 flex items-center gap-2 blur-[1.5px] transition-all duration-300 pointer-events-none",
          active ? "opacity-50" : "opacity-0",
          coreColorClass
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
