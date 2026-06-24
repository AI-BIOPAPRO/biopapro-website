import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Wooden Cutlery Products — Forks, Spoons, Knives, Sporks | Biopapro India",
  description:
    "FSC-certified birchwood cutlery manufactured in Mumbai, India. Wooden forks, spoons, knives, sporks, coffee stirrers, skewers. Bulk supply for restaurants, hotels, caterers across India. Export to 18+ countries. 30+ SKUs, wholesale pricing.",
  keywords: [
    // Domestic India
    "wooden cutlery wholesale India",
    "wooden spoons supplier India",
    "wooden forks bulk India",
    "disposable wooden cutlery India",
    "birchwood spoons India",
    "wooden knives India",
    "wooden sporks India",
    "eco friendly cutlery India",
    "wooden coffee stirrers India",
    "bamboo skewers bulk India",
    "wooden cutlery restaurants India",
    "wooden tableware hotels India",
    // Export / International
    "birchwood fork bulk export",
    "wooden spoon manufacturer export",
    "FSC cutlery exporter",
    "biodegradable cutlery supplier",
    "wooden spork manufacturer",
    "eco-friendly cutlery export",
    "birchwood cutlery wholesale",
  ],
  openGraph: {
    title: "Wooden Cutlery Products — Biopapro India",
    description:
      "30+ SKUs. Birchwood forks, spoons, knives, sporks, stirrers, skewers. Domestic India supply + 18+ country export. FSC certified. Bulk & wholesale.",
    type: "website",
    url: "https://biopapro.com/products",
  },
  alternates: { canonical: "https://biopapro.com/products" },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
