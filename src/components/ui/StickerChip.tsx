import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface StickerChipProps {
  label: string;
  category?: string;
  proficiency?: 'Daily' | 'Comfortable' | 'Learning';
  icon?: React.ReactNode;
  initialRotation?: number;
  isDimmed?: boolean;
  isHighlighted?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: 'paper' | 'lime' | 'tangerine' | 'sky';
  size?: 'sm' | 'md' | 'lg';
}

export function StickerChip({
  label,
  proficiency,
  icon,
  initialRotation = 0,
  isDimmed = false,
  isHighlighted = false,
  className,
  onClick,
  variant = 'paper',
  size = 'md',
}: StickerChipProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const variantClasses = {
    paper: 'bg-card-light dark:bg-card-dark text-ink-light dark:text-ink-dark border-2 border-ink-light/80 dark:border-ink-dark/80',
    lime: 'bg-lime text-ink-light border-2 border-ink-light font-bold',
    tangerine: 'bg-tangerine text-white border-2 border-ink-light font-bold',
    sky: 'bg-sky text-ink-light border-2 border-ink-light font-bold',
  };

  const proficiencyColors = {
    Daily: 'bg-lime text-ink-light',
    Comfortable: 'bg-sky/60 text-ink-light',
    Learning: 'bg-tangerine/30 text-ink-light dark:text-ink-dark',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-2.5 text-base gap-2.5',
  };

  return (
    <motion.div
      drag={!prefersReducedMotion}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0.45}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
      whileDrag={{ scale: 1.12, zIndex: 50, rotate: 0 }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      data-cursor="drag"
      onClick={onClick}
      style={{ rotate: prefersReducedMotion ? 0 : `${initialRotation}deg` }}
      animate={{
        opacity: isDimmed ? 0.25 : 1,
        scale: isHighlighted ? 1.08 : 1,
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        'inline-flex items-center rounded-full font-mono font-medium shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#C6F135] transition-all cursor-grab active:cursor-grabbing select-none',
        variantClasses[variant],
        sizeClasses[size],
        isHighlighted && 'ring-2 ring-lime ring-offset-2 dark:ring-offset-charcoal',
        className
      )}
    >
      {icon && <span className="text-base shrink-0">{icon}</span>}
      <span className="tracking-wide whitespace-nowrap">{label}</span>
      {proficiency && (
        <span
          className={cn(
            'text-[10px] px-1.5 py-0.5 rounded-full font-mono uppercase font-bold tracking-wider',
            proficiencyColors[proficiency]
          )}
        >
          {proficiency}
        </span>
      )}
    </motion.div>
  );
}
