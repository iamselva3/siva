import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData, skillCategories, marqueeRowOne, marqueeRowTwo, SkillItem } from '@/data/skills';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StickerChip } from '@/components/ui/StickerChip';
import { Marquee } from '@/components/ui/Marquee';
import { TechIcon } from '@/components/ui/TechIcon';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Precomputed rotations for visual sticker look
  const rotations = [-4, 3, -6, 5, -2, 6, -5, 4, -3, 5, -6, 3, -4, 5, -3, 4, -5, 3, -2];

  const handleCategoryHover = (catId: string | null) => {
    setActiveCategory(catId);
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="(03)"
        label="Capabilities & Tools"
        title={
          <>
            Interactive <span className="font-serif italic font-normal text-lime-dark dark:text-lime">sticker wall</span> & toolkit
          </>
        }
        tagline="Chunky draggable chips with real-world physics. Hover any category to illuminate related tools; drag and flick them across the board."
      />

      {/* Category Pills Filter / Hover Toggles */}
      <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-rule-light dark:border-rule-dark">
        <button
          onClick={() => setActiveCategory(null)}
          onMouseEnter={() => handleCategoryHover(null)}
          className={`font-mono text-xs px-4 py-2 rounded-full border transition-all uppercase tracking-wider ${
            activeCategory === null
              ? 'bg-lime text-ink-light border-ink-light font-bold shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#C6F135]'
              : 'bg-card-light dark:bg-card-dark text-ink-light/80 dark:text-ink-dark/80 border-rule-light dark:border-rule-dark hover:border-lime'
          }`}
        >
          All Domains ({skillsData.length})
        </button>

        {skillCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(isSelected ? null : cat.id)}
              onMouseEnter={() => handleCategoryHover(cat.id)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all uppercase tracking-wider ${
                isSelected
                  ? 'bg-lime text-ink-light border-ink-light font-bold shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#C6F135]'
                  : 'bg-card-light dark:bg-card-dark text-ink-light/80 dark:text-ink-dark/80 border-rule-light dark:border-rule-dark hover:border-lime'
              }`}
            >
              <span>{cat.id}</span>
              <span className="ml-1.5 opacity-60">({cat.count})</span>
            </button>
          );
        })}
      </div>

      {/* Draggable Sticker Wall Board */}
      <div className="relative bg-card-light/60 dark:bg-card-dark/60 rounded-3xl border-2 border-dashed border-rule-light dark:border-rule-dark p-6 sm:p-10 md:p-12 mb-16 overflow-hidden">
        {/* Subtle background registration watermark */}
        <div className="absolute top-4 right-6 font-mono text-[10px] text-ink-light/30 dark:text-ink-dark/30 tracking-widest uppercase pointer-events-none">
          DRAG & REPOSITION CHIPS • TACTILE CANVAS
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-5 justify-center sm:justify-start items-center min-h-[300px]">
          {skillsData.map((skill, index) => {
            const isMatch = activeCategory === null || activeCategory === skill.category;

            return (
              <StickerChip
                key={skill.name}
                label={skill.name}
                category={skill.category}
                proficiency={skill.proficiency}
                icon={<TechIcon name={skill.name} className="w-4 h-4" />}
                initialRotation={rotations[index % rotations.length]}
                isDimmed={!isMatch}
                isHighlighted={activeCategory === skill.category}
                variant={skill.proficiency === 'Daily' ? 'lime' : skill.proficiency === 'Learning' ? 'tangerine' : 'paper'}
              />
            );
          })}
        </div>

        {/* Legend for Proficiency Tags */}
        <div className="mt-8 pt-6 border-t border-rule-light dark:border-rule-dark flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark">
              Proficiency Index:
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-lime border border-ink-light" />
              Daily Production (React, Next.js, Tailwind, Git)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky border border-ink-light" />
              Comfortable (Python, SQL, Power BI)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-tangerine border border-ink-light" />
              Active Learning (AWS, Linux, DevOps tooling)
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-widest">
            SPRING PHYSICS ENABLED
          </span>
        </div>
      </div>

      {/* Double Infinite Marquee Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-light/60 dark:text-ink-dark/60">
            TECH STACK & RUNTIME ECOSYSTEM
          </span>
          <span className="font-mono text-[11px] text-lime-dark dark:text-lime">
            HOVER TO PAUSE
          </span>
        </div>

        {/* Row 1: Leftward Marquee */}
        <Marquee direction="left" speed={28} className="border-y border-rule-light dark:border-rule-dark py-3">
          {marqueeRowOne.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-card-light dark:bg-card-dark border border-rule-light dark:border-rule-dark hover:border-lime transition-colors group cursor-default"
            >
              <TechIcon name={item.label} className="w-5 h-5 text-ink-light dark:text-ink-dark group-hover:text-lime transition-colors" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark">
                {item.label}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2: Rightward Marquee */}
        <Marquee direction="right" speed={30} className="border-b border-rule-light dark:border-rule-dark py-3">
          {marqueeRowTwo.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-card-light dark:bg-card-dark border border-rule-light dark:border-rule-dark hover:border-lime transition-colors group cursor-default"
            >
              <TechIcon name={item.label} className="w-5 h-5 text-ink-light dark:text-ink-dark group-hover:text-lime transition-colors" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark">
                {item.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
