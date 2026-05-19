export interface Profile {
  name: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: string[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export const profile: Profile = {
  name: "Edward",
  tagline: "Building valuable software products",
  bio: [
    "I'm a full-stack developer passionate about turning complex technical problems into clean, elegant solutions.",
    "With years of experience in web development and AI applications, I specialize in React, Next.js, and Python. Currently exploring the intersection of deep learning and software engineering.",
    "Outside of work, I enjoy participating in hackathons, writing technical blog posts, and learning and sharing in the open-source community.",
  ],
  email: "edward@example.com",
  location: "China",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Git",
    "VS Code Extension",
    "OpenAI API",
  ],
  experience: [
    {
      title: "Full-Stack Developer",
      company: "Tech Company / Personal Projects",
      period: "2023 – Present",
      description:
        "Responsible for full-stack web application development, building frontends with Next.js + TypeScript and backend services with Python FastAPI. Engaged in deep learning projects, exploring the intersection of AI and software engineering.",
    },
    {
      title: "Deep Learning Week Hackathon Participant",
      company: "CEEES Deep Learning Week 2026",
      period: "2026",
      description:
        "Designed and implemented HaLoop — a safe, human-governed AI coding assistant featuring a VS Code extension and governance dashboard, receiving high praise from judges.",
    },
    {
      title: "Computer Science Student",
      company: "University",
      period: "University period",
      description:
        "Systematically studied computer science fundamentals including data structures & algorithms, operating systems, databases, and software engineering. Actively participated in programming competitions and open-source projects.",
    },
  ],
};
