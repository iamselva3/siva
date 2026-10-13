import React from 'react';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = 'left',
  speed = 25,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn('flex flex-wrap gap-6 py-4 overflow-x-auto', className)}>
        {children}
      </div>
    );
  }

  const animationName = direction === 'left' ? 'marquee' : 'marquee-reverse';

  return (
    <div
      className={cn(
        'group flex overflow-hidden select-none gap-6 py-2',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 items-center gap-6 min-w-full',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex shrink-0 items-center gap-6 min-w-full',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
