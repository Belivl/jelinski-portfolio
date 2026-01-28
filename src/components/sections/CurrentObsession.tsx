import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Disc, Play } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function CurrentObsession() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-36 pb-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Disc className="w-6 h-6 text-primary animate-spin-slow" />
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
          {t.about.obsession}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-t-neutral-700 border-b-neutral-900 border-l-neutral-800 border-r-neutral-800 rounded-xl flex flex-col items-center relative overflow-hidden group min-h-[152px]"
      >
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-[152px] flex items-center justify-between px-8 bg-neutral-800 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-neutral-700 rounded-md flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Disc className="w-10 h-10 text-neutral-500 group-hover:rotate-12 transition-transform duration-500" />
                  {/* Subtle glass effect */}
                  <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary uppercase tracking-widest mb-1">
                    Playing Now
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Bird of Paradise
                  </h3>
                  <p className="text-neutral-400 font-medium italic">
                    Graveyard
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary/90 transition-colors"
              >
                <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="iframe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <iframe
                className="max-w-3xl mx-auto"
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/2gF4D4UkMzqLYBoiWG2luc?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
