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

/**
 * Posts with a real cover photo in public/blog/covers/<slug>.jpg
 * (free-license Pexels images, picked per post topic). A post not listed
 * here falls back to the generated per-category BlogCover graphic instead
 * of linking a file that doesn't exist.
 */
const COVER_IMAGE_SLUGS = new Set([
  "india-single-use-plastic-ban-2025",
  "birchwood-vs-bamboo-cutlery",
  "what-does-fsc-certified-cutlery-mean",
  "biopapro-100-million-units-milestone",
  "eu-single-use-plastics-directive-export-guide",
  "industrial-vs-home-compostable-explained",
  "how-to-vet-wooden-cutlery-supplier",
  "wooden-vs-cornstarch-pla-cutlery",
  "plastic-foodware-regulation-trends",
  "how-birchwood-becomes-a-fork",
  "carbon-footprint-wooden-vs-plastic-cutlery",
  "choosing-right-cutlery-length-for-your-menu",
  "wooden-cutlery-airlines-hospitality",
  "export-documentation-checklist-wooden-tableware",
  "how-much-cutlery-do-you-need-moq-explained",
  "zero-waste-events-catering-trend",
  "why-birchwood-not-just-any-wood",
  "private-label-custom-branded-wooden-cutlery",
  "common-myths-about-wooden-cutlery",
  "sustainable-packaging-food-delivery-apps",
  "india-state-wise-plastic-ban-enforcement",
  "coffee-stirrers-vs-cutlery-sizing-guide",
  "why-some-restaurants-still-use-plastic-cutlery",
]);

export function getCoverImageSrc(post: Post): string | null {
  return COVER_IMAGE_SLUGS.has(post.slug) ? `/blog/covers/${post.slug}.jpg` : null;
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
  {
    slug: "how-much-cutlery-do-you-need-moq-explained",
    title: "How Much Cutlery Do You Actually Need? Understanding MOQ for Bulk Orders",
    excerpt: "Minimum order quantities can look intimidating on a spec sheet. Here's how to work out what you actually need before you request a quote.",
    category: "product-updates",
    publishedAt: "2026-09-28",
    author: "Biopapro Team",
    body: [
      { text: "A minimum order quantity (MOQ) is the smallest volume a manufacturer will produce in a single run — and for wooden cutlery, that number is driven by how production is actually scheduled, not an arbitrary sales minimum." },
      { heading: "Why MOQs Exist", text: "Stamping and heat-forming lines are set up per product and per size. Changing a line over for a small run costs the same setup time as a large one, so manufacturers batch production into runs large enough to justify that changeover — which is where MOQ numbers come from." },
      { heading: "Estimating Your Own Volume", text: "Work backward from consumption: daily covers × cutlery pieces per cover × days until your next reorder, with a buffer for growth. A restaurant serving 200 covers a day using a fork and spoon per cover needs roughly 12,000 pieces a month before any buffer — useful to calculate before you're on a call with a supplier quoting in the hundreds of thousands." },
      { heading: "Consolidation Options", text: "If your own volume doesn't meet a supplier's MOQ, ask about LCL (less-than-container-load) consolidation or mixed-SKU cartons that combine several product types into one order — most manufacturers would rather offer a practical path to a smaller buyer than lose the order entirely." },
    ],
  },
  {
    slug: "zero-waste-events-catering-trend",
    title: "Zero-Waste Events: Why Catering Is Leading the Shift Away from Plastic",
    excerpt: "Weddings, conferences, and corporate events are increasingly billed as 'zero-waste' — and disposable cutlery is usually the first line item that changes.",
    category: "industry-news",
    publishedAt: "2026-10-05",
    author: "Biopapro Team",
    body: [
      { text: "\"Zero-waste event\" has become a selling point for caterers and venues, and disposable cutlery is typically the first visible change a guest notices — it's handled directly, unlike packaging that stays behind the scenes." },
      { heading: "Why Cutlery First", text: "Compared to overhauling an entire supply chain, switching cutlery is a fast, visible win: it's touched by every guest, it's easy to photograph for marketing, and the switch itself requires no change to the kitchen's actual cooking process." },
      { heading: "What Event Caterers Actually Ask For", text: "Volume predictability matters more here than in a standing restaurant — a 500-guest wedding needs its full cutlery count reliably delivered by a fixed date, not a rolling monthly supply. Caterers also tend to order mixed sets (fork, knife, tissue pre-packed together) to simplify setup and reduce staff handling at the event itself." },
      { heading: "The Limits of the Trend", text: "A genuinely zero-waste event needs more than compostable cutlery — composting infrastructure at the venue or a post-event collection plan matters just as much as the material choice. A caterer marketing \"zero-waste\" without a disposal plan is making half the claim." },
    ],
  },
  {
    slug: "why-birchwood-not-just-any-wood",
    title: "Why Birchwood? What Makes This Species Different for Cutlery",
    excerpt: "Not every wood works for disposable cutlery. Birch has a specific set of properties that make it the material of choice over other hardwoods.",
    category: "sustainability",
    publishedAt: "2026-10-12",
    author: "Biopapro Team",
    body: [
      { text: "Wooden cutlery could theoretically be made from dozens of wood species, but birch dominates the category for reasons that come down to the wood's physical structure, not just availability." },
      { heading: "Grain Structure", text: "Birch has a fine, uniform, closed grain — unlike woods with open or irregular grain patterns, it doesn't have weak points that cause a utensil to snap or splinter under normal use. This matters specifically for thin cross-sections like fork tines, where a coarser-grained wood would be more fragile." },
      { heading: "Odorless and Flavor-Neutral", text: "Some hardwoods carry a natural scent or resin content that can transfer to food, especially with hot or oily dishes. Birch is naturally low in resin and essentially neutral in taste and smell, which matters for a utensil that touches food directly." },
      { heading: "Fast-Growing, Widely Available", text: "Birch regenerates faster than many hardwood alternatives, which supports the economics of sourcing it from managed, replanted forests at the volume a cutlery manufacturer needs — a slower-growing species would struggle to support the same scale of sustainable, certified supply." },
    ],
  },
  {
    slug: "private-label-custom-branded-wooden-cutlery",
    title: "Private Label Wooden Cutlery: What's Actually Customizable",
    excerpt: "Buyers often assume private-label means a logo on the handle. The real customization options go well beyond that — and some requests aren't practical on wood at all.",
    category: "product-updates",
    publishedAt: "2026-10-19",
    author: "Biopapro Team",
    body: [
      { text: "Private-label and OEM requests for wooden cutlery usually start with \"can you put our logo on it\" — but the practical customization options are broader than branding on the utensil itself, and some requests that work fine on plastic don't translate to wood." },
      { heading: "What Works Well", text: "Kraft-sleeve packaging printed with a buyer's branding, custom carton labeling, and co-branded tissue-wrapped sets are all straightforward — the packaging is the practical surface for branding, not the wood itself, since printing directly on an unfinished wood surface doesn't hold up the way it does on plastic or paper." },
      { heading: "What's Harder", text: "Laser-etching a logo directly onto the utensil is possible but adds per-unit processing time and cost that only makes sense at smaller, higher-margin volumes — it's not typical for high-volume bulk orders where unit economics matter more." },
      { heading: "Lead Time Reality", text: "Custom packaging needs proof approval and, for printed cartons, a print run lead time on top of standard production — budget 4 to 6 weeks beyond a standard order for first-time custom packaging, with faster turnaround on reorders once the design is locked." },
    ],
  },
  {
    slug: "common-myths-about-wooden-cutlery",
    title: "Five Things People Get Wrong About Wooden Cutlery",
    excerpt: "Splinters, deforestation, and short shelf life come up a lot in objections to switching from plastic. Most of it doesn't hold up against how the product is actually made.",
    category: "industry-news",
    publishedAt: "2026-10-26",
    author: "Biopapro Team",
    body: [
      { text: "Wooden cutlery carries a handful of persistent objections that mostly trace back to low-quality products from years ago, not the current manufacturing standard." },
      { heading: "\"It splinters\"", text: "Splintering happens with poorly finished, low-grade wood or incorrect moisture content at the time of stamping. Properly processed birchwood, cut and finished to the right moisture level, doesn't splinter under normal use — this is a manufacturing quality issue, not an inherent property of wood as a material." },
      { heading: "\"It's bad for forests\"", text: "This depends entirely on sourcing. Birchwood from FSC-certified, responsibly managed forests is replanted and harvested within sustainable rates — the material itself isn't the problem; unverified sourcing is. That's exactly what chain-of-custody certification exists to confirm." },
      { heading: "\"It doesn't last on a shelf\"", text: "Properly dried and packaged wooden cutlery has a long, stable shelf life — it's not perishable in the way food is. Moisture-controlled packaging and standard warehouse storage conditions are sufficient; no special handling or refrigeration is required." },
      { heading: "\"It's more expensive than plastic\"", text: "Per-unit cost is typically higher than the cheapest plastic cutlery, but the comparison usually ignores regulatory risk — operating in a market tightening plastic restrictions means a plastic cutlery cost advantage can disappear overnight when a ban takes effect, while the switching cost has already been absorbed by businesses that moved early." },
    ],
  },
  {
    slug: "sustainable-packaging-food-delivery-apps",
    title: "Food Delivery Platforms and the Push for Sustainable Cutlery",
    excerpt: "Delivery apps sit at an unusual point in the supply chain — they don't manufacture the cutlery, but their policies increasingly decide what restaurants include in every order.",
    category: "industry-news",
    publishedAt: "2026-11-02",
    author: "Biopapro Team",
    body: [
      { text: "Food delivery platforms don't manufacture packaging or cutlery themselves, but their in-app policies — defaulting cutlery to \"opt-in\" rather than automatic, or nudging restaurant partners toward sustainable packaging — have an outsized effect on what actually ends up in a delivery bag." },
      { heading: "Why Platforms Care", text: "Packaging waste is a visible customer complaint category for delivery apps, and sustainability commitments have become a competitive and investor-facing metric for the platforms themselves, not just the restaurants using them." },
      { heading: "What This Means for Restaurant Partners", text: "A restaurant optimizing for delivery-platform visibility or sustainability badging increasingly needs its packaging choices to match what the platform is promoting, separate from the restaurant's own standalone preferences — effectively a second buyer influencing the decision beyond the restaurant's own customers." },
      { heading: "Practical Considerations for Delivery-Heavy Orders", text: "Cutlery for delivery needs to survive time in transit without the utensil shifting loose or the packaging tearing — individually wrapped or pre-packed sets (fork, knife, napkin together) hold up better in a delivery bag than loose bulk cutlery dropped into a container." },
    ],
  },
  {
    slug: "india-state-wise-plastic-ban-enforcement",
    title: "India's Plastic Ban Isn't Enforced the Same Way Everywhere",
    excerpt: "The national ban on single-use plastic cutlery is uniform on paper. Enforcement intensity varies a lot by state and city — which matters for how urgently a business should actually switch.",
    category: "regulations",
    publishedAt: "2026-11-09",
    author: "Biopapro Team",
    body: [
      { text: "India's Plastic Waste Management Amendment Rules ban single-use plastic cutlery nationally, but enforcement is carried out by state pollution control boards and municipal bodies — which means the practical pressure a business feels varies significantly by location." },
      { heading: "Why Enforcement Varies", text: "Metro municipal corporations with dedicated enforcement squads and established fine structures — several major cities run regular inspection drives — create real, immediate pressure. Smaller towns and cities with fewer inspection resources enforce the same rule far less consistently, even though the underlying law is identical nationwide." },
      { heading: "Why 'My City Doesn't Enforce It' Is a Weak Strategy", text: "Enforcement patterns shift, often with political cycles, high-profile crackdowns, or after a public complaint. A business with large institutional clients — hotel chains, airlines, caterers serving events across multiple cities — can't rely on a weak-enforcement location when its own customers operate under the strictest standard to protect their own compliance." },
      { heading: "Our Read", text: "Businesses operating in weak-enforcement areas today are still exposed to tightening rules tomorrow, and switching ahead of a crackdown is cheaper and less disruptive than switching under deadline pressure during one." },
    ],
  },
  {
    slug: "coffee-stirrers-vs-cutlery-sizing-guide",
    title: "Coffee Stirrers Aren't Just Small Forks: A Sizing and Spec Guide",
    excerpt: "Stirrers get treated as an afterthought in a cutlery order, but getting the size and stiffness wrong shows up fast in customer complaints.",
    category: "product-updates",
    publishedAt: "2026-11-16",
    author: "Biopapro Team",
    body: [
      { text: "Coffee and tea stirrers are often an afterthought line item on a cutlery order, but the wrong size or stiffness causes a specific, common complaint: a stirrer that's too short to clear a tall cup, or too flexible to stir a thick drink properly." },
      { heading: "Matching Length to Cup Depth", text: "110mm stirrers suit small espresso or short cups. 140mm covers standard coffee cups and most to-go cups. Taller tumbler-style cold drink cups need the longer end of the range — a stirrer that doesn't clear the rim is functionally useless, regardless of how well it's made." },
      { heading: "Stiffness Matters More Than People Expect", text: "A stirrer needs enough rigidity to actually move thick liquids — cream-based drinks or anything with ice — without bending. This comes down to the thickness of the stamped blank, not just the wood species, so it's worth specifying explicitly rather than assuming all stirrers perform the same." },
      { heading: "Volume Context", text: "Stirrers are typically ordered in much larger piece counts than forks or spoons relative to cup volume, since cafés and coffee chains go through them per drink rather than per meal — worth accounting for separately when estimating total order volume rather than treating it as a rounding error on a cutlery order." },
    ],
  },
  {
    slug: "why-some-restaurants-still-use-plastic-cutlery",
    title: "Why Some Restaurants Still Haven't Switched — and What Actually Changes Their Mind",
    excerpt: "Plastic cutlery bans have been law in India since 2022. A meaningful share of food businesses still use it. The reasons are rarely about not caring.",
    category: "industry-news",
    publishedAt: "2026-11-23",
    author: "Biopapro Team",
    body: [
      { text: "Despite India's plastic cutlery ban being in effect since 2022, plenty of food businesses — particularly smaller, independent operations — still use plastic. The reasons are rarely indifference to the regulation; they're almost always operational." },
      { heading: "Perceived Cost, Not Actual Cost", text: "Many smaller operators compare the sticker price of plastic to wood without accounting for fine risk, confiscation, or the reputational cost of a public enforcement action — the real cost comparison looks different once those are included, but it requires someone to actually run the numbers." },
      { heading: "Supplier Access", text: "A restaurant used to ordering from a single local plastics distributor may simply not have an existing relationship with a wooden cutlery supplier, and switching supply chains takes more effort than switching products — inertia, not preference, keeps the old relationship going." },
      { heading: "Minimum Order Size Mismatch", text: "A small café doesn't move the volume a typical wooden cutlery manufacturer's MOQ assumes, and without an accessible smaller-volume or consolidated order path, the switch can look impractical even when the business wants to make it." },
      { heading: "What Changes Their Mind", text: "In our experience, it's rarely abstract environmental messaging — it's a specific enforcement incident nearby, a corporate client requiring compliant packaging as a condition of business, or simply discovering that a supplier can meet their actual (smaller) order size." },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
