
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface BrandCarouselProps {
  className?: string;
}

const BrandCarousel = ({ className }: BrandCarouselProps) => {
  const { t } = useLanguage();
  
  const brands = [
    { name: t("brand_name_merck"), logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Merck_%26_Co.svg" },
    { name: t("brand_name_target"), logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg" },
    { name: t("brand_name_pentax"), logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pentax_logo.svg" },
    { name: t("brand_name_p&g"), logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg" },
    { name: t("brand_name_meta"), logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Meta_Platforms_Inc._logo.svg" },
    { name: t("brand_name_amazon"), logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: t("brand_name_google"), logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: t("brand_name_bbc"), logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg" },
    { name: t("brand_name_nbc"), logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/NBC_logo_%282022%29.svg" },
    { name: t("brand_name_ubs"), logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_of_UBS.svg" },
    // Duplicating to create a seamless loop effect
    { name: t("brand_name_merck"), logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Merck_%26_Co.svg" },
    { name: t("brand_name_target"), logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg" },
    { name: t("brand_name_pentax"), logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pentax_logo.svg" },
    { name: t("brand_name_p&g"), logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg" },
    { name: t("brand_name_meta"), logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Meta_Platforms_Inc._logo.svg" },
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
