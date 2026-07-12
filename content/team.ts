export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    initials: "SC",
    photo: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "David Alonso",
    role: "Head of Growth",
    initials: "DA",
    photo: "https://i.pravatar.cc/300?img=65",
  },
  {
    name: "Naomi Field",
    role: "Creative Director",
    initials: "NF",
    photo: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Ravi Kapoor",
    role: "Head of Product & Web",
    initials: "RK",
    photo: "https://i.pravatar.cc/300?img=68",
  },
  {
    name: "Lena Brandt",
    role: "Head of Client Strategy",
    initials: "LB",
    photo: "https://i.pravatar.cc/300?img=44",
  },
  {
    name: "Tomas Vega",
    role: "Head of AI & Automation",
    initials: "TV",
    photo: "https://i.pravatar.cc/300?img=12",
  },
];

export const values = [
  {
    title: "Radical transparency",
    description:
      "You see every number we see — no black-box reporting, no vanity metrics dressed up as wins.",
  },
  {
    title: "Data over ego",
    description:
      "The best idea wins, regardless of whose idea it was. We kill our own campaigns when the numbers say to.",
  },
  {
    title: "Craft obsessed",
    description:
      "Good enough isn't. Every asset we ship goes through the same bar we'd hold for our own brand.",
  },
  {
    title: "Speed as a feature",
    description:
      "Slow marketing is expensive marketing. We're built to test, learn, and ship faster than in-house teams typically can.",
  },
];

export const founderStory = {
  eyebrow: "Our Story",
  title: "Started because five vendors couldn't agree on one number.",
  paragraphs: [
    "Appexcreative started in 2018 after our founder, Sarah Chen, spent three years running growth at a Series B startup — coordinating between a paid media shop, a brand agency, a freelance developer, and an in-house content writer who all reported different numbers for the same campaign.",
    "The work wasn't the problem. The fragmentation was. So she built the agency she wished she could have hired: one team, one roadmap, one source of truth for what's actually working.",
    "Eight years later, that's still the model. Strategy, creative, media, and product sit in the same room, accountable to the same dashboard, working toward the same number.",
  ],
};
