import React, { useState } from 'react';
import { IntroScreen } from '@/components/intro/IntroScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Journey } from '@/components/sections/Journey';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('siva-intro-played') === 'true';
  });

  // Smooth scroll integration
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-paper dark:bg-charcoal text-ink-light dark:text-ink-dark transition-colors duration-300">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Vertical Scroll Progress Bar */}
      <ScrollProgress />

      {/* Full-screen Intro Sequence */}
      {!introFinished && (
        <IntroScreen onComplete={() => setIntroFinished(true)} />
      )}

      {/* Site Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
