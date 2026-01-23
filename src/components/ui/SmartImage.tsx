import { Image, ImageKitProvider } from "@imagekit/react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  objectTop = false,
  ...props
}: SmartImageProps & { objectTop?: boolean }) {
  if (!src) return null;

  // common classes
  const finalClass = cn(
    "block max-w-full h-full",
    objectTop && "object-top",
    className,
  );

  // Distinguish between full URLs, local paths, and ImageKit relative paths
  const isIKPath = src && !src.startsWith("http") && !src.startsWith("/");
  const path = isIKPath ? src : undefined;

  // If it's a local dev path (starts with /photos/ or /), use a standard img tag
  if (src.startsWith("/") || src.startsWith("./")) {
    return (
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={finalClass}
        loading={priority ? "eager" : "lazy"}
        {...(props as any)}
      />
    );
  }

  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/j3l1n5k1">
      <Image
        {...(isIKPath ? { path } : { src })}
        width={width}
        height={height}
        alt={alt}
        className={finalClass}
        loading={priority ? "eager" : "lazy"}
        lqip={{ active: true, quality: 20 }}
        {...(props as any)}
      />
    </ImageKitProvider>
  );
}
