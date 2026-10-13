import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIST } from '@/hooks/useIST';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { profileData } from '@/data/profile';

interface IntroScreenProps {
  onComplete: () => void;
}

const GREETINGS = [
  { text: 'Hello', font: 'font-display' },
  { text: 'Namaste', font: 'font-display' },
  { text: 'Hola', font: 'font-display' },
  { text: 'Bonjour', font: 'font-display' },
  { text: 'வணக்கம் (Vanakkam)', font: 'font-serif italic text-lime-dark dark:text-lime' },
];

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const { timeString } = useIST();
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleFinish = () => {
    sessionStorage.setItem('siva-intro-played', 'true');
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem('siva-intro-played') === 'true') {
      onComplete();
      return;
    }

    if (prefersReducedMotion) {
      const timer = setTimeout(handleFinish, 600);
      return () => clearTimeout(timer);
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Progress counter animation from 0 to 100 over ~2.6s
    const startTime = performance.now();
    const duration = 2400;

    const progressInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
        setTimeout(handleFinish, 300);
      }
    }, 30);

    // Greetings cycle
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => {
        if (prev < GREETINGS.length - 1) return prev + 1;
        clearInterval(greetingInterval);
        return prev;
      });
    }, 450);

    // Escape key to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearInterval(progressInterval);
      clearInterval(greetingInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prefersReducedMotion]);

  const formattedProgress = String(progress).padStart(3, '0');

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-paper dark:bg-charcoal text-ink-light dark:text-ink-dark select-none"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full border-b border-rule-light dark:border-rule-dark pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
              <span className="font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
                {profileData.name.toUpperCase()} — PORTFOLIO 2026
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-mono text-xs sm:text-sm text-ink-light/60 dark:text-ink-dark/60 tabular-nums">
                {timeString || 'LIVE IST'}
              </span>

              <button
                onClick={handleFinish}
                className="font-mono text-xs px-3 py-1 rounded-full border border-ink-light/30 dark:border-ink-dark/30 hover:bg-lime hover:text-ink-light hover:border-lime transition-all uppercase tracking-wider"
              >
                Skip [Esc]
              </button>
            </div>
          </div>

          {/* Center Greeting Cycle */}
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12 overflow-hidden">
            <div className="h-28 sm:h-36 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={greetingIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight ${GREETINGS[greetingIndex].font}`}
                >
                  {GREETINGS[greetingIndex].text}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 font-mono text-xs sm:text-sm tracking-widest text-ink-light/50 dark:text-ink-dark/50 uppercase">
              CHENNAI • TAMIL NADU • INDIA
            </p>
          </div>

          {/* Bottom Bar: Huge Percentage Counter & Lime Bar */}
          <div className="w-full pt-4">
            <div className="flex items-end justify-between mb-3">
              <div>
                <span className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter tabular-nums text-ink-light dark:text-ink-dark">
                  {formattedProgress}
                </span>
                <span className="font-mono text-lg sm:text-2xl text-lime-dark dark:text-lime font-bold ml-1">
                  %
                </span>
              </div>

              <div className="text-right font-mono text-xs sm:text-sm text-ink-light/60 dark:text-ink-dark/60 uppercase">
                <span>INITIALIZING EDITORIAL CANVAS</span>
              </div>
            </div>

            {/* Lime Progress Line across bottom edge */}
            <div className="w-full h-1.5 sm:h-2 bg-ink-light/10 dark:bg-ink-dark/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-lime rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
