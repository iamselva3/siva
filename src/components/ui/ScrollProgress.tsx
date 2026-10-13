import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 right-0 w-1 md:w-1.5 h-full z-50 pointer-events-none bg-ink-light/5 dark:bg-ink-dark/5">
      <motion.div
        className="w-full bg-lime origin-top shadow-[0_0_8px_rgba(198,241,53,0.8)]"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}
