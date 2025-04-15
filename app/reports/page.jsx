import Footer from '@/components/common/Footer'
import Certificates from '@/components/lab/Certificates'
import HeroSection from '@/components/lab/HeroSection'
import LabImages from '@/components/lab/LabImages'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <LabImages />
        <Certificates />
        <Footer />
    </div>
  )
}

export default page