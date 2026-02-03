import { Image, ImageKitProvider } from "@imagekit/react";
import { cn, getDevImageUrl } from "@/lib/utils";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  transformation?: any[];
}

export function SmartImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  objectTop = false,
  transformation,
  ...props
}: SmartImageProps & { objectTop?: boolean }) {
  if (!src) return null;

  const isProd = import.meta.env.PROD;

  // Common classes
  const finalClass = cn(
    "block max-w-full h-full",
    objectTop && "object-top",
    className,
  );

  // In development, use local images
  if (!isProd) {
    const localSrc = getDevImageUrl(src);
    return (
      <img
        src={localSrc}
        width={width}
        height={height}
        alt={alt}
        className={finalClass}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        {...(props as any)}
      />
    );
  }

  // In production, use ImageKit
  // Distinguish between full URLs and ImageKit relative paths
  const isIKPath = src && !src.startsWith("http") && !src.startsWith("/");
  const path = isIKPath ? src : undefined;

  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/j3l1n5k1">
      <Image
        {...(isIKPath ? { path } : { src })}
        width={width}
        height={height}
        alt={alt}
        className={finalClass}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        lqip={{ active: true, quality: 20 }}
        transformation={transformation}
        {...(props as any)}
      />
    </ImageKitProvider>
  );
}
