export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  venueShort?: string;
  award?: string;
  tags: string[];
  thumbnail?: string;
  links: ProjectLink[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "haloop-ai-governance",
    title: "HaLoop: A Safe, Human-Governed AI Coding Agent",
    authors: "Edward Chen*",
    venue: "CEEES Deep Learning Week Hackathon 2026",
    award: "🏆 Track 1 Finalist — Top Rated in End-to-End Workflow & Human Oversight",
    tags: ["AI Safety", "Governance", "VS Code Extension"],
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "https://github.com" },
    ],
    featured: true,
  },
  {
    slug: "ai-routing-playground",
    title: "AI Routing Playground: A Hands-on Mixture-of-Experts Workshop",
    authors: "Edward Chen*",
    venue: "Deep Learning Workshop 2026",
    tags: ["MoE", "Ollama", "scikit-learn", "Gradio"],
    links: [
      { label: "Code", url: "https://github.com" },
      { label: "Notebook", url: "#" },
    ],
    featured: true,
  },
  {
    slug: "personal-website",
    title: "Personal Academic Website",
    authors: "Edward Chen",
    venue: "Personal Project, 2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Code", url: "https://github.com/Cooolc327/cooolc327.github.io" },
      { label: "Live", url: "https://cooolc327.github.io" },
    ],
    featured: true,
  },
];
