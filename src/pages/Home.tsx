import { Hero } from "@/components/sections/Hero";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { CtaSection } from "@/components/sections/CtaSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PreferenceModal } from "@/components/layout/PreferenceModal";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Image, ImageKitProvider } from "@imagekit/react";

export function Home() {
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

      <main>
        {/* Test ImageKit Integration */}
        <div className="p-10 flex flex-col items-center gap-4 bg-muted/20">
          <h2 className="text-xl font-bold">ImageKit Test (Private Mode)</h2>
          <ImageKitProvider urlEndpoint="https://ik.imagekit.io/j3l1n5k1">
            <Image
              src="profile3.avif"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </ImageKitProvider>
          <SmartImage
            src="https://ik.imagekit.io/j3l1n5k1/profile3.avif"
            alt="ImageKit Test Image"
            width={400}
            height={400}
            className="rounded-lg shadow-xl"
            priority
          />
          <p className="text-sm text-muted-foreground">
            If this image loads, ImageKit + Convex Authenticator is working!
          </p>
        </div>

        <Hero />
        <FeaturedGallery />
        <Testimonials />
        <CtaSection />
      </main>
    </>
  );
}
