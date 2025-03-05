
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Filter } from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  
  const categories = [
    { id: "all", name: t("all_templates") || "All Templates" },
    { id: "luxury", name: t("luxury") || "Luxury" },
    { id: "modern", name: t("modern") || "Modern" },
    { id: "traditional", name: t("traditional") || "Traditional" },
    { id: "commercial", name: t("commercial") || "Commercial" },
    { id: "condo", name: t("condo_apartment") || "Condo/Apartment" }
  ];
  
  // Template data
  const templates = [
    {
      id: 1,
      title: t("modern_elegance") || "Modern Elegance",
      image: "/placeholder.svg",
      category: "luxury"
    },
    {
      id: 2,
      title: t("urban_living") || "Urban Living",
      image: "/placeholder.svg",
      category: "condo"
    },
    {
      id: 3,
      title: t("classical_estate") || "Classical Estate",
      image: "/placeholder.svg",
      category: "traditional"
    },
    {
      id: 4,
      title: t("professional_office") || "Professional Office",
      image: "/placeholder.svg",
      category: "commercial"
    },
    {
      id: 5,
      title: t("minimalist_home") || "Minimalist Home",
      image: "/placeholder.svg",
      category: "modern"
    },
    {
      id: 6,
      title: t("penthouse_view") || "Penthouse View",
      image: "/placeholder.svg",
      category: "luxury"
    },
    {
      id: 7,
      title: t("suburban_charm") || "Suburban Charm",
      image: "/placeholder.svg",
      category: "traditional"
    },
    {
      id: 8,
      title: t("retail_space") || "Retail Space",
      image: "/placeholder.svg",
      category: "commercial"
    },
    {
      id: 9,
      title: t("studio_apartment") || "Studio Apartment",
      image: "/placeholder.svg",
      category: "condo"
    },
    {
      id: 10,
      title: t("contemporary_design") || "Contemporary Design",
      image: "/placeholder.svg",
      category: "modern"
    },
    {
      id: 11,
      title: t("waterfront_estate") || "Waterfront Estate",
      image: "/placeholder.svg",
      category: "luxury"
    },
    {
      id: 12,
      title: t("historic_property") || "Historic Property",
      image: "/placeholder.svg",
      category: "traditional"
    }
  ];
  
  // Filter templates based on search query and selected category
  const filterTemplates = (category) => {
    let filtered = templates;
    
    if (searchQuery) {
      filtered = filtered.filter(template => 
        template.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (category !== "all") {
      filtered = filtered.filter(template => template.category === category);
    }
    
    return filtered;
  };
  
  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("video_templates") || "Video Templates"}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("templates_description") || "Browse our collection of professionally designed templates to showcase your properties in the best light."}
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-grow max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t("search_templates") || "Search templates..."}
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-propix-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex">
                <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Filter size={18} />
                  <span>{t("filter") || "Filter"}</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Categories Tabs */}
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Tabs defaultValue="all">
              <TabsList className="w-full flex flex-wrap justify-start border-b border-gray-200 pb-2 mb-6 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 mx-1 rounded-lg data-[state=active]:bg-propix-50 data-[state=active]:text-propix-700 data-[state=active]:font-medium"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filterTemplates(category.id).map((template) => (
                      <TemplateCard
                        key={template.id}
                        title={template.title}
                        image={template.image}
                        category={
                          categories.find(cat => cat.id === template.category)?.name || template.category
                        }
                        className="animate-fade-in-up"
                      />
                    ))}
                  </div>
                  
                  {filterTemplates(category.id).length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">{t("no_templates_found") || "No templates found matching your search criteria."}</p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          {/* Featured Template Section */}
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-propix-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block bg-propix-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {t("featured_template") || "Featured Template"}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("premium_estate_collection") || "Premium Estate Collection"}</h2>
                  <p className="text-gray-700 mb-6">
                    {t("premium_template_description") || "Our most popular template for luxury properties. This cinematic style showcases expansive spaces and high-end features with elegant transitions and professional color grading."}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      t("cinematic_aerial") || "Cinematic aerial footage integration",
                      t("highlight_sections") || "Highlight sections for premium amenities",
                      t("elegant_text") || "Elegant text animations for property details",
                      t("color_grading") || "Professional color grading presets",
                      t("music_options") || "Music options from our premium library"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-propix-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="inline-flex items-center bg-propix-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-propix-700 transition-colors">
                    {t("try_this_template") || "Try This Template"}
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt={t("premium_estate_preview") || "Premium Estate Template Preview"}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="bg-white/90 text-propix-700 rounded-full p-4 hover:bg-white transition-all duration-300 hover:scale-105"
                        aria-label={t("play_video") || "Play video"}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Template Categories */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("explore_by_property") || "Explore By Property Type"}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: t("single_family_homes") || "Single Family Homes",
                  image: "/placeholder.svg",
                  count: 15
                },
                {
                  title: t("condos_apartments") || "Condos & Apartments",
                  image: "/placeholder.svg",
                  count: 12
                },
                {
                  title: t("commercial_properties") || "Commercial Properties",
                  image: "/placeholder.svg",
                  count: 8
                }
              ].map((category, index) => (
                <a 
                  key={index}
                  href="#"
                  className="group block relative rounded-xl overflow-hidden aspect-[4/3]"
                >
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-white/80">{category.count} {t("templates")}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center py-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("ready_to_create") || "Ready to Create Amazing Videos?"}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t("download_app_cta") || "Download the Propix app today and start creating professional property videos in minutes."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.37 3.51 7.08 8.42 6.82c1.33.07 2.25.79 3.04.84.79.05 2.03-.61 3.6-.73 1.88-.15 3.37.74 4.35 2.18-3.43 2.11-2.81 6.4.19 7.72-.71 1.71-1.64 3.39-2.55 4.45zM12.14 3.66c-.11 1.96 1.59 3.19 2.21 3.54 1.36-2.11-.41-4.11-2.21-3.54z"/>
                </svg>
                {t("app_store") || "App Store"}
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 3H6.5C5.11929 3 4 4.11929 4 5.5V18.5C4 19.8807 5.11929 21 6.5 21H17.5C18.8807 21 20 19.8807 20 18.5V5.5C20 4.11929 18.8807 3 17.5 3ZM6.5 5H17.5C17.7761 5 18 5.22386 18 5.5V15.5H6V5.5C6 5.22386 6.22386 5 6.5 5ZM17.5 19H6.5C6.22386 19 6 18.7761 6 18.5V17.5H18V18.5C18 18.7761 17.7761 19 17.5 19ZM12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"/>
                </svg>
                {t("google_play") || "Google Play"}
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Templates;
