/**
 * Biopapro Product Catalog
 * Source: Live audit of biopapro.com — all data is real
 * CDN base: https://biopapro.com/cdn/shop/
 */

export type ProductCategory =
  | "Forks"
  | "Spoons"
  | "Knives"
  | "Sporks"
  | "Stirrers"
  | "Scoops"
  | "Skewers"
  | "Sets"
  | "Paper Straws";

export const ALL_CATEGORIES: ProductCategory[] = [
  "Forks",
  "Spoons",
  "Knives",
  "Sporks",
  "Stirrers",
  "Scoops",
  "Skewers",
  "Sets",
  "Paper Straws",
];

export interface BioProduct {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  length: string;
  material: string;
  finish: string;
  certifications: string[];
  pcsPerBag: number;
  bagsPerCarton: number;
  pcsPerCarton: number;
  moq: string;
  shortDescription: string;
  applications: string[];
  primaryImage: string;
  galleryImages: string[];
  isIndividuallyPacked?: boolean;
  highlight?: boolean;
}

export interface ProductFamily {
  id: string;
  category: ProductCategory;
  headline: string;
  description: string;
  applications: string[];
  moqRange: string;
  skuCount: number;
  heroImage: string;
  sectionId: string;
}

const CDN = "https://biopapro.com/cdn/shop";

