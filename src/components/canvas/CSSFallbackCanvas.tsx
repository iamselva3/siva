import React from 'react';

export function CSSFallbackCanvas() {
  return (
    <div className="w-full h-full pointer-events-none flex items-center justify-center opacity-30 dark:opacity-40">
      <div className="relative w-72 h-72 rounded-full border border-lime/30 animate-spin-slow">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-lime/40" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-lime shadow-lg" />
        <div className="absolute bottom-6 right-8 w-2.5 h-2.5 rounded-full bg-lime" />
        <div className="absolute top-12 left-6 w-2 h-2 rounded-full bg-tangerine" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-lime animate-ping" />
      </div>
    </div>
  );
}
