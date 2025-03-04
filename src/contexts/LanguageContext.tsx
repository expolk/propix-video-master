
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
  t: (key: string) => string;
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
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // Import the translations dynamically based on the selected language
        const translationsModule = await import(`../translations/${language}.json`);
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

  // Translation function
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations,
        t,
      }}
    >
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
