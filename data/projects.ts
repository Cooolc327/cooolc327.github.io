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
    authors: "YIN LICHEN",
    venue: "HaLoop: Safe AI coding automation with human-in-the-loop governance.",
    award: "2nd Place in OpenAI Track & Silver Award Winner at Deep Learning Week Hackathon 2026.",
    tags: ["AI Safety", "Governance", "VS Code Extension"],
    links: [
      { label: "Code", url: "https://github.com" },
    ],
    featured: true,
  },
];
