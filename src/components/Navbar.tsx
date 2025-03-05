
import { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  // Create navigation items when language changes or route changes
  const navItems = useMemo(() => [
    { name: t("home"), path: "/" },
    { name: t("how_it_works"), path: "/how-it-works" },
    { name: t("templates"), path: "/templates" },
    { name: t("pricing"), path: "/pricing" },
    { name: t("who_we_are"), path: "/about" },
    { name: t("contact"), path: "/contact" },
  ], [t, language]); // Force re-creation of nav items when language changes

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Log language changes for debugging
  useEffect(() => {
    console.log("Navbar language update:", language);
    console.log("Current navigation items:", navItems.map(item => `${item.path}: ${item.name}`));
  }, [language, navItems]);

  // Use useCallback for handlers to improve performance
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-propix-700 font-bold text-2xl"
          aria-label="Propix Home"
        >
          <span className="text-propix-600">Pro</span>
          <span className="text-propix-800">pix</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-propix-600 relative group",
                location.pathname === item.path ? "text-propix-600" : "text-gray-700"
              )}
            >
              {item.name}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-propix-500 transition-all duration-300",
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </div>

        <button
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg font-medium py-2 border-b border-gray-100 transition-colors",
                location.pathname === item.path ? "text-propix-600" : "text-gray-800"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
