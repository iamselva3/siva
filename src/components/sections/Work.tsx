import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { projectsData, ProjectItem } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CaseStudyDrawer } from './CaseStudyDrawer';
import { ElearningVisual } from './visuals/ElearningVisual';
import { FuzzyLogicVisual } from './visuals/FuzzyLogicVisual';
import { EmotionDetectionVisual } from './visuals/EmotionDetectionVisual';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  onOpenCaseStudy: (p: ProjectItem) => void;
}

function ProjectCard({ project, index, total, onOpenCaseStudy }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sticky stacking transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.85, 0.6]);

  const renderVisual = () => {
    switch (project.visualType) {
      case 'elearning':
        return <ElearningVisual />;
      case 'fuzzy':
        return <FuzzyLogicVisual />;
      case 'emotion':
        return <EmotionDetectionVisual />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="sticky mb-16 md:mb-24"
      style={{
        top: `calc(5.5rem + ${index * 1.5}rem)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative bg-card-light dark:bg-card-dark rounded-3xl border-2 border-rule-light dark:border-rule-dark p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
      >
        {/* Registration marks */}
        <div className="corner-crosshair top-4 left-4 text-ink-light dark:text-ink-dark" />
        <div className="corner-crosshair top-4 right-4 text-ink-light dark:text-ink-dark" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Project Details & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Header Index & Category */}
              <div className="flex items-center justify-between border-b border-rule-light dark:border-rule-dark pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-lime-dark dark:text-lime">
                    {project.indexNumber}
                  </span>
                  <span className="font-mono text-xs text-ink-light/40 dark:text-ink-dark/40">
                    / 0{total}
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-light/70 dark:text-ink-dark/70 bg-ink-light/5 dark:bg-ink-dark/10 px-3 py-1 rounded-full border border-rule-light dark:border-rule-dark">
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink-light dark:text-ink-dark leading-tight mb-2">
                {project.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-ink-light/70 dark:text-ink-dark/70 mb-5 leading-relaxed">
                {project.tagline}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md font-mono text-xs bg-ink-light/5 dark:bg-ink-dark/10 text-ink-light/80 dark:text-ink-dark/80 border border-rule-light dark:border-rule-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-8">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-light/80 dark:text-ink-dark/80">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                    <span className="font-sans leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-rule-light dark:border-rule-dark flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <MagneticButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="lime"
                  size="sm"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </MagneticButton>
              )}

              <MagneticButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </MagneticButton>

              <button
                onClick={() => onOpenCaseStudy(project)}
                className="font-mono text-xs uppercase font-bold tracking-wider text-ink-light dark:text-ink-dark hover:text-lime-dark dark:hover:text-lime flex items-center gap-1.5 px-3 py-2 rounded-full border border-rule-light dark:border-rule-dark hover:border-lime transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Unique Interactive Coded Visual */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            {renderVisual()}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Work() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="(01)"
        label="Featured Projects"
        title={
          <>
            Selected <span className="font-serif italic font-normal text-tangerine">craft</span> & systems
          </>
        }
        tagline="A curated trio spanning modern Next.js frontends, fuzzy-logic medical diagnostic AI, and real-time computer vision sentiment telemetry."
      />

      {/* Sticky Stacked Cards Stream */}
      <div className="relative pt-6 pb-12">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            total={projectsData.length}
            onOpenCaseStudy={setSelectedCaseStudy}
          />
        ))}
      </div>

      {/* Case Study Drawer */}
      <CaseStudyDrawer
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
