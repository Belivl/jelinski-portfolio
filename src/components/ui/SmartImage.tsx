import { useState } from "react";
import { Image, ImageKitProvider } from "@imagekit/react";
import { cn, getDevImageUrl } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  transformation?: any[];
  showAltOnHover?: boolean;
}

export function SmartImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  objectTop = false,
  objectPosition,
  transformation,
  showAltOnHover = true,
  onLoad,
  onError,
  ...props
}: SmartImageProps & {
  objectTop?: boolean;
  objectPosition?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) return null;

  const isProd = import.meta.env.PROD;

  const isAbsolute = className?.includes("absolute");

  // Common classes
  const isPredefinedPosition =
    objectPosition &&
    ["top", "bottom", "center", "left", "right"].includes(objectPosition);

  const finalClass = cn(
    "block max-w-full transition-opacity duration-500",
    isLoaded ? "h-auto" : "h-full",
    isAbsolute && "absolute inset-0 w-full h-full",
    objectTop && !objectPosition && "object-top",
    isPredefinedPosition && `object-${objectPosition}`,
    !isLoaded && "opacity-0",
    isLoaded && "opacity-100",
    className,
  );

  // Apply custom percentages through inline style
  const style =
    objectPosition && !isPredefinedPosition ? { objectPosition } : undefined;

  const [hasError, setHasError] = useState(false);

  const handleLoad = (e: any) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e: any) => {
    if (!isProd && !hasError) {
      setHasError(true);
    }
    if (onError) onError(e);
  };

  return (
    <div
      className={cn(
        "group/smart-image relative transition-all duration-500",
        isAbsolute && "absolute inset-0 h-full",
        !isLoaded && !isAbsolute && "bg-muted/10 aspect-video md:aspect-auto",
        !isLoaded && isAbsolute && "bg-muted/30",
        isLoaded && "bg-transparent",
        !isAbsolute && isLoaded && "h-auto",
      )}
    >
      {!isLoaded && (
        <Skeleton className="absolute inset-0 z-10 w-full h-full" />
      )}

      {!isLoaded && showAltOnHover && alt && (
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/smart-image:opacity-100 transition-opacity duration-300 pointer-events-none select-none p-4">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs text-white font-medium uppercase tracking-widest text-center">
            {alt}
          </span>
        </div>
      )}

      {isProd ? (
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/j3l1n5k1">
          <Image
            {...(src.startsWith("http") || src.startsWith("/")
              ? { src }
              : { path: src })}
            width={width}
            height={height}
            alt={alt}
            className={finalClass}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            lqip={{ active: true, quality: 20 }}
            transformation={transformation}
            onLoad={handleLoad}
            onError={handleError}
            style={style}
            {...(props as any)}
          />
        </ImageKitProvider>
      ) : (
        <img
          src={hasError ? src : getDevImageUrl(src)}
          width={width}
          height={height}
          alt={alt}
          className={finalClass}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          style={style}
          {...(props as any)}
        />
      )}
    </div>
  );
}
