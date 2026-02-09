import { Hero } from "@/components/sections/Hero";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { CtaSection } from "@/components/sections/CtaSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/lib/LanguageContext";

export function Home() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(() => {
    // Check if loading screen has been shown in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoadingScreen");
    return !hasSeenLoading;
  });

  useEffect(() => {
    // Mark that loading screen has been shown in this session
    if (isLoading) {
      sessionStorage.setItem("hasSeenLoadingScreen", "true");
    }
  }, [isLoading]);

  const handleLoadingFinished = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={handleLoadingFinished} />
        )}
      </AnimatePresence>
      <SEO title={t.nav.home} description={t.hero.description} />
      <main>
        <Hero />
        <div className="h-9 w-full bg-black  flex justify-between items-end px-1 overflow-hidden shrink-0 -translate-y-1/2">
          {Array.from({
            length: Math.floor(window.innerWidth / 40),
          }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-5 bg-neutral-900/40 rounded-[4px] mx-1 mb-2 border-b-2 border-white/10 "
            />
          ))}
        </div>

        <FeaturedGallery />
        <Testimonials />
        <CtaSection />
      </main>
    </>
  );
}
