import { Hero } from "@/components/sections/Hero";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { CtaSection } from "@/components/sections/CtaSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PreferenceModal } from "@/components/layout/PreferenceModal";
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
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);

  useEffect(() => {
    // Mark that loading screen has been shown in this session
    if (isLoading) {
      sessionStorage.setItem("hasSeenLoadingScreen", "true");
    }
  }, [isLoading]);

  const handleLoadingFinished = () => {
    setIsLoading(false);
    const preferencesSet = localStorage.getItem("preferencesSet");
    if (!preferencesSet) {
      setShowPreferenceModal(true);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={handleLoadingFinished} />
        )}
        {showPreferenceModal && (
          <PreferenceModal
            key="preferences"
            onComplete={() => setShowPreferenceModal(false)}
          />
        )}
      </AnimatePresence>
      <SEO title={t.nav.home} description={t.hero.description} />
      <main>
        <Hero />
        <FeaturedGallery />
        <Testimonials />
        <CtaSection />
      </main>
    </>
  );
}
