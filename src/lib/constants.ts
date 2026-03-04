export const COMPANY = {
  name: "Southbase Consulting",
  legalName: "Southbase Consulting AB",
  tagline: "Sales Growth, Delivered",
  email: "hello@southbase.se",
  phone: "+46 42 123 45 67",
  address: {
    street: "Stortorget 11",
    city: "Helsingborg",
    zip: "252 23",
    country: "Sweden",
  },
  social: {
    linkedin: "https://linkedin.com/company/southbase-consulting",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "operative-sales",
    title: "Operative Sales",
    subtitle: "Boots on the ground",
    description:
      "We embed experienced sales professionals directly into your organization. They prospect, pitch, and close — delivering revenue while you focus on your core business.",
    features: [
      "Dedicated sales teams deployed within weeks",
      "Full pipeline management from lead to close",
      "CRM setup and process optimization",
      "Weekly reporting with transparent metrics",
    ],
    icon: "target",
  },
  {
    slug: "sales-training",
    title: "Sales Training & Coaching",
    subtitle: "Sharpen your edge",
    description:
      "Transform your existing team into high performers. Our training programs are built on real-world methodology — not theory. We coach on live deals, in real scenarios.",
    features: [
      "Customized training programs for your market",
      "Live deal coaching and pipeline reviews",
      "Negotiation and objection handling workshops",
      "Ongoing performance tracking and refinement",
    ],
    icon: "chart",
  },
  {
    slug: "sales-strategy",
    title: "Sales Strategy & Process",
    subtitle: "Build the machine",
    description:
      "We audit your current sales operation and design a scalable process that fits your market, product, and growth stage. From ICP definition to territory planning.",
    features: [
      "Sales process audit and optimization",
      "Ideal Customer Profile development",
      "Territory and account planning",
      "Tech stack evaluation and implementation",
    ],
    icon: "compass",
  },
  {
    slug: "interim-leadership",
    title: "Interim Sales Leadership",
    subtitle: "Experience on demand",
    description:
      "Need a VP of Sales without the 6-month search? Our interim leaders step in fast, bring structure, and drive results from day one.",
    features: [
      "Experienced sales leaders available immediately",
      "Team building and organizational design",
      "Board-level reporting and forecasting",
      "Smooth handover to permanent hire",
    ],
    icon: "users",
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "nordictech-saas",
    client: "NordicTech Solutions",
    industry: "SaaS / Technology",
    title: "From 0 to 2M ARR in 14 months",
    summary:
      "A Malmö-based SaaS startup needed to build their entire sales function from scratch. We provided an operative sales team and built the playbook that scaled.",
    challenge:
      "NordicTech had a strong product but zero commercial infrastructure. Their founders were technical, and every sales attempt felt improvised. Pipeline was unpredictable and conversion rates were below 5%.",
    solution:
      "We deployed a two-person sales team with a dedicated team lead. Over the first 60 days, we built the outbound engine — ICP, sequences, CRM workflows. By month three, we had a repeatable process.",
    results: [
      { metric: "2.1M SEK", label: "ARR achieved" },
      { metric: "14", label: "Months to milestone" },
      { metric: "340%", label: "Pipeline growth" },
      { metric: "22%", label: "Close rate" },
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  },
  {
    slug: "scandinavian-industrial",
    client: "Scandinavian Industrial Group",
    industry: "Manufacturing",
    title: "Reviving a stalled B2B sales engine",
    summary:
      "A traditional manufacturing company with declining revenue needed modern sales methodology. We retrained their team and restructured their go-to-market.",
    challenge:
      "SIG had relied on inbound inquiries and long-standing relationships for 20 years. When the market shifted, their sales team lacked the skills and process to hunt new business actively.",
    solution:
      "We ran an intensive 8-week training program covering outbound prospecting, consultative selling, and pipeline discipline. Simultaneously, we redesigned their CRM workflows and introduced weekly pipeline reviews.",
    results: [
      { metric: "47%", label: "Revenue increase" },
      { metric: "3x", label: "Outbound meetings" },
      { metric: "89%", label: "Team adoption rate" },
      { metric: "8 weeks", label: "Program duration" },
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
  },
  {
    slug: "greenshift-energy",
    client: "GreenShift Energy",
    industry: "Clean Energy",
    title: "Scaling sales for a climate-tech scaleup",
    summary:
      "GreenShift needed to triple their sales capacity fast to match their funding runway. We provided interim leadership and built the team that delivered.",
    challenge:
      "Fresh off a Series A, GreenShift had 18 months to hit aggressive revenue targets. Their single sales hire was overwhelmed, and they needed a VP-level leader without the time for a traditional search.",
    solution:
      "We placed an interim Head of Sales within two weeks. Over the following months, they hired and onboarded four new reps, established territories across the Nordics, and built the forecasting model the board needed.",
    results: [
      { metric: "3.5x", label: "Sales capacity" },
      { metric: "4", label: "New hires onboarded" },
      { metric: "68%", label: "Quota attainment Y1" },
      { metric: "2 weeks", label: "Time to deploy" },
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Southbase didn't just bring us a sales team — they brought a system. Within three months, we had more pipeline than we'd generated in the previous year combined.",
    author: "Erik Lindqvist",
    role: "CEO, NordicTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "The training program transformed how our team approaches every conversation. It wasn't generic advice — it was practical, specific, and immediately applicable.",
    author: "Anna Bergström",
    role: "Commercial Director, Scandinavian Industrial Group",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "Having an interim sales leader from Southbase gave us the structure we desperately needed. They built the foundation that our permanent team now thrives on.",
    author: "Marcus Holm",
    role: "Founder, GreenShift Energy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
] as const;

export const TEAM = [
  {
    name: "Johan Andersson",
    role: "Founder & Managing Director",
    bio: "15 years scaling B2B sales organizations across the Nordics. Previously VP Sales at two venture-backed startups.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sara Eriksson",
    role: "Head of Sales Training",
    bio: "Former sales enablement lead at a Fortune 500. Certified coach with a track record of turning underperformers into top reps.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "David Nilsson",
    role: "Senior Sales Consultant",
    bio: "Specialist in SaaS sales methodology. Has built and led sales teams from 0 to 30+ people across three countries.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Lina Johansson",
    role: "Operations & Client Success",
    bio: "Ensures every engagement runs smoothly. Background in management consulting with a focus on commercial transformation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
  },
] as const;

export const OPEN_POSITIONS = [
  {
    title: "Senior Sales Consultant",
    location: "Helsingborg / Remote",
    type: "Full-time",
    description:
      "Join our team of embedded sales professionals working with ambitious companies across the Nordics. You'll own full sales cycles for our clients — from prospecting to close.",
    requirements: [
      "5+ years of B2B sales experience",
      "Proven track record of exceeding targets",
      "Fluent in Swedish and English",
      "Experience with CRM tools and sales tech",
    ],
  },
  {
    title: "Sales Training Lead",
    location: "Helsingborg",
    type: "Full-time",
    description:
      "Design and deliver training programs that actually change behavior. You'll work closely with client teams, running workshops, coaching on live deals, and measuring impact.",
    requirements: [
      "7+ years of sales experience, 3+ in training/enablement",
      "Strong facilitation and presentation skills",
      "Experience designing training curricula",
      "Data-driven approach to measuring effectiveness",
    ],
  },
  {
    title: "Business Development Representative",
    location: "Helsingborg / Hybrid",
    type: "Full-time",
    description:
      "The starting point for a career in consultative B2B sales. You'll learn our methodology from day one and grow into client-facing consulting roles.",
    requirements: [
      "1-2 years of professional experience",
      "Strong communication skills in Swedish and English",
      "Hungry, curious, and coachable",
      "Interest in B2B sales and business development",
    ],
  },
] as const;
