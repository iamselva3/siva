export type SkillProficiency = 'Daily' | 'Comfortable' | 'Learning';

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Cloud & Infra' | 'Data & Tools' | 'Soft Skills';
  proficiency: SkillProficiency;
  iconName?: string;
  description?: string;
}

export interface SkillCategoryInfo {
  id: 'Languages' | 'Frontend' | 'Cloud & Infra' | 'Data & Tools' | 'Soft Skills';
  title: string;
  description: string;
  count: number;
}

export const skillCategories: SkillCategoryInfo[] = [
  {
    id: 'Frontend',
    title: 'Frontend Engineering',
    description: 'Component architecture, responsive styling, and modern React ecosystems.',
    count: 5,
  },
  {
    id: 'Languages',
    title: 'Core Languages',
    description: 'Algorithmic problem-solving, backend scripting, and database querying.',
    count: 3,
  },
  {
    id: 'Cloud & Infra',
    title: 'Cloud & Infrastructure',
    description: 'Server fundamentals, network design, and growing DevOps competencies.',
    count: 4,
  },
  {
    id: 'Data & Tools',
    title: 'Data & Developer Tools',
    description: 'Business intelligence visualization, version control, and IDE workflows.',
    count: 4,
  },
  {
    id: 'Soft Skills',
    title: 'Collaboration & Soft Skills',
    description: 'Cross-functional communication, analytical agility, and agile teamwork.',
    count: 3,
  },
];

export const skillsData: SkillItem[] = [
  // Languages
  { name: 'JavaScript', category: 'Languages', proficiency: 'Daily', iconName: 'SiJavascript', description: 'ES6+, async/await, DOM APIs, event handling' },
  { name: 'Python', category: 'Languages', proficiency: 'Comfortable', iconName: 'SiPython', description: 'Data structures, NumPy, OpenCV, scripting' },
  { name: 'SQL', category: 'Languages', proficiency: 'Comfortable', iconName: 'SiPostgresql', description: 'Relational queries, joins, aggregates, schema design' },

  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 'Daily', iconName: 'SiReact', description: 'Hooks, custom hooks, context, state management' },
  { name: 'Next.js', category: 'Frontend', proficiency: 'Daily', iconName: 'SiNextdotjs', description: 'SSR, App Router, metadata, performance' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'Daily', iconName: 'SiTailwindcss', description: 'Utility-first layout, custom themes, dark mode' },
  { name: 'HTML5', category: 'Frontend', proficiency: 'Daily', iconName: 'SiHtml5', description: 'Semantic structure, accessibility, microdata' },
  { name: 'CSS3', category: 'Frontend', proficiency: 'Daily', iconName: 'SiCss3', description: 'Flexbox, CSS Grid, keyframes, transitions' },

  // Cloud & Infra
  { name: 'AWS', category: 'Cloud & Infra', proficiency: 'Learning', iconName: 'SiAmazonwebservices', description: 'Cloud concepts, S3, EC2 basics, IAM principles' },
  { name: 'Linux', category: 'Cloud & Infra', proficiency: 'Learning', iconName: 'SiLinux', description: 'CLI commands, file systems, permissions, bash' },
  { name: 'Networking Fundamentals', category: 'Cloud & Infra', proficiency: 'Comfortable', iconName: 'SiLinux', description: 'OSI model, TCP/IP, DNS, HTTP/HTTPS protocols' },
  { name: 'Subnetting', category: 'Cloud & Infra', proficiency: 'Comfortable', iconName: 'SiLinux', description: 'IPv4 calculation, CIDR notations, network masks' },

  // Data & Tools
  { name: 'Power BI', category: 'Data & Tools', proficiency: 'Comfortable', iconName: 'SiPowerbi', description: 'Interactive dashboards, visual reports, DAX basics' },
  { name: 'Git', category: 'Data & Tools', proficiency: 'Daily', iconName: 'SiGit', description: 'Branching strategies, commit hygiene, merge workflows' },
  { name: 'GitHub', category: 'Data & Tools', proficiency: 'Daily', iconName: 'SiGithub', description: 'Repositories, Pull Requests, GitHub Actions, collaboration' },
  { name: 'VS Code', category: 'Data & Tools', proficiency: 'Daily', iconName: 'SiVisualstudiocode', description: 'Extensions, debugging, terminal integration' },

  // Soft Skills
  { name: 'Communication', category: 'Soft Skills', proficiency: 'Daily', description: 'Active listening, technical articulation, cross-functional collaboration' },
  { name: 'Problem-solving', category: 'Soft Skills', proficiency: 'Daily', description: 'Root cause analysis, debugging persistence, clean reasoning' },
  { name: 'Team Collaboration', category: 'Soft Skills', proficiency: 'Daily', description: 'Agile sprints, code reviews, knowledge sharing' },
];

export interface MarqueeLogo {
  name: string;
  label: string;
}

export const marqueeRowOne: MarqueeLogo[] = [
  { name: 'SiReact', label: 'React.js' },
  { name: 'SiNextdotjs', label: 'Next.js' },
  { name: 'SiTailwindcss', label: 'Tailwind CSS' },
  { name: 'SiJavascript', label: 'JavaScript' },
  { name: 'SiPython', label: 'Python' },
  { name: 'SiHtml5', label: 'HTML5' },
  { name: 'SiCss3', label: 'CSS3' },
  { name: 'SiGit', label: 'Git' },
];

export const marqueeRowTwo: MarqueeLogo[] = [
  { name: 'SiAmazonwebservices', label: 'AWS' },
  { name: 'SiLinux', label: 'Linux' },
  { name: 'SiGithub', label: 'GitHub' },
  { name: 'SiVisualstudiocode', label: 'VS Code' },
  { name: 'SiPostgresql', label: 'SQL' },
  { name: 'SiPowerbi', label: 'Power BI' },
  { name: 'SiReact', label: 'Framer Motion' },
  { name: 'SiNextdotjs', label: 'TypeScript' },
];
