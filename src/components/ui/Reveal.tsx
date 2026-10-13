import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  overflowHidden?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  overflowHidden = true,
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initialTransforms = {
    up: { y: '100%', opacity: 0 },
    down: { y: '-100%', opacity: 0 },
    left: { x: '100%', opacity: 0 },
    right: { x: '-100%', opacity: 0 },
  };

  return (
    <div className={cn(overflowHidden ? 'overflow-hidden' : '', 'inline-block w-full', className)}>
      <motion.div
        initial={initialTransforms[direction]}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
