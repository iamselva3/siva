import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, PlayCircle, Star, Sparkles } from 'lucide-react';

export function ElearningVisual() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    { title: '01. Architecture & App Router', duration: '45m', completed: true },
    { title: '02. Server Components & SSR', duration: '60m', completed: true },
    { title: '03. Reusable UI Primitives', duration: '50m', active: true },
    { title: '04. Edge API & Database Caching', duration: '75m', completed: false },
  ];

  return (
    <div className="w-full h-full bg-[#1A1A1D] rounded-2xl border border-white/10 p-4 sm:p-6 text-white flex flex-col justify-between shadow-2xl overflow-hidden font-sans select-none">
      {/* Mock Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="bg-white/5 px-3 py-1 rounded-md text-[11px] font-mono text-white/60 flex items-center gap-1.5 border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span>https://learncraft.next/dashboard</span>
        </div>
        <div className="text-[10px] font-mono text-lime font-semibold">
          NEXT.JS 14 SSR
        </div>
      </div>

      {/* Main Course Header & Progress Ring */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="sm:col-span-2 bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 text-lime text-xs font-mono mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACTIVE TRACK</span>
          </div>
          <h4 className="font-display text-base sm:text-lg font-bold text-white mb-1">
            Modern React & Next.js Architecture
          </h4>
          <p className="text-xs text-white/60">
            Modular components, server rendering & performance optimization.
          </p>
        </div>

        {/* Dynamic Progress Ring */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className="text-lime"
                strokeDasharray="75, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                initial={{ strokeDasharray: '0, 100' }}
                animate={{ strokeDasharray: '75, 100' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </svg>
            <span className="absolute font-mono text-xs font-bold text-white">75%</span>
          </div>
          <span className="text-[10px] font-mono text-white/50 mt-1 uppercase">Track Done</span>
        </div>
      </div>

      {/* Course Curriculum Module List */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[11px] font-mono text-white/50 uppercase px-1">
          <span>Curriculum Modules</span>
          <span>4 Lectures</span>
        </div>

        {modules.map((m, idx) => (
          <motion.div
            key={m.title}
            whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center justify-between p-2.5 rounded-lg border transition-all cursor-pointer ${
              m.active
                ? 'bg-lime/10 border-lime/40 text-lime'
                : 'bg-white/5 border-white/5 text-white/80'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {m.completed ? (
                <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
              ) : m.active ? (
                <PlayCircle className="w-4 h-4 text-lime shrink-0 animate-pulse" />
              ) : (
                <BookOpen className="w-4 h-4 text-white/40 shrink-0" />
              )}
              <span className="text-xs font-medium">{m.title}</span>
            </div>

            <span className="font-mono text-[10px] text-white/50">{m.duration}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer Tag */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3 text-lime fill-lime" />
          4.95 (1.2k Reviews)
        </span>
        <span className="text-lime font-bold">COMPONENTS: 18 REUSABLE</span>
      </div>
    </div>
  );
}
