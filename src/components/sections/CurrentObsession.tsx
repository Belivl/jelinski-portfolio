import { motion } from "motion/react";
import { Disc } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
export function CurrentObsession() {
  const { t } = useLanguage();

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
        className="bg-card border border-t-neutral-700 border-b-neutral-900 border-l-neutral-800 border-r-neutral-800 rounded-xl  flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group"
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
    </section>
  );
}
