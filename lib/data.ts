
//Personal Information
export const profile = {
  name: "Bassel Al-Shaar",
  initials: "BA",
  role: "Junior Software Developer",
  location: "Beirut, Lebanon",
  email: "basselalshaar11@gmail.com",
  phone: "+961 76 859 886",
  status: "Available",
  github: "https://github.com/BasselAlShaar",
  linkedin: "https://www.linkedin.com/in/bassel-al-shaar-967741317/",
};

//Projects
export const projects = [
  {
    fig: "Project 01",
    title: "WorldCup 2026 Tracker",
    description:
      "A real-time FIFA World Cup 2026 platform with live fixtures and standings — dynamic routing and reusable components built for a fast, responsive browsing experience.",
    tags: ["Next.js", "React", "REST APIs"],
    metric: { value: "Live", label: "fixtures & standings" },
    liveUrl: "https://worldcup-tracker-2026.vercel.app/",
    githubUrl: "https://github.com/BasselAlShaar/WorldCup2026-Frontend.git",
  },
  {
    fig: "Project 02",
    title: "Music Genre Classifier",
    description:
      "A deep learning model that classifies music genre from raw audio, deployed as an interactive Streamlit app for real-time analysis and predictions.",
    tags: ["PyTorch", "Streamlit", "CNN-GRU"],
    metric: { value: "CNN-GRU", label: "model architecture" },
    liveUrl: undefined,
    githubUrl: "https://github.com/BasselAlShaar/Music-Genre-Classifier.git",
  },
  {
    fig: "Project 03",
    title: "Cryptography Web Toolkit",
    description:
      "A full-stack toolkit for classical and RSA encryption, extended with an AI-powered Caesar cipher breaker built on an LSTM model.",
    tags: ["Flask", "Python", "LSTM"],
    metric: { value: "RSA", label: "+ classical ciphers" },
    liveUrl: undefined,
    githubUrl: "https://github.com/BasselAlShaar/system_security.git",
  },
  {
    fig: "Project 04",
    title: "Mental Health Chatbot",
    description:
      "An AI-powered chatbot with emotion detection and contextual conversation, integrating NLP models and REST APIs for personalized interactions.",
    tags: ["Flask", "Python", "NLP"],
    metric: { value: "NLP", label: "emotion detection" },
    liveUrl: "https://serenity-six-swart.vercel.app/",
    githubUrl: "https://github.com/BasselAlShaar/AI-Mentor-Serenity-backend.git",
  },
  {
    fig: "Project 05",
    title: "Code Editor",
    description:
      "A collaborative code editor with authentication, messaging, and code management, designed on a scalable full-stack architecture.",
    tags: ["React", "Laravel", "MySQL"],
    metric: { value: "Real-time", label: "collaborative editing" },
    liveUrl: undefined,
    githubUrl: "https://github.com/BasselAlShaar/Code-Editor-Fullstack.git",
  },
  {
    fig: "Project 06",
    title: "BASS",
    description:
      "A browser-based platformer game with dynamic animations and responsive controls, built for fast, engaging gameplay.",
    tags: ["JavaScript", "p5.js", "Game Dev"],
    metric: { value: "Browser", label: "platformer game" },
    liveUrl: undefined,
    githubUrl: "https://github.com/SelimChehwane/Group-Project-1.git",
  },
];

//Capabilities
export const capabilities = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "Java", "C++", "C#", "Dart", "PHP", "SQL"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Flutter", "Spring Boot", "Laravel", "Express.js", "Redux"],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Tools & Cloud",
    items: ["Git / GitHub", "AWS", "Vercel", "Netlify", "Render", "Supabase", "Figma"],
  },
];

//Experience
export const experience = [
  {
    period: "Feb 2026 — Mar 2026",
    role: "Frontend Mobile Development Intern",
    org: "Coding & Create",
    description:
      "Built responsive mobile applications in Flutter and Dart, focused on reusable UI components and state management — including a full Coffee Shop app.",
  },
  {
    period: "Mar 2024 — Dec 2025",
    role: "Photographer",
    org: "Studio Al-Nojoom, Baisour",
    description:
      "Shot weddings and events as both photographer and videographer, working fast under real-time pressure while managing lighting, composition, and timing for clients and event teams.",
  },
  {
    period: "Jan 2023 — Mar 2025",
    role: "Freelance Web Developer",
    org: "Self-employed",
    description:
      "Designed and built custom websites for retail, hospitality, and marketing clients — full-stack solutions using React, Node.js, and MySQL tailored to each business.",
  },
];
