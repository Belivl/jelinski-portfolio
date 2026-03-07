import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StippledImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  dotColor?: string;
  backgroundColor?: string;
  density?: number; // 1 to 10, default 5
}

export function StippledImage({
  src,
  alt,
  width,
  height,
  className,
  dotColor = "rgba(0,0,0,0.8)",
  backgroundColor = "transparent",
  density = 5,
}: StippledImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !src) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = () => {
      // Set canvas size to match container
      const { width: containerWidth, height: containerHeight } =
        container.getBoundingClientRect();

      // Use higher resolution for sharp rendering on retina displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;

      // Draw background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, containerWidth, containerHeight);

      // Draw image to offscreen canvas for pixel analysis (low res for performance)
      const analysisWidth = 400;
      const analysisHeight = (containerHeight / containerWidth) * analysisWidth;

      const offCanvas = document.createElement("canvas");
      offCanvas.width = analysisWidth;
      offCanvas.height = analysisHeight;
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      // Draw image preserving aspect ratio 'cover' style
      const scale = Math.max(
        analysisWidth / img.width,
        analysisHeight / img.height,
      );
      const x = (analysisWidth / scale - img.width) / 2;
      const y = (analysisHeight / scale - img.height) / 2;

      offCtx.drawImage(
        img,
        x * scale,
        y * scale,
        img.width * scale,
        img.height * scale,
      );

      // Get pixel data
      const imageData = offCtx.getImageData(
        0,
        0,
        analysisWidth,
        analysisHeight,
      );
      const data = imageData.data;

      // Stippling Logic (Weighted Poisson Disc Sampling approximation)
      const points: { x: number; y: number; r: number }[] = [];
      const grayPoints: { x: number; y: number; r: number }[] = [];

      // Adjustment factors based on density prop (1-10)
      // Higher density = more dots, smaller dots
      const densityFactor = density / 5;
      const maxDots = 40000 * densityFactor;

      for (let i = 0; i < maxDots; i++) {
        const px = Math.floor(Math.random() * analysisWidth);
        const py = Math.floor(Math.random() * analysisHeight);

        const index = (py * analysisWidth + px) * 4;
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const brightness = (r + g + b) / 3; // 0 (dark) to 255 (bright)

        // Probability of placing a dot based on darkness
        // Darker areas (low brightness) have higher probability
        const probability = 1 - brightness / 255;

        // Non-linear mapping to emphasize contrast
        // Power of 4 makes midtones/lights much sparser, concentrating dots in darks
        const darkProb = Math.pow(probability, 4);
        const grayProb = Math.pow(probability, 1.5) + 0.04;

        const rnd = Math.random();

        if (rnd < darkProb) {
          // Dark Point
          // Map back to canvas coordinates
          const finalX = (px / analysisWidth) * containerWidth;
          const finalY = (py / analysisHeight) * containerHeight;

          // Add some jitter for organic look
          const jitter = (Math.random() - 0.1) * 2;

          points.push({
            x: finalX + jitter,
            y: finalY + jitter,
            r: Math.random() * 1.5 * (1 / densityFactor) + 0.5,
          });
        } else if (rnd < grayProb) {
          // Gray Point (Lighter tonal range)
          const finalX = (px / analysisWidth) * containerWidth;
          const finalY = (py / analysisHeight) * containerHeight;
          const jitter = (Math.random() - 0.5) * 2;

          grayPoints.push({
            x: finalX + jitter,
            y: finalY + jitter,
            r: Math.random() * 1.2 * (1 / densityFactor) + 0.3,
          });
        }
      }

      // Render Gray dots first (background layer)
      ctx.fillStyle = "rgba(25,25,25,1)"; // Fixed gray color or derive from dotColor
      grayPoints.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Dark dots
      ctx.fillStyle = dotColor;
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fill();
      });

      setIsLoaded(true);
    };
  }, [src, width, height, density, dotColor, backgroundColor]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", className)}
      role="img"
      aria-label={alt}
    >
      <canvas ref={canvasRef} className="block w-full h-full object-cover" />
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
    </div>
  );
}
