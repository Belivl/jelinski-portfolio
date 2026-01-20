import { BlogList } from "@/components/sections/BlogList2";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { SEO } from "@/components/SEO";

export function Blog() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background"
    >
      <SEO title={t.blog.title} description={t.blog.description} />
      <div className="container mx-auto px-6">
        <div className="text-start mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-normal capitalize  font-script1">
            {t.blog.title}
          </h1>
          <p
            className="text-xl text-neutral-400 max-w-2xl "
            style={{ textWrap: "balance" }}
          >
            {t.blog.description}
          </p>
        </div>
        <BlogList />
      </div>
    </motion.div>
  );
}
