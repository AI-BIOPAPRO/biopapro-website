import type { Product, Certification, ManufacturingStep, SustainabilityMetrics } from "@/types";

export const PRODUCT_CATALOG: Product[] = [
  {
    id: "premium-forks",
    name: "Classic Birchwood Fork",
    category: "cutlery",
    tagline: "Ultra-rigid tines with micro-abrasive satin polish.",
    description:
      "Designed carefully for structural integrity and thermal resistance. Crafted with dual-reinforced neck curves to withstand temperatures up to 100°C without warping, taste transfer, or structural breakdown.",
    material: "100% Organic White Birchwood (FSC Certified)",
    sizes: ["140mm", "160mm (Standard)", "180mm (Heavy Duty)"],
    thickness: "1.8mm – 2.2mm",
    moistureContent: "Under 8% (Anti-deformation threshold)",
    certificationIds: ["fsc", "sgs-food", "bpi-compost", "bsci"],
    features: [
      "Micro-vibrancy satin double polishing for absolute anti-splinter safety.",
      "High-pressure hydraulic hot forming creates deeper tines than conventional wood.",
      "Zero chemical bleach, toxic waxes, or artificial coating.",
      "Naturally home-degradable in 60–90 days.",
    ],
    b2bMOQ: "100,000 units (Carton Box packaged)",
    packaging: "Standard Bulk, Paper Wrap, or Bio-PE Protective Sleeves",
    densityClass: "Heavy Grade Birch (HGB-750)",
    imageUrl: "https://picsum.photos/seed/woodfork/800/600",
  },
  {
    id: "premium-spoons",
    name: "Aesthetic Birchwood Spoon",
    category: "cutlery",
    tagline: "Ergonomically concave contour with standard fluid capacity.",
    description:
      "Engineered specifically to solve the 'dry mouth feel' often associated with generic wooden cutlery. Our unique polished scoop architecture mimics ceramic ergonomics while maintaining lightweight compostability.",
    material: "100% Organic White Birchwood (FSC Certified)",
    sizes: ["110mm (Dessert)", "140mm (Medium)", "160mm (Standard)"],
    thickness: "1.8mm",
    moistureContent: "Under 8%",
    certificationIds: ["fsc", "sgs-food", "bpi-compost"],
    features: [
      "Smooth rim burnishing ensures high-end lip feeling.",
      "Deeper pocket molding designed through custom hydraulic engineering.",
      "Completely neutral wood taste signature.",
      "100% USDA Biobased certified material.",
    ],
    b2bMOQ: "100,000 units",
    packaging: "Bulk (1000/sleeve) or individual paper pouch",
    densityClass: "Heavy Grade Birch (HGB-750)",
    imageUrl: "https://picsum.photos/seed/woodspoon/800/600",
  },
  {
    id: "premium-knives",
    name: "Reinforced Birchwood Knife",
    category: "cutlery",
    tagline: "Beveled cutting edge with high-tensile serration.",
    description:
      "Provides exceptional shearing force for cooked proteins and fibrous agricultural grains. Designed with multi-layered compression to secure rigidity without fracturing under dense lateral loads.",
    material: "High-density White Birchwood",
    sizes: ["165mm (Standard)", "185mm (Steak Edition)"],
    thickness: "2.3mm (Faceted thickness)",
    moistureContent: "Under 7.5%",
    certificationIds: ["fsc", "sgs-food", "bsci"],
    features: [
      "Micro-scalloped teeth profile for superior cutting speed.",
      "Double-beveled edge profile maximizes thermal resistance.",
      "Splinter-proof treated shoulders prevent debris detachment.",
      "Elegant sandblasted grip textures.",
    ],
    b2bMOQ: "100,000 units",
    packaging: "100 units / Craft Sleeve, 10 Sleeves / Carton",
    densityClass: "Ultra-Hard Birch (UHB-820)",
    imageUrl: "https://picsum.photos/seed/woodknife/800/600",
  },
  {
    id: "coffee-stirrers",
    name: "Bespoke Coffee Stirrer",
    category: "stirrers",
    tagline: "Pristine micro-rounded stirrers for hot beverages.",
    description:
      "The global gold standard for premium cafe franchises and airline carrier service. Engineered with perfectly rounded ends to protect paper cup liners, and double-dried to prevent warping in deep boiling coffee.",
    material: "100% Renewable White Birchwood",
    sizes: ["110mm", "140mm (Standard)", "178mm (Extended Tall)", "190mm"],
    thickness: "1.3mm – 1.5mm",
    moistureContent: "Under 7%",
    certificationIds: ["fsc", "sgs-food", "bpi-compost"],
    features: [
      "Chamfered edge profiles prevents tearing in delicate cup linings.",
      "Double-tumble mechanical polishing removes micro-whiskers.",
      "FSC wood certification proves zero illegal deforestation.",
      "Individually wrapped in 100% recyclable virgin kraft paper.",
    ],
    b2bMOQ: "500,000 units",
    packaging: "Individually Paper-Wrapped with soy-ink custom branding, or Bulk packed",
    densityClass: "Standard Grade Birch (SGB-680)",
    imageUrl: "https://picsum.photos/seed/woodstirrer/800/600",
  },
  {
    id: "icecream-sticks",
    name: "Medical-Grade Ice Cream Stick",
    category: "sticks",
    tagline: "Zero-odor, double-polished sticks for automatic packaging lines.",
    description:
      "Serrated-free, precise calibrated sticks developed for ultra-low friction on rapid ice cream extrusion lines. Designed to fit high-speed industrial machinery flawlessly with strict tolerances under 0.1mm.",
    material: "Premium Select Northern Birchwood",
    sizes: ["75mm (Paddles)", "93mm (Standard Rounded)", "114mm (Classic Giant)"],
    thickness: "2.0mm (+/- 0.05mm tolerance)",
    moistureContent: "Under 9% (Engineered elastic bounce)",
    certificationIds: ["fsc", "sgs-food", "bsci", "iso-9001"],
    features: [
      "Calibrated geometry prevents high-speed sorting lane jams.",
      "Hypoallergenic surface structure tested in clinical laboratory environments.",
      "Naturally odorless to safeguard subtle premium vanilla & chocolate flavors.",
      "High elasticity prevents snapping during automatic press cycles.",
    ],
    b2bMOQ: "1,000,000 units",
    packaging: "Bundled in food-grade film, sterilized packing box",
    densityClass: "Elite Elastic Birch (EEB-780)",
    imageUrl: "https://picsum.photos/seed/icestick/800/600",
  },
  {
    id: "premium-skewers",
    name: "Super-Sharp Polished Skewer",
    category: "skewers",
    tagline: "Anti-charring micropoint skewers for dynamic grilling.",
    description:
      "Heavy-duty skewers equipped with smooth circular shafts to secure uniform cooking results. Specifically dried to resist active burning or splintering during high-heat barbecue service.",
    material: "Organic Moso Bamboo or Select White Birchwood",
    sizes: ["150mm", "180mm", "200mm (Barbecue Standard)", "240mm", "300mm"],
    thickness: "2.5mm – 4.0mm diameter",
    moistureContent: "Under 10%",
    certificationIds: ["fsc", "sgs-food"],
    features: [
      "Single-point diamond shape tip for effortless food piercing.",
      "Carbonized heat baking provides moisture barrier and resists mold growth.",
      "Dual polishing prevents small fiber slivers from sticking to meats.",
      "Zero sulfur processing or synthetic chemical preservatives used.",
    ],
    b2bMOQ: "250,000 units",
    packaging: "Bundled, moisture-guarded polytube wrap, master carton",
    densityClass: "High-Core Bamboo Grade (HBG-880)",
    imageUrl: "https://picsum.photos/seed/woodskewer/800/600",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "fsc",
    name: "FSC® 100% Certified Forest Stewardship",
    issuer: "Forest Stewardship Council",
    validFrom: "Consecutive renewal since 2018",
    description:
      "Ensures all wood is sourced from strictly monitored, non-monoculture, sustainably-managed state forests. Completely prevents unauthorized deforestation and supports ecosystem biodiversity.",
    iconName: "Trees",
  },
  {
    id: "sgs-food",
    name: "SGS Food Contact & FDA Compliance",
    issuer: "SGS Geneva / US FDA Standard 21 CFR",
    validFrom: "Annual Audit Verification Passed",
    description:
      "Certifies that the raw birchwood is completely free of industrial chemicals, formaldehydes, optical brighteners, lead, or plasticizers under rigorous water and acetic acid extraction testing.",
    iconName: "ShieldCheck",
  },
  {
    id: "bpi-compost",
    name: "BPI Compostable & Biodegradability Approval",
    issuer: "Biodegradable Products Institute / DIN CERTCO",
    validFrom: "Europe EN 13432 & US ASTM D6400 Standards",
    description:
      "Guarantees complete soil assimilation. The product biodegrades back into natural organic compost within 90 days in home or industrial composting environments, leaving zero heavy metal residue.",
    iconName: "CheckCircle",
  },
  {
    id: "bsci",
    name: "Amfori BSCI Social Compliance",
    issuer: "Amfori Business Social Compliance Initiative",
    validFrom: "Grade A Rating Verified",
    description:
      "Audits and certifies that the manufacturing plants guarantee humane working hours, fair living wages, strict occupational safety equipment (PPE), and child-labor-free supply lines.",
    iconName: "BadgeCheck",
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015 Quality Management System",
    issuer: "International Organization for Standardization",
    validFrom: "Continuous calibration checks",
    description:
      "Guarantees absolute manufacturing consistency, with real-time digital laser measurement of product thickness, structural tolerances under 0.05mm, and comprehensive traceability.",
    iconName: "Cpu",
  },
];

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    step: 1,
    title: "Eco-Harvest & Bark Peeling",
    phase: "Sustainable Extraction",
    description:
      "White birch logs are chosen from frozen Siberian or Northern temperate zones when winter humidity levels are lowest. Outer rough bark is cleanly peeled, leaving the clean, nutrient-neutral heartwood fibers ready for slicing.",
    icon: "TreePine",
  },
  {
    step: 2,
    title: "Precision Micro-Veneer Slicing",
    phase: "Log Transformation",
    description:
      "High-speed rotary lathes slice logs into incredibly thin, uniform ribbons of wood (exactly 1.2mm to 2.4mm thick). Precision digital micrometers inspect uniform density across every micron of wood grain.",
    icon: "Scissors",
  },
  {
    step: 3,
    title: "Hydraulic Die-Stamping",
    phase: "Shape Sculpting",
    description:
      "Hydraulic press dies stamp out the raw 2D contours of cutlery or spoons. A patented physical steam-conditioning system makes the hardwood temporarily elastic, allowing the deep 3D structural indent of forks and spoons.",
    icon: "Layers",
  },
  {
    step: 4,
    title: "High-Temperature Baking & Sterilization",
    phase: "Dehydration & Hygiene",
    description:
      "Cutlery items pass through hot dry airflow ovens heated to 150°C. This reduces natural moisture below 8%, sealing the internal structures and sterilizing the wood against any organic mold or bacteria without chemical sanitizers.",
    icon: "FlameKindling",
  },
  {
    step: 5,
    title: "Micro-Abrasive Double Polish & Laser Branding",
    phase: "Satin Finish & Marking",
    description:
      "Spoons and forks tumble in a multi-stage dry mechanical drum with organic wood shavings for 24–48 hours. This burnishes every edge to liquid-smooth perfection. Custom brand logos are then laser-embossed with micron-level accuracy.",
    icon: "Sparkles",
  },
  {
    step: 6,
    title: "Optical Sorting & Sterile Packaging",
    phase: "Infallible Delivery",
    description:
      "Smart 4K optical sorting machines reject products with structural knots, dimensional variances, or micro-cracks. Verified perfect pieces are wrapped in high-density sterilized unbleached craft paper, ready for export.",
    icon: "Boxes",
  },
];

export const SUSTAINABILITY_METRICS: SustainabilityMetrics = {
  treesPlantedDailyEquivalent: 340,
  landfillCubicMetersAvoidedPerThousand: 0.12,
  carbonSavedKgPerThousand: 4.8,
  oceanMicroplasticsPreventedUnitsPerThousand: 1000,
  waterLitersPreservedPerThousand: 12.4,
};

export const EXPORT_COUNTRIES = [
  "United States", "United Kingdom", "Germany", "France", "Netherlands",
  "UAE", "Saudi Arabia", "Japan", "South Korea", "Australia",
  "Canada", "Spain", "Italy", "Sweden", "Singapore",
  "India", "Brazil", "South Africa",
];
