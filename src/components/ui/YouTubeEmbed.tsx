import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

export function YouTubeEmbed({
  videoId,
  title = "YouTube Video",
  className,
  aspectRatio = "video",
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Use high-resolution placeholder
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isPlaying) {
    return (
      <div
        className={cn(
          "relative group cursor-pointer overflow-hidden rounded-xl border border-border shadow-lg transition-all duration-300 hover:border-primary/50",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "square" && "aspect-square",
          aspectRatio === "portrait" && "aspect-9/16",
          className,
        )}
        onClick={() => setIsPlaying(true)}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback to standard quality if maxres isn't available
            (e.target as HTMLImageElement).src =
              `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-10 w-10 fill-current" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border shadow-2xl",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "portrait" && "aspect-9/16",
        className,
      )}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      ></iframe>
    </div>
  );
}
