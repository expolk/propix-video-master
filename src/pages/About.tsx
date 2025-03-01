
import { useEffect, useRef } from "react";
import { ArrowRight, Map, Users, Heart, Award, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    document.querySelectorAll(".animate-on-scroll").forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const team = [
    {
      name: "Alex Johnson",
      title: "CEO & Co-Founder",
      image: "/placeholder.svg",
      bio: "Former real estate agent with 10+ years experience. Alex founded Propix after experiencing firsthand the challenges of creating quality property videos."
    },
    {
      name: "Sarah Chen",
      title: "CTO & Co-Founder",
      image: "/placeholder.svg",
      bio: "Engineering leader with experience at top tech companies. Sarah leads our technology team, focusing on creating intuitive and powerful video creation tools."
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Product",
      image: "/placeholder.svg",
      bio: "Product visionary with experience in both real estate and tech. Michael ensures Propix delivers the features agents need most."
    },
    {
      name: "Jessica Williams",
      title: "Creative Director",
      image: "/placeholder.svg",
      bio: "Award-winning filmmaker and designer. Jessica oversees all template designs and video styles to ensure professional quality."
    },
    {
      name: "David Park",
      title: "Head of Customer Success",
      image: "/placeholder.svg",
      bio: "Customer experience expert dedicated to helping real estate professionals get the most out of Propix."
    },
    {
      name: "Emma Lewis",
      title: "Marketing Director",
      image: "/placeholder.svg",
      bio: "Digital marketing strategist who helps agents understand how video can transform their business."
    }
  ];
  
  const values = [
    {
      icon: Users,
      title: "Customer Obsession",
      description: "We put our real estate customers at the center of everything we do, constantly innovating based on their needs."
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We're committed to creating the highest quality video tools that help agents showcase properties at their absolute best."
    },
    {
      icon: Map,
      title: "Simplicity First",
      description: "We believe powerful technology should be simple to use. Our intuitive design makes professional video creation accessible to everyone."
    },
    {
      icon: Award,
      title: "Constant Innovation",
      description: "We never stop improving, constantly seeking new ways to make property video creation faster, easier, and more effective."
    }
  ];
  
  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're Transforming Real Estate Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Propix was founded with a simple mission: make professional property videos accessible to every real estate agent, regardless of their technical skills.
            </p>
          </div>
          
          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-on-scroll">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-8">
                We envision a world where every property listing includes a professional, engaging video tour. Where real estate agents can focus on what they do best—selling homes—while having the tools to create stunning visual content with minimal effort.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Propix is leading this transformation by combining powerful video technology with an interface so simple anyone can use it. No more expensive equipment, complicated software, or outsourced video production.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-propix-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">For agents:</span> More impressive listings that sell faster and help win more clients.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-propix-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">For buyers:</span> Better property insights before scheduling in-person viewings.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-propix-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">For sellers:</span> Maximum exposure and presentation for their most valuable asset.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <video 
                  ref={videoRef}
                  className="w-full aspect-video object-cover"
                  poster="/placeholder.svg"
                  controls
                >
                  <source src="https://example.com/our-story.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="mb-24 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How a frustrated real estate agent and a tech innovator joined forces to create Propix.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              <div className="space-y-16">
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 md:pr-16 text-right">
                    <div className="text-propix-600 font-medium mb-2">2019</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Problem</h3>
                    <p className="text-gray-700">
                      Alex Johnson, a successful real estate agent, was frustrated with the options for creating property videos: hire expensive videographers, learn complex video editing, or use unprofessional-looking simple tools.
                    </p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-propix-600 border-4 border-white flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  
                  <div className="flex-1 pl-8 md:pl-16"></div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 md:pr-16"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-propix-600 border-4 border-white flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  
                  <div className="flex-1 pl-8 md:pl-16">
                    <div className="text-propix-600 font-medium mb-2">2020</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Idea</h3>
                    <p className="text-gray-700">
                      Alex met Sarah Chen, a tech leader with a background in video processing, at a real estate technology conference. They recognized the massive opportunity to build a specialized video creation tool just for real estate professionals.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 md:pr-16 text-right">
                    <div className="text-propix-600 font-medium mb-2">2021</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Propix Is Born</h3>
                    <p className="text-gray-700">
                      After months of development and testing with real estate agents, the first version of Propix was launched. The response was immediate and overwhelming, with agents praising its simplicity and professional results.
                    </p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-propix-600 border-4 border-white flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  
                  <div className="flex-1 pl-8 md:pl-16"></div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 md:pr-16"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-propix-600 border-4 border-white flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  
                  <div className="flex-1 pl-8 md:pl-16">
                    <div className="text-propix-600 font-medium mb-2">2022</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Growing Fast</h3>
                    <p className="text-gray-700">
                      Propix secured Series A funding to accelerate growth. The team expanded to include top talent from both real estate and technology backgrounds, united by the mission to transform property marketing.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 md:pr-16 text-right">
                    <div className="text-propix-600 font-medium mb-2">Today</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted By Thousands</h3>
                    <p className="text-gray-700">
                      Today, Propix is used by thousands of real estate professionals across the country. We continue to innovate and improve, guided by our users' feedback and our mission to make professional property videos accessible to all.
                    </p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-propix-600 border-4 border-white flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  
                  <div className="flex-1 pl-8 md:pl-16"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mb-24 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Propix.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-propix-50 h-14 w-14 rounded-lg flex items-center justify-center text-propix-600 mb-5">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Meet the Team */}
          <div className="mb-24 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate people behind Propix who are dedicated to transforming real estate marketing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-square w-full relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-propix-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Press & Recognition */}
          <div className="mb-24 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Press & Recognition</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Propix has been featured in leading real estate and technology publications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt="Publication logo" 
                    className="h-12 w-auto mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Join Our Team */}
          <div className="bg-propix-50 rounded-2xl p-8 md:p-12 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We're always looking for passionate people to join our mission of transforming real estate marketing with video technology.
                </p>
                <p className="text-gray-700 mb-8">
                  Whether you're a developer, designer, marketer, or have experience in real estate, we'd love to hear from you. Check out our open positions or send us your resume.
                </p>
                <button className="inline-flex items-center bg-propix-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-propix-700 transition-colors">
                  View Open Positions
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Propix team working together" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
