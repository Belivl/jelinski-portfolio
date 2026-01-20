import { useState } from "react";
import { ProjectList } from "@/components/sections/ProjectList";
import { DesignGallery } from "@/components/galleries/DesignGallery";
import { ArtGallery } from "@/components/galleries/ArtGallery.tsx";
import { ThreeDGallery } from "@/components/galleries/ThreeDGallery";
import { motion, AnimatePresence } from "motion/react";
import { CategoryCard } from "@/components/gallery/CategoryCard";
import { SEO } from "@/components/SEO";

import { useLanguage } from "@/lib/LanguageContext";
import { AboutBelial } from "@/components/sections/AboutBelial";

import { PROJECT_TABS } from "@/data/projectTabs";
import type { ProjectTabId } from "@/data/projectTabs";

export function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectTabId>("projects");

  return (
    <div className="min-h-screen pt-36 pb-20 px-6">
      <SEO title={t.projects.title} description={t.projects.description} />
      <div className="container mx-auto justify-start flex flex-col items-stretch overflow-hidden md:overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-8 w-full"
        >
          <AboutBelial />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-script1 capitalize">
            {t.projects.title}
          </h1>
          <p
            className="text-gray-400 max-w-2xl text-lg mb-12"
            style={{ textWrap: "balance" }}
          >
            {t.projects.description}
          </p>

          {/* Top-level Cinematic Cards */}
          <div className="flex flex-col justify-between w-full gap-6 dark:bg-neutral-900 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  w-full ">
              {PROJECT_TABS.map((tab) => (
                <CategoryCard
                  key={tab.id}
                  category={tab.id}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  coverImage={tab.image}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ProjectList />
            </motion.div>
          )}
          {activeTab === "design" && (
            <motion.div
              key="design"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <DesignGallery />
            </motion.div>
          )}
          {activeTab === "art" && (
            <motion.div
              key="art"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ArtGallery />
            </motion.div>
          )}
          {activeTab === "3d" && (
            <motion.div
              key="3d"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ThreeDGallery />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
