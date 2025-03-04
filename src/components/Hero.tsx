
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-propix-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t("hero_title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/pricing"
                className="inline-flex items-center justify-center bg-propix-600 hover:bg-propix-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {t("hero_cta")}
              </Link>
              <Link 
                to="/how-it-works"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-medium px-6 py-3 rounded-lg border border-gray-200 transition-colors"
              >
                {t("hero_secondary_cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up order-first lg:order-last">
            <div className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt={t("hero_image_alt")}
                className="w-full rounded-xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-propix-600 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="#4F46E5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">65K+</p>
                  <p className="text-xs">{t("property_videos")}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">{t("rating_text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
