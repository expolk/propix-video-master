
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Michael Roberts",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Former real estate agent with 15+ years of experience who saw the need for better video tools in the industry."
    },
    {
      name: "Sarah Chen",
      role: "Chief Product Officer",
      image: "/placeholder.svg",
      bio: "Tech industry veteran who has led product teams at major tech companies, focused on creating intuitive user experiences."
    },
    {
      name: "David Wilson",
      role: "Head of Marketing",
      image: "/placeholder.svg",
      bio: "Marketing expert with deep experience in the real estate technology sector, helping agents leverage digital tools."
    },
    {
      name: "Olivia Martinez",
      role: "Customer Success Director",
      image: "/placeholder.svg",
      bio: "Former broker with a passion for helping real estate professionals embrace new technologies to grow their business."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  We're Changing How Real Estate <span className="text-propix-600">Videos Are Made</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Propix was born from a simple idea: every real estate agent should be able to create beautiful listing videos, regardless of their technical skills or budget.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our mission is to democratize high-quality video content for the real estate industry, giving agents the tools they need to stand out in a competitive market.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-propix-600 hover:bg-propix-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Get in Touch
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="bg-propix-50 p-3 rounded-2xl transform rotate-3 shadow-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Propix team" 
                    className="rounded-xl w-full h-auto shadow-inner"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <img 
                    src="/placeholder.svg" 
                    alt="Propix app interface" 
                    className="rounded-lg h-32 w-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="mt-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From a simple idea to the leading video platform for real estate professionals.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-propix-100"></div>
              
              <div className="grid grid-cols-1 gap-12">
                {/* 2019 */}
                <div className="relative animate-fade-in-up">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-propix-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-medium z-10">2019</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Beginning</h3>
                    <p className="text-gray-600">
                      Our founder Michael Roberts, a real estate agent for over 15 years, was frustrated with the lack of easy-to-use video tools for agents. He envisioned an app that would allow any agent to create stunning property videos without expensive equipment or editing skills.
                    </p>
                  </div>
                </div>
                
                {/* 2020 */}
                <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-propix-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-medium z-10">2020</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Development Begins</h3>
                    <p className="text-gray-600">
                      With a small team of developers and real estate professionals, we began building the first version of Propix. Our focus was on creating the most intuitive, agent-friendly video app ever made.
                    </p>
                  </div>
                </div>
                
                {/* 2021 */}
                <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-propix-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-medium z-10">2021</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Rapid Growth</h3>
                    <p className="text-gray-600">
                      Propix launched to overwhelming success. Within just six months, over 5,000 real estate agents were using the app to create videos for their listings. Our user-centric approach and focus on quality led to rapid growth and excellent reviews.
                    </p>
                  </div>
                </div>
                
                {/* 2022 */}
                <div className="relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-propix-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-medium z-10">2022</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Expanding Features</h3>
                    <p className="text-gray-600">
                      Based on user feedback, we expanded Propix with new templates, advanced editing features, and integration with multiple listing services. Our user base grew to over 20,000 active real estate professionals across North America.
                    </p>
                  </div>
                </div>
                
                {/* Today */}
                <div className="relative animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-propix-600 text-white rounded-full px-4 py-2 flex items-center justify-center font-medium z-10">Today</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Leading the Industry</h3>
                    <p className="text-gray-600">
                      Propix is now the leading video creation platform for real estate professionals, with users in multiple countries. We continue to innovate and enhance our platform, always staying true to our mission of making professional video creation accessible to every agent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mt-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the people behind Propix who are passionate about helping real estate agents succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-propix-600 mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mt-24 px-6 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Propix.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "We believe that powerful technology should be easy to use. We're obsessed with creating intuitive experiences that anyone can master quickly."
                },
                {
                  title: "Quality",
                  description: "We're committed to helping agents create videos that look professional and polished. Quality is at the heart of everything we build."
                },
                {
                  title: "Innovation",
                  description: "We're constantly pushing the boundaries of what's possible with mobile video technology, looking for new ways to help agents showcase properties."
                },
                {
                  title: "Accessibility",
                  description: "Great video tools shouldn't be limited to those with big budgets or technical skills. We're democratizing professional video creation."
                },
                {
                  title: "Customer Success",
                  description: "We measure our success by our customers' success. If our users aren't creating better videos and getting results, we haven't done our job."
                },
                {
                  title: "Community",
                  description: "We're building more than a product; we're creating a community of real estate professionals who want to elevate their marketing."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-5xl mx-auto text-center bg-propix-600 text-white p-12 rounded-2xl animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Thousands of Successful Agents
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Ready to transform your property listings with stunning videos? Start creating professional videos in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/pricing" 
                className="bg-white text-propix-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                See Pricing
              </Link>
              <Link 
                to="/how-it-works" 
                className="bg-propix-700 hover:bg-propix-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
