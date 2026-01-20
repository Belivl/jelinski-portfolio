import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonGlassProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function ButtonGlass({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonGlassProps) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative inline-block group">
      {/* SVG Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="liquid-glass-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button
        ref={buttonRef}
        className={cn(
          "relative px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 ease-out overflow-hidden",
          "bg-white/5 border border-white/10 backdrop-blur-xs",
          "hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Liquid Background Layer */}
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-500"
          style={{ filter: "url(#liquid-glass-filter)" }}
        >
          {/* Moving Blobs */}
          <motion.div
            className={cn(
              "absolute -inset-4 bg-linear-to-r blur-xl opacity-70",
              variant === "primary"
                ? "from-amber-500/40 via-orange-500/40 to-amber-500/40"
                : "from-blue-500/40 via-cyan-500/40 to-blue-500/40",
            )}
            animate={{
              x: isHovered ? ["0%", "100%", "0%"] : "0%",
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={cn(
              "absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 rounded-full blur-md",
              variant === "primary" ? "bg-amber-400/50" : "bg-blue-400/50",
            )}
            animate={{
              x: isHovered ? [0, 60, -60, 0] : 0,
              y: isHovered ? [0, -30, 30, 0] : 0,
              scale: isHovered ? [1, 1.5, 0.8, 1] : 1,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={cn(
              "absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full blur-md",
              variant === "primary" ? "bg-orange-300/40" : "bg-cyan-300/40",
            )}
            animate={{
              x: isHovered ? [0, -50, 50, 0] : 0,
              y: isHovered ? [0, 40, -40, 0] : 0,
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </div>

        {/* Glass Shine/Reflection */}
        <div className="absolute inset-0 rounded-full bg-linear-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 text-white tracking-wide">
          {children}
        </span>
      </button>
    </div>
  );
}
