import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { journeyTimeline, TimelineEntry } from '@/data/experience';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Drawing timeline line scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="(04)"
        label="Trajectory & Progression"
        title={
          <>
            Experience & <span className="font-serif italic font-normal text-tangerine">academic</span> lineage
          </>
        }
        tagline="From foundational engineering principles to full-stack frontend development and cutting-edge artificial intelligence."
      />

      {/* Vertical Timeline with Continuous Drawing Line */}
      <div className="relative mt-12 pl-6 sm:pl-10 md:pl-16">
        {/* Background track line */}
        <div className="absolute left-[11px] sm:left-[19px] md:left-[27px] top-4 bottom-4 w-1 bg-ink-light/10 dark:bg-ink-dark/10 rounded-full" />

        {/* Dynamic animated drawing line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[11px] sm:left-[19px] md:left-[27px] top-4 bottom-4 w-1 bg-lime origin-top rounded-full shadow-[0_0_10px_rgba(198,241,53,0.7)]"
        />

        {/* Timeline Entries */}
        <div className="space-y-12 sm:space-y-16">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[46px] top-1.5 w-6 h-6 rounded-full bg-paper dark:bg-charcoal border-4 border-lime flex items-center justify-center shadow-md group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-light dark:bg-ink-dark" />
              </div>

              {/* Card Container */}
              <div className="bg-card-light dark:bg-card-dark rounded-2xl border-2 border-rule-light dark:border-rule-dark p-6 sm:p-8 shadow-md hover:border-lime/60 transition-colors">
                {/* Meta Header with Mono Dates */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light dark:border-rule-dark pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-lime-dark dark:text-lime uppercase tracking-widest bg-lime/10 px-2.5 py-1 rounded-full border border-lime/30 flex items-center gap-1.5">
                      {item.kind === 'work' ? (
                        <Briefcase className="w-3.5 h-3.5" />
                      ) : (
                        <GraduationCap className="w-3.5 h-3.5" />
                      )}
                      <span>{item.badge}</span>
                    </span>

                    <span className="font-mono text-xs tracking-wider text-ink-light/60 dark:text-ink-dark/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-ink-light/40 dark:text-ink-dark/40" />
                      {item.dateRange}
                    </span>
                  </div>

                  {item.metrics && (
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-card-light dark:bg-charcoal border border-rule-light dark:border-rule-dark text-ink-light dark:text-ink-dark">
                      SCORE: {item.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h4 className="font-display text-xl sm:text-2xl font-extrabold text-ink-light dark:text-ink-dark">
                  {item.title}
                </h4>
                <p className="font-mono text-sm text-lime-dark dark:text-lime font-bold mt-0.5 mb-4">
                  {item.subtitle}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-light/80 dark:text-ink-dark/80">
                      <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
