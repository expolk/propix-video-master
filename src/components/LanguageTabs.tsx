
import { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageTabs = () => {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    console.log("Current language in tabs:", language);
  }, [language]);

  return (
    <div className="flex justify-center mb-8">
      <Tabs 
        defaultValue={language} 
        value={language}
        onValueChange={(value) => setLanguage(value as "en" | "es")}
        className="border rounded-lg p-1 bg-gray-50"
      >
        <TabsList className="grid grid-cols-2 w-48">
          <TabsTrigger value="en">
            <span className="flex items-center">
              <span className="text-sm mr-2">🇺🇸</span>
              {t("english")}
            </span>
          </TabsTrigger>
          <TabsTrigger value="es">
            <span className="flex items-center">
              <span className="text-sm mr-2">🇪🇸</span>
              {t("spanish")}
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default LanguageTabs;
