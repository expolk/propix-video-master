
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create a component to handle route changes and language selection
const AppContent = () => {
  const [showInitialLanguageSelector, setShowInitialLanguageSelector] = useState(() => {
    // Check if user has already selected a language
    return !localStorage.getItem("preferredLanguage");
  });
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(() => {
    return !!localStorage.getItem("preferredLanguage");
  });
  const location = useLocation();
  const { language } = useLanguage();

  // Reset initial state on route change for consistent behavior
  useEffect(() => {
    console.log("App detected route change:", location.pathname);
    console.log("Current language:", language);
  }, [location.pathname, language]);

  const handleLanguageSelectionComplete = () => {
    setShowInitialLanguageSelector(false);
    setHasSelectedLanguage(true);
    localStorage.setItem("hasSelectedLanguage", "true");
  };

  return (
    <>
      <Toaster />
      <Sonner />
      
      {/* Language selector overlay on first visit */}
      {showInitialLanguageSelector && (
        <LanguageSelector 
          initialSelection={true} 
          onInitialSelectionComplete={handleLanguageSelectionComplete}
        />
      )}
      
      {/* Floating language switcher button (always visible after initial selection) */}
      {hasSelectedLanguage && <LanguageSelector initialSelection={false} />}
      
      <Routes>
        <Route path="/" element={<Index key={`index-${language}`} />} />
        <Route path="/how-it-works" element={<HowItWorks key={`how-it-works-${language}`} />} />
        <Route path="/templates" element={<Templates key={`templates-${language}`} />} />
        <Route path="/pricing" element={<Pricing key={`pricing-${language}`} />} />
        <Route path="/about" element={<About key={`about-${language}`} />} />
        <Route path="/contact" element={<Contact key={`contact-${language}`} />} />
        <Route path="*" element={<NotFound key={`not-found-${language}`} />} />
      </Routes>
    </>
  );
};

// App wrapper that provides the language context
const AppWithLanguageContext = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppWithLanguageContext />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
