
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about Propix? Our team is here to help you succeed with your real estate videos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-1 order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-propix-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:hello@propix.com" className="text-gray-600 hover:text-propix-600 transition-colors">
                        hello@propix.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-propix-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-propix-600 transition-colors">
                        (123) 456-7890
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Monday-Friday: 9am-6pm EST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-propix-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                      <address className="text-gray-600 not-italic">
                        123 Real Estate Way<br />
                        San Francisco, CA 94103<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="bg-gray-100 hover:bg-propix-50 text-gray-600 hover:text-propix-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="bg-gray-100 hover:bg-propix-50 text-gray-600 hover:text-propix-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="bg-gray-100 hover:bg-propix-50 text-gray-600 hover:text-propix-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="bg-gray-100 hover:bg-propix-50 text-gray-600 hover:text-propix-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-2 order-1 lg:order-2 animate-fade-in-up">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us A Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="aspect-[16/7] w-full relative">
                <iframe
                  title="Propix Office Location"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.28711896148!2d-122.43297820795224!3d37.77725075591309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1625184107289!5m2!1sen!2sca"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Reach out to our customer support team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">How long does it take to create a video?</h3>
                <p className="text-gray-600">
                  With Propix, you can create professional-quality property videos in as little as 5 minutes, from capturing footage to sharing your final video.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Do I need special equipment?</h3>
                <p className="text-gray-600">
                  No special equipment needed! All you need is your smartphone. Propix works great with both iPhone and Android devices.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Can I add my own branding?</h3>
                <p className="text-gray-600">
                  Absolutely! Propix allows you to add your logo, custom colors, and contact information to all your videos for consistent branding.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">What if I need help?</h3>
                <p className="text-gray-600">
                  We offer comprehensive support including in-app tutorials, knowledge base articles, and a dedicated support team to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
