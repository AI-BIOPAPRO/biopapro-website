import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Wooden Cutlery Manufacturing in Mumbai, India",
  description:
    "Biopapro is a large-scale wooden cutlery manufacturer based in Mumbai, India. 100M+ units/month. ISO 9001, BRCGS, FSC certified. Supplying Indian restaurants, hotels, caterers, and food chains — and exporting to 18+ countries worldwide.",
  keywords: [
    // Manufacturing — domestic + export
    "wooden cutlery manufacturer India",
    "wooden cutlery manufacturer Mumbai",
    "birchwood cutlery manufacturer",
    "sustainable tableware manufacturer India",
    "FSC certified cutlery manufacturer",
    "disposable cutlery manufacturer India",
    "eco friendly cutlery manufacturer India",
    "ISO certified cutlery manufacturer",
    "BRCGS certified manufacturer India",
    "birchwood manufacturer Mumbai",
    "wooden tableware manufacturer",
    "bulk wooden cutlery manufacturer",
  ],
  openGraph: {
    title: "Wooden Cutlery Manufacturing in Mumbai, India",
    description:
      "ISO 9001 & BRCGS certified. FSC-sourced birchwood. 380+ employees. Mumbai manufacturer supplying Indian market and exporting to 18+ countries.",
    type: "website",
    url: "/manufacturing",
  },
  alternates: { canonical: "/manufacturing" },
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
