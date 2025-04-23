// components/landingpage/ClientHome.jsx
"use client";

import HeroSection from "@/components/landingpage/HeroSection";
import Journey from "@/components/landingpage/Journey";
import Products from "@/components/landingpage/Products";
import Footer from "@/components/common/Footer";
import Composition from "@/components/landingpage/Composition";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Journey />
      <Products />
      <Composition />
      <Footer />
    </div>
  );
}
