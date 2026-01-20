import { IKImage } from "imagekitio-react";
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
  const isProd = import.meta.env.PROD;
  const urlEndpoint = "https://ik.imagekit.io/j3l1n5k1";

  // common classes
  const finalClass = cn(
    "block max-w-full h-auto",
    objectTop && "object-top",
    className,
  );

  // Use IKImage in production for remote URLs
  // We check if it starts with http because even in prod we might have some local assets?
  // But primarily our photos are remote in prod.
  if (isProd && src.startsWith("http")) {
    // Strip query params (like ik-s signature) which cause errors when unchecked transformations are added
    const cleanSrc = src.split("?")[0];

    return (
      <IKImage
        urlEndpoint={urlEndpoint}
        src={cleanSrc}
        alt={alt}
        className={finalClass}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        lqip={{ active: true, quality: 20 }}
        {...(props as any)}
      />
    );
  }

  // Fallback / Dev mode / Local images
  // We apply the dev transformation here to allow local testing of remote images
  // const displaySrc = getDevImageUrl(src);

  // return (
  //   <img
  //     src={displaySrc}
  //     alt={alt}
  //     className={finalClass}
  //     width={width}
  //     height={height}
  //     loading={priority ? "eager" : "lazy"}
  //     {...props}
  //   />
  // );
}
