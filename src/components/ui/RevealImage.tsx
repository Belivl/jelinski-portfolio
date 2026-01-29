import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

interface RevealImageProps {
  bottomSrc: string;
  topSrc: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  topImageClassName?: string;
  bottomImageClassName?: string;
}

export function RevealImage({
  bottomSrc,
  topSrc,
  alt,
  onClick,
  className,
  topImageClassName,
  bottomImageClassName,
}: RevealImageProps) {
  return (
    <div
      className={cn("relative w-full cursor-pointer group", className)}
      onClick={onClick}
    >
      <SmartImage
        alt={`${alt}_bottom`}
        className={cn("w-full h-auto object-cover", bottomImageClassName)}
        src={bottomSrc}
      />
      <SmartImage
        alt={alt}
        className={cn(
          "w-full h-auto object-cover absolute top-0 left-0 group-hover:opacity-0 transition-all duration-500 ease-in-out",
          topImageClassName,
        )}
        src={topSrc}
      />
    </div>
  );
}
