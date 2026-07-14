export const siteConfig = {
  name: "Appexcreative",
  legalName: "Appexcreative Digital",
  tagline: "Growth, engineered.",
  positioning:
    "Appexcreative is a full-service growth and creative agency that fuses brand strategy, content, performance marketing, and AI-powered automation to help ambitious companies scale predictably — one integrated team instead of five disconnected vendors.",
  description:
    "Appexcreative is a full-service digital growth and creative agency. We combine brand strategy, content, performance marketing, and AI automation into one integrated team.",
  url: "https://appexcreative.com",
  ogImage: "/opengraph-image",
  email: "hello@appexcreative.com",
  phone: "+1 (415) 555-0142",
  address: "548 Market St, San Francisco, CA 94104",
  founded: "2018",
  social: {
    twitter: "https://twitter.com/appexcreativehq",
    linkedin: "https://linkedin.com/company/appexcreativehq",
    instagram: "https://instagram.com/appexcreativehq",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Industries", href: "/industries" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Performance Marketing", href: "/services#growth-performance" },
      { label: "Brand & Creative", href: "/services#brand-creative" },
      { label: "Web & Product", href: "/services#product-web" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
