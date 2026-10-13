import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, GraduationCap, Award, Compass, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '@/data/profile';
import { educationHistory, achievementsList } from '@/data/experience';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TiltCard } from '@/components/ui/TiltCard';
import { useIST } from '@/hooks/useIST';

export function About() {
  const { timeString } = useIST();

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="(02)"
        label="Background & Foundation"
        title={
          <>
            Engineering with <span className="font-serif italic font-normal text-lime-dark dark:text-lime">curiosity</span> & discipline
          </>
        }
        tagline="From mechanical engineering foundations to artificial intelligence, data science, and modern front-end user experience."
      />

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* CARD 1: Large Bio Card (Span 7 cols) */}
        <div className="md:col-span-7">
          <TiltCard
            tiltDegree={5}
            className="h-full bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark p-7 sm:p-9 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between border-b border-rule-light dark:border-rule-dark pb-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-lime-dark dark:text-lime font-bold">
                  BIOGRAPHY / PHILOSOPHY
                </span>
                <span className="font-mono text-xs text-ink-light/50 dark:text-ink-dark/50">
                  CODE & DATA
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink-light dark:text-ink-dark leading-tight mb-6">
                Transforming rigorous algorithmic thinking into{' '}
                <span className="font-serif italic font-normal text-tangerine">tactile</span>,{' '}
                <span className="font-serif italic font-normal text-lime-dark dark:text-lime">accessible</span> digital interfaces.
              </h3>

              <p className="font-sans text-base sm:text-lg text-ink-light/80 dark:text-ink-dark/80 leading-relaxed space-y-4">
                {profileData.summary}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-rule-light dark:border-rule-dark flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-lime" />
                Frontend Dev • AI & Data Science
              </span>
              <span>CHENNAI, TAMIL NADU</span>
            </div>
          </TiltCard>
        </div>

        {/* CARD 2: "Currently" Status Card (Span 5 cols) */}
        <div className="md:col-span-5">
          <TiltCard
            tiltDegree={6}
            className="h-full bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark p-7 sm:p-9 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between border-b border-rule-light dark:border-rule-dark pb-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-sky font-bold">
                  FOCUS & DIRECTION
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-lime-dark dark:text-lime font-semibold">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  ACTIVE
                </span>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-ink-light dark:text-ink-dark mb-4">
                Currently Advancing
              </h4>

              <div className="space-y-4 font-sans text-sm sm:text-base text-ink-light/80 dark:text-ink-dark/80">
                <div className="p-4 rounded-xl bg-ink-light/5 dark:bg-ink-dark/5 border border-rule-light dark:border-rule-dark">
                  <span className="font-mono text-xs text-lime-dark dark:text-lime font-bold block mb-1">
                    01 • ACADEMIC COMPLETION
                  </span>
                  <p>
                    Finishing B.Tech in Artificial Intelligence & Data Science at PSR Engineering College (Class of 2026).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ink-light/5 dark:bg-ink-dark/5 border border-rule-light dark:border-rule-dark">
                  <span className="font-mono text-xs text-tangerine font-bold block mb-1">
                    02 • CLOUD & DEVOPS
                  </span>
                  <p>
                    Deepening hands-on competency in AWS (EC2, S3), Linux system administration, Docker containerization, and networking fundamentals (CIDR & Subnetting).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rule-light dark:border-rule-dark font-mono text-xs text-ink-light/50 dark:text-ink-dark/50 flex justify-between">
              <span>CONTINUOUS LEARNING</span>
              <span>2026 GRADUATE</span>
            </div>
          </TiltCard>
        </div>

        {/* CARD 3: Education Mini-Timeline (Span 5 cols) */}
        <div className="md:col-span-5">
          <TiltCard
            tiltDegree={6}
            className="h-full bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark p-7 sm:p-9 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between border-b border-rule-light dark:border-rule-dark pb-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-lime-dark dark:text-lime font-bold">
                  EDUCATION MILESTONES
                </span>
                <GraduationCap className="w-4 h-4 text-lime" />
              </div>

              <div className="space-y-5">
                {educationHistory.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-5 border-l-2 border-lime/40 pb-1"
                  >
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-lime" />
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="font-mono text-xs text-lime-dark dark:text-lime font-bold">
                        {edu.year}
                      </span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-ink-light/10 dark:bg-ink-dark/10 font-bold">
                        {edu.scoreType} {edu.score}
                      </span>
                    </div>
                    <h5 className="font-display text-sm sm:text-base font-bold text-ink-light dark:text-ink-dark">
                      {edu.degree}
                    </h5>
                    <p className="font-mono text-xs text-ink-light/60 dark:text-ink-dark/60 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rule-light dark:border-rule-dark font-mono text-[11px] text-ink-light/50 dark:text-ink-dark/50">
              ACADEMIC MERIT & ENGINEERING DISCIPLINE
            </div>
          </TiltCard>
        </div>

        {/* CARD 4: Location & Live Time Card (Span 3 cols) */}
        <div className="md:col-span-3">
          <TiltCard
            tiltDegree={8}
            className="h-full bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark p-7 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between border-b border-rule-light dark:border-rule-dark pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-light/60 dark:text-ink-dark/60">
                  BASE LOCATION
                </span>
                <MapPin className="w-4 h-4 text-tangerine" />
              </div>

              {/* Stylized Chennai Map Graphic */}
              <div className="relative py-4 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-lime/20 border border-lime/40 flex items-center justify-center mb-3">
                  <Compass className="w-8 h-8 text-lime animate-spin-slow" />
                </div>
                <h4 className="font-display text-2xl font-black text-ink-light dark:text-ink-dark">
                  Chennai
                </h4>
                <p className="font-mono text-xs text-ink-light/60 dark:text-ink-dark/60 mt-0.5">
                  Tamil Nadu, India
                </p>
                <span className="font-mono text-[10px] text-ink-light/40 dark:text-ink-dark/40 mt-1">
                  {profileData.location.coordinatesText}
                </span>
              </div>
            </div>

            {/* Live Clock Display */}
            <div className="pt-4 border-t border-rule-light dark:border-rule-dark">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="flex items-center gap-1.5 text-ink-light/60 dark:text-ink-dark/60">
                  <Clock className="w-3.5 h-3.5 text-lime" />
                  Local Time:
                </span>
                <span className="font-bold text-lime-dark dark:text-lime tabular-nums">
                  {timeString}
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* CARD 5: "Beyond Code" Hackathons Card (Span 4 cols) */}
        <div className="md:col-span-4">
          <TiltCard
            tiltDegree={6}
            className="h-full bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark p-7 sm:p-8 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between border-b border-rule-light dark:border-rule-dark pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-lime-dark dark:text-lime font-bold">
                  BEYOND CODE • HACKATHONS
                </span>
                <Award className="w-4 h-4 text-lime" />
              </div>

              <div className="space-y-3">
                {achievementsList.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-3 rounded-xl bg-ink-light/5 dark:bg-ink-dark/5 border border-rule-light dark:border-rule-dark"
                  >
                    <h5 className="font-display text-sm font-bold text-ink-light dark:text-ink-dark flex items-center justify-between">
                      <span>{ach.title}</span>
                      <Sparkles className="w-3 h-3 text-lime" />
                    </h5>
                    <p className="font-mono text-[11px] text-ink-light/60 dark:text-ink-dark/60 mt-0.5">
                      {ach.organizer}
                    </p>
                    <p className="font-sans text-xs text-ink-light/80 dark:text-ink-dark/80 mt-1 leading-snug">
                      {ach.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-rule-light dark:border-rule-dark font-mono text-[11px] text-ink-light/50 dark:text-ink-dark/50">
              INNOVATION & RAPID PROTOTYPING
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
