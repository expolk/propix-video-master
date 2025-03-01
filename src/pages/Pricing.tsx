
import { useState } from "react";
import { Check, HelpCircle, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Perfect for agents just getting started with video marketing.",
      features: [
        { name: "5 Video Exports per Month", included: true },
        { name: "720p Video Quality", included: true },
        { name: "5 Templates", included: true },
        { name: "Standard Support", included: true },
        { name: "Basic Text & Graphics", included: true },
        { name: "Basic Music Library", included: true },
        { name: "Limited Branding Options", included: true },
        { name: "Social Media Sharing", included: true },
        { name: "HD Video Quality", included: false },
        { name: "Custom Branding", included: false },
        { name: "Priority Support", included: false },
        { name: "Advanced Analytics", included: false }
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: "Our most popular plan for active real estate professionals.",
      popular: true,
      features: [
        { name: "15 Video Exports per Month", included: true },
        { name: "Full HD Video Quality", included: true },
        { name: "All Templates", included: true },
        { name: "Priority Email Support", included: true },
        { name: "Advanced Text & Graphics", included: true },
        { name: "Premium Music Library", included: true },
        { name: "Custom Branding", included: true, tooltip: "Add your logo, contact information, and custom colors to all videos" },
        { name: "Social Media Sharing", included: true },
        { name: "Direct MLS Integration", included: true },
        { name: "Basic Analytics", included: true },
        { name: "4K Video Quality", included: false },
        { name: "White Label Option", included: false }
      ]
    },
    {
      name: "Elite",
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "For high-volume agents and teams who need the very best.",
      features: [
        { name: "Unlimited Video Exports", included: true },
        { name: "4K Video Quality", included: true },
        { name: "All Templates + VIP Early Access", included: true },
        { name: "Priority Phone Support", included: true },
        { name: "Premium Text & Graphics", included: true },
        { name: "Full Music Library", included: true },
        { name: "White Label Option", included: true, tooltip: "Remove all Propix branding for a fully custom experience" },
        { name: "Team Sharing", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "API Access", included: true },
        { name: "Custom Template Creation", included: true },
        { name: "Dedicated Account Manager", included: true }
      ]
    }
  ];
  
  const calculateSavings = (monthly, yearly) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return percentage;
  };
  
  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will take effect at your next billing date."
    },
    {
      question: "What happens if I use all my video exports?",
      answer: "If you reach your monthly export limit, you'll need to wait until your next billing cycle or upgrade to a higher plan to continue exporting videos. You can still create and edit videos, but you won't be able to export them until your limit resets."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day free trial on all plans. You'll have full access to all features of your chosen plan during the trial period. No credit card required to start your trial."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Absolutely. You can cancel your subscription at any time through your account settings. If you cancel, you'll still have access to your plan until the end of your current billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal."
    },
    {
      question: "Is there a discount for teams?",
      answer: "Yes, we offer special pricing for real estate teams and brokerages. Please contact our sales team for more information on team pricing."
    }
  ];
  
  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your real estate video marketing needs.
            </p>
          </div>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly Billing
              </button>
              
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  billingCycle === "yearly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                <span>Annual Billing</span>
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden border ${
                  plan.popular ? "border-propix-600 shadow-lg" : "border-gray-200 shadow-sm"
                } transition-all duration-300 hover:shadow-xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="bg-propix-600 text-white py-2 px-4 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    
                    {billingCycle === "yearly" && (
                      <div className="mt-1 text-sm text-gray-600">
                        ${plan.yearlyPrice} billed annually
                        <span className="ml-2 text-green-600">
                          (Save {calculateSavings(plan.monthlyPrice, plan.yearlyPrice)}%)
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-medium transition-colors mb-6 ${
                      plan.popular
                        ? "bg-propix-600 text-white hover:bg-propix-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.name}
                        </span>
                        
                        {feature.tooltip && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-2 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs text-sm">{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Compare Plans */}
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Compare Plan Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left text-gray-500 font-medium">Feature</th>
                    {plans.map((plan, index) => (
                      <th key={index} className="py-4 px-6 text-center text-gray-900 font-bold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700 font-medium">Video Exports</td>
                    <td className="py-4 px-6 text-center">5 / month</td>
                    <td className="py-4 px-6 text-center">15 / month</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 font-medium">Video Quality</td>
                    <td className="py-4 px-6 text-center">720p HD</td>
                    <td className="py-4 px-6 text-center">1080p Full HD</td>
                    <td className="py-4 px-6 text-center">4K Ultra HD</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700 font-medium">Available Templates</td>
                    <td className="py-4 px-6 text-center">5 Basic</td>
                    <td className="py-4 px-6 text-center">All Templates</td>
                    <td className="py-4 px-6 text-center">All + VIP Access</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 font-medium">Custom Branding</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700 font-medium">White Label Option</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-gray-300 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center">Priority Email</td>
                    <td className="py-4 px-6 text-center">Phone + Dedicated Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Enterprise
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Team & Brokerage Plans</h2>
                <p className="text-gray-700 mb-6">
                  Custom solutions for real estate teams and brokerages. Get volume discounts, team management features, and dedicated support.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unified billing for your entire team",
                    "Centralized asset management for brand consistency",
                    "Team admin dashboard to manage users and permissions",
                    "Custom onboarding and training",
                    "Volume discounts based on team size",
                    "Dedicated account manager"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-propix-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="inline-flex items-center bg-propix-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-propix-700 transition-colors">
                  Contact Sales
                </button>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Request Enterprise Information</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-propix-500 focus:border-transparent"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-propix-500 focus:border-transparent"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-propix-500 focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company / Brokerage
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-propix-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="team-size" className="block text-sm font-medium text-gray-700 mb-1">
                        Team Size
                      </label>
                      <select
                        id="team-size"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-propix-500 focus:border-transparent"
                      >
                        <option value="">Select team size</option>
                        <option value="2-5">2-5 agents</option>
                        <option value="6-10">6-10 agents</option>
                        <option value="11-20">11-20 agents</option>
                        <option value="21-50">21-50 agents</option>
                        <option value="50+">50+ agents</option>
                      </select>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-propix-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-propix-700 transition-colors"
                    >
                      Get Enterprise Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our pricing? Find answers to common questions below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="/contact"
                className="text-propix-600 font-medium hover:text-propix-700 transition-colors"
              >
                Contact our support team
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Pricing;
