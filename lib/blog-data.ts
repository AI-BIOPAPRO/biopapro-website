export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  body: { heading?: string; text: string }[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  "industry-news":    "Industry News",
  "sustainability":   "Sustainability",
  "product-updates":  "Product Updates",
  "company-news":     "Company News",
  "regulations":      "Regulations",
};

/** ~200 words/minute, rounded up to a whole minute, minimum 1. */
export function estimateReadingMinutes(post: Post): number {
  const words = post.body.reduce((sum, block) => sum + block.text.trim().split(/\s+/).length, 0);
  return Math.max(1, Math.ceil(words / 200));
}

export const POSTS: Post[] = [
  {
    slug: "india-single-use-plastic-ban-2025",
    title: "India's Single-Use Plastic Ban: What Food Businesses Need to Know in 2025",
    excerpt: "India banned 19 categories of single-use plastic items in 2022. Three years on, enforcement is tightening. Here's what restaurant owners, caterers, and food chains need to do now.",
    category: "regulations",
    publishedAt: "2025-11-10",
    author: "Biopapro Team",
    body: [
      { text: "In July 2022, the Government of India enforced a ban on 19 single-use plastic items under the Plastic Waste Management Amendment Rules. This included plastic cutlery — forks, spoons, knives, straws, and stirrers. Three years later, enforcement agencies across Maharashtra, Delhi, Karnataka, and Tamil Nadu are actively fining businesses found using banned items." },
      { heading: "Which Items Are Banned?", text: "The banned list covers plastic plates, cups, glasses, cutlery (forks, spoons, knives), straws, trays, wrapping films around sweet boxes, invitation cards, cigarette packets, and plastic or PVC banners under 100 microns. Penalties range from ₹500 to ₹1 lakh depending on the quantity and repeat offence." },
      { heading: "What Should Food Businesses Switch To?", text: "FSC-certified birchwood cutlery is the most practical alternative. It is food-safe, compostable, does not splinter, and handles both hot and cold food without deforming. Biopapro manufactures birchwood forks, spoons, knives, sporks, and coffee stirrers at scale from our Mumbai facility — available for bulk domestic orders with delivery across India." },
    ],
  },
  {
    slug: "birchwood-vs-bamboo-cutlery",
    title: "Birchwood vs Bamboo Cutlery: Which Is Better for Your Restaurant?",
    excerpt: "Both are marketed as eco-friendly. But for restaurants and caterers buying in bulk, the differences in strength, cost, food safety, and supplier reliability matter a lot.",
    category: "industry-news",
    publishedAt: "2025-10-18",
    author: "Biopapro Team",
    body: [
      { text: "When switching away from plastic cutlery, most food businesses consider two options: birchwood or bamboo. Both are plant-based and biodegradable. But for commercial kitchens buying tens of thousands of pieces per month, the practical differences matter." },
      { heading: "Strength & Handling", text: "Birchwood is denser and more uniform than bamboo, which has a natural hollow structure. This makes birchwood cutlery significantly stronger — it does not flex or crack under pressure from dense foods like biryani, pasta, or grilled meats. Bamboo, while strong, can have micro-splits along the grain that are only visible at scale." },
      { heading: "Food Safety Certifications", text: "Birchwood cutlery from certified manufacturers like Biopapro carries FSC® Chain of Custody, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and BRCGS certifications. This makes it accepted by airlines, hotel chains, and institutional clients who require documented manufacturing and food-contact compliance. Bamboo certification standards are less standardized globally." },
      { heading: "Our Verdict", text: "For high-volume food service — restaurants, caterers, airlines, corporate cafeterias — birchwood wins on consistency, certification coverage, and supplier reliability. Bamboo works well for lighter applications like dessert sampling or café settings." },
    ],
  },
  {
    slug: "what-does-fsc-certified-cutlery-mean",
    title: "What Does FSC Certified Cutlery Actually Mean?",
    excerpt: "You see FSC on wooden cutlery packaging everywhere now. But what does the certification actually verify, and why does it matter when choosing a supplier?",
    category: "sustainability",
    publishedAt: "2025-09-05",
    author: "Biopapro Team",
    body: [
      { text: "FSC stands for Forest Stewardship Council — an international non-profit that certifies forests managed responsibly. When you see FSC® 100% on a wooden cutlery product, it means every piece of wood used was sourced from a forest that meets FSC's environmental and social standards." },
      { heading: "What FSC Certification Verifies", text: "FSC Chain of Custody (CoC) certification tracks wood from the forest through every step of production — sawmill, manufacturing, packaging — to the final product. It ensures no illegal logging, no deforestation of high-conservation-value areas, fair treatment of forest workers, and replanting commitments." },
      { heading: "Why It Matters for Your Business", text: "If your restaurant or hotel has sustainability commitments, FSC certification gives you documented proof that your wooden cutlery comes from responsible sources — something you can include in your ESG reports, menu cards, or marketing. For export buyers, FSC is often a mandatory requirement from European and North American retail chains." },
      { text: "Biopapro holds FSC® 100% Chain of Custody certification. We can provide certificate copies and documentation packages on request for compliance teams and procurement audits." },
    ],
  },
  {
    slug: "biopapro-100-million-units-milestone",
    title: "Biopapro Crosses 100 Million Units Per Month — A Manufacturing Milestone",
    excerpt: "Our Mumbai manufacturing facility now produces over 100 million birchwood cutlery pieces per month — supplying restaurants, airlines, hotel chains, and food service distributors across India.",
    category: "company-news",
    publishedAt: "2025-08-20",
    author: "Biopapro Team",
    body: [
      { text: "We are proud to share that Biopapro's production capacity has crossed 100 million units per month at our Girgaon, Mumbai facility. This milestone reflects the growing adoption of wooden cutlery across India's food service industry and the trust our customers place in us as a reliable supply partner." },
      { heading: "What This Means for Our Customers", text: "Higher production capacity means shorter lead times, better price stability, and the ability to take on larger domestic orders without minimum order quantity constraints becoming a barrier. For restaurant chains and catering companies scaling up their operations, we can now accommodate growth without disruption." },
      { heading: "70%+ Women Workforce", text: "Over 70% of our 380-person workforce is women. This has been a structural commitment since our founding in 2019 — not a quota, but a deliberate hiring and training programme. Every unit produced at Biopapro carries the work of a team we are genuinely proud of." },
    ],
  },
  {
    slug: "eu-single-use-plastics-directive-export-guide",
    title: "Exporting to the EU? What the Single-Use Plastics Directive Means for Wooden Cutlery",
    excerpt: "The EU's SUP Directive banned plastic cutlery across all 27 member states in 2021. Wood-based alternatives aren't banned — but EU buyers will still expect specific documentation before they'll place an order.",
    category: "regulations",
    publishedAt: "2025-12-05",
    author: "Biopapro Team",
    body: [
      { text: "EU Directive 2019/904 — the Single-Use Plastics Directive — took effect across all 27 member states in July 2021. It bans the sale of several single-use plastic items where sustainable alternatives exist, including plastic cutlery, plates, straws, and stirrers." },
      { heading: "What's Actually Banned", text: "The core list covers plastic cutlery, plates, straws, balloon sticks, cotton bud sticks, and expanded polystyrene food containers and cups. Wood, bamboo, and other plant-based alternatives are not covered by the ban itself — they're the products the directive is designed to push buyers toward." },
      { heading: "Not Banned Doesn't Mean No Rules", text: "Wooden tableware sold into the EU still falls under general food-contact material regulation (EC 1935/2004) and, depending on the country, national packaging-waste rules. This means EU buyers — retailers, distributors, hospitality groups — will typically ask for chain-of-custody documentation on the wood sourcing, plus manufacturing and quality certificates from the supplier, before they'll commit to an order." },
      { heading: "What to Ask Your Supplier For", text: "At minimum: FSC Chain of Custody certification for the wood itself, ISO 9001 for the manufacturing quality system, and any relevant product-standard certification (BRCGS is widely recognised across EU retail). Ask for certificate copies up front, not after the first container has shipped." },
    ],
  },
  {
    slug: "industrial-vs-home-compostable-explained",
    title: "Industrial vs Home Compostable: What 'Compostable' Actually Means",
    excerpt: "'Compostable' gets used loosely on packaging. The conditions a product needs to actually break down — and whether your city even has the facility for it — matter more than the word itself.",
    category: "sustainability",
    publishedAt: "2026-01-15",
    author: "Biopapro Team",
    body: [
      { text: "\"Compostable\" is one of the most overused words on food-service packaging, and it means different things depending on what follows it. The distinction that actually matters for a buyer is industrial vs. home composting." },
      { heading: "Industrial Composting", text: "Industrial composting facilities maintain sustained high temperatures — typically 55–60°C — along with controlled moisture and turning schedules. Materials certified for industrial composting (to standards like ASTM D6400 or EN 13432) are tested to break down fully under those specific conditions, usually within weeks." },
      { heading: "Home Composting", text: "A backyard compost bin runs much cooler and far less consistently. Products certified for industrial composting are not automatically safe to claim as home-compostable — the two are separate certifications with separate test standards, and conflating them is a common source of greenwashing complaints." },
      { heading: "Where Wood Fits In", text: "Birchwood is a natural material, not a plastic with a biodegradable coating — there's no synthetic additive breaking down, just wood. It decomposes without leaving microplastic residue, and faster under industrial composting conditions than left to sit untreated. Before making a compostability claim to your own customers, check whether your city or your customer's city actually has industrial composting infrastructure — the claim is only useful if there's somewhere for the product to actually go." },
    ],
  },
  {
    slug: "how-to-vet-wooden-cutlery-supplier",
    title: "How to Vet a Wooden Cutlery Supplier: A Procurement Checklist",
    excerpt: "Before you commit to a container order, here's what an experienced import or procurement team actually checks — beyond just price per unit.",
    category: "industry-news",
    publishedAt: "2026-02-10",
    author: "Biopapro Team",
    body: [
      { text: "Switching from plastic to wooden cutlery is a supplier decision, not just a product decision. A low price per unit means little if the supplier can't document their sourcing, hit lead times, or survive your first quality audit. Here's what to actually check." },
      { heading: "Certifications, Not Just Claims", text: "Ask for certificate copies, not a marketing page listing logos. At minimum you want FSC Chain of Custody for the wood, ISO 9001 for quality management, and ideally ISO 14001/45001 for environmental and workplace-safety management. A supplier that hesitates to send certificate copies before an order is a red flag." },
      { heading: "Production Capacity vs. Your Order Size", text: "Ask how many units per month the facility actually produces, not just their stated capacity. A supplier running near their ceiling will struggle with a sudden volume increase or reorder — ask how they've handled a spike in demand before." },
      { heading: "Documentation Per Shipment", text: "A reliable export supplier should be able to tell you, without checking, exactly what documents ship with every container: commercial invoice, packing list, bill of lading, certificate of origin, and — depending on your destination country's rules for wood products — phytosanitary documentation." },
      { heading: "Always Request Samples", text: "No amount of documentation substitutes for handling the actual product. Request samples before committing to a container order — check weight, finish, and how the cutlery holds up with your actual menu items, not a generic test." },
    ],
  },
  {
    slug: "wooden-vs-cornstarch-pla-cutlery",
    title: "Wooden Cutlery vs Cornstarch (PLA) Cutlery: Which Should You Choose?",
    excerpt: "PLA cutlery looks and feels like plastic because, chemically, it mostly behaves like it. Here's where it actually differs from wood — and where the two materials solve different problems.",
    category: "industry-news",
    publishedAt: "2026-03-20",
    author: "Biopapro Team",
    body: [
      { text: "PLA (polylactic acid) cutlery is one of the most common plastic alternatives on the market — made by fermenting plant starch, usually corn or sugarcane, into a bioplastic that can be molded exactly like conventional plastic. It's a different material from wood, with different tradeoffs." },
      { heading: "PLA Needs Industrial Composting — Specifically", text: "PLA is certified compostable only under industrial composting conditions. Left in a landfill, the ocean, or a backyard compost pile, it behaves close to regular plastic and does not meaningfully break down. If your market doesn't have industrial composting access, a PLA compostability claim doesn't hold up in practice." },
      { heading: "Heat Tolerance", text: "PLA softens at relatively low temperatures — often in the 50–60°C range — which makes it a poor fit for hot food, hot beverages, or dishwashing. Wood holds its shape under heat that would deform PLA, without special formulation." },
      { heading: "Our Verdict", text: "For hot food service, or for markets without reliable industrial composting infrastructure, wood is the more practical choice — it's a natural material that doesn't depend on a specific facility existing nearby to make good on its sustainability claim. PLA can work well for cold-food applications in markets with established industrial composting." },
    ],
  },
  {
    slug: "plastic-foodware-regulation-trends",
    title: "Single-Use Plastic Foodware Rules Are Tightening Globally — Here's the Pattern",
    excerpt: "Outright bans, 'on-request only' rules, surcharges, extended producer responsibility schemes — the mechanisms vary by country and city, but the direction is consistent.",
    category: "regulations",
    publishedAt: "2026-04-08",
    author: "Biopapro Team",
    body: [
      { text: "Regulation on single-use plastic foodware doesn't move the same way in every country — some pass outright bans, others require foodware only be given \"on request,\" others use extended producer responsibility fees to make plastic more expensive relative to alternatives. The mechanisms differ, but the direction is the same almost everywhere." },
      { heading: "Why This Matters for Procurement, Not Just Compliance", text: "Rules change faster than most supply chains do. A business that switches to wood or another plastic alternative ahead of a local mandate avoids the scramble that happens when a ban takes effect and every competitor is suddenly sourcing the same alternative at once, with lead times stretching out." },
      { heading: "What We Tell Buyers", text: "Don't wait for your specific city or state to pass a rule before you start evaluating alternatives — supplier qualification, sample testing, and building a reliable reorder relationship all take time. Treat the regulatory direction as the signal, and start the supplier conversation early rather than under deadline pressure." },
      { text: "Regulations specific to your market change frequently and vary by jurisdiction — this isn't a substitute for checking current local rules with your own compliance team or customs broker." },
    ],
  },
  {
    slug: "how-birchwood-becomes-a-fork",
    title: "From Birch Log to Table: How Birchwood Becomes a Fork",
    excerpt: "A look at what actually happens between a birch forest and the cutlery on a food-delivery tray — soaking, stamping, heat-forming, and the quality checks in between.",
    category: "company-news",
    publishedAt: "2026-05-15",
    author: "Biopapro Team",
    body: [
      { text: "Wooden cutlery looks simple — a flat piece of wood shaped like a fork. The manufacturing process behind it involves more steps than that simplicity suggests." },
      { heading: "Soaking", text: "Birchwood billets arrive at the facility and are soaked to bring them to the right moisture content — too dry and the wood splits under the stamping press, too wet and it won't hold its shape after forming." },
      { heading: "Stamping and Heat-Forming", text: "High-speed stamping lines cut each piece to its final dimensional profile, and heat-forming presses shape the tines of a fork or the bowl of a spoon without any adhesive or chemical coating — just controlled heat and pressure on the wood itself." },
      { heading: "Sorting and Quality Control", text: "Automated optical sorting screens every unit for dimensional defects or surface flaws before it reaches manual inspection. Only units that pass both automated and manual checks move to packaging." },
      { heading: "Packaging and Export Prep", text: "Finished units are packed into polybags, then into export cartons sized for efficient container loading, with documentation — certificates, invoices, packing lists — prepared in parallel so the shipment is ready to move the moment it's loaded." },
    ],
  },
  {
    slug: "carbon-footprint-wooden-vs-plastic-cutlery",
    title: "Carbon Footprint of Wooden vs Plastic Cutlery: The Basic Concepts",
    excerpt: "Before comparing specific numbers between suppliers, it helps to understand what's actually being measured — and why 'biogenic carbon' makes wood a fundamentally different calculation than plastic.",
    category: "sustainability",
    publishedAt: "2026-06-10",
    author: "Biopapro Team",
    body: [
      { text: "Comparing the carbon footprint of wooden and plastic cutlery isn't as simple as picking a number off a label — the two materials are fundamentally different types of carbon source, and that difference matters before you even get to manufacturing emissions." },
      { heading: "Biogenic vs. Fossil Carbon", text: "Plastic cutlery is made from petroleum — carbon that has been locked underground for millions of years and is newly released into the atmosphere when extracted, refined, and eventually incinerated or left to persist. Wood is biogenic carbon: the tree absorbed that carbon from the atmosphere while growing, and a responsibly managed, replanted forest keeps absorbing more. It's a materially different starting point for any footprint comparison." },
      { heading: "End-of-Life Matters As Much As Production", text: "A full comparison has to include what happens after disposal, not just manufacturing emissions. Plastic that ends up in a landfill or the ocean persists for centuries. Wood that reaches composting conditions returns to organic matter — a very different end-of-life emissions profile even before counting production." },
      { heading: "Ask for the Actual Data, Not a Claim", text: "If your business needs documented carbon-footprint figures for ESG reporting, ask your supplier for a real life-cycle assessment (LCA) rather than accepting a general sustainability claim — a credible LCA will specify its methodology and system boundaries, and a supplier that can't produce one shouldn't be quoted as having done the analysis." },
    ],
  },
  {
    slug: "choosing-right-cutlery-length-for-your-menu",
    title: "Choosing the Right Cutlery Size for Your Menu: A Quick Guide",
    excerpt: "160mm fork or 190mm? 165mm knife or 185mm? Cutlery sizing isn't arbitrary — it tracks what's actually on the plate.",
    category: "product-updates",
    publishedAt: "2026-07-18",
    author: "Biopapro Team",
    body: [
      { text: "Cutlery length is an easy spec to overlook until the wrong size shows up at scale — a fork too short for a deep takeaway container, or a knife too light for a dense cut of meat. A quick guide to matching size to use case." },
      { heading: "Forks and Spoons: 140mm–190mm", text: "140mm sizes suit compact takeaway and dessert applications. 160mm is the standard general-purpose size for most restaurant and catering use. 190mm forks and spoons are built for deeper containers — think biryani tubs or large salad bowls — where a shorter handle makes the container awkward to eat from." },
      { heading: "Knives: 165mm–185mm", text: "165mm knives handle most food-service cutting needs. 185mm gives more leverage for denser foods — grilled meats, thicker vegetables — where a shorter blade requires more pressure to cut through." },
      { heading: "Stirrers and Skewers: 110mm–140mm, 70mm–100mm", text: "Coffee and tea stirrers typically run 110mm to 140mm depending on cup depth. Skewers for appetizers and small bites are shorter — 70mm to 100mm — sized for single-bite portions rather than full meals." },
      { text: "If you're not sure which size fits your menu, request a mixed sample pack before committing to a bulk order — it's a faster way to settle the question than guessing from a spec sheet." },
    ],
  },
  {
    slug: "wooden-cutlery-airlines-hospitality",
    title: "Why Airlines and Hotels Are Rethinking Plastic Cutlery",
    excerpt: "In-flight catering and hospitality are two of the largest institutional users of single-use cutlery anywhere — and both industries are under growing pressure to move away from plastic.",
    category: "industry-news",
    publishedAt: "2026-08-22",
    author: "Biopapro Team",
    body: [
      { text: "In-flight catering and hotel food service are both high-volume, high-visibility users of disposable cutlery — which makes them an early target for both regulation and public pressure to move away from plastic." },
      { heading: "Regulatory Pressure", text: "Airports and airlines operating in or through the EU fall under the same Single-Use Plastics Directive that applies to any food-service business in the region. Hotel groups with sustainability commitments face similar pressure from corporate ESG targets and increasingly from guests who notice the packaging they're served." },
      { heading: "The Practical Requirements Are Different From a Restaurant's", text: "Airline catering in particular has constraints a typical restaurant doesn't — weight matters for fuel costs, and cutlery has to survive a catering supply chain that can run days between packing and service. Wood's durability under those conditions, without needing refrigeration or special handling, is a practical advantage, not just an environmental one." },
      { heading: "What Buyers in This Space Ask For", text: "Documentation is non-negotiable at this scale — FSC sourcing, manufacturing quality certification, and consistent supply at high volume are baseline requirements before a supplier even gets considered for a tender." },
    ],
  },
  {
    slug: "export-documentation-checklist-wooden-tableware",
    title: "Export Documentation Checklist for Wooden Tableware Shipments",
    excerpt: "A rundown of the paperwork that typically moves with a container of wooden cutlery — and why getting it right the first time avoids a customs delay.",
    category: "regulations",
    publishedAt: "2026-09-25",
    author: "Biopapro Team",
    body: [
      { text: "A missing or incorrect document is one of the most common causes of a shipment getting held at customs — not product quality, not price, just paperwork. Here's what typically needs to travel with a wooden tableware export shipment." },
      { heading: "Standard Trade Documents", text: "Commercial invoice, packing list, bill of lading, and certificate of origin are standard for essentially any export shipment, wood-based or not — these establish what's in the container, its value, and where it legally originated." },
      { heading: "Material-Specific Documentation", text: "Some destination countries require phytosanitary certification for wood-based products specifically, to confirm the material is free of pests — the exact requirement varies by country and by whether the product is raw wood, wood packaging, or finished manufactured goods. Confirm the specific requirement for your destination with your customs broker rather than assuming it applies uniformly." },
      { heading: "Supplier Certificates, If Requested", text: "Buyers with their own compliance or ESG reporting requirements may also want copies of the supplier's own certificates — FSC Chain of Custody, ISO quality management, relevant product standards — attached to the shipment documentation, even though these aren't customs requirements themselves." },
      { text: "The practical fix for most documentation delays is the same: confirm the full document list with your supplier and your customs broker before the container ships, not after it's already at port." },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
