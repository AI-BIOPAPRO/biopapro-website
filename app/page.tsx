import type { Metadata } from "next";
import OpeningSection            from "@/components/home/OpeningSection";
import StripEntry               from "@/components/home/StripEntry";
import DocumentaryStrip         from "@/components/home/DocumentaryStrip";
import WhyWoodWon               from "@/components/home/WhyWoodWon";
import ImpactCounter            from "@/components/home/ImpactCounter";
import ManufacturingCredibility from "@/components/home/ManufacturingCredibility";
import WomenWorkforce           from "@/components/home/WomenWorkforce";
import ProductEcosystem         from "@/components/home/ProductEcosystem";
import GlobalPresence           from "@/components/home/GlobalPresence";
import Certifications           from "@/components/home/Certifications";
import ContactTeaser            from "@/components/home/ContactTeaser";

export const metadata: Metadata = {
  title: { absolute: "Biopapro — Wooden Cutlery Manufacturer in India | Bulk & Export" },
  description:
    "Biopapro manufactures FSC-certified birchwood cutlery in Mumbai, India. Supplying restaurants, hotels, caterers, food chains, and corporate cafeterias across India. Exporting to 18+ countries. 100M+ units/month. Wholesale and bulk orders welcome.",
  keywords: [
    "wooden cutlery manufacturer India",
    "birchwood cutlery Mumbai",
    "wooden spoons supplier India",
    "wooden forks wholesaler India",
    "eco friendly cutlery India",
    "disposable wooden cutlery bulk",
    "sustainable tableware manufacturer",
    "FSC certified cutlery India",
    "wooden cutlery restaurants India",
    "biodegradable cutlery supplier India",
    "wooden cutlery exporter India",
    "birchwood tableware wholesale",
  ],
  openGraph: {
    title: "Biopapro — Wooden Cutlery Manufacturer India",
    description:
      "FSC-certified birchwood cutlery from Mumbai. Supplying Indian restaurants, hotels, caterers and exporting to 18+ countries. 100M+ units/month.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      {/* S1  — Opening: product photography, value proposition, immediate clarity */}
      <OpeningSection />

      {/* S2  — Strip Entry: narrative threshold, light → dark transition */}
      <StripEntry />

      {/* S3  — Documentary Strip: Forest → Material → Manufacturing → Product → Global */}
      <DocumentaryStrip />

      {/* S4  — Why Wood Won: decisive plastic vs birchwood case */}
      <WhyWoodWon />

      {/* S5  — Impact Counter: live sustainability metrics */}
      <ImpactCounter />

      {/* S6  — Manufacturing Credibility: 6-step production journey */}
      <ManufacturingCredibility />

      {/* S6b — Women Workforce: the people behind the operation */}
      <WomenWorkforce />

      {/* S7  — Product Ecosystem: full range, category filters, real images */}
      <ProductEcosystem />

      {/* S8  — Global Presence: interactive world map, 18+ markets */}
      <GlobalPresence />

      {/* S9  — Certifications: trust vault — FSC, ISO, FDA, BPI, BSCI, EU */}
      <Certifications />

      {/* S10 — Contact: export partnership enquiry form */}
      <ContactTeaser />
    </main>
  );
}
