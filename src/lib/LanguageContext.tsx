import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "pl") return saved as Language;

    // Auto-detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "pl") return "pl";
    return "en";
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
