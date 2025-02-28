
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center text-propix-700 font-bold text-2xl">
                <span className="text-propix-600">Pro</span>
                <span className="text-propix-800">pix</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-6">
              The easiest way to create beautiful real estate listing videos in minutes, right from your phone.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-propix-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-propix-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-propix-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-propix-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-propix-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-propix-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-propix-600 mt-1 flex-shrink-0" />
                <a href="mailto:hello@propix.com" className="text-gray-600 hover:text-propix-600 transition-colors">
                  hello@propix.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-propix-600 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-propix-600 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-propix-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Real Estate Way,<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Propix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
