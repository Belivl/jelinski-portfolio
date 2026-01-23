import { motion } from "motion/react";
import { Palette } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { siteConfig } from "@/config/site";
import { LinkCard } from "@/components/ui/LinkCard";
import { SEO } from "@/components/SEO";
import { CopyableInquiry } from "@/components/sections/CopyableInquiry";

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
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-start mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-normal capitalize font-script1 text-center">
            {t.contact.title}
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            {t.contact.description}
          </p>
        </div>

        <div className="mb-24">
          <CopyableInquiry />
        </div>

        {/* Social Media Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-start mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.contact.socialTitle}</h2>
            <p className="text-gray-400">{t.contact.socialSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LinkCard
              href={siteConfig.social.instagram}
              portal={t.contact.social.instagramPhoto}
              handle={"@jelinski_official"}
            >
              <div className="w-16 h-16 rounded-md border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-linear-to-tr from-purple-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram text-white w-8 h-8"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </LinkCard>
            <LinkCard
              href={siteConfig.social.instagram2}
              portal={t.contact.social.instagramDesign}
              handle={"@belialdesign"}
            >
              <div className="w-16 h-16 rounded-md border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-linear-to-tr from-purple-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram text-white w-8 h-8"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </LinkCard>
            <LinkCard
              href={siteConfig.social.linkedin}
              portal={t.contact.social.linkedin}
              handle={t.contact.social.professionalProfile}
            >
              <div className="w-16 h-16 rounded-md border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-[#0077b5] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin text-white w-8 h-8"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </LinkCard>
            <LinkCard
              href={siteConfig.social.youtube}
              portal={t.contact.social.youtube}
              handle={t.contact.social.videoContent}
            >
              <div className="w-16 h-16 rounded-md border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-[#FF0000] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube-icon lucide-youtube text-white w-8 h-8"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </div>
            </LinkCard>

            <LinkCard
              href={siteConfig.social.behance}
              portal={t.contact.social.behance}
              handle={t.contact.social.portfolio}
            >
              <div className="w-16 h-16 rounded-md border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-[#1769ff] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8" />
              </div>
            </LinkCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
