import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Bulk & Export Wooden Cutlery Enquiry",
  description:
    "Contact Biopapro for wooden cutlery supply in India or export worldwide. Restaurants, hotels, caterers, food chains, distributors, importers — enquire for bulk pricing, MOQ, samples, and certifications. Mumbai manufacturer. Response within 24 hours.",
  keywords: [
    // Domestic inquiry
    "wooden cutlery supplier contact India",
    "wooden cutlery bulk order India",
    "eco friendly cutlery supplier contact",
    "biodegradable cutlery enquiry India",
    "wooden spoons bulk order India",
    "wooden forks wholesale enquiry",
    "wooden cutlery restaurant supplier",
    "catering cutlery supplier India",
    // Export inquiry
    "wooden cutlery export enquiry",
    "birchwood cutlery export contact",
    "FSC certified cutlery importer contact",
    "wooden cutlery distributor enquiry",
    "birchwood tableware MOQ",
    "wooden cutlery OEM India",
  ],
  openGraph: {
    title: "Contact Biopapro — Wooden Cutlery Supplier India & Export",
    description:
      "Enquire for domestic India supply or international export. Restaurants, hotels, caterers, importers, distributors. 24-hour response. Bulk pricing available.",
    type: "website",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
