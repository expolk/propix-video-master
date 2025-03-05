
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  const [showInitialLanguageSelector, setShowInitialLanguageSelector] = useState(true);
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);
  const location = useLocation();

  // Reset initial state on route change for consistent behavior
  useEffect(() => {
    console.log("App detected route change:", location.pathname);
  }, [location.pathname]);

  const handleLanguageSelectionComplete = () => {
    setShowInitialLanguageSelector(false);
    setHasSelectedLanguage(true);
  };

  return (
    <>
      <Toaster />
      <Sonner />
      
      {/* Language selector overlay on first visit */}
      <LanguageSelector 
        initialSelection={showInitialLanguageSelector} 
        onInitialSelectionComplete={handleLanguageSelectionComplete}
      />
      
      {/* Floating language switcher button (always visible) */}
      {hasSelectedLanguage && <LanguageSelector />}
      
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

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
