import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Position spring physics for ultra-smooth buttery lag
  const mouseX = useSpring(0, { stiffness: 450, damping: 32 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 32 });
  const dotX = useSpring(0, { stiffness: 1000, damping: 45 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 45 });

  useEffect(() => {
    // Only enable for fine pointer (desktops)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsPointer(true);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      const customLabel = target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (customLabel) {
        setCursorText(customLabel.toUpperCase());
        setIsHovered(true);
      } else if (interactive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY, dotX, dotY]);

  if (!isPointer || !isVisible) return null;

  return (
    <>
      {/* Outer lerping ring with label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full border border-ink-light/40 dark:border-ink-dark/40 bg-lime/10 dark:bg-lime/20 backdrop-blur-[1px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 76 : isHovered ? 48 : 28,
          height: cursorText ? 76 : isHovered ? 48 : 28,
          scale: isHovered ? 1.15 : 1,
          borderColor: cursorText ? 'rgba(198, 241, 53, 0.9)' : isHovered ? 'rgba(198, 241, 53, 0.7)' : 'rgba(17, 17, 17, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-ink-light dark:text-ink-dark uppercase select-none px-1 text-center">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-lime border border-ink-light/20 shadow-sm"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
