"use client";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/shadcn-io/comparison.tsx";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/ui/SmartImage";

interface ComparisonProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  roundEvery?: boolean;
  onImageClick?: (index: number) => void;
}
function Comparison2({
  images,
  className,
  roundEvery,
  onImageClick,
}: ComparisonProps) {
  return (
    <Comparison
      className={cn(
        " w-full overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800",
        roundEvery ? "rounded-xl" : "",
        className,
      )}
      mode="hover"
    >
      <ComparisonItem
        className="bg-none cursor-pointer"
        position="left"
        onClick={() => onImageClick?.(0)}
      >
        <SmartImage
          alt={images[0].alt}
          className=" w-full h-auto object-cover"
          src={images[0].src}
        />
      </ComparisonItem>
      <ComparisonItem
        className="bg-none cursor-pointer"
        position="right"
        onClick={() => onImageClick?.(1)}
      >
        <SmartImage
          alt={images[1].alt}
          className=" w-full h-auto object-cover"
          src={images[1].src}
        />
      </ComparisonItem>
      <ComparisonHandle />
    </Comparison>
  );
}
export default Comparison2;
