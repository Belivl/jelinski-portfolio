import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { SEO } from "@/components/SEO";
import { CopyableInquiry } from "@/components/sections/CopyableInquiry";
import { ContactSocials } from "@/components/sections/ContactSocials";

export function Contact() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-20"
    >
      <SEO title={t.contact.title} description={t.contact.description} />
      <div className="container mx-auto px-6 max-w-4xl cursor-default">
        <div className="text-start mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-normal capitalize font-script1 text-center">
            {t.contact.title}
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            {t.contact.description}
          </p>
        </div>

        <CopyableInquiry />
        <ContactSocials />
      </div>
    </motion.div>
  );
}
