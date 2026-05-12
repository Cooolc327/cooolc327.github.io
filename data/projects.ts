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
    title: "HaLoop — AI 安全编程助手",
    description:
      "一个安全的人类管控 AI 编程助手，集成 VS Code 扩展和治理仪表盘，实现 AI 代码生成的风险评估与审批流程。",
    longDescription: `
## 项目简介

HaLoop 是一个在 CEEES Deep Learning Week 2026 Hackathon 中开发的项目，旨在解决 AI 编程助手的安全性问题。

## 核心功能

- **VS Code 扩展插件**：嵌入开发者 IDE 工作流，自动收集上下文并请求 AI 生成代码方案
- **风险门控系统**：在 AI 生成方案后，进行前端+后端双重风险评估，高风险方案需要人工审批
- **治理仪表盘**：提供审批管理、策略配置、事件模式、审计日志等完整管控功能
- **死者开关**：记录所有 AI 修改的文件清单，支持一键回滚

## 技术栈

Next.js, TypeScript, VS Code Extension API, Prisma, PostgreSQL, Redis, BullMQ, OpenAI API, Docker
    `,
    tags: ["TypeScript", "Next.js", "VS Code Extension", "PostgreSQL", "Docker", "OpenAI API"],
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ai-routing-playground",
    title: "AI 路由器实战工作坊",
    description:
      "基于 Ollama 本地 LLM 的混合专家（MoE）路由器实践，通过分类器将用户输入自动路由到最佳 AI 角色。",
    longDescription: `
## 项目简介

一个实践性的 AI 路由系统教程，通过构建小型混合专家模型（MoE）来理解 AI 路由机制。

## 核心功能

- 使用 Ollama 在本地运行多种 LLM（gemma2, phi, deepseek-r1 等）
- 训练 TF-IDF + MLP 分类器实现用户意图自动路由
- 三种专家角色：辩手、段子手、教师
- Gradio 交互式 Web 界面

## 技术栈

Python, Ollama, scikit-learn, Gradio, Pandas
    `,
    tags: ["Python", "Ollama", "scikit-learn", "Gradio", "Machine Learning"],
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "personal-website",
    title: "个人网站",
    description:
      "使用 Next.js + Tailwind CSS 构建的个人主页，支持深色模式、MDX 博客和项目展示。",
    longDescription: `
## 项目简介

一个现代化、响应式的个人网站，用于展示我的项目作品和技术博客。

## 核心功能

- Next.js 15 App Router 架构
- Tailwind CSS 实现深色/浅色模式
- MDX 驱动的博客系统
- 项目作品集展示
- 完全响应式设计

## 技术栈

Next.js, TypeScript, Tailwind CSS, MDX, Lucide Icons
    `,
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "MDX"],
    sourceUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
  },
];