export const PRODUCTS: BioProduct[] = [
  // ── FORKS ──────────────────────────────────────────────────────────────────
  {
    id: "fork-140",
    name: "Wooden Fork 140mm",
    slug: "woodenfork140mm",
    category: "Forks",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 140mm birchwood fork sized for airline meal trays, food delivery boxes, and grab-and-go meal kits. Heat-resistant and food-safe, it holds its shape in hot curries, biryani, and oily foods without softening or splintering.",
    applications: ["Airlines", "Fast casual", "Travel catering", "Cafeterias", "Cloud kitchens", "Food delivery", "Meal kit services", "Corporate cafeterias"],
    primaryImage: `${CDN}/products/W7_1_30fe1a1f-efc4-40cf-898a-7ae32de521a6.jpg?v=1665051997`,
    galleryImages: [
      `${CDN}/products/W7_1_30fe1a1f-efc4-40cf-898a-7ae32de521a6.jpg?v=1665051997`,
      `${CDN}/products/NewProject_9_c90d3596-22df-4f8a-a02b-1abbd3e0c10a.png?v=1665051997`,
      `${CDN}/products/G39_1_dd03fd77-6488-4628-837d-eacfae7bee68.jpg?v=1665051997`,
    ],
  },
  {
    id: "fork-160",
    name: "Wooden Fork 160mm",
    slug: "woodenfork160mm",
    category: "Forks",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Standard 160mm birchwood fork built for everyday dine-in and takeaway volume. The size restaurants, cloud kitchens, and institutional canteens default to when they need one fork that works across the entire menu — starters, mains, and rice dishes alike.",
    applications: ["Restaurants", "Hotels", "Food service", "Catering", "Cloud kitchens", "Food courts", "Canteens", "Institutional dining"],
    primaryImage: `${CDN}/products/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg`,
    galleryImages: [
      `${CDN}/products/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg`,
      `${CDN}/products/NewProject_9_143a7464-1d51-4229-aeae-ca3d69539708.png`,
      `${CDN}/products/G39_1_f8528960-81ae-449d-bf2e-423ae76183d6.jpg`,
    ],
    highlight: true,
  },
  {
    id: "fork-160-packed",
    name: "Individual Packed Fork 160mm",
    slug: "individual-packed-160mm-fork",
    category: "Forks",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Individually OPP-sleeved 160mm birchwood fork. The single-unit seal matters wherever cutlery has to survive handling before it reaches the guest — airline trolleys, hotel room-service trays, hospital meal carts, and long-haul delivery bags — without anyone questioning if it's been touched.",
    applications: ["Airlines", "Hotels", "Premium catering", "Healthcare", "Hospitals", "Room service", "Corporate gifting", "Food delivery"],
    isIndividuallyPacked: true,
    primaryImage: `${CDN}/products/W7_1.jpg?v=1665051920`,
    galleryImages: [
      `${CDN}/products/W7_1.jpg?v=1665051920`,
      `${CDN}/products/NewProject_9.png?v=1665051920`,
      `${CDN}/products/G39_1.jpg?v=1665051920`,
    ],
  },

  // ── SPOONS ─────────────────────────────────────────────────────────────────
  {
    id: "spoon-110",
    name: "Wooden Spoon 110mm",
    slug: "wooden-spoon-110mm",
    category: "Spoons",
    length: "110mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 110mm spoon sized for single servings — ice cream tubs, yogurt cups, mini desserts, and tasting samples. The size dairy brands, gelaterias, and dessert parlors reach for when the spoon needs to disappear into the experience, not compete with it.",
    applications: ["Dairy", "Ice cream", "Desserts", "Sampling", "Ice cream parlors", "Bakeries & confectioneries", "Frozen yogurt shops", "Gelaterias"],
    primaryImage: `${CDN}/products/W3_1_7b597730-c22b-4b48-aec6-867408a3080d.jpg`,
    galleryImages: [
      `${CDN}/products/W3_1_7b597730-c22b-4b48-aec6-867408a3080d.jpg`,
    ],
  },
  {
    id: "spoon-140",
    name: "Wooden Spoon 140mm",
    slug: "wooden-spoon-140mm",
    category: "Spoons",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Medium 140mm birchwood spoon balanced for everyday use — cereal, curd rice, salads, soups, and breakfast trays. The all-rounder size cloud kitchens and café chains standardize on so they don't have to stock a different spoon for every menu category.",
    applications: ["Cafés", "Breakfast", "Soups", "Airlines", "Cloud kitchens", "Salad bars", "Food trucks", "Corporate cafeterias"],
    primaryImage: `${CDN}/products/W3_1_3390b722-b808-4bc3-9398-e09eb12185a8.jpg`,
    galleryImages: [
      `${CDN}/products/W3_1_3390b722-b808-4bc3-9398-e09eb12185a8.jpg`,
    ],
  },
  {
    id: "spoon-160",
    name: "Wooden Spoon 160mm",
    slug: "wooden-spoon-160mm",
    category: "Spoons",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Full-size 160mm birchwood spoon built for hot food — dal, sambar, gravies, and soups — without going soft or bending under weight. The size hospitals, canteens, and banquet caterers rely on for high-volume plated service where the spoon has to hold up meal after meal.",
    applications: ["Restaurants", "Hotels", "Catering", "Institutions", "Canteens", "Hospitals", "Banquet halls", "Wedding catering"],
    primaryImage: `${CDN}/products/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg`,
    galleryImages: [
      `${CDN}/products/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg`,
      `${CDN}/products/NewProject_8_11a0612f-43bb-4e7f-84ea-48ec0fbde693.png`,
      `${CDN}/products/G46_1_1b0f0709-fad5-40a6-a9ea-200af8d865d0.jpg`,
    ],
    highlight: true,
  },
  {
    id: "spoon-110-packed",
    name: "Individual Packed Spoon 110mm",
    slug: "individual-packed-110mm-spoon",
    category: "Spoons",
    length: "110mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Individually OPP-sleeved 110mm birchwood spoon, sealed for the same reason a sealed water bottle reassures a guest — because it's changed hands before it reaches them. Standard on airline dessert trays, hospital meal carts, and hotel amenity kits.",
    applications: ["Airlines", "Hotels", "Healthcare", "Premium catering", "Hospitals", "Room service", "Corporate gifting"],
    isIndividuallyPacked: true,
    primaryImage: `${CDN}/products/W3_1.jpg?v=1665051817`,
    galleryImages: [
      `${CDN}/products/W3_1.jpg?v=1665051817`,
      `${CDN}/products/NewProject_8.png?v=1665051817`,
      `${CDN}/products/G42_1_60482dac-c2a5-4be5-af8d-4eb538db9224.jpg?v=1665051817`,
    ],
  },

  // ── KNIVES ─────────────────────────────────────────────────────────────────
  {
    id: "knife-140",
    name: "Wooden Knife 140mm",
    slug: "wooden-knife-140mm",
    category: "Knives",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 140mm birchwood knife sized to fit inside sealed meal boxes and airline trays without adding bulk. The size delivery-first kitchens and travel caterers choose when the whole cutlery set has to fit a fixed-size compartment.",
    applications: ["Airlines", "Takeaway", "Travel catering", "Cafeterias", "Food delivery", "Meal kit services"],
    primaryImage: `${CDN}/products/W1_1.jpg?v=1665052308`,
    galleryImages: [
      `${CDN}/products/W1_1.jpg?v=1665052308`,
      `${CDN}/products/NewProject_10.png?v=1665052308`,
      `${CDN}/products/G54_1.jpg?v=1665052308`,
    ],
  },
  {
    id: "knife-165",
    name: "Wooden Knife 165mm",
    slug: "woodenknife165mm",
    category: "Knives",
    length: "165mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Full-size 165mm birchwood knife with enough rigidity to cut through paneer, parathas, and firm proteins without flexing — a common failure point for thinner cutlery. The default choice for sit-down restaurants and banquet caterers plating full meals.",
    applications: ["Restaurants", "Hotels", "Food service", "Catering", "Cloud kitchens", "Banquet halls", "Institutional dining"],
    primaryImage: `${CDN}/products/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg`,
    galleryImages: [
      `${CDN}/products/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg`,
      `${CDN}/products/NewProject_10_ad844645-1fd5-4387-84e8-da5b80d56a4b.png`,
      `${CDN}/products/G54_1_0af0e0cd-742b-43e0-b52d-a098954c6df1.jpg`,
    ],
    highlight: true,
  },

  // ── SPORKS ─────────────────────────────────────────────────────────────────
  {
    id: "spork-140",
    name: "Wooden Spork 140mm",
    slug: "wooden-spork140mm",
    category: "Sporks",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 140mm spork — one utensil doing a spoon's and fork's job — built for meal formats with only room for one implement per pack: airline trays, single-serve meal kits, and outdoor events where fewer pieces means less to carry and less to throw away.",
    applications: ["Airlines", "Travel catering", "Fast casual", "Takeaway", "Meal kit services", "Picnics & outdoor events", "Food delivery"],
    primaryImage: `${CDN}/products/W9_1.png?v=1662714451`,
    galleryImages: [`${CDN}/products/W9_1.png?v=1662714451`],
    highlight: true,
  },
  {
    id: "spork-160",
    name: "Wooden Spork 160mm",
    slug: "wooden-spork-160mm",
    category: "Sporks",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Full-size 160mm spork for kitchens that would rather stock one utensil than two. Popular with cloud kitchens and food-delivery brands packing rice bowls and one-dish meals, where a single spork replaces a separate spoon and fork without shortchanging the customer.",
    applications: ["Restaurants", "Food delivery", "Catering", "Institutions", "Cloud kitchens", "Food trucks"],
    primaryImage: `${CDN}/products/W9_1_2b4bd9de-74ff-476c-986f-c81e43cb8ec8.png`,
    galleryImages: [
      `${CDN}/products/W9_1_2b4bd9de-74ff-476c-986f-c81e43cb8ec8.png`,
    ],
  },

  // ── STIRRERS ───────────────────────────────────────────────────────────────
  {
    id: "stirrer-110",
    name: "Wooden Stirrer 110mm",
    slug: "wooden-stirrer-190mm",
    category: "Stirrers",
    length: "110mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Compact 110mm coffee stirrer sized for espresso cups and small beverage formats. High-volume carton of 50,000 units, built for office pantries, co-working spaces, and compact café counters that go through stirrers by the thousand every week.",
    applications: ["Espresso bars", "Offices", "Compact cafés", "Events", "Co-working spaces", "Hotel lobby cafés"],
    primaryImage: `${CDN}/products/W20.png?v=1662714572`,
    galleryImages: [`${CDN}/products/W20.png?v=1662714572`],
  },
  {
    id: "stirrer-140",
    name: "Wooden Stirrer 140mm",
    slug: "wooden-stirrer140mm",
    category: "Stirrers",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Standard 140mm coffee stirrer — the size café chains and QSR counters default to because it fits every standard cup without needing a second size on hand. The single highest-volume SKU in the range for a reason.",
    applications: ["Coffee chains", "QSR", "Hotels", "Catering", "Cloud kitchens", "Bakeries", "Corporate pantries"],
    primaryImage: `${CDN}/products/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png`,
    galleryImages: [
      `${CDN}/products/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png`,
    ],
    highlight: true,
  },
  {
    id: "stirrer-160",
    name: "Wooden Stirrer 160mm",
    slug: "wooden-stirrer-110mm",
    category: "Stirrers",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Long 160mm stirrer built to reach the bottom of tall glasses — cold brew, iced lattes, and layered beverages where a shorter stirrer just doesn't get there. Standard stock for premium cafés, hotel lounges, and bars serving tall-format drinks.",
    applications: ["Specialty coffee", "Cold brew", "Hotels", "Premium cafés", "Bars", "Lounges"],
    primaryImage: `${CDN}/products/W20_1e981daa-2dc8-4741-947b-bfe64cddb1ce.png`,
    galleryImages: [
      `${CDN}/products/W20_1e981daa-2dc8-4741-947b-bfe64cddb1ce.png`,
    ],
  },

  // ── SCOOPS ─────────────────────────────────────────────────────────────────
  {
    id: "scoop-95",
    name: "Wooden Scoop 95mm",
    slug: "wooden-scoop-95",
    category: "Scoops",
    length: "95mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 95mm birchwood scoop with a bowl-shaped head built for portion control — ice cream, gelato, loose spices, grains, and dry goods sampling. Sturdy enough to hold shape when scooping firmer, frozen product, unlike flat spoons pressed into scoop duty.",
    applications: ["Ice cream", "Gelato", "Sampling", "Dry goods", "Ice cream parlors", "Frozen dessert shops", "Bulk distributors & wholesalers"],
    primaryImage: `${CDN}/products/W43.png?v=1662714289`,
    galleryImages: [`${CDN}/products/W43.png?v=1662714289`],
  },

  // ── SKEWERS ────────────────────────────────────────────────────────────────
  {
    id: "skewer-7cm",
    name: "Gun Skewer 7cm",
    slug: "gun-skewers-7cm",
    category: "Skewers",
    length: "70mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Compact 7cm gun skewer built for mini-bite presentation — canapés, cocktail appetizers, and plated starters where the skewer is as much a styling tool as a utensil. The signature gun-tip shape holds food securely without piercing all the way through delicate bites.",
    applications: ["Canapés", "Appetizers", "Events", "Banqueting", "Cocktail parties", "Wedding catering", "Hotel bars"],
    primaryImage: `${CDN}/products/W26_1_105630ca-3689-4bea-8946-706190417455.jpg?v=1664946421`,
    galleryImages: [
      `${CDN}/products/W26_1_105630ca-3689-4bea-8946-706190417455.jpg?v=1664946421`,
    ],
  },
  {
    id: "skewer-10cm",
    name: "Gun Skewer 10cm",
    slug: "gun-skewers-10cm",
    category: "Skewers",
    length: "100mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Standard 10cm gun skewer sized for kebabs, brochettes, and grilled street food — long enough to hold multiple pieces, short enough to grill evenly without charring the handle. A staple at food courts, night markets, and QSR grill counters.",
    applications: ["Kebabs", "Street food", "Food courts", "Events", "Food trucks", "Night markets"],
    primaryImage: `${CDN}/products/W26_1_ab0c6646-1d0d-4a90-8f4f-ca4e6d0d1639.jpg?v=1664946360`,
    galleryImages: [
      `${CDN}/products/W26_1_ab0c6646-1d0d-4a90-8f4f-ca4e6d0d1639.jpg?v=1664946360`,
      `${CDN}/products/G19_ad4bdb4d-80cb-4edd-920b-5f395d8d443e.jpg`,
    ],
    highlight: true,
  },
  {
    id: "skewer-15cm",
    name: "Gun Skewer 15cm",
    slug: "gun-skewers-15cm",
    category: "Skewers",
    length: "150mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Mid-size 15cm gun skewer for satay, yakitori, and grill platters — long enough to plate as a centerpiece, sturdy enough to survive an open flame. The most popular skewer size across hospitality and banqueting worldwide, and the one Asian-cuisine restaurants keep in steady rotation.",
    applications: ["Satay", "Yakitori", "Grill", "Hospitality", "Restaurants", "BBQ joints"],
    primaryImage: `${CDN}/products/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg`,
    galleryImages: [
      `${CDN}/products/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg`,
    ],
  },
  {
    id: "skewer-21cm",
    name: "Gun Skewer 21cm",
    slug: "gun-skewers-21cm",
    category: "Skewers",
    length: "210mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Long 21cm gun skewer built for heavy proteins on professional grills — full cuts of meat, churrasco-style service, and BBQ platters where a shorter skewer would burn through before the food is done. The choice for steakhouses and outdoor grill events.",
    applications: ["BBQ", "Churrasco", "Grill meats", "Street BBQ", "Steakhouses", "Outdoor catering"],
    primaryImage: `${CDN}/products/W26_1.jpg?v=1664945885`,
    galleryImages: [`${CDN}/products/W26_1.jpg?v=1664945885`],
  },

  // ── SETS ───────────────────────────────────────────────────────────────────
  {
    id: "set-fork-knife-tissue",
    name: "Set of 3 — Fork, Knife & Tissue",
    slug: "set-of-3-items-fork-knife-and-tisue",
    category: "Sets",
    length: "160mm",
    material: "FSC Birchwood + Kraft Paper",
    finish: "OPP sleeve",
    certifications: ["FSC®", "FDA CFR 21", "BPI Compostable", "BSCI Audited"],
    pcsPerBag: 50,
    bagsPerCarton: 10,
    pcsPerCarton: 500,
    moq: "500 sets",
    shortDescription:
      "Complete 3-piece cutlery set — birchwood fork, knife, and tissue — pre-packed in a single OPP sleeve so nothing has to be assembled or picked separately at packing time. Drop one sleeve into a delivery bag, airline tray, or amenity kit and the cutlery is done.",
    applications: ["Airlines", "Food delivery", "Hotels", "Premium takeaway", "Cloud kitchens", "Corporate meal programs", "Meal kit services"],
    primaryImage: `${CDN}/products/G52_1.jpg?v=1664961427`,
    galleryImages: [`${CDN}/products/G52_1.jpg?v=1664961427`],
    highlight: true,
  },

  // ── PAPER STRAWS ───────────────────────────────────────────────────────────
  {
    id: "straw-6mm",
    name: "Paper Straws 6mm",
    slug: "6mm-paper-straws",
    category: "Paper Straws",
    length: "197mm",
    material: "Food-grade kraft paper",
    finish: "Natural uncoated",
    certifications: ["FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Standard 6mm paper straw for water, juices, and everyday cold beverages. Holds its structure for up to 3 hours submerged in liquid — the threshold that matters for table service, where a straw sitting through a long meal can't go soft halfway through.",
    applications: ["Juice bars", "Cafés", "Hotels", "Restaurants", "Cloud kitchens", "Food delivery", "Corporate cafeterias"],
    primaryImage: `${CDN}/products/W40_1.jpg?v=1665051402`,
    galleryImages: [`${CDN}/products/W40_1.jpg?v=1665051402`],
  },
  {
    id: "straw-8mm",
    name: "Paper Straws 8mm",
    slug: "8-mm-paper-straws",
    category: "Paper Straws",
    length: "197mm",
    material: "Food-grade kraft paper",
    finish: "Natural uncoated",
    certifications: ["FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Wide 8mm paper straw with reinforced multi-layer construction built for beverages a standard straw can't handle — thick milkshakes, smoothies, and bubble tea where tapioca pearls need to pass through without clogging or crushing the straw.",
    applications: ["Bubble tea", "Milkshakes", "Smoothies", "QSR", "Dessert parlors", "Food trucks"],
    primaryImage: `${CDN}/products/W38_1.jpg?v=1665051710`,
    galleryImages: [`${CDN}/products/W38_1.jpg?v=1665051710`],
    highlight: true,
  },
  {
    id: "straw-10mm",
    name: "Paper Straws 10mm",
    slug: "10mm-paper-straws",
    category: "Paper Straws",
    length: "197mm",
    material: "Food-grade kraft paper",
    finish: "Natural uncoated",
    certifications: ["FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Extra-wide 10mm paper straw built for beverages with something to pull through, not just liquid — slushies, fruit chunks, and layered cocktails. The size premium bars and resort beverage programs stock when a standard straw would bottleneck the drink.",
    applications: ["Slushies", "Premium beverages", "Fruit drinks", "Bars", "Juice bars", "Resorts"],
    primaryImage: `${CDN}/products/W40_1.jpg?v=1665051402`,
    galleryImages: [`${CDN}/products/W40_1.jpg?v=1665051402`],
  },
];

// ── Product Families ────────────────────────────────────────────────────────

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: "forks",
    category: "Forks",
    headline: "Birchwood Forks",
    description:
      "Precision-stamped from FSC-certified birchwood. Available in 140mm and 160mm profiles with bulk or individual OPP sleeving options — from airline meal trays to full restaurant service. 10,000 units per export carton.",
    applications: ["Airlines", "Restaurants", "Hotels", "Catering", "Cloud Kitchens", "Food Delivery", "Healthcare", "Corporate Cafeterias"],
    moqRange: "10,000 pcs",
    skuCount: 3,
    heroImage: `${CDN}/collections/C4_4.png?v=1662374267`,
    sectionId: "forks",
  },
  {
    id: "spoons",
    category: "Spoons",
    headline: "Birchwood Spoons",
    description:
      "Four sizes: 110mm, 140mm, and 160mm bulk — plus individually sleeved 110mm for premium service. Heat-resistant for hot food and soup service, and sized right down for desserts and single servings.",
    applications: ["Dairy", "Cafés", "Hotels", "Food Service", "Ice Cream Parlors", "Hospitals", "Institutions", "Cloud Kitchens"],
    moqRange: "10,000 pcs",
    skuCount: 4,
    heroImage: `${CDN}/collections/C5.png?v=1662374075`,
    sectionId: "spoons",
  },
  {
    id: "knives",
    category: "Knives",
    headline: "Birchwood Knives",
    description:
      "140mm compact and 165mm full-size profiles. Rigid enough for firm foods like paneer and parathas while remaining 100% biodegradable and compostable. 10,000 units per carton.",
    applications: ["Restaurants", "Airlines", "Catering", "Hotels", "Cloud Kitchens", "Banquet Halls", "Food Delivery", "Institutional Dining"],
    moqRange: "10,000 pcs",
    skuCount: 2,
    heroImage: `${CDN}/collections/C3_3.png?v=1662374387`,
    sectionId: "knives",
  },
  {
    id: "sporks",
    category: "Sporks",
    headline: "Birchwood Sporks",
    description:
      "Spoon-fork hybrid in 140mm and 160mm. Reduces cutlery SKUs for operators while maintaining full dining functionality. A global airline favourite, and a practical single-utensil pick for delivery and outdoor formats.",
    applications: ["Airlines", "Travel Catering", "Fast Casual", "Takeaway", "Cloud Kitchens", "Food Delivery", "Meal Kit Services", "Picnics & Outdoor Events"],
    moqRange: "10,000 pcs",
    skuCount: 2,
    heroImage: `${CDN}/collections/C2_2.png?v=1663670170`,
    sectionId: "sporks",
  },
  {
    id: "stirrers",
    category: "Stirrers",
    headline: "Coffee Stirrers",
    description:
      "110mm, 140mm, and 160mm birchwood stirrers. 50,000 units per carton. The highest-volume SKU — ideal for coffee chains and large hospitality groups, right down to office pantries and specialty cafés.",
    applications: ["Coffee Chains", "Hotels", "Offices", "Catering", "QSR", "Specialty Coffee", "Bars & Lounges", "Corporate Pantries"],
    moqRange: "50,000 pcs",
    skuCount: 3,
    heroImage: `${CDN}/collections/Untitled_design_61.png?v=1662375316`,
    sectionId: "stirrers",
  },
  {
    id: "skewers",
    category: "Skewers",
    headline: "Gun Skewers",
    description:
      "7cm, 10cm, 15cm, and 21cm birchwood skewers with signature gun-tip profile. 20,000 units per carton. Sized from cocktail canapés up to full BBQ cuts, for grill, street food, and banqueting worldwide.",
    applications: ["Grill", "BBQ", "Street Food", "Banqueting", "Food Courts", "Steakhouses", "Events", "Hospitality"],
    moqRange: "20,000 pcs",
    skuCount: 4,
    heroImage: `${CDN}/collections/Untitled_design_58.png?v=1663670146`,
    sectionId: "skewers",
  },
  {
    id: "sets",
    category: "Sets",
    headline: "Cutlery Sets",
    description:
      "Pre-packed fork, knife, and tissue in OPP sleeves. 500 sets per carton. One sleeve drops straight into a delivery bag, airline tray, or amenity kit — nothing to assemble at packing time.",
    applications: ["Airlines", "Food Delivery", "Hotels", "Premium Takeaway", "Cloud Kitchens", "Corporate Meal Programs", "Meal Kit Services"],
    moqRange: "500 sets",
    skuCount: 1,
    heroImage: `${CDN}/collections/C6_4.png?v=1662375675`,
    sectionId: "sets",
  },
  {
    id: "straws",
    category: "Paper Straws",
    headline: "Paper Straws",
    description:
      "6mm, 8mm, and 10mm food-grade kraft paper straws. 50,000 units per carton. Holds integrity for 3+ hours — from thin juices to thick bubble tea. FDA, EU, and BPI Compostable certified.",
    applications: ["Juice Bars", "Cafés", "QSR", "Bubble Tea", "Hotels", "Restaurants", "Food Delivery", "Bars"],
    moqRange: "50,000 pcs",
    skuCount: 3,
    heroImage: `${CDN}/products/W40_1.jpg?v=1665051402`,
    sectionId: "straws",
  },
];

// ── Helper utilities ────────────────────────────────────────────────────────

export function getProductsByCategory(category: ProductCategory): BioProduct[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string): BioProduct | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFamilyByCategory(category: ProductCategory): ProductFamily | undefined {
  return PRODUCT_FAMILIES.find((f) => f.category === category);
}

export const CERTIFICATIONS_LIST = [
  {
    id: "fsc",
    name: "FSC® 100%",
    fullName: "Forest Stewardship Council",
    description: "Chain of custody certified. All birchwood sourced from responsibly managed forests.",
    scope: "All birchwood products",
  },
  {
    id: "iso",
    name: "ISO 9001:2015",
    fullName: "Quality Management System",
    description: "Certified quality management across all production processes and export operations.",
    scope: "Manufacturing operations",
  },
  {
    id: "fda",
    name: "FDA CFR 21",
    fullName: "US Food & Drug Administration",
    description: "Food-contact safe for the United States market. Compliant with FDA food contact regulations.",
    scope: "US market exports",
  },
  {
    id: "bpi",
    name: "BPI Compostable",
    fullName: "Biodegradable Products Institute",
    description: "Independently verified industrial compostability. Certified for North American composting standards.",
    scope: "Birchwood cutlery range",
  },
  {
    id: "bsci",
    name: "BSCI Audited",
    fullName: "Business Social Compliance Initiative",
    description: "Independently audited for ethical labor practices, workplace safety, and social compliance.",
    scope: "Manufacturing facility",
  },
  {
    id: "eu",
    name: "EU 10/2011",
    fullName: "EU Food Contact Materials",
    description: "Certified food-contact safe for the European market under EU Regulation 10/2011.",
    scope: "European market exports",
  },
];
