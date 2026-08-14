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
  period?: string;
  award?: string;
  outcome?: string;
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
    venue: "AI-powered coding bug detector integrating a Visual Studio Code extension with a web interface for human-governed review.",
    venueShort: "HaLoop",
    period: "Mar 2026 – Apr 2026",
    award: "Silver Prize, OpenAI Track — Deep Learning Week Hackathon 2026 (800+ participants).",
    tags: ["AI Safety", "Human-in-the-loop", "VS Code Extension"],
    thumbnail: "/images/haloop-logo.png",
    links: [
      { label: "Code", url: "https://github.com/DasbootU9607/Deep-Learning-Week-Hackathon-2026-HaLoop-Team-CEEES" },
    ],
    featured: true,
  },
  {
    slug: "engg1910-misinformation-risk-assistant",
    title: "AI-Powered Misinformation Risk Assistant",
    authors: "YIN LICHEN · ENGG1910 Group Project",
    venue: "NLP assistant that classifies 12.8K LIAR claims into low, medium, and high misinformation-risk levels, comparing TF-IDF/logistic regression with BERT-base.",
    venueShort: "ENGG1910",
    period: "Jun 2026 – Jul 2026",
    outcome: "BERT achieved 0.491 macro-F1 and 0.670 macro ROC-AUC on 1,283 test claims — a 7.0-point macro-F1 improvement over the baseline.",
    tags: ["NLP", "BERT", "scikit-learn", "PyTorch"],
    thumbnail: "/images/cuhk-logo.jpg",
    links: [
      { label: "Code", url: "https://github.com/DasbootU9607/ENGG1910-Group-Project" },
      { label: "Project Page", url: "https://dasbootu9607.github.io/ENGG1910-Group-Project/" },
    ],
    featured: true,
  },
  {
    slug: "sc1003-student-team-allocation",
    title: "Student Team Allocation System",
    authors: "YIN LICHEN · SC1003 Group Project",
    venue: "Team-allocation application that forms five-person teams within tutorial groups while balancing school affiliation, gender, and CGPA under explicit fairness and diversity constraints.",
    venueShort: "SC1003",
    period: "Oct 2025 – Nov 2025",
    tags: ["Team Allocation", "Fairness", "Data Processing"],
    thumbnail: "/images/ntu-logo.png",
    links: [],
    featured: false,
  },
];
