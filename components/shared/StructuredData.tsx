// JSON-LD structured data — helps Google understand Biopapro as a manufacturer
// serving both domestic India and international markets

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://biopapro.com/#organization",
        name: "Biopapro",
        url: "https://biopapro.com",
        logo: "https://biopapro.com/logo.png",
        description:
          "Biopapro is a large-scale FSC-certified birchwood cutlery manufacturer based in Mumbai, India. Supplying restaurants, hotels, caterers, and food chains across India, and exporting to 18+ countries worldwide.",
        foundingDate: "2019",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 380 },
        address: {
          "@type": "PostalAddress",
          streetAddress: "G1 Khetwadi, 12th Lane, Girgaon",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400004",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-70211-03763",
            contactType: "sales",
            email: "export@biopapro.com",
            areaServed: ["IN", "WORLD"],
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://biopapro.com/#localbusiness",
        name: "Biopapro — Wooden Cutlery Manufacturer",
        image: "https://biopapro.com/logo.png",
        url: "https://biopapro.com",
        telephone: "+91-70211-03763",
        email: "export@biopapro.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "G1 Khetwadi, 12th Lane, Girgaon",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400004",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.9647,
          longitude: 72.8258,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        description:
          "FSC-certified birchwood wooden cutlery manufacturer in Mumbai, India. Supplying restaurants, hotels, caterers, food chains, and corporate cafeterias across India. Also exporting wooden forks, spoons, knives, sporks, coffee stirrers, and skewers to 18+ countries worldwide.",
        keywords:
          "wooden cutlery manufacturer India, birchwood cutlery Mumbai, eco friendly cutlery India, wooden spoons supplier India, wooden forks wholesale India",
      },
      {
        "@type": "Product",
        name: "FSC-Certified Birchwood Cutlery",
        brand: { "@type": "Brand", name: "Biopapro" },
        manufacturer: { "@id": "https://biopapro.com/#organization" },
        description:
          "FSC-certified birchwood disposable cutlery including forks, spoons, knives, sporks, coffee stirrers, and skewers. Available in bulk for domestic India supply and international export.",
        material: "Birchwood",
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Restaurants, Hotels, Caterers, Food Chains, Corporate Cafeterias, Airlines, Hospitality Groups, Distributors, Importers",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://biopapro.com/#organization" },
        },
        hasCertification: [
          { "@type": "Certification", name: "FSC® 100% Chain of Custody" },
          { "@type": "Certification", name: "ISO 9001:2015" },
          { "@type": "Certification", name: "BRCGS Food Safety" },
          { "@type": "Certification", name: "BPI Compostable" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
