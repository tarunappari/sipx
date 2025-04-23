import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutInfo from '@/components/about/AboutInfo';
import Footer from '@/components/common/Footer';
import React from 'react';

export const metadata = {
  title: "About Us – Sipx | India's Trusted Packaged Drinking Water Brand",
  description:
    "Learn about Sipx's mission, values, and commitment to delivering clean, safe, and eco-friendly drinking water across India.",
  keywords:
    "About Sipx, packaged water company, bottled water brand, water mission, clean drinking water, Sipx India, eco-friendly water",
  openGraph: {
    title: "About Us – Sipx | India's Trusted Packaged Drinking Water Brand",
    description:
      "Learn about Sipx's mission, values, and commitment to delivering clean, safe, and eco-friendly drinking water across India.",
    url: "https://sipx.in/about",
    siteName: "Sipx",
    images: [
      {
        url: "/sipx-logo.webp",
        width: 1200,
        height: 630,
        alt: "About Sipx – Bottled Water Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Sipx | India's Trusted Packaged Drinking Water Brand",
    description:
      "Discover how Sipx is transforming the way India drinks water with sustainability and quality at its core.",
    images: ["/sipx-logo.webp"],
  },
};

const page = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutInfo />
      <Footer />
    </div>
  );
};

export default page;
