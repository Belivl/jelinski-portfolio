import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { CurrentObsession } from "@/components/sections/CurrentObsession";
import { PlaylistGrid } from "@/components/sections/PlaylistGrid";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { SEO } from "@/components/SEO";
import { SameHeightRow } from "@/components/ui/SameHeightRow";

export function About() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background"
    >
      <SEO title={t.about.title} description={t.about.description} />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold my-16 tracking-normal font-script1 capitalize text-center">
            {t.about.title}
          </h1>
          <SameHeightRow
            gap={24}
            roundEvery={true}
            images={[
              {
                src: "https://ik.imagekit.io/j3l1n5k1/photography/profilev1.avif",
                alt: "Photographer profile picture1",
              },
              {
                src: "https://ik.imagekit.io/j3l1n5k1/photography/profilev2.avif",
                alt: "Photographer profile picture2",
              },
              {
                src: "https://ik.imagekit.io/j3l1n5k1/photography/profilev3.avif?updatedAt=1769002627937",
                alt: "Photographer profile picture3",
              },
            ]}
          ></SameHeightRow>
          <p className="text-xl text-gray-400 leading-relaxed my-8">
            {t.about.description}
            <br />
            <br />
            {t.about.description2}
            <br />
            <br />
            {t.about.description3}
          </p>
        </div>

        <AboutTimeline />
        <CurrentObsession />
        <PlaylistGrid />
      </div>
    </motion.div>
  );
}
