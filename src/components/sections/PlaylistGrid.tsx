import { motion } from "motion/react";
import { Music, Play } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { siteConfig } from "@/config/site";

export function PlaylistGrid() {
  const { t } = useLanguage();
  const playlist = siteConfig.playlist;

  const getEmbedConfig = (url: string) => {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;

      if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
        const listId = urlObj.searchParams.get("list");
        if (listId) return { type: "youtube", id: listId };
      }

      if (hostname.includes("spotify.com")) {
        const segments = urlObj.pathname.split("/").filter(Boolean);
        const type = segments[0];
        const id = segments[1];
        if (["playlist", "album", "track"].includes(type) && id) {
          return { type: "spotify", id, subtype: type };
        }
      }

      if (hostname.includes("soundcloud.com")) {
        return { type: "soundcloud", url: url };
      }

      return null;
    } catch (e) {
      return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-24">
      <div className="flex items-center gap-3 mb-8">
        <Music className="w-6 h-6 text-amber-500" />
        <h2 className="text-3xl font-bold text-foreground">
          {t.about.playlist}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {playlist.map((track, index) => {
          const embedConfig = getEmbedConfig(track.url);

          return (
            <a
              key={index}
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-foreground/5 p-3 rounded-xl hover:bg-foreground/10 transition-colors duration-300 cursor-pointer overflow-hidden border border-t-neutral-600 border-b-neutral-900 border-r-neutral-800 border-l-neutral-700 hover:border-amber-600"
              >
                {/* Prioritize manual thumbnail (e.g. for Spotify), then dynamic embeds */}
                {(track as any).thumbnail ? (
                  <div className="relative w-32 aspect-video rounded-lg overflow-hidden bg-black shrink-0 shadow-sm">
                    <img
                      src={(track as any).thumbnail}
                      alt={track.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                  </div>
                ) : embedConfig ? (
                  <div className="relative w-32 aspect-video rounded-lg overflow-hidden bg-black shrink-0 shadow-sm">
                    {embedConfig.type === "youtube" && (
                      <iframe
                        src={`https://www.youtube.com/embed/videoseries?list=${embedConfig.id}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                        className="w-full h-full object-cover pointer-events-none"
                        style={{ border: 0 }}
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                        title="YouTube playlist preview"
                      />
                    )}
                    {embedConfig.type === "spotify" && (
                      <iframe
                        src={`https://open.spotify.com/embed/${embedConfig.subtype}/${embedConfig.id}`}
                        className="w-full h-full object-cover pointer-events-none"
                        style={{ border: 0 }}
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                        title="Spotify preview"
                      />
                    )}
                    {embedConfig.type === "soundcloud" && embedConfig.url && (
                      <iframe
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                          embedConfig.url,
                        )}&visual=true&buying=false&liking=false&download=false&sharing=false&show_artwork=true&show_comments=false&show_playcount=false&show_user=false`}
                        className="w-full h-full object-cover pointer-events-none"
                        style={{ border: 0 }}
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                        title="SoundCloud preview"
                      />
                    )}
                    <div className="absolute inset-0 bg-transparent" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300 shrink-0">
                    <Play className="w-4 h-4 ml-1" />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-foreground group-hover:text-amber-500 transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {track.platform}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-500 mr-2">
                  <Play className="w-4 h-4 fill-current" />
                </div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
