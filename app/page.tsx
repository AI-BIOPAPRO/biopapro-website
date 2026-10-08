import type { Metadata } from "next";
import OpeningSection            from "@/components/home/OpeningSection";
import ProductStrip              from "@/components/home/ProductStrip";
import WhyWoodWon               from "@/components/home/WhyWoodWon";
import ImpactCounter            from "@/components/home/ImpactCounter";
import ManufacturingCredibility from "@/components/home/ManufacturingCredibility";
import WomenWorkforce           from "@/components/home/WomenWorkforce";
import DomesticSupply           from "@/components/home/DomesticSupply";
import ProductEcosystem         from "@/components/home/ProductEcosystem";
import GlobalPresence           from "@/components/home/GlobalPresence";
import Certifications           from "@/components/home/Certifications";
import ContactTeaser            from "@/components/home/ContactTeaser";

export const metadata: Metadata = {
  title: { absolute: "Biopapro — Wooden Cutlery Manufacturer in India | Bulk & Export" },
  description:
    "Biopapro manufactures FSC-certified birchwood cutlery in Mumbai, India, exporting to 18+ countries and supplying restaurants, hotels, and caterers nationwide. 100M+ units/month. Wholesale and bulk orders welcome.",
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
    // Hindi — both Devanagari and common Hinglish/transliterated search terms
    "लकड़ी की कटलरी निर्माता",
    "लकड़ी के चम्मच थोक विक्रेता",
    "लकड़ी के कांटे सप्लायर इंडिया",
    "इको फ्रेंडली कटलरी इंडिया",
    "डिस्पोजेबल लकड़ी की कटलरी थोक",
    "बायोडिग्रेडेबल कटलरी सप्लायर",
    "lakdi ki cutlery manufacturer",
    "lakdi ke chammach wholesale India",
    "lakdi ke kaante supplier India",
    "eco friendly cutlery India hindi",
    "disposable lakdi cutlery bulk order",
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

      {/* S1b — Product Strip: continuous self-sliding real-SKU preview,
          replaces the single rotating card that used to live inside the
          hero itself */}
      <ProductStrip />

      {/* S4  — Why Wood Won: decisive plastic vs birchwood case */}
      <WhyWoodWon />

      {/* S5  — Impact Counter: live sustainability metrics */}
      <ImpactCounter />

      {/* S6  — Manufacturing Credibility: 6-step production journey */}
      <ManufacturingCredibility />

      {/* S6b — Women Workforce: the people behind the operation */}
      <WomenWorkforce />

      {/* S4  — Domestic B2B Supply: India food-service industry segments */}
      <DomesticSupply />

      {/* S7  — Product Ecosystem: full range, category filters, real images */}
      <ProductEcosystem />

      {/* S8  — Global Presence: interactive world map, 18+ markets */}
      <GlobalPresence />

      {/* S9  — Certifications: trust vault — FSC, ISO 9001/14001/45001, BRCGS */}
      <Certifications />

      {/* S10 — Contact: export partnership enquiry form */}
      <ContactTeaser />
    </main>
  );
}
