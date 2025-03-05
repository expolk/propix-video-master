
import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    // Check if user has previously selected a language
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Force context refresh on location change
  useEffect(() => {
    console.log("Route changed, refreshing language context");
    setForceUpdate(prev => prev + 1); // Trigger re-render on route change
  }, [location.pathname]);

  // Use memo to create a stable reference for translations based on language + forceUpdate
  const translationsKey = useMemo(() => `${language}-${forceUpdate}-${location.pathname}`, 
    [language, forceUpdate, location.pathname]);

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
  }, [translationsKey]); // Update based on the memoized key

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

  // Creating a memoized context value to prevent unnecessary renders
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    translations,
    t,
  }), [language, translations, translationsKey]);

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
