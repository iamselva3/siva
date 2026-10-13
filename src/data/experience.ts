export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'education' | 'achievement';
  bullets: string[];
  meta?: string;
  year: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  year: string;
  score: string;
  scoreType: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organizer: string;
  highlight: string;
}

export const workExperience: ExperienceItem[] = [
  {
    id: 'exp-xlorit',
    role: 'Frontend Developer Intern',
    company: 'Xlorit',
    location: 'Chennai, India',
    period: 'Dec 2025 – May 2026',
    year: '2025 – 2026',
    type: 'internship',
    bullets: [
      'Developed and maintained responsive web pages utilizing HTML, CSS, Tailwind CSS, and Next.js.',
      'Collaborated closely with designers to translate high-fidelity UI/UX concepts into production components.',
      'Optimized component rendering for maximum performance, strict accessibility (WCAG), and cross-browser compatibility.',
      'Participated actively in team code reviews, sprint ceremonies, and agile delivery workflows.',
    ],
  },
];

export const educationHistory: EducationItem[] = [
  {
    id: 'edu-btech',
    degree: 'B.Tech, Artificial Intelligence & Data Science',
    institution: 'PSR Engineering College, Sivakasi',
    year: '2026',
    score: '7.5',
    scoreType: 'CGPA',
  },
  {
    id: 'edu-diploma',
    degree: 'Diploma in Mechanical Engineering',
    institution: 'P.A.C. Ramasamy Raja Polytechnic College',
    year: '2022',
    score: '79%',
    scoreType: 'Percentage',
  },
  {
    id: 'edu-10th',
    degree: 'Secondary School Certificate (10th Grade)',
    institution: 'Srivi Lions Matric. Hr. Sec School',
    year: '2019',
    score: '62.8%',
    scoreType: 'Percentage',
  },
];

export const achievementsList: AchievementItem[] = [
  {
    id: 'ach-sih',
    title: 'Smart India Hackathon (SIH)',
    organizer: 'Ministry of Education & AICTE',
    highlight: 'Selected participant in national-tier innovation hackathon solving real-world challenges.',
  },
  {
    id: 'ach-hackhorizons',
    title: 'Hack Horizons Hackathon',
    organizer: 'SRM Institute of Science & Technology',
    highlight: 'Built and pitched rapid prototype under competitive time constraints with multidisciplinary team.',
  },
  {
    id: 'ach-symposium',
    title: 'Technical Symposium',
    organizer: 'Sri Krishna College of Engineering & Technology',
    highlight: 'Presented technical innovations and competed in technical problem-solving tracks.',
  },
];

// Unified timeline items for Journey section
export interface TimelineEntry {
  id: string;
  year: string;
  dateRange: string;
  title: string;
  subtitle: string;
  badge: string;
  details: string[];
  metrics?: string;
  kind: 'work' | 'education';
}

export const journeyTimeline: TimelineEntry[] = [
  {
    id: 'journey-xlorit',
    year: '2025–2026',
    dateRange: 'DEC 2025 — MAY 2026',
    title: 'Frontend Developer Intern',
    subtitle: 'Xlorit',
    badge: 'Experience',
    details: [
      'Developed and maintained responsive pages using HTML, CSS, Tailwind CSS, and Next.js',
      'Collaborated with designers to implement pixel-perfect UI/UX designs',
      'Optimized components for performance, accessibility, and cross-browser compatibility',
      'Took part in active code reviews and agile sprint workflows',
    ],
    kind: 'work',
  },
  {
    id: 'journey-btech',
    year: '2026',
    dateRange: 'GRADUATING 2026',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    subtitle: 'PSR Engineering College, Sivakasi',
    badge: 'Education',
    details: [
      'Specialized coursework in Machine Learning, Python, Database Systems, and Intelligent Architectures.',
      'Completed hands-on projects in Computer Vision and Fuzzy Logic classification.',
    ],
    metrics: 'CGPA 7.5',
    kind: 'education',
  },
  {
    id: 'journey-diploma',
    year: '2022',
    dateRange: 'COMPLETED 2022',
    title: 'Diploma in Mechanical Engineering',
    subtitle: 'P.A.C. Ramasamy Raja Polytechnic College',
    badge: 'Education',
    details: [
      'Foundational engineering principles, technical drafting, analytical thinking, and structural problem-solving.',
    ],
    metrics: '79%',
    kind: 'education',
  },
  {
    id: 'journey-sslc',
    year: '2019',
    dateRange: 'COMPLETED 2019',
    title: '10th Grade Secondary Education',
    subtitle: 'Srivi Lions Matric. Hr. Sec School',
    badge: 'Education',
    details: [
      'Foundational secondary education with focus on science and mathematics.',
    ],
    metrics: '62.8%',
    kind: 'education',
  },
];
