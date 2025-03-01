
import { Check, PlayCircle, Camera, Smartphone, VideoIcon, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Propix Works</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create stunning property videos in minutes with our easy 3-step process. No video editing skills required!
            </p>
          </div>
          
          {/* Process Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Camera,
                title: "1. Capture",
                description: "Use your smartphone to take photos and videos of the property."
              },
              {
                icon: VideoIcon,
                title: "2. Create",
                description: "Choose a template and let our app automatically create a professional video."
              },
              {
                icon: Share2,
                title: "3. Share",
                description: "Share directly to social media, email to clients, or download for MLS."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-propix-50 h-16 w-16 rounded-full flex items-center justify-center text-propix-600 mx-auto mb-6">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Detailed Steps */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Step-by-Step Guide</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to create professional property videos that will impress your clients.
              </p>
            </div>
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-fade-in-up">
                <div className="inline-block bg-propix-50 text-propix-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Step 1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Capture Property Footage</h3>
                <p className="text-gray-600 mb-6">
                  Use your smartphone to capture videos and photos of the property. The app provides guidance on what shots to take for the best results.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Open the Propix app and tap 'New Project'",
                    "Select 'Property Walkthrough' from the list of templates",
                    "Follow the shot list that appears on your screen",
                    "Capture exterior shots, main living areas, bedrooms, and special features",
                    "Review your footage before moving to the next step"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-propix-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <p className="text-gray-600 italic">
                    "The shot guidance helped me capture all the right angles of the property. I didn't miss anything important!"
                  </p>
                  <p className="mt-2 font-medium">— Michael R., Real Estate Agent</p>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/placeholder.svg" 
                    alt="Agent capturing property footage with smartphone" 
                    className="w-full aspect-video object-cover"
                  />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="bg-propix-600 text-white rounded-full p-4 hover:bg-propix-700 transition-colors">
                      <PlayCircle size={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1 relative animate-fade-in">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/placeholder.svg" 
                    alt="Propix template selection screen" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-5 -right-5 bg-propix-50 rounded-xl p-4 shadow-sm border border-propix-100">
                  <p className="text-propix-700 font-medium">30+ professional templates available</p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in-up">
                <div className="inline-block bg-propix-50 text-propix-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Step 2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select a Template & Customize</h3>
                <p className="text-gray-600 mb-6">
                  Choose from dozens of professionally designed templates tailored specifically for real estate videos.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Browse through template categories (Luxury, Modern, Traditional, etc.)",
                    "Preview templates to see how your footage will look",
                    "Select a template that matches the property's style",
                    "Add property details such as price, square footage, bedrooms, and bathrooms",
                    "Customize colors and branding to match your business"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-propix-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <p className="text-gray-600 italic">
                    "The templates make my listings look like they were created by a professional video editor. My clients are always impressed!"
                  </p>
                  <p className="mt-2 font-medium">— Sarah J., Realtor®</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-block bg-propix-50 text-propix-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Step 3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Export & Share Your Video</h3>
                <p className="text-gray-600 mb-6">
                  Once your video is complete, you can easily share it across multiple platforms with just a few taps.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Preview your completed video before sharing",
                    "Choose your preferred export quality (HD or 4K)",
                    "Share directly to Instagram, Facebook, YouTube, or TikTok",
                    "Email the video to clients or download to your device",
                    "Get analytics on views and engagement"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-propix-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a 
                    href="#templates" 
                    className="inline-flex items-center bg-propix-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-propix-700 transition-colors"
                  >
                    Browse Templates
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/placeholder.svg" 
                    alt="Sharing video across platforms" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md">
                  <Share2 className="h-6 w-6 text-propix-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from real estate professionals who have transformed their business with Propix.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I used to spend hours editing property videos. With Propix, I can create stunning videos in minutes. It's been a game-changer for my business.",
                  name: "Robert Smith",
                  title: "Luxury Real Estate Agent"
                },
                {
                  quote: "My listings get significantly more interest since I started using Propix videos. Buyers come to viewings already excited about the property.",
                  name: "Jennifer Williams",
                  title: "Residential Realtor"
                },
                {
                  quote: "The app is so intuitive. I was able to create my first video in less than 10 minutes without any training or special equipment.",
                  name: "David Chen",
                  title: "Commercial Real Estate Broker"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img 
                        src="/placeholder.svg" 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ */}
          <div>
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about using Propix for your real estate video needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "Do I need any video editing experience?",
                  answer: "Not at all! Propix is designed for real estate professionals with no video editing experience. The app guides you through the entire process."
                },
                {
                  question: "What kind of phone do I need?",
                  answer: "Propix works on both iPhone (iOS 13+) and Android (7.0+) smartphones. Most modern smartphones from the last 3-4 years will work perfectly."
                },
                {
                  question: "How long does it take to create a video?",
                  answer: "Most users create their first professional video in under 10 minutes. With practice, you can create stunning videos in as little as 5 minutes."
                },
                {
                  question: "Can I use my branding in the videos?",
                  answer: "Absolutely! You can add your logo, custom colors, contact information, and social media handles to all your videos."
                },
                {
                  question: "Are there different templates for different property types?",
                  answer: "Yes! We have templates for luxury homes, condos, commercial properties, land, new construction, and more. New templates are added monthly."
                },
                {
                  question: "How do I get my videos to potential clients?",
                  answer: "You can share directly to social media, email to clients, embed on your website, or download for MLS listings. Propix makes sharing seamless."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default HowItWorks;
