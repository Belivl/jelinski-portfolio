import { motion } from "motion/react";
import Masonry from "react-masonry-css";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";
import { HOME_FEATURED_PHOTOS } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";

export function FeaturedGallery() {
  const { t } = useLanguage();

  return (
    <section className="md:py-24 py-8 bg-background relative overflow-hidden">
      <motion.div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6 cursor-default">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground flex items-center gap-3 font-script1 capitalize ">
              {t.featured.title}
            </h2>
            <p className="text-muted-foreground">{t.featured.subtitle}</p>
          </div>
          <Link to="/gallery">
            <Button
              variant="ghost"
              className="hidden md:flex text-primary hover:text-primary/80 dark:hover:bg-neutral-800 dark:hover:border-neutral-600 hover:border"
            >
              {t.featured.viewAll} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Masonry
          breakpointCols={{
            default: 5,
            1024: 5,
            768: 3,
          }}
          className="flex w-auto -ml-2 md:-ml-6"
          columnClassName="pl-2 md:pl-6 bg-clip-padding"
        >
          {HOME_FEATURED_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm md:rounded-lg bg-muted cursor-pointer border border-border md:mb-6 mb-2 shadow-md"
            >
              <SmartImage
                src={photo.url}
                alt={photo.title || "Photo"}
                width={300}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              <Link
                to={`/blog/${photo.blogPostId || "0"}`}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-sm font-medium mb-1 uppercase tracking-wider">
                    {photo.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {photo.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </Masonry>

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="mt-4 flex justify-center"
        >
          <Link to="/gallery" className="w-full">
            <Button
              variant="ghost"
              size="lg"
              className="w-full hover:underline underline-offset-12 decoration-[8px] group hover:bg-transparent text-xl md:text-9xl h-fit p-4 md:p-8 text-neutral-500 hover:text-neutral-400 transition-all duration-300 ease-out text-script1 font-black md:gap-8 gap-2 uppercase"
            >
              {t.featured.viewAll}{" "}
              <ArrowRight className="ml-2 w-6 h-6 md:w-30 md:h-30 group-hover:translate-x-2 group-hover:rotate-90 transition-all duration-300 ease-out" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
