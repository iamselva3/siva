export type ProjectVisualType = 'elearning' | 'fuzzy' | 'emotion';

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  architecture: string[];
  outcome: string;
}

export interface ProjectItem {
  id: string;
  indexNumber: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack Web' | 'Fuzzy AI & Healthcare' | 'Computer Vision & Deep Learning';
  stack: string[];
  highlights: string[];
  visualType: ProjectVisualType;
  liveUrl?: string;
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'elearning-platform',
    indexNumber: '01',
    title: 'E-Learning Website',
    tagline: 'High-speed educational portal with modular curriculum navigation and visual progress analytics.',
    description:
      'A responsive, SEO-optimized web application engineered with Next.js and Tailwind CSS. Provides learners with structured course overviews, interactive module trackboards, and persistent progress rings built from reusable component architecture.',
    category: 'Full-Stack Web',
    stack: ['JavaScript', 'Next.js', 'Tailwind CSS', 'React.js', 'SSR Architecture'],
    highlights: [
      'Next.js Server-Side Rendering (SSR) for instantaneous page loads and optimal SEO indexation.',
      'Modular, atomic UI components separating course outlines, curriculum drawers, and player widgets.',
      'Interactive curriculum progress rings with dynamic completion states and accessible landmarks.',
      'Mobile-first responsive layout with fluid touch targets and semantic markup.',
    ],
    visualType: 'elearning',
    // PLACEHOLDER: Replace with actual deployed demo if available, or keep null
    liveUrl: 'https://demo-placeholder.sivag.dev/elearning',
    // PLACEHOLDER: Replace with your GitHub repository link
    githubUrl: 'https://github.com/Siva2512/elearning-nextjs-platform',
    caseStudy: {
      problem:
        'Educational interfaces often struggle with sluggish navigation hierarchies, poor search engine visibility, and cluttered content presentation, leading to high drop-off rates on mobile devices.',
      approach:
        'Architected a component-driven frontend using Next.js for server-rendered page shells. Implemented Tailwind CSS design primitives to guarantee consistent spacing, contrast compliance, and lightweight CSS bundles.',
      architecture: [
        'Modular course catalogue with faceted category filters',
        'Stateful progress ring calculating module completion metrics',
        'Optimized client routing between lectures with minimal bundle overhead',
        'Strict semantic HTML5 tags and keyboard accessibility',
      ],
      outcome:
        'Delivered a clean, tactile educational environment featuring crisp typography, fast transitions, and an intuitive hierarchy that makes learning exploration effortless.',
    },
  },
  {
    id: 'skin-lesion-fuzzy',
    indexNumber: '02',
    title: 'Skin Lesion Classification Using Fuzzy Logic',
    tagline: 'Explainable clinical diagnostic pipeline quantifying lesion boundaries via fuzzy inference.',
    description:
      'An interpretable computer-aided diagnosis framework combining digital image preprocessing, morphological boundary analysis, and fuzzy inference systems to classify dermatological skin lesions with transparent uncertainty handling.',
    category: 'Fuzzy AI & Healthcare',
    stack: ['Python', 'Fuzzy Logic (FIS)', 'OpenCV', 'Image Preprocessing', 'Scikit-learn'],
    highlights: [
      'Employed triangular and Gaussian membership functions to model boundary fuzziness and pigment ambiguity.',
      'Standardized image preprocessing pipeline: artifact filtering, hair removal, and color-space normalization.',
      'Data augmentation protocols to balance limited and skewed dermatological datasets.',
      'Model validation and rigorous performance auditing via Accuracy, Precision, and Recall metrics.',
    ],
    visualType: 'fuzzy',
    // No live URL for this research/AI project
    liveUrl: undefined,
    // PLACEHOLDER: Replace with your GitHub repository link
    githubUrl: 'https://github.com/Siva2512/skin-lesion-fuzzy-classification',
    caseStudy: {
      problem:
        'Standard deep learning models for dermatological classification function as impenetrable black boxes, making clinical practitioners reluctant to trust diagnostic recommendations without explainable reasoning.',
      approach:
        'Designed a Fuzzy Inference System (FIS) utilizing rule bases derived from established ABCD dermatological criteria (Asymmetry, Border, Color, Diameter). Mapped extracted quantitative metrics into linguistic fuzzy terms.',
      architecture: [
        'Preprocessing pipeline for border contrast enhancement and noise suppression',
        'Feature extraction modules isolating color variance and structural eccentricity',
        'Mamdani fuzzy inference engine computing rule-based dermatological risk score',
        'Auditing module measuring confusion matrix distributions across test cohorts',
      ],
      outcome:
        'Produced an interpretable medical decision support methodology providing both a diagnostic classification and an explicit mathematical trail of contributing linguistic factors.',
    },
  },
  {
    id: 'face-emotion-detection',
    indexNumber: '03',
    title: 'Face Emotion Detection System',
    tagline: 'Real-time facial sentiment analysis with live bounding telemetry and multi-class confidence scoring.',
    description:
      'A real-time computer vision system built with Python, DeepFace, and OpenCV. Streams live camera feeds, detects facial facial landmarks, and computes multiclass probabilities across seven distinct human affective expressions.',
    category: 'Computer Vision & Deep Learning',
    stack: ['Python', 'DeepFace', 'OpenCV', 'NumPy', 'Computer Vision'],
    highlights: [
      'Real-time webcam video stream processing pipeline with low-latency face localization.',
      'Multiclass sentiment inference classifying: Happy, Sad, Angry, Surprise, Fear, Disgust, and Neutral.',
      'Dynamic visual telemetry HUD with live bounding coordinates and continuous confidence bars.',
      'Optimized frame extraction loop preserving high FPS across varying ambient lighting conditions.',
    ],
    visualType: 'emotion',
    liveUrl: undefined,
    // PLACEHOLDER: Replace with your GitHub repository link
    githubUrl: 'https://github.com/Siva2512/face-emotion-detection-deepface',
    caseStudy: {
      problem:
        'Capturing nuanced facial micro-expressions in real-time camera streams requires high-throughput inference without latency lags or jittery bounding boxes under irregular lighting.',
      approach:
        'Engineered an OpenCV capture loop integrated with DeepFace pre-trained models. Applied Haar Cascade / MTCNN localization with temporal smoothing to maintain stable bounding boxes across frames.',
      architecture: [
        'High-speed video capture and frame buffer management in OpenCV',
        'Facial region-of-interest (ROI) isolation and normalization',
        'DeepFace inference engine outputting 7-class softmax probability distribution',
        'Real-time HUD overlay rendering bounding frames, top emotion label, and confidence indicators',
      ],
      outcome:
        'Engineered an interactive vision pipeline delivering responsive sentiment classification, useful for assistive human-computer interaction and emotion-aware computing.',
    },
  },
];
