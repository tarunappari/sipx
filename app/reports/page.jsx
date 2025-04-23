import Footer from '@/components/common/Footer';
import Certificates from '@/components/lab/Certificates';
import HeroSection from '@/components/lab/HeroSection';
import LabImages from '@/components/lab/LabImages';
import React from 'react';

export const metadata = {
  title: "Lab Test Reports – Sipx | Certified Quality Bottled Water",
  description:
    "Explore Sipx's official lab test reports and certifications. We ensure every bottle meets the highest safety and purity standards.",
  keywords:
    "Sipx lab reports, water test certificates, bottled water quality, ISI certified water, TDS report, Sipx safety standards, packaged drinking water test report",
  openGraph: {
    title: "Lab Test Reports – Sipx | Certified Quality Bottled Water",
    description:
      "Explore Sipx's official lab test reports and certifications. We ensure every bottle meets the highest safety and purity standards.",
    url: "https://sipx.in/reports",
    siteName: "Sipx",
    images: [
      {
        url: "/sipx-logo.webp",
        width: 1200,
        height: 630,
        alt: "Sipx Lab Test Reports and Certificates",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab Test Reports – Sipx | Certified Quality Bottled Water",
    description:
      "Access verified test reports and certifications of Sipx water to see our commitment to quality and hygiene.",
    images: ["/sipx-logo.webp"],
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
      <LabImages />
      <Certificates />
      <Footer />
    </div>
  );
};

export default page;
