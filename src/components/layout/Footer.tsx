import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ['-0.05em', '0.02em']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.95]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={containerRef}
      className="relative border-t-2 border-rule-light dark:border-rule-dark bg-paper dark:bg-charcoal pt-16 pb-8 px-4 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      {/* Registration Marks */}
      <div className="corner-crosshair top-4 left-4 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair top-4 right-4 text-ink-light dark:text-ink-dark" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-rule-light dark:border-rule-dark">
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider">
            <a href="#work" className="hover:text-lime-dark dark:hover:text-lime transition-colors">
              (01) Work
            </a>
            <a href="#about" className="hover:text-lime-dark dark:hover:text-lime transition-colors">
              (02) About
            </a>
            <a href="#skills" className="hover:text-lime-dark dark:hover:text-lime transition-colors">
              (03) Skills
            </a>
            <a href="#journey" className="hover:text-lime-dark dark:hover:text-lime transition-colors">
              (04) Journey
            </a>
            <a href="#contact" className="hover:text-lime-dark dark:hover:text-lime transition-colors">
              (05) Contact
            </a>
            <a
              href={profileData.resumeUrl}
              download="Siva_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-dark dark:hover:text-lime transition-colors text-lime-dark dark:text-lime font-bold flex items-center gap-1"
            >
              Resume PDF ↗
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-rule-light dark:border-rule-dark bg-card-light dark:bg-card-dark hover:bg-lime hover:border-ink-light transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* MASSIVE WORDMARK REACTING TO SCROLL */}
        <div className="py-10 text-center overflow-hidden">
          <motion.h2
            style={{ letterSpacing, opacity }}
            className="font-display text-[19vw] font-black tracking-tighter leading-none text-ink-light/10 dark:text-ink-dark/15 hover:text-lime/30 transition-colors duration-300 uppercase select-none pointer-events-none"
          >
            {profileData.name.toUpperCase()}
          </motion.h2>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-rule-light dark:border-rule-dark font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-lime" />
            <span>Designed & Built by {profileData.name}</span>
            <span>•</span>
            <span>Chennai, India</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {currentYear} ALL RIGHTS RESERVED</span>
            <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
          </div>
        </div>
      </div>
    </footer>
  );
}
