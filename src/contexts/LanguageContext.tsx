
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const defaultLanguage: Language = "en";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has previously selected a language
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // Import the translations dynamically based on the selected language
        const translationsModule = await import(`../translations/${language}.json`);
        console.log(`Loaded translations for ${language}`, translationsModule.default);
        setTranslations(translationsModule.default);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setTranslations({});
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
    // Save language preference
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  // Enhanced translation function that supports template parameters
  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[key] || key;
    
    // If params are provided, replace placeholders in the text
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        const regex = new RegExp(`{${paramKey}}`, 'g');
        text = text.replace(regex, String(paramValue));
      });
    }
    
    return text;
  };

  // Force re-render when language changes
  useEffect(() => {
    console.log("Language changed to:", language);
    // This is intentionally left here to help with debugging
  }, [language]);

  // Creating a new object on each render to ensure context consumers update
  const contextValue = {
    language,
    setLanguage,
    translations,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {!isLoading && children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
