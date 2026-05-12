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
  tagline: "构建有价值的软件产品",
  bio: [
    "我是一名全栈开发者，热衷于将复杂的技术问题转化为简洁优雅的解决方案。",
    "拥有多年 Web 开发和 AI 应用经验，擅长 React、Next.js、Python 等技术栈。目前在深度学习与软件工程交叉领域探索创新应用。",
    "工作之余，我喜欢参与 Hackathon、撰写技术博客，以及在开源社区中学习与分享。",
  ],
  email: "edward@example.com",
  location: "中国",
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
      title: "全栈开发者",
      company: "某科技公司 / 个人项目",
      period: "2023 - 至今",
      description:
        "负责 Web 应用全栈开发，使用 Next.js + TypeScript 构建前端，Python FastAPI 构建后端服务。参与深度学习相关项目，探索 AI + 软件工程的交叉应用。",
    },
    {
      title: "深度学习周 Hackathon 参赛者",
      company: "CEEES Deep Learning Week 2026",
      period: "2026",
      description:
        "设计并实现了 HaLoop——一个安全的人类管控 AI 编程助手，包含 VS Code 扩展插件和治理仪表盘，获得评委高度评价。",
    },
    {
      title: "计算机科学专业学生",
      company: "某大学",
      period: "在校期间",
      description:
        "系统学习计算机科学基础，包括数据结构与算法、操作系统、数据库、软件工程等核心课程。积极参与各类编程竞赛和开源项目。",
    },
  ],
};
