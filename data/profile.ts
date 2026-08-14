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
    details?: string[];
  }[];
  research: {
    title: string;
    company: string;
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
  name: "YIN LICHEN",
  photo: "/images/profile.jpg",
  tagline: "Computer Science undergraduate exploring computer vision, AI safety, and robotics",
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
      text: "Joined Prof. Jianfei Yang's group at NTU as an Undergraduate Research Assistant, working on vision processing for robot demonstrations.",
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
      details: [
        "ENGG1910: Demystifying Artificial Intelligence (A)",
        "URSP2100: Urban Sustainability (A-)",
      ],
    },
  ],
  research: [
    {
      title: "Undergraduate Research Assistant",
      company: "Nanyang Technological University · Supervised by Prof. Jianfei Yang",
      period: "Jun 2026 – Present",
      description: "Developing perception tooling for robot-learning experiments.",
      highlights: [
        "Developed a SAM 2 vision-processing pipeline to extract and segment human hands and arms from robot demonstration videos.",
        "Processed and organized robot demonstration trajectories for downstream perception and policy-learning experiments.",
      ],
    },
  ],
  honors: [
    "Silver Prize, OpenAI Track, Deep Learning Week Hackathon 2026 — selected among more than 800 participants.",
    "Top 0.5% in the Chinese Gaokao of Jiangsu Province, 2025.",
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
