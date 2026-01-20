import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { GlowContent } from "./GlowContent";

interface AnalogDialProps {
  currentIndex: number;
  totalPhotos: number;
  onIndexChange: (index: number) => void;
  className?: string;
}

export function AnalogDial({
  currentIndex,
  totalPhotos,
  onIndexChange,
  className,
}: AnalogDialProps) {
  const dialRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastAngleRef = useRef(0);
  const accumulatedRotationRef = useRef(0);
  const prevIndexRef = useRef(currentIndex);

  // Sync rotation with external index changes (e.g. keyboard)
  useEffect(() => {
    if (currentIndex !== prevIndexRef.current) {
      const diff = currentIndex - prevIndexRef.current;

      // Handle wrapping logic for shortest path
      let adjustedDiff = diff;
      if (Math.abs(diff) > totalPhotos / 2) {
        adjustedDiff = diff > 0 ? diff - totalPhotos : diff + totalPhotos;
      }

      // Rotate by 20 degrees per index change
      setRotation((prev) => prev + adjustedDiff * 20);
      prevIndexRef.current = currentIndex;
    }
  }, [currentIndex, totalPhotos]);

  // Visual rotation for the anisotropic effect (follows mouse or dial rotation)
  const [visualRotation, setVisualRotation] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle the drag rotation logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dialRef.current) return;

      const rect = dialRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      // Update visual effects (GoldButton style)
      const clampedX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const clampedY = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
      const visualAngle =
        Math.atan2(clampedY - rect.height / 2, clampedX - rect.width / 2) *
        (180 / Math.PI);

      setVisualRotation(visualAngle + 90);
      setMousePos({ x: clampedX, y: clampedY });

      // Drag logic
      if (isDragging) {
        const currentAngle = Math.atan2(y, x) * (180 / Math.PI);
        let delta = currentAngle - lastAngleRef.current;

        // Handle wrapping around -180/180
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        accumulatedRotationRef.current += delta;
        setRotation((prev) => prev + delta);
        lastAngleRef.current = currentAngle;

        // Threshold for index change (e.g., 20 degrees per photo)
        const threshold = 90;
        if (Math.abs(accumulatedRotationRef.current) >= threshold) {
          const steps = Math.floor(
            Math.abs(accumulatedRotationRef.current) / threshold
          );
          const direction = accumulatedRotationRef.current > 0 ? 1 : -1;

          let newIndex = currentIndex + steps * direction;
          // Handle wrapping
          if (newIndex < 0) newIndex = (newIndex % totalPhotos) + totalPhotos;
          newIndex = newIndex % totalPhotos;

          onIndexChange(newIndex);
          accumulatedRotationRef.current -= steps * threshold * direction;
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      // Still listen for mouse move for the visual effect if hovering (optional, but good for consistency)
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, currentIndex, totalPhotos, onIndexChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    lastAngleRef.current =
      Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    setIsDragging(true);
  };

  return (
    <div
      ref={dialRef}
      onMouseDown={handleMouseDown}
      className={cn(
        "relative w-32 h-32 rounded-full   cursor-grab active:cursor-grabbing shadow-xl shadow-black/80 inset-shadow-sm inset-shadow-neutral-100 -translate-y-[2px]",
        className
      )}
      style={{
        // @ts-ignore
        "--rotation": `${visualRotation}deg`,
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      }}
    >
      {/* Rotating Container for the Dial Texture */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        animate={{ rotate: rotation }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.5,
        }}
      >
        {/* Layer 0: Base Gold */}
        <div className="absolute inset-0 z-0 bg-[#FBE5BB] grayscale" />

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
          className="absolute inset-0 z-20 mix-blend-soft-light pointer-events-none grayscale"
          style={{
            backgroundColor: "#D9B166",
            boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
          }}
        />

        {/* Ticks/Markings */}
        <div className="absolute inset-0 z-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 w-0.5 h-3 bg-black/60 origin-bottom -translate-x-1/2"
              style={{
                transform: `rotate(${i * 30}deg) translateY(8px)`,
                transformOrigin: "center 64px", // Half of w-32 (128px) = 64px
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Static Light Effects (Overlay on top of rotation) */}
      {/* Layer 6: Gold Tint */}
      <div
        className="absolute inset-0 z-20 mix-blend-soft-light pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.8), transparent 60%)",
        }}
      />

      {/* Layer 7: Light Responsive Border */}
      <div
        className="absolute inset-0 z-30 pointer-events-none rounded-full border-amber-900/40 border-4 grayscale"
        style={{
          background: `radial-gradient(150px circle at var(--mouse-x) var(--mouse-y), rgba(233, 202, 115, 0.7), transparent 100%)`,
          padding: "3px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Center Display */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none ">
        <div className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden  shadow-[0_2px_10px_rgba(0,0,0,0.5), inset_0_2px_10px_rgba(0,0,0,0.5)] border-t border-t-white/10">
          <div className="relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <GlowContent variant="amber" active={true} blurAmount="blur-sm">
                  <span className="text-2xl font-bold text-neutral-200 font-mono">
                    {currentIndex + 1}
                  </span>
                </GlowContent>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
