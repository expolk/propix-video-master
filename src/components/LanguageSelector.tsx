
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface LanguageSelectorProps {
  initialSelection?: boolean;
  onInitialSelectionComplete?: () => void;
}

const LanguageSelector = ({ 
  initialSelection = false,
  onInitialSelectionComplete
}: LanguageSelectorProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [hasSelected, setHasSelected] = useState(!initialSelection);
  const location = useLocation();

  // Log language changes for debugging
  useEffect(() => {
    console.log("LanguageSelector detected language change:", language);
  }, [language]);

  // Force refresh when route changes
  useEffect(() => {
    console.log("LanguageSelector detected route change:", location.pathname);
  }, [location.pathname]);

  const handleLanguageChange = (newLanguage: "en" | "es") => {
    console.log("Setting language to:", newLanguage);
    setLanguage(newLanguage);
    if (initialSelection) {
      setHasSelected(true);
      if (onInitialSelectionComplete) {
        onInitialSelectionComplete();
      }
    }
  };

  // For dropdown version
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    console.log("Toggling language to:", newLanguage);
    setLanguage(newLanguage);
  };

  if (initialSelection && !hasSelected) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white rounded-lg p-8 shadow-2xl max-w-md w-full animate-zoom-in">
          <div className="text-center mb-6">
            <Globe className="mx-auto h-12 w-12 text-propix-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("language_selection")}</h2>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => handleLanguageChange("en")}
              className={cn(
                "w-full flex items-center p-4 border rounded-lg transition-all",
                language === "en" 
                  ? "border-propix-600 bg-propix-50 text-propix-700" 
                  : "border-gray-200 hover:border-propix-300 hover:bg-gray-50"
              )}
            >
              <span className="text-xl mr-3">🇺🇸</span>
              <span className="font-medium">{t("english")}</span>
            </button>
            
            <button
              onClick={() => handleLanguageChange("es")}
              className={cn(
                "w-full flex items-center p-4 border rounded-lg transition-all",
                language === "es" 
                  ? "border-propix-600 bg-propix-50 text-propix-700" 
                  : "border-gray-200 hover:border-propix-300 hover:bg-gray-50"
              )}
            >
              <span className="text-xl mr-3">🇪🇸</span>
              <span className="font-medium">{t("spanish")}</span>
            </button>
          </div>
          
          <Button 
            className="w-full mt-6 bg-propix-600 hover:bg-propix-700"
            onClick={() => {
              setHasSelected(true);
              if (onInitialSelectionComplete) {
                onInitialSelectionComplete();
              }
            }}
          >
            {t("continue")}
          </Button>
        </div>
      </div>
    );
  }

  // For the persistent language switcher button
  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 bg-propix-600 text-white p-3 rounded-full shadow-lg hover:bg-propix-700 transition-colors"
      aria-label={t("change_language")}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">{t("change_language")}</span>
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-propix-700">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSelector;
