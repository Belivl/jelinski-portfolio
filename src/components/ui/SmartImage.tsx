import { IKImage } from "imagekitio-react";
import { cn, getDevImageUrl } from "@/lib/utils";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState, useEffect } from "react";

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
  const urlEndpoint =
    import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT ||
    "https://ik.imagekit.io/j3l1n5k1";
  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

  if (isProd && !publicKey) {
    console.warn(
      "VITE_IMAGEKIT_PUBLIC_KEY is missing in production environment variables.",
    );
  }

  const getAuthParams = useAction(api.imagekit.getAuthParams);
  const [authParams, setAuthParams] = useState<{
    token: string;
    expire: number;
    signature: string;
  } | null>(null);

  useEffect(() => {
    if (isProd && src.startsWith("http") && !authParams) {
      getAuthParams()
        .then((res) => {
          if (res) setAuthParams(res);
        })
        .catch((err) => {
          console.error("Failed to get ImageKit auth params:", err);
        });
    }
  }, [isProd, src, getAuthParams, authParams]);

  const authenticator = async () => {
    if (!authParams) {
      // If we don't have auth params yet, try to fetch them or return empty
      try {
        const res = await getAuthParams();
        if (res) {
          setAuthParams(res);
          return {
            token: res.token,
            expire: res.expire,
            signature: res.signature,
          };
        }
      } catch (e) {
        console.error("Authenticator fetch error:", e);
      }
      console.error(
        "ImageKit Authenticator failed: No auth params available. This will cause 401 errors.",
      );
      return {
        token: "",
        expire: 0,
        signature: "",
      };
    }
    return {
      token: authParams.token,
      expire: authParams.expire,
      signature: authParams.signature,
    };
  };

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
        publicKey={publicKey}
        authenticator={authenticator}
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
  const displaySrc = getDevImageUrl(src);

  return (
    <img
      src={displaySrc}
      alt={alt}
      className={finalClass}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
