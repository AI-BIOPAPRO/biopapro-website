import type { Metadata } from "next";
import SustainabilityClient from "./SustainabilityClient";
import { COMPANY_FACTS } from "@/lib/company-facts";

const PLASTIC_KG = COMPANY_FACTS.plasticSavedPerDay.toLocaleString();

export const metadata: Metadata = {
  title: "Biodegradable & Compostable Wooden Cutlery",
  description:
    `Biopapro's FSC-certified, BPI compostable birchwood cutlery replaces ${PLASTIC_KG}kg of single-use plastic daily. Eco-friendly wooden cutlery for Indian restaurants, hotels, and caterers — and sustainable export supply worldwide. ISO 14001 certified.`,
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
    // Hindi — both Devanagari and common Hinglish/transliterated search terms
    "इको फ्रेंडली कटलरी इंडिया",
    "बायोडिग्रेडेबल कटलरी इंडिया",
    "प्लास्टिक मुक्त कटलरी",
    "पर्यावरण अनुकूल बर्तन",
    "eco friendly bartan India",
    "plastic free cutlery hindi",
    "paryavaran anukul cutlery India",
  ],
  openGraph: {
    title: "Eco Friendly Wooden Cutlery India — Biopapro",
    description:
      `${PLASTIC_KG}kg plastic displaced daily. FSC certified. BPI Compostable. ISO 14001. Biodegradable wooden cutlery for India and global markets.`,
    type: "website",
    url: "/sustainability",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return <SustainabilityClient />;
}
