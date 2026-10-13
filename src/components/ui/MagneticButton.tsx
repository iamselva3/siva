import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'lime' | 'outline' | 'ghost' | 'tangerine';
  size?: 'sm' | 'md' | 'lg';
  download?: boolean | string;
}

export function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
  variant = 'lime',
  size = 'md',
  download,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const x = useSpring(0, { stiffness: 250, damping: 20 });
  const y = useSpring(0, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull factor
    x.set(distanceX * 0.28);
    y.set(distanceY * 0.28);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    lime: 'bg-lime text-ink-light border-2 border-ink-light dark:border-lime shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#C6F135] hover:shadow-[1px_1px_0px_0px_#111111] dark:hover:shadow-[1px_1px_0px_0px_#C6F135] hover:translate-x-[2px] hover:translate-y-[2px]',
    tangerine: 'bg-tangerine text-white border-2 border-ink-light dark:border-tangerine shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#FF5A1F] hover:shadow-[1px_1px_0px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px]',
    outline: 'bg-transparent text-ink-light dark:text-ink-dark border-2 border-ink-light/80 dark:border-ink-dark/80 hover:bg-ink-light/5 dark:hover:bg-ink-dark/5 shadow-[3px_3px_0px_0px_rgba(17,17,17,0.3)] dark:shadow-[3px_3px_0px_0px_rgba(243,238,228,0.2)] hover:shadow-[1px_1px_0px_0px_rgba(17,17,17,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]',
    ghost: 'bg-transparent text-ink-light dark:text-ink-dark hover:bg-lime/20 border border-transparent',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-mono tracking-wider',
    md: 'px-5 py-2.5 text-sm font-mono tracking-wider font-medium',
    lg: 'px-7 py-3.5 text-base font-mono tracking-wider font-semibold',
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-150 select-none uppercase font-mono cursor-pointer',
            variantStyles[variant],
            sizeStyles[size],
            className
          )}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-150 select-none uppercase font-mono cursor-pointer',
            variantStyles[variant],
            sizeStyles[size],
            className
          )}
          {...props}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
