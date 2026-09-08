import type { Metadata } from "next";
import SustainabilityClient from "./SustainabilityClient";

export const metadata: Metadata = {
  title: "Biodegradable & Compostable Wooden Cutlery",
  description:
    "Biopapro's birchwood cutlery replaces 6,500kg of single-use plastic daily. FSC certified, BPI compostable, ISO 14001 certified. Eco-friendly wooden cutlery for Indian restaurants, hotels, and caterers — and sustainable export supply worldwide.",
  keywords: [
    // Domestic eco keywords
    "eco friendly cutlery India",
    "biodegradable cutlery India",
    "sustainable wooden cutlery India",
    "compostable cutlery India",
    "plastic free cutlery India",
    "green cutlery supplier India",
    "eco disposable cutlery India",
    "sustainable tableware India",
    // Export eco keywords
    "FSC certified birchwood tableware",
    "compostable cutlery manufacturer",
    "BPI compostable wooden cutlery",
    "plastic-free cutlery supplier",
    "sustainable procurement cutlery",
    "birchwood cutlery environmental",
    "eco cutlery bulk export",
  ],
  openGraph: {
    title: "Eco Friendly Wooden Cutlery India — Biopapro",
    description:
      "6,500kg plastic displaced daily. FSC certified. BPI Compostable. ISO 14001. Biodegradable wooden cutlery for India and global markets.",
    type: "website",
    url: "/sustainability",
  },
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return <SustainabilityClient />;
}
