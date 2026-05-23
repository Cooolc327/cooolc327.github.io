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
    zhihu?: string;
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
    logo?: string;
  }[];
  honors: string[];
  miscellanea: {
    category: string;
    icon: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "YIN LICHEN",
  photo: "/images/profile.jpg",
  tagline: "Building valuable software products",
  affiliation: "",
  email: "YI0002EN@e.ntu.edu.sg",
  emailObfuscated: "YI0002EN [at] e.ntu.edu.sg",
  location: "China",
  socials: {
    scholar: "https://scholar.google.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    zhihu: "https://www.zhihu.com/people/tenacious-82-85",
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
      school: "Nanyang Technological University",
      degree: "B.S. in Computer Science",
      period: "2025 – Present",
      logo: "/images/ntu-logo.png",
    },
  ],
  honors: [
    "2nd Place in OpenAI Track & Silver Award Winner at Deep Learning Week Hackathon 2026.",
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
      items: ["Badminton", "Guitar", "Travelling"],
    },
  ],
};
