// app/page.jsx
import HomePage from "@/components/landingpage/HomePage";

export const metadata = {
  title: "Sipx – Premium Packaged Drinking Water | Stay Hydrated",
  description:
    "Sipx delivers premium packaged drinking water with a focus on purity, freshness, and sustainability. Your trusted source of hydration.",
  keywords:
    "Sipx, packaged water, bottled water India, mineral water, drinking water, hydration, eco-friendly water bottle",
  openGraph: {
    title: "Sipx – Premium Packaged Drinking Water | Stay Hydrated",
    description:
      "Sipx delivers premium packaged drinking water with a focus on purity, freshness, and sustainability. Your trusted source of hydration.",
    url: "https://sipx.in",
    siteName: "Sipx",
    images: [
      {
        url: "/sipx-logo.webp",
        width: 1200,
        height: 630,
        alt: "Sipx Bottled Water – Fresh and Pure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sipx – Premium Packaged Drinking Water | Stay Hydrated",
    description:
      "Sipx offers premium bottled water solutions across India with guaranteed purity.",
    images: ["/sipx-logo.webp"],
  },
};

export default function Home() {
  return <HomePage />;
}
