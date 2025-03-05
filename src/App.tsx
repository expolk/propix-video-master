
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showInitialLanguageSelector, setShowInitialLanguageSelector] = useState(true);
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);

  const handleLanguageSelectionComplete = () => {
    setShowInitialLanguageSelector(false);
    setHasSelectedLanguage(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          
          <Routes>
            <Route path="/" element={
              <LanguageProvider>
                {/* Language selector overlay on first visit */}
                <LanguageSelector 
                  initialSelection={showInitialLanguageSelector} 
                  onInitialSelectionComplete={handleLanguageSelectionComplete}
                />
                
                {/* Floating language switcher button (always visible) */}
                {hasSelectedLanguage && <LanguageSelector />}
                <Index />
              </LanguageProvider>
            } />
            <Route path="/how-it-works" element={
              <LanguageProvider>
                <LanguageSelector />
                <HowItWorks />
              </LanguageProvider>
            } />
            <Route path="/templates" element={
              <LanguageProvider>
                <LanguageSelector />
                <Templates />
              </LanguageProvider>
            } />
            <Route path="/pricing" element={
              <LanguageProvider>
                <LanguageSelector />
                <Pricing />
              </LanguageProvider>
            } />
            <Route path="/about" element={
              <LanguageProvider>
                <LanguageSelector />
                <About />
              </LanguageProvider>
            } />
            <Route path="/contact" element={
              <LanguageProvider>
                <LanguageSelector />
                <Contact />
              </LanguageProvider>
            } />
            <Route path="*" element={
              <LanguageProvider>
                <LanguageSelector />
                <NotFound />
              </LanguageProvider>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
