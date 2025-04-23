import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/_globals.scss"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sipx – Pure & Refreshing Packaged Drinking Water",
  description:
    "Sipx delivers pure, mineral-rich bottled water with freshness and quality. Ideal for every occasion and every sip that matters.",
  keywords:
    "Sipx, sipx, sipx bottle, sipx bottled water, drinking water,sipx drinking water, water, water bottle, bottles, bottled water, packaged drinking water, mineral water, hydration, water delivery India, pure drinking water, healthy water",
  metadataBase: new URL("https://sipx.in"),
  openGraph: {
    title: "Sipx – Pure & Refreshing Packaged Drinking Water",
    description:
      "Sipx offers premium quality mineral water bottles. Refresh. Rehydrate. Rejuvenate.",
    url: "https://sipx.in",
    siteName: "Sipx",
    images: [
      {
        url: "/sipx-logo.webp",
        width: 1200,
        height: 630,
        alt: "Sipx Water Bottles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sipx – Pure & Refreshing Packaged Drinking Water",
    description:
      "Sipx offers premium quality mineral water bottles. Refresh. Rehydrate. Rejuvenate.",
    images: ["/sipx-logo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
