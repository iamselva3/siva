import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { profileData } from '@/data/profile';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StickerChip } from '@/components/ui/StickerChip';
import { CSSFallbackCanvas } from '@/components/canvas/CSSFallbackCanvas';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// Lazy load the 3D Canvas
const Hero3DCanvas = lazy(() => import('@/components/canvas/Hero3DCanvas'));

// Rotating Circular Badge Component
function RotatingTextBadge() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center select-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        className="absolute inset-0 w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-ink-light/80 dark:text-ink-dark/80">
          <path
            id="textPathCircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[9.5px] font-mono uppercase tracking-[2.5px] font-bold">
            <textPath href="#textPathCircle" startOffset="0%">
              {profileData.rotatingBadgeText}
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-lime text-ink-light flex items-center justify-center shadow-md border-2 border-ink-light dark:border-lime">
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Mouse spotlight coordinates
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const [emotionIdx, setEmotionIdx] = useState(0);

  // Parallax spring physics for layers
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  // Cycle face emotion motif
  useEffect(() => {
    const interval = setInterval(() => {
      setEmotionIdx((prev) => (prev + 1) % profileData.emotionCycles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlight({ x, y, active: true });

    // Normalized -1 to 1 for perspective parallax
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    mouseX.set(normX * 18);
    mouseY.set(normY * 18);
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-10 px-4 sm:px-8 md:px-12 overflow-hidden bg-paper dark:bg-charcoal transition-colors select-none"
    >
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Suspense fallback={<CSSFallbackCanvas />}>
          <Hero3DCanvas />
        </Suspense>
      </div>

      {/* Decorative Registration Crosshairs */}
      <div className="corner-crosshair top-6 left-6 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair top-6 right-6 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair bottom-6 left-6 text-ink-light dark:text-ink-dark" />
      <div className="corner-crosshair bottom-6 right-6 text-ink-light dark:text-ink-dark" />

      {/* Top Meta Details */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 w-full max-w-7xl mx-auto pt-4 border-b border-rule-light dark:border-rule-dark pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink-light/80 dark:text-ink-dark/80 font-semibold">
            {profileData.roleLabel}
          </span>
        </div>

        <div className="font-mono text-xs text-ink-light/60 dark:text-ink-dark/60 tracking-wider flex items-center gap-4">
          <span>{profileData.location.city}, TN, IN</span>
          <span className="hidden sm:inline font-bold text-lime-dark dark:text-lime">
            OPEN TO ROLES
          </span>
        </div>
      </div>

      {/* CENTER POSTER CANVAS: Giant Typographic Text + Photo Cutout + Face Scan + Sticker Chips */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-[550px] md:min-h-[640px] my-4">
        {/* LAYER 1: Giant Outlined Text Layer (BEHIND CUTOUT) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            className="w-full text-center"
          >
            {/* Outline version */}
            <h1
              className="font-display text-[22vw] font-black tracking-tighter leading-none select-none text-transparent uppercase whitespace-nowrap"
              style={{
                WebkitTextStroke: '1.5px rgba(17, 17, 17, 0.22)',
              }}
            >
              {profileData.name.toUpperCase()}
            </h1>
          </motion.div>
        </div>

        {/* LAYER 2: Spotlight Revealed Filled Text (Revealed via mouse radial-gradient) */}
        {spotlight.active && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden transition-opacity duration-300"
            style={{
              WebkitMaskImage: `radial-gradient(circle 280px at ${spotlight.x}px ${spotlight.y}px, black 30%, transparent 80%)`,
              maskImage: `radial-gradient(circle 280px at ${spotlight.x}px ${spotlight.y}px, black 30%, transparent 80%)`,
            }}
          >
            <motion.div
              style={{ x: mouseX, y: mouseY }}
              className="w-full text-center"
            >
              <h1 className="font-display text-[22vw] font-black tracking-tighter leading-none select-none text-lime dark:text-lime uppercase whitespace-nowrap opacity-90 drop-shadow-[0_0_20px_rgba(198,241,53,0.35)]">
                {profileData.name.toUpperCase()}
              </h1>
            </motion.div>
          </div>
        )}

        {/* LAYER 3: Person's Photo Cutout (Centered, overlapping the giant text) */}
        <motion.div
          style={{
            x: useSpring(mouseX, { stiffness: 180, damping: 25 }),
            y: useSpring(mouseY, { stiffness: 180, damping: 25 }),
          }}
          className="relative z-20 flex flex-col items-center justify-end max-w-[440px] sm:max-w-[500px] md:max-w-[580px] h-full max-h-[600px] pointer-events-none"
        >
          {/* Subtle Rim Light Glow behind cutout */}
          <div className="absolute top-1/4 w-80 h-80 rounded-full bg-lime/20 dark:bg-lime/25 blur-3xl pointer-events-none -z-10" />

          {/* Face-Scan Decorative Motif - Centered over facial features */}
          <div className="absolute top-[10%] sm:top-[12%] left-[45%] -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
            <div className="relative w-36 sm:w-42 h-36 sm:h-42 border border-lime/40 rounded-lg p-2 flex flex-col justify-between">
              {/* Corner brackets */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime" />

              {/* Status Header */}
              <div className="flex items-center justify-between font-mono text-[9px] text-lime font-bold tracking-widest uppercase">
                <span>[SCAN]</span>
                <span className="animate-pulse">REC ●</span>
              </div>

              {/* Cycling emotion sentiment label */}
              <div className="bg-charcoal/80 dark:bg-charcoal/90 text-lime px-2 py-0.5 rounded border border-lime/30 text-center font-mono text-[10px] tracking-wider self-center backdrop-blur-sm shadow-md">
                {profileData.emotionCycles[emotionIdx]}
              </div>
            </div>
            <span className="mt-1 font-mono text-[9px] text-ink-light/60 dark:text-ink-dark/60 tracking-wider">
              FIS • CV TELEMETRY
            </span>
          </div>

          {/* Actual Cutout Image */}
          <div className="relative w-full overflow-visible">
            <img
              src="/images/siva-cutout.png"
              alt="Siva — Cutout Portrait"
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] select-none filter contrast-105"
            />
          </div>
        </motion.div>

        {/* LAYER 4: Draggable Floating Sticker Chips around the cutout */}
        <div className="absolute inset-0 pointer-events-none z-30 max-w-6xl mx-auto">
          {/* Top-Left: React */}
          <div className="absolute top-[8%] left-[4%] sm:left-[10%] pointer-events-auto">
            <StickerChip
              label="React.js"
              variant="lime"
              initialRotation={-8}
              proficiency="Daily"
            />
          </div>

          {/* Mid-Left: Tailwind */}
          <div className="absolute top-[42%] left-[2%] sm:left-[8%] pointer-events-auto">
            <StickerChip
              label="Tailwind CSS"
              variant="paper"
              initialRotation={6}
              proficiency="Daily"
            />
          </div>

          {/* Bottom-Left: Next.js */}
          <div className="absolute bottom-[18%] left-[5%] sm:left-[14%] pointer-events-auto">
            <StickerChip
              label="Next.js"
              variant="paper"
              initialRotation={-4}
              proficiency="Daily"
            />
          </div>

          {/* Top-Right: Python */}
          <div className="absolute top-[10%] right-[4%] sm:right-[12%] pointer-events-auto">
            <StickerChip
              label="Python"
              variant="paper"
              initialRotation={9}
              proficiency="Comfortable"
            />
          </div>

          {/* Mid-Right: SQL */}
          <div className="absolute top-[40%] right-[3%] sm:right-[10%] pointer-events-auto">
            <StickerChip
              label="SQL"
              variant="lime"
              initialRotation={-6}
              proficiency="Comfortable"
            />
          </div>

          {/* Bottom-Right: AWS & Linux */}
          <div className="absolute bottom-[20%] right-[6%] sm:right-[14%] pointer-events-auto flex flex-col gap-2">
            <StickerChip
              label="AWS"
              variant="tangerine"
              initialRotation={5}
              proficiency="Learning"
            />
            <StickerChip
              label="Linux"
              variant="sky"
              initialRotation={-3}
              proficiency="Learning"
            />
          </div>
        </div>

        {/* LAYER 5: Rotating circular text badge */}
        <div className="absolute top-[12%] right-[2%] md:right-[6%] pointer-events-auto z-25 hidden sm:block">
          <RotatingTextBadge />
        </div>
      </div>

      {/* BOTTOM HERO CONTENT: 1-line intro + CTAs + Scroll Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-4 border-t border-rule-light dark:border-rule-dark flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        {/* Left-bottom: One-line intro */}
        <div className="max-w-md">
          <p className="font-serif italic text-2xl sm:text-3xl text-ink-light dark:text-ink-dark leading-snug">
            “AI & Data Science grad turning ideas into{' '}
            <span className="not-italic font-display font-black text-lime-dark dark:text-lime">
              fast, accessible
            </span>{' '}
            interfaces.”
          </p>
          <p className="mt-2 font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
            Front-End Developer • Currently growing into Cloud & DevOps
          </p>
        </div>

        {/* Right-bottom: CTAs & scroll cue */}
        <div className="flex flex-wrap items-center gap-4">
          <MagneticButton
            href="#work"
            variant="lime"
            size="md"
          >
            <span>See my work</span>
            <ArrowDown className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Siva_Resume.pdf"
            variant="outline"
            size="md"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
