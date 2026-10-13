import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUpRight, Menu, X, FileText, Download } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { profileData } from '@/data/profile';
import { MagneticButton } from '@/components/ui/MagneticButton';

const NAV_LINKS = [
  { name: 'Work', href: '#work', number: '01' },
  { name: 'About', href: '#about', number: '02' },
  { name: 'Skills', href: '#skills', number: '03' },
  { name: 'Journey', href: '#journey', number: '04' },
  { name: 'Contact', href: '#contact', number: '05' },
];

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('work');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll direction detection (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Section observer to update active section link
  useEffect(() => {
    const sectionIds = ['work', 'about', 'skills', 'journey', 'contact'];
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-35% 0px -45% 0px',
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <nav
            className={`flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'bg-paper/85 dark:bg-charcoal/85 backdrop-blur-md border-rule-light dark:border-rule-dark shadow-sm'
                : 'bg-transparent border-transparent'
            }`}
          >
            {/* Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-black tracking-tight text-ink-light dark:text-ink-dark focus:outline-none"
            >
              <span>{profileData.name}</span>
              <span className="w-2 h-2 rounded-full bg-lime group-hover:scale-150 transition-transform duration-200" />
            </a>

            {/* Desktop Centered Links with Sliding Pill */}
            <div className="hidden md:flex items-center gap-1 relative px-2 py-1 rounded-full bg-ink-light/5 dark:bg-ink-dark/5 border border-rule-light dark:border-rule-dark">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const isHovered = hoveredLink === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-light dark:text-ink-dark font-medium transition-colors z-10"
                  >
                    {link.name}

                    {/* Sliding Pill Indicator */}
                    {(isHovered || (isActive && hoveredLink === null)) && (
                      <motion.div
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-lime rounded-full -z-10 shadow-sm"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: Theme Toggle + Resume CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => toggleTheme(e)}
                aria-label="Toggle color theme"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-rule-light dark:border-rule-dark bg-card-light dark:bg-card-dark text-ink-light dark:text-ink-dark hover:border-lime transition-colors"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-lime animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-ink-light" />
                )}
              </button>

              <div className="hidden sm:block">
                <MagneticButton
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Siva_Resume.pdf"
                  variant="lime"
                  size="sm"
                  className="rounded-full shadow-none hover:shadow-none"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </MagneticButton>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-rule-light dark:border-rule-dark bg-card-light dark:bg-card-dark text-ink-light dark:text-ink-dark"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Staggered Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-paper dark:bg-charcoal flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-lime-dark dark:text-lime uppercase tracking-widest font-bold">
                NAVIGATION
              </span>

              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    className="flex items-baseline justify-between border-b border-rule-light dark:border-rule-dark pb-3 text-3xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark hover:text-lime-dark dark:hover:text-lime"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-ink-light/40 dark:text-ink-dark/40">
                      {link.number}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-rule-light dark:border-rule-dark flex flex-col gap-4">
              <a
                href={profileData.resumeUrl}
                download="Siva_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-lime text-ink-light font-mono text-sm uppercase font-bold text-center flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex justify-between font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
                <span>{profileData.location.city}, India</span>
                <span className="text-lime-dark dark:text-lime font-bold">AVAILABLE 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
