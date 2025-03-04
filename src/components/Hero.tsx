
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={cn("hero-gradient min-h-screen flex items-center pt-20", className)}>
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-block bg-propix-50 text-propix-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              {t("hero_badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 text-balance">
              {t("hero_title_part1")}{" "}
              <span className="text-propix-600">{t("hero_title_part2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              {t("hero_subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/pricing" 
                className="button-glow bg-propix-600 hover:bg-propix-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 text-center flex items-center justify-center"
              >
                {t("hero_cta")}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/how-it-works" 
                className="bg-white border border-gray-200 hover:border-propix-300 text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300 text-center"
              >
                {t("hero_secondary_cta")}
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-2 text-gray-500 text-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </span>
              <span>{t("hero_rating")}</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="bg-propix-50 rounded-2xl p-4 shadow-xl transform rotate-[-3deg] z-10 relative">
                <img 
                  src="/placeholder.svg" 
                  alt={t("hero_image_alt")} 
                  className="rounded-lg w-full shadow-inner object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <img 
                  src="/placeholder.svg" 
                  alt={t("hero_template_image_alt")} 
                  className="rounded-lg h-32 w-32 object-cover" 
                  width={128}
                  height={128}
                />
              </div>
              <div className="absolute -bottom-8 -left-4 bg-white p-3 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <img 
                  src="/placeholder.svg" 
                  alt={t("hero_agent_image_alt")} 
                  className="rounded-lg h-32 w-48 object-cover"
                  width={192}
                  height={128}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
