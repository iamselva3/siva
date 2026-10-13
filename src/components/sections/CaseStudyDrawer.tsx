import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Compass, Layers } from 'lucide-react';
import { ProjectItem } from '@/data/projects';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface CaseStudyDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyDrawer({ project, onClose }: CaseStudyDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink-light/60 dark:bg-black/75 backdrop-blur-sm cursor-pointer"
        />

        {/* Sliding Drawer Container */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-2xl bg-paper dark:bg-card-dark text-ink-light dark:text-ink-dark border-l border-rule-light dark:border-rule-dark shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-rule-light dark:border-rule-dark flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-lime-dark dark:text-lime font-bold uppercase">
                  <span>PROJECT CASE STUDY</span>
                  <span>•</span>
                  <span>{project.indexNumber}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs sm:text-sm text-ink-light/70 dark:text-ink-dark/70">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close case study drawer"
                className="w-10 h-10 rounded-full border border-rule-light dark:border-rule-dark flex items-center justify-center hover:bg-lime hover:text-ink-light transition-colors shrink-0 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-8 flex-1">
              {/* Problem Statement */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-tangerine font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge & Problem</span>
                </div>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-ink-light/80 dark:text-ink-dark/80 bg-ink-light/5 dark:bg-ink-dark/5 p-4 rounded-xl border border-rule-light dark:border-rule-dark">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky font-bold">
                  <Compass className="w-4 h-4" />
                  <span>Engineering Approach</span>
                </div>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-ink-light/80 dark:text-ink-dark/80">
                  {project.caseStudy.approach}
                </p>
              </div>

              {/* Architecture & Implementation Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime-dark dark:text-lime font-bold">
                  <Layers className="w-4 h-4" />
                  <span>Key Architecture Modules</span>
                </div>
                <div className="space-y-2">
                  {project.caseStudy.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-card-light dark:bg-charcoal border border-rule-light dark:border-rule-dark"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                      <span className="font-mono text-xs sm:text-sm text-ink-light/90 dark:text-ink-dark/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Measurable Outcome & Impact</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg leading-relaxed text-ink-light/90 dark:text-ink-dark/90 bg-lime/10 p-4 rounded-xl border border-lime/30">
                  “{project.caseStudy.outcome}”
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase text-ink-light/60 dark:text-ink-dark/60">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full font-mono text-xs bg-ink-light/5 dark:bg-ink-dark/10 border border-rule-light dark:border-rule-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with actions */}
            <div className="p-6 sm:p-8 border-t border-rule-light dark:border-rule-dark flex flex-wrap items-center justify-between gap-4 bg-ink-light/5 dark:bg-ink-dark/5">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <MagneticButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="lime"
                    size="sm"
                  >
                    <span>View Live</span>
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
              </div>

              <button
                onClick={onClose}
                className="font-mono text-xs uppercase text-ink-light/60 dark:text-ink-dark/60 hover:text-ink-light dark:hover:text-ink-dark underline underline-offset-4"
              >
                Close Drawer [Esc]
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
