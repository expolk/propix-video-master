
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Film, Users, Award, Clock, BarChart } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute("data-section");
        
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          setVisibleSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Smartphone,
      title: "No Skills Required",
      description: "All you need is your phone. Just follow the step-by-step tutorials inside the app. It's easier than you think!"
    },
    {
      icon: Users,
      title: "More Qualified Leads",
      description: "Filter out \"time-wasters\" & \"tire kickers\" from your pipeline through video, bringing in more qualified leads."
    },
    {
      icon: Film,
      title: "High Quality Listings",
      description: "The world's most intuitive video editing app designed for real estate agents to skyrocket the quality of their listings."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Create professional videos in under 5 minutes, freeing up your time to focus on closing deals."
    },
    {
      icon: Award,
      title: "Stand Out",
      description: "Differentiate yourself from competitors with stunning video presentations that showcase properties at their best."
    },
    {
      icon: BarChart,
      title: "Boost Engagement",
      description: "Videos get 1200% more shares than text and images combined. Increase your online presence and reach."
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 px-6" data-section="features">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Real Estate Agents <span className="text-propix-600">Love Propix</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Propix helps you create stunning property videos that sell listings faster and impress potential clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Preview */}
        <section className="py-20 px-6 bg-gray-50" data-section="how-it-works">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Create Stunning Videos in <span className="text-propix-600">3 Simple Steps</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Propix makes video creation effortless, even if you've never edited a video before.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-propix-600 text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Capture Property Footage</h3>
                      <p className="text-gray-600">
                        Use your smartphone to capture videos and photos of the property. The app guides you on what shots to take.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-propix-600 text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Select a Template</h3>
                      <p className="text-gray-600">
                        Choose from dozens of professionally designed templates tailored specifically for real estate.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-propix-600 text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Customize & Share</h3>
                      <p className="text-gray-600">
                        Add your branding, text, and music. Export and share directly to social media, email, or MLS.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/how-it-works" 
                    className="inline-flex items-center text-propix-600 font-medium hover:text-propix-700 transition-colors"
                  >
                    Learn more about how Propix works
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 z-10">
                      <button 
                        onClick={handlePlayVideo}
                        className="bg-propix-600 bg-opacity-90 hover:bg-opacity-100 text-white rounded-full p-5 transition-all duration-300 hover:scale-105"
                        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                      >
                        {isVideoPlaying ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                            <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                          </svg>
                        )}
                      </button>
                    </div>
                    <video 
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg"
                      preload="none"
                      onEnded={() => setIsVideoPlaying(false)}
                    >
                      <source src="https://example.com/demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900">See how quick & easy Propix is to use</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 px-6" data-section="testimonials">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Trusted by <span className="text-propix-600">Thousands</span> of Agents
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what real estate professionals are saying about Propix.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${(item - 1) * 0.2}s` }}
                >
                  <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4">
                    "Propix has completely transformed how I showcase my listings. I'm getting more interest from buyers and impressing sellers at listing presentations. It's worth every penny!"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img 
                        src="/placeholder.svg" 
                        alt="Agent portrait" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Premier Properties, NYC</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-propix-600 text-white" data-section="cta">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Listings?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join thousands of successful agents already using Propix to create stunning property videos.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link 
                to="/pricing" 
                className="bg-white text-propix-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
