import React from "react";
import HeroSection from "../Components/hero/HeroSection.jsx";
import ServicesPreview from "../Components/home/ServicesPreview.jsx";
import TestimonialsSection from "../Components/home/TestimonialsSection.jsx";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <TestimonialsSection />
    </div>
  );
}