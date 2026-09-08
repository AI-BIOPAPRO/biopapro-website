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
      { heading: "Food Safety Certifications", text: "Birchwood cutlery from certified manufacturers like Biopapro carries FSC® Chain of Custody, FDA CFR 21, EU 10/2011, ISO 9001:2015, and BPI Compostable certifications. This makes it accepted by airlines, hotel chains, and institutional clients who require documented food-contact compliance. Bamboo certification standards are less standardized globally." },
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
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
