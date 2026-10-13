export interface ProfileData {
  name: string;
  roleLabel: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinatesText: string;
    timezone: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    linkedinUrl: string;
    github: string;
    githubUrl: string;
  };
  summary: string;
  heroIntro: string;
  rotatingBadgeText: string;
  emotionCycles: string[];
  resumeUrl: string;
}

export const profileData: ProfileData = {
  name: "Siva",
  roleLabel: "AI & Data Science Graduate | Front-End Developer",
  tagline: "AI & Data Science graduate turning ideas into fast, accessible interfaces.",
  location: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    coordinatesText: "13.0827° N, 80.2707° E",
    timezone: "Asia/Kolkata (IST)",
  },
  contact: {
    email: "sivagpoomari@gmail.com",
    phone: "+91 95141 64009",
    linkedin: "linkedin.com/in/siva2512",
    linkedinUrl: "https://linkedin.com/in/siva2512",
    github: "github.com/Siva2512",
    githubUrl: "https://github.com/Siva2512",
  },
  summary:
    "Motivated AI & Data Science graduate with knowledge of Python, SQL, Power BI, AWS, Linux, networking fundamentals and operating systems. Builds responsive, accessible interfaces with React and Tailwind, and is currently growing into Cloud and DevOps. Strong analytical, problem-solving and communication skills, with a passion for continuous learning.",
  heroIntro: "AI & Data Science grad turning ideas into fast, accessible interfaces.",
  rotatingBadgeText: "OPEN TO OPPORTUNITIES • CHENNAI, INDIA • AVAILABLE 2026 •",
  emotionCycles: [
    "Neutral 0.92",
    "Happy 0.88",
    "Curious 0.81",
    "Focused 0.95",
  ],
  // Active resume PDF provided by user
  resumeUrl: "/Siva_Resume.pdf",
};
