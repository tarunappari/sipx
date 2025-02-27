"use client"
import styled from "styled-components";
import HeroSection from './components/LandingPage/HeroSection'
import AboutUs from './components/LandingPage/AboutUs'
import Products from './components/LandingPage/Products'
import Composition from './components/LandingPage/Composition'


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


let PageContainer = styled.div`
`

