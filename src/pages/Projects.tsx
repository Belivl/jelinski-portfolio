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
import { Card2 } from "@/components/ui/Card2";

export function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectTabId>("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen pt-36 pb-20 px-6"
    >
      <SEO title={t.projects.title} description={t.projects.description} />
      <div className="container mx-auto justify-start flex flex-col items-stretch overflow-hidden md:overflow-visible cursor-default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-8 w-full"
        >
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
          <Card2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2 w-full ">
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
          </Card2>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <>
              <AboutBelial />
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
            </>
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
    </motion.div>
  );
}
