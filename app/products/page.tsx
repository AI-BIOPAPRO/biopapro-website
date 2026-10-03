import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Wooden Cutlery Products — Forks, Spoons, Knives, Sporks",
  description:
    "FSC-certified birchwood cutlery manufactured in Mumbai, India — 30+ SKUs, exported to 18+ countries and supplied in bulk across India. Forks, spoons, knives, sporks, stirrers, skewers. Wholesale pricing for restaurants, hotels, and caterers.",
  keywords: [
    // Domestic India
    "wooden cutlery manufacturer India",
    "wooden cutlery wholesale India",
    "wooden spoons supplier India",
    "wooden forks bulk India",
    "disposable wooden cutlery India",
    "birchwood spoons India",
    "wooden knives India",
    "wooden sporks India",
    "eco friendly cutlery India",
    "wooden coffee stirrers India",
    "birchwood skewers bulk India",
    "wooden cutlery for restaurants",
    "wooden cutlery for QSRs",
    "wooden tableware hotels India",
    "bulk wooden cutlery supplier",
    // Export / International
    "birchwood fork bulk export",
    "wooden spoon manufacturer export",
    "FSC cutlery exporter",
    "biodegradable cutlery supplier",
    "wooden spork manufacturer",
    "eco-friendly cutlery export",
    "birchwood cutlery wholesale",
    // Hindi — both Devanagari and common Hinglish/transliterated search terms
    "लकड़ी के चम्मच थोक",
    "लकड़ी के कांटे सप्लायर",
    "लकड़ी के चाकू इंडिया",
    "लकड़ी की कटलरी होटल रेस्टोरेंट",
    "डिस्पोजेबल लकड़ी कटलरी इंडिया",
    "lakdi ke chammach wholesale",
    "lakdi ke kaante bulk India",
    "lakdi ki cutlery restaurant hotel",
    "disposable lakdi cutlery India",
  ],
  openGraph: {
    title: "Wooden Cutlery Products — Biopapro India",
    description:
      "30+ SKUs. Birchwood forks, spoons, knives, sporks, stirrers, skewers. Domestic India supply + 18+ country export. FSC certified. Bulk & wholesale.",
    type: "website",
    url: "/products",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
