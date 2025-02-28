
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  className?: string;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
  className,
}: PricingCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        popular ? "scale-105 shadow-xl border-2 border-propix-500" : "border border-gray-200 shadow-sm",
        className
      )}
    >
      {popular && (
        <div className="bg-propix-600 text-white py-2 px-4 text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8 bg-white">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
        
        <Link
          to="/contact"
          className={cn(
            "block text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 mb-6",
            popular
              ? "bg-propix-600 hover:bg-propix-700 text-white button-glow"
              : "bg-propix-50 hover:bg-propix-100 text-propix-700"
          )}
        >
          {buttonText}
        </Link>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check 
                size={18} 
                className={cn(
                  "mr-3 mt-0.5 flex-shrink-0",
                  feature.included ? "text-propix-600" : "text-gray-300"
                )} 
              />
              <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
