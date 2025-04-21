import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutInfo from '@/components/about/AboutInfo';
import Footer from '@/components/common/Footer';
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutHeroSection />
        <AboutInfo />
        <Footer />
    </div>
  )
}

export default page;