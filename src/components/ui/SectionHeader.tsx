import React from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  number: string; // e.g. "(01)"
  label: string; // e.g. "Work & Projects"
  title: React.ReactNode; // e.g. <>Selected <span className="font-serif italic font-normal text-tangerine">craft</span> & systems</>
  tagline?: string;
  className?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  tagline,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('relative mb-12 md:mb-16', className)}>
      {/* Registration badge */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs md:text-sm tracking-widest text-lime-dark dark:text-lime font-bold uppercase">
          {number}
        </span>
        <div className="h-[1px] w-6 bg-ink-light/20 dark:bg-ink-dark/20" />
        <span className="font-mono text-xs md:text-sm tracking-widest text-ink-light/60 dark:text-ink-dark/60 uppercase">
          {label}
        </span>
      </div>

      {/* Main Title */}
      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink-light dark:text-ink-dark leading-[1.05]">
          {title}
        </h2>
      </Reveal>

      {/* Tagline */}
      {tagline && (
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl font-mono text-sm sm:text-base text-ink-light/70 dark:text-ink-dark/70 leading-relaxed">
            {tagline}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function CornerMarks() {
  return (
    <>
      <div className="corner-crosshair top-3 left-3 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair top-3 right-3 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair bottom-3 left-3 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair bottom-3 right-3 text-ink-light dark:text-ink-dark" />
    </>
  );
}
