"use client"
import Footer from "@/components/common/Footer";
import Composition from "@/components/landingpage/Composition";
import HeroSection from "@/components/landingpage/HeroSection";
import Journey from "@/components/landingpage/Journey";
import Products from "@/components/landingpage/Products";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Journey />
      <Composition />
      <Products />
      <Footer />
    </div>
  );
}
