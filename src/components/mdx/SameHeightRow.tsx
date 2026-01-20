import { SmartImage } from "@/components/ui/SmartImage";
import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface SameHeightRowProps {
  images: ImageProps[];
  gap?: number;
  roundEvery?: boolean;
  className?: string;
}

export const SameHeightRow: React.FC<
  SameHeightRowProps & { onImageClick?: (index: number) => void }
> = ({ images, gap = 0, roundEvery = false, className = "", onImageClick }) => {
  const [ratios, setRatios] = useState<number[]>(
    new Array(images.length).fill(0),
  );

  const handleImageLoad = (
    index: number,
    event: React.SyntheticEvent<HTMLImageElement>,
  ) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    const ratio = naturalWidth / naturalHeight;
    setRatios((prev) => {
      const newRatios = [...prev];
      newRatios[index] = ratio;
      return newRatios;
    });
  };

  const allLoaded = ratios.every((r) => r > 0);
  const totalRatio = ratios.reduce((a, b) => a + b, 0);

  return (
    <div
      className={`flex flex-col md:flex-row w-full ${
        roundEvery ? "" : "overflow-hidden"
      } ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {images.map((img, index) => {
        // Mobile: 100% width. Desktop: Calculated percentage
        const widthPercentage = allLoaded
          ? `calc((100% - ${(images.length - 1) * gap}px) * ${
              ratios[index] / totalRatio
            })`
          : `${100 / images.length}%`;

        return (
          <div
            key={index}
            className={`w-full md:w-[var(--width)] ${onImageClick ? "cursor-pointer" : ""}`}
            style={
              {
                "--width": widthPercentage,
              } as React.CSSProperties
            }
            onClick={() => onImageClick?.(index)}
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              onLoad={(e) => handleImageLoad(index, e)}
              style={{
                borderRadius: roundEvery ? "0.5rem" : "0",
              }}
              className={`transition-all duration-500 ease-in-out h-auto w-full shadow-xl ${
                roundEvery
                  ? "light:border-neutral-500 dark:border-neutral-800 border"
                  : ""
              } `}
            />
          </div>
        );
      })}
    </div>
  );
};
