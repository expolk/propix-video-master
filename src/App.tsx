
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
    // Check if user has already selected a language before
    return !localStorage.getItem("hasSelectedLanguage");
  });
  
  const location = useLocation();
  const { language } = useLanguage();

  // Effect to log route changes for debugging
  useEffect(() => {
    console.log("App detected route change:", location.pathname);
    console.log("Current language:", language);
  }, [location.pathname, language]);

  const handleLanguageSelectionComplete = () => {
    setShowInitialLanguageSelector(false);
    localStorage.setItem("hasSelectedLanguage", "true");
  };

  return (
    <>
      <Toaster />
      <Sonner />
      
      {/* Language selector overlay on first visit only */}
      {showInitialLanguageSelector && (
        <LanguageSelector 
          initialSelection={true} 
          onInitialSelectionComplete={handleLanguageSelectionComplete}
        />
      )}
      
      {/* Floating language switcher button (always visible after initial selection) */}
      {!showInitialLanguageSelector && <LanguageSelector initialSelection={false} />}
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
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
