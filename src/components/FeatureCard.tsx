
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  style 
}: FeatureCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-propix-100",
        className
      )}
      style={style}
    >
      <div className="bg-propix-50 h-12 w-12 rounded-full flex items-center justify-center text-propix-600 mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{t(title)}</h3>
      <p className="text-gray-600">{t(description)}</p>
    </div>
  );
};

export default FeatureCard;
