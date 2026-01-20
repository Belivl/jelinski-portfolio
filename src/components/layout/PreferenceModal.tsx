import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Globe, Moon, Sun, Monitor, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MechanicalButton } from "../gallery/MechanicalButton";

interface PreferenceModalProps {
  onComplete: () => void;
}

export function PreferenceModal({ onComplete }: PreferenceModalProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [detectedInPoland, setDetectedInPoland] = useState(false);

  useEffect(() => {
    // Detect location via IP
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code === "PL") {
          setDetectedInPoland(true);
        }
      })
      .catch(() => {
        // Fallback to browser language
        if (navigator.language.startsWith("pl")) {
          setDetectedInPoland(true);
        }
      });
  }, []);

  const handleSave = () => {
    localStorage.setItem("preferencesSet", "true");
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden "
      >
        {/* plastic-texture */}
        {/* Background Sparkle Decoration */}
        {/* <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 blur-[100px] rounded-full" /> */}
        {/* <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] rounded-full" /> */}
        <div className="relative z-10 text-center space-y-8">
          <header className="space-y-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              className="inline-flex p-3 bg-white/5 rounded-2xl border border-white/10 mb-2"
            >
              <Sparkles className="w-6 h-6 text-amber-500" />
            </motion.div>
            <h2 className="text-2xl font-bold tracking-tight text-white font-script1">
              {t.preferenceModal.title}
            </h2>
            <p className="text-neutral-400 text-sm">
              {t.preferenceModal.subtitle}
            </p>
          </header>

          <div className="space-y-6 text-left">
            {/* Language Selection */}
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                <Globe className="w-3 h-3" /> {t.preferenceModal.language.title}
              </label>

              {detectedInPoland && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl mb-4"
                >
                  <p className="text-xs text-amber-500/90 leading-relaxed font-medium min-h-[40px]">
                    ✨ {t.preferenceModal.language.suggestion}
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div className="grid place-items-center p-1 bg-black rounded-lg">
                  <MechanicalButton
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "relative p-4 rounded-md border transition-all duration-300 group w-full -translate-y-[2px] -translate-x-px",
                      language === "en"
                        ? "bg-white/10 border-amber-500/50 text-white"
                        : "bg-white/5 border-white/5 text-neutral-400 hover:border-white/20",
                    )}
                  >
                    <span className="text-sm font-bold">English</span>
                    {language === "en" && (
                      <Check className="absolute top-1/2 -translate-y-1/2 right-0 left-full w-3 h-3 text-amber-500" />
                    )}
                  </MechanicalButton>
                </div>
                <div className="grid place-items-center p-1 bg-black rounded-lg">
                  <MechanicalButton
                    onClick={() => setLanguage("pl")}
                    className={cn(
                      "relative p-4 rounded-md border transition-all duration-300 group w-full -translate-y-[2px] -translate-x-px",
                      language === "pl"
                        ? "bg-white/10 border-amber-500/50 text-white"
                        : "bg-white/5 border-white/5 text-neutral-400 hover:border-white/20",
                    )}
                  >
                    <span className="text-sm font-bold">Polski</span>
                    {language === "pl" && (
                      <Check className="absolute top-1/2 -translate-y-1/2 right-0 left-full w-3 h-3 text-amber-500" />
                    )}
                  </MechanicalButton>
                </div>
              </div>
            </div>

            {/* Theme Selection */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                <Monitor className="w-3 h-3" /> {t.preferenceModal.theme.title}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTheme("dark")}
                  className={cn(
                    "flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all duration-300 overflow-hidden",
                    theme === "dark"
                      ? "bg-white/10 border-amber-500/50 text-white"
                      : "bg-white/5 border-white/5 text-neutral-400 hover:border-white/20",
                  )}
                >
                  <div className="w-full h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center p-2 relative overflow-hidden">
                    <Moon className="w-5 h-5" />
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold">
                      {t.preferenceModal.theme.dark}
                    </p>
                    <p className="text-[10px] opacity-60">
                      {t.preferenceModal.theme.darkLabel}
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => setTheme("light")}
                  className={cn(
                    "flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all duration-300 overflow-hidden",
                    theme === "light"
                      ? "bg-white/10 border-amber-500/50 text-neutral-900"
                      : "bg-white/5 border-white/5 text-neutral-400 hover:border-white/20",
                  )}
                >
                  <div className="w-full h-12 bg-white rounded-lg border border-black/10 flex items-center justify-center p-2 relative overflow-hidden">
                    <Sun className="w-5 h-5 text-amber-600" />
                    <div className="absolute inset-0 bg-linear-to-br from-black/5 to-transparent" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold">
                      {t.preferenceModal.theme.light}
                    </p>
                    <p className="text-[10px] opacity-60">
                      {t.preferenceModal.theme.lightLabel}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <Button
            onClick={handleSave}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold h-14 rounded-2xl text-lg tracking-tight transition-transform active:scale-95"
          >
            {t.preferenceModal.save}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
