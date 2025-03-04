
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface BrandCarouselProps {
  className?: string;
}

const BrandCarousel = ({ className }: BrandCarouselProps) => {
  const { t } = useLanguage();
  
  const brands = [
    { name: t("brand_name_merck"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_target"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_pentax"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_p&g"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_meta"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_amazon"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_google"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_bbc"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_nbc"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_ubs"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    // Duplicating to create a seamless loop effect
    { name: t("brand_name_merck"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_target"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_pentax"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_p&g"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
    { name: t("brand_name_meta"), logo: "/lovable-uploads/04f50804-182d-418b-9477-2d6eb1262d45.png" },
  ];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-center text-sm font-medium text-gray-500 mb-6">
          {t("trusted_brands")}
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee inline-flex space-x-16 whitespace-nowrap">
          {brands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center h-12 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="h-8 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
