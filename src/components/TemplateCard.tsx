
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  title: string;
  image: string;
  category: string;
  className?: string;
}

const TemplateCard = ({ title, image, category, className }: TemplateCardProps) => {
  return (
    <div className={cn("group overflow-hidden rounded-xl transition-all duration-300", className)}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            className="bg-white/90 text-propix-700 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            aria-label="Play preview"
          >
            <Play size={20} fill="currentColor" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs font-medium text-propix-600 uppercase tracking-wider mb-1">
          {category}
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default TemplateCard;
