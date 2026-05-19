export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "haloop-ai-governance",
    title: "HaLoop — Safe AI Coding Assistant",
    description:
      "A safe, human-governed AI coding assistant with a VS Code extension and governance dashboard for risk assessment and approval workflows.",
    longDescription: `
## Overview

HaLoop is a project developed at the CEEES Deep Learning Week 2026 Hackathon, designed to address safety concerns with AI coding assistants.

## Core Features

- **VS Code Extension**: Embedded in the developer's IDE workflow, automatically collecting context and requesting AI-generated code plans
- **Risk Gate System**: Dual risk evaluation (frontend + backend) after AI plan generation — high-risk plans require human approval
- **Governance Dashboard**: Full governance controls including approval management, policy configuration, incident mode, and audit logs
- **Dead Man's Switch**: Records all AI-modified files in a session manifest, enabling one-click rollback

## Tech Stack

Next.js, TypeScript, VS Code Extension API, Prisma, PostgreSQL, Redis, BullMQ, OpenAI API, Docker
    `,
    tags: ["TypeScript", "Next.js", "VS Code Extension", "PostgreSQL", "Docker", "OpenAI API"],
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ai-routing-playground",
    title: "AI Routing Playground Workshop",
    description:
      "A hands-on MoE (Mixture of Experts) router practice using local LLMs via Ollama, automatically routing user input to the best AI persona via a classifier.",
    longDescription: `
## Overview

A practical AI routing system tutorial that builds a small Mixture-of-Experts (MoE) model to understand AI routing mechanisms.

## Core Features

- Run multiple LLMs locally via Ollama (gemma2, phi, deepseek-r1, etc.)
- Train a TF-IDF + MLP classifier to automatically route user intent
- Three expert personas: Debater, Jokester, Teacher
- Interactive Gradio web interface

## Tech Stack

Python, Ollama, scikit-learn, Gradio, Pandas
    `,
    tags: ["Python", "Ollama", "scikit-learn", "Gradio", "Machine Learning"],
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    description:
      "A personal website built with Next.js + Tailwind CSS, featuring dark mode, MDX-powered blog, and project showcase.",
    longDescription: `
## Overview

A modern, responsive personal website to showcase my projects and technical blog posts.

## Core Features

- Next.js 15 App Router architecture
- Tailwind CSS with dark/light mode
- MDX-driven blog system
- Project portfolio showcase
- Fully responsive design

## Tech Stack

Next.js, TypeScript, Tailwind CSS, MDX, Lucide Icons
    `,
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "MDX"],
    sourceUrl: "https://github.com",
    demoUrl: "https://cooolc327.github.io",
    featured: true,
  },
];
