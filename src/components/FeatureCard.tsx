
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  style?: CSSProperties;
  translationKey?: {
    title: string;
    description: string;
  };
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  style,
  translationKey 
}: FeatureCardProps) => {
  const { t } = useLanguage();
  
  // Use translation keys if provided, otherwise use the direct text
  const displayTitle = translationKey ? t(translationKey.title) : title;
  const displayDescription = translationKey ? t(translationKey.description) : description;

  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        className
      )}
      style={style}
    >
      <div className="bg-propix-50 h-12 w-12 rounded-lg flex items-center justify-center text-propix-600 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-3">{displayTitle}</h3>
      <p className="text-gray-600">{displayDescription}</p>
    </div>
  );
};

export default FeatureCard;
