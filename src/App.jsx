import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";


function App() {
  return (
      <LanguageProvider>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </LanguageProvider>
  );
}

export default App;
