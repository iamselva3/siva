import { useState, useEffect, useCallback } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('siva-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('siva-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((event?: React.MouseEvent) => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';

    // Check for View Transitions API and prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as any;

    if (!doc.startViewTransition || prefersReducedMotion || !event) {
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: nextTheme === 'dark' ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement:
            nextTheme === 'dark'
              ? '::view-transition-new(root)'
              : '::view-transition-old(root)',
        }
      );
    });
  }, [theme]);

  return { theme, isDark: theme === 'dark', toggleTheme, setTheme };
}
