import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { SEO } from "@/components/SEO";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-20 bg-background"
    >
      <SEO title={t.gallery.title} description={t.gallery.description} />
      <div className="container mx-auto px-6 cursor-default">
        <div className="text-start mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-normal capitalize  font-script1">
            {t.gallery.title}
          </h1>
          <p
            className="text-xl text-neutral-400 max-w-2xl "
            style={{ textWrap: "balance" }}
          >
            {t.gallery.description}
          </p>
        </div>
        <GalleryGrid />
      </div>
    </motion.div>
  );
}
