"use client";
import styled from "styled-components";
import dynamic from "next/dynamic";

// Dynamically import components to prevent SSR issues
const HeroSection = dynamic(() => import("./components/LandingPage/HeroSection"), { ssr: false });
const AboutUs = dynamic(() => import("./components/LandingPage/AboutUs"), { ssr: false });
const Products = dynamic(() => import("./components/LandingPage/Products"), { ssr: false });
const Composition = dynamic(() => import("./components/LandingPage/Composition"), { ssr: false });

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <AboutUs />
      <Composition />
      <Products />
    </PageContainer>
  );
}

let PageContainer = styled.div``;
