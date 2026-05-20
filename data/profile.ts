export interface Profile {
  name: string;
  photo: string;
  tagline: string;
  affiliation: string;
  email: string;
  emailObfuscated: string;
  location: string;
  socials: {
    scholar?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  news: {
    date: string;
    text: string;
    link?: string;
  }[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
  honors: string[];
  miscellanea: {
    category: string;
    icon: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "Edward Chen",
  photo: "/images/profile.jpg",
  tagline: "Building valuable software products",
  affiliation: "Independent Developer / Student",
  email: "edward@example.com",
  emailObfuscated: "edward [at] example.com",
  location: "China",
  socials: {
    scholar: "https://scholar.google.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  news: [
    {
      date: "05/2026",
      text: "Launched personal academic website built with Next.js and Tailwind CSS.",
    },
    {
      date: "03/2026",
      text: "HaLoop project named Track 1 Finalist at CEEES Deep Learning Week 2026 Hackathon — top rated for end-to-end workflow and human oversight.",
    },
    {
      date: "02/2026",
      text: "Released AI Routing Playground — a hands-on Mixture-of-Experts workshop using local LLMs via Ollama.",
    },
  ],
  education: [
    {
      school: "University",
      degree: "B.S. in Computer Science",
      period: "2023 – Present",
    },
  ],
  honors: [
    "CEEES Deep Learning Week Hackathon 2026 — Track 1 Finalist",
    "Top performer in programming competitions and open-source contributions",
  ],
  miscellanea: [
    {
      category: "Interests",
      icon: "💻",
      items: ["Open-source development", "Hackathons", "Technical writing"],
    },
    {
      category: "Hobbies",
      icon: "🎹",
      items: ["Reading", "Fitness", "Exploring new technologies"],
    },
  ],
};
