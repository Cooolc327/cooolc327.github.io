export interface Profile {
  name: string;
  photo: string;
  tagline: string;
  bio: string;
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
    details?: string[];
  }[];
  research: {
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
    highlights: string[];
  }[];
  honors: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  miscellanea: {
    category: string;
    icon: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "Edward YIN LICHEN",
  photo: "/images/profile.jpg",
  tagline: "Computer Science undergraduate researching human–robot collaboration and embodied AI",
  bio: "I'm a Computer Science undergraduate at Nanyang Technological University and an undergraduate researcher at MARS Lab, supervised by Prof. Jianfei Yang. My current work focuses on collecting data for industry scenarios and fine-tuning π0.5 for human–robot collaboration, including safe obstacle avoidance and human-intention prediction. I also explore Code as Policy: using coding agents such as ChatGPT and Gemini to generate robot-control instructions, supported by an evolving library of skills and primitives. I enjoy turning machine-learning ideas into practical software through research, coursework, and hackathons.",
  affiliation: "Nanyang Technological University, Singapore",
  email: "YI0002EN@e.ntu.edu.sg",
  emailObfuscated: "YI0002EN [at] e.ntu.edu.sg",
  location: "Singapore",
  socials: {
    github: "https://github.com/Cooolc327",
    linkedin: "https://www.linkedin.com/in/lichen-yin-398707382/",
    zhihu: "https://www.zhihu.com/people/tenacious-82-85",
  },
  news: [
    {
      date: "06/2026",
      text: "Joined MARS Lab at NTU as an Undergraduate Researcher, supervised by Prof. Jianfei Yang. My research focuses on human–robot collaboration and Code as Policy.",
      link: "https://marslab.tech/",
    },
    {
      date: "04/2026",
      text: "HaLoop received the Silver Prize in the OpenAI track at Deep Learning Week Hackathon 2026, among more than 800 participants.",
      link: "https://github.com/DasbootU9607/Deep-Learning-Week-Hackathon-2026-HaLoop-Team-CEEES",
    },
  ],
  education: [
    {
      school: "Nanyang Technological University",
      degree: "Bachelor of Computer Science",
      period: "Aug 2025 – Present",
      logo: "/images/ntu-logo.png",
      details: ["CGPA: 4.74/5.0 (Highest Distinction)"],
    },
    {
      school: "The Chinese University of Hong Kong",
      degree: "Summer Exchange Programme",
      period: "Jun 2026 – Jul 2026",
      logo: "/images/cuhk-logo.jpg",
      details: [
        "ENGG1910: Demystifying Artificial Intelligence (A)",
        "URSP2100: Urban Sustainability (A-)",
      ],
    },
    {
      school: "Yixing Senior High School, Jiangsu",
      degree: "High School",
      period: "Sep 2022 – Jun 2025",
      details: ["Top 0.1% in the Chinese Gaokao of Jiangsu Province, 2025"],
    },
  ],
  research: [
    {
      title: "Undergraduate Researcher",
      company: "MARS Lab · Nanyang Technological University · Supervised by Prof. Jianfei Yang",
      companyUrl: "https://marslab.tech/",
      period: "Jun 2026 – Present",
      description: "Researching human–robot collaboration and robot control with foundation models and coding agents.",
      highlights: [
        "Collecting data for industry scenarios and fine-tuning π0.5 to support robot-arm collaboration with humans, focusing on safe obstacle avoidance and human-intention prediction.",
        "Exploring Code as Policy with coding agents such as ChatGPT and Gemini to generate robot-control instructions, supported by an evolving library of skills and primitives to improve generalization across environments.",
      ],
    },
  ],
  honors: [
    "Silver Prize, OpenAI Track, Deep Learning Week Hackathon 2026 — selected among more than 800 participants.",
    "Top 0.1% in the Chinese Gaokao of Jiangsu Province, 2025.",
    "Second Prize, Chinese Physics Olympiad, Jiangsu Division, 2023.",
    "Second Prize, Chinese Chemistry Olympiad, Jiangsu Division, 2024.",
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C++", "C"],
    },
    {
      category: "DL/ML Frameworks",
      items: ["PyTorch", "TensorFlow"],
    },
    {
      category: "Robotics",
      items: ["ROS 2"],
    },
    {
      category: "Languages",
      items: ["Mandarin (Native)", "English (Proficient)"],
    },
  ],
  miscellanea: [
    {
      category: "Interests",
      icon: "💻",
      items: ["Computer vision", "Robot learning", "AI safety", "Open-source development"],
    },
    {
      category: "Hobbies",
      icon: "🎹",
      items: ["Badminton", "Guitar", "Travelling"],
    },
  ],
};
