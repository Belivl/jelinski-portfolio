import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";
import { GoldButton } from "@/components/ui/GoldButton";
import { motion } from "motion/react";
import { HOME_FEATURED_PHOTOS } from "@/data/home";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";

const featuredUrls = HOME_FEATURED_PHOTOS.map((photo) => photo.url);

const ScrollingRow = ({
  photos,
  reverse = false,
  duration = 40,
}: {
  photos: string[];
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <div className="flex overflow-hidden opacity-30 select-none">
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 gap-4 px-2"
      >
        {photos.map((src, i) => (
          <SmartImage
            key={i}
            src={src}
            alt=""
            width={400}
            className="h-40 md:h-64 aspect-4/3 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 gap-4 px-2"
      >
        {photos.map((src, i) => (
          <SmartImage
            key={`dup-${i}`}
            src={src}
            alt=""
            width={400}
            className="h-40 md:h-64 aspect-4/3 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </motion.div>
    </div>
  );
};

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2 }}
      viewport={{ once: true }}
      className="py-32 dark:bg-neutral-900 text-white relative overflow-hidden cursor-default"
    >
      {/* Infinite Scroll Background */}
      <div className="absolute inset-0 z-0 flex flex-col gap-4 justify-center -rotate-3 scale-110 pointer-events-none">
        <ScrollingRow photos={featuredUrls.slice(0, 5)} duration={30} />
        <ScrollingRow
          photos={featuredUrls.slice(5, 10)}
          reverse
          duration={35}
        />
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-linear-to-b dark:from-neutral-900 dark:via-neutral-900/40 dark:to-neutral-900 z-1"></div>

      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <div className="max-w-4xl bg-black/0  p-8 md:p-16 rounded-2xl flex flex-col items-center ">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight dark:text-neutral-100 text-neutral-900">
            {t.cta.title} <br />
            {t.cta.subtitle}{" "}
            <span className="text-amber-500 font-script1 lowercase text-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              {t.cta.highlight}
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-semimedium mb-10 max-w-2xl mx-auto dark:text-neutral-400 text-neutral-700 tracking-wide">
            {t.cta.description}
          </p>
          <Link to="/contact">
            <GoldButton className="w-full sm:w-auto hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all duration-300 ease-out">
              {t.cta.button}{" "}
              <ArrowRight className="ml-2 w-5 h-5 text-neutral-800 stroke-[3px] group-hover:-rotate-45 transition-all duration-300 ease-out" />
            </GoldButton>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
