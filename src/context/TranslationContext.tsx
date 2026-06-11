import React, { createContext, useContext, useState, useEffect } from "react";
import translationsData from "../locales/translations.json";

export type Language = "pt" | "iny";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const translations = translationsData as Record<Language, any>;
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("preferred_language");
    return (saved === "pt" || saved === "iny" ? saved : "pt") as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_language", lang);
    document.documentElement.lang = lang === "iny" ? "kjr" : "pt-BR"; // Set html element lang attribute (using Karajá ISO 639-3 code 'kjr' or 'pt-BR')
  };

  useEffect(() => {
    document.documentElement.lang = language === "iny" ? "kjr" : "pt-BR";
  }, [language]);

  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        console.warn(`Translation path "${path}" not found in language "${language}"`);
        // Fallback to Portuguese first
        let ptCurrent: any = translations["pt"];
        for (const ptKey of keys) {
          if (ptCurrent && ptCurrent[ptKey] !== undefined) {
            ptCurrent = ptCurrent[ptKey];
          } else {
            return path;
          }
        }
        return ptCurrent;
      }
    }
    return current;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
