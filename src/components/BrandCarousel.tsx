
import { cn } from "@/lib/utils";

interface BrandCarouselProps {
  className?: string;
}

const BrandCarousel = ({ className }: BrandCarouselProps) => {
  const brands = [
    { name: "Merck", logo: "/placeholder.svg" },
    { name: "Target", logo: "/placeholder.svg" },
    { name: "Pentax", logo: "/placeholder.svg" },
    { name: "P&G", logo: "/placeholder.svg" },
    { name: "Meta", logo: "/placeholder.svg" },
    { name: "Amazon", logo: "/placeholder.svg" },
    { name: "Google", logo: "/placeholder.svg" },
    { name: "BBC", logo: "/placeholder.svg" },
    { name: "NBC Universal", logo: "/placeholder.svg" },
    { name: "UBS", logo: "/placeholder.svg" },
    // Duplicating to create a seamless loop effect
    { name: "Merck", logo: "/placeholder.svg" },
    { name: "Target", logo: "/placeholder.svg" },
    { name: "Pentax", logo: "/placeholder.svg" },
    { name: "P&G", logo: "/placeholder.svg" },
    { name: "Meta", logo: "/placeholder.svg" },
  ];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-center text-sm font-medium text-gray-500 mb-6">
          TRUSTED BY LEADING REAL ESTATE BRANDS
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
