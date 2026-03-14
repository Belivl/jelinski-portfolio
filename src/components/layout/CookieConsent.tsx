import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner for a better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else if (consent === "granted") {
      updateGtagConsent("granted");
    }
  }, []);

  const updateGtagConsent = (status: "granted" | "denied") => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: status,
        analytics_storage: status,
        personalization_storage: status,
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "granted");
    updateGtagConsent("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "denied");
    updateGtagConsent("denied");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-10000"
        >
          <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1 tracking-tight">
                    {t.cookieConsent.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {t.cookieConsent.message}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end pt-2">
                <Button
                  variant="ghost"
                  onClick={handleDecline}
                  className="text-neutral-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
                >
                  {t.cookieConsent.decline}
                </Button>
                <Button
                  onClick={handleAccept}
                  className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold px-6 shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all hover:-translate-y-0.5"
                >
                  {t.cookieConsent.accept}
                </Button>
              </div>
            </div>

            {/* Close button for non-EU approach if preferred, but for compliance we usually want explicit choice */}
            {/* <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Add gtag to window type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
