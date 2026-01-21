import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import { ArrowRight, ExternalLink, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { SmartImage } from "../ui/SmartImage";

export function AboutTimeline() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <h2 className="text-5xl font-bold font-script1 mb-12 dark:text-neutral-200 flex items-center justify-center gap-3 text-center w-full">
        {t.about.experience}
      </h2>
      <div className="space-y-6 border-l-2 dark:border-white/10 ml-3 pl-8 relative">
        {t.about.experiences.map((exp: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[43px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-background border-4 transition-colors duration-300 ${
                expandedIndex === index
                  ? "border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] "
                  : "dark:border-white/20"
              }`}
            />

            <div
              className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                expandedIndex === index
                  ? "dark:bg-neutral-900 border-neutral-500/30 shadow-xl shadow-neutral-500/5"
                  : "bg-transparent dark:border-white/5 dark:hover:border-white/10 dark:hover:bg-white/2"
              }`}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <div className="w-24 h-24 rounded-xl dark:bg-neutral-900 bg-neutral-200 p-2 flex items-center justify-center shrink-0 overflow-hidden backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <SmartImage
                        src={exp.logo}
                        alt={exp.company}
                        className="max-w-full max-h-full object-contain filter rounded-sm"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs dark:text-neutral-400 font-medium tracking-wide mb-1 block opacity-80">
                      {exp.period}
                    </span>
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        expandedIndex === index
                          ? "text-amber-500"
                          : "text-foreground"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-gray-400 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  className="mt-1 text-gray-400 dark:text-gray-600 group-hover:text-amber-500 transition-colors scale-150 mr-4"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base border-t border-white/10 pt-6">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-500/10 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 text-sm font-medium group/btn"
                          >
                            <ExternalLink size={16} />
                            <span>{t.about.officialWebsite}</span>
                          </a>
                        )}
                        {exp.projectLink && (
                          <Link
                            to={exp.projectLink}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center group gap-2 px-4 py-2 rounded-md bg-neutral-500/10 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 text-sm font-medium group/btn"
                          >
                            <FolderKanban size={16} />
                            <span>{t.about.projectView}</span>
                            <ArrowRight className="ml-2 w-5 h-5 text-neutral-100 stroke-[3px] group-hover:-rotate-45 transition-all duration-300 ease-out" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
