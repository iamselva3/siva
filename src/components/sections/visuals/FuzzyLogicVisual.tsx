import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Activity, CheckCircle, HelpCircle } from 'lucide-react';

export function FuzzyLogicVisual() {
  const [sliderVal, setSliderVal] = useState<number>(62);

  // Normalized input 0 to 1
  const x = sliderVal / 100;

  // Triangular / Gaussian membership calculations
  // Low: triangular [0, 0, 0.45]
  const muLow = Math.max(0, Math.min(1, (0.45 - x) / 0.45));
  // Medium: gaussian around 0.5
  const muMedium = Math.exp(-Math.pow((x - 0.5) / 0.18, 2));
  // High: triangular [0.55, 1, 1]
  const muHigh = Math.max(0, Math.min(1, (x - 0.45) / 0.55));

  // Inferred risk
  const riskScore = (muLow * 15 + muMedium * 52 + muHigh * 88) / (muLow + muMedium + muHigh + 0.001);

  return (
    <div className="w-full h-full bg-[#121417] rounded-2xl border border-white/10 p-4 sm:p-6 text-white flex flex-col justify-between shadow-2xl font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-lime" />
          <span className="text-xs font-bold text-white tracking-wider">
            FUZZY INFERENCE ENGINE (FIS)
          </span>
        </div>
        <span className="text-[10px] text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/30">
          MAMDANI INFERENCE
        </span>
      </div>

      {/* SVG Fuzzy Membership Curves */}
      <div className="relative bg-black/40 rounded-xl p-3 border border-white/5 mb-3">
        <div className="flex justify-between items-center text-[11px] text-white/60 mb-1">
          <span>Membership Functions $\mu(x)$</span>
          <span className="text-lime font-bold">Input x: {x.toFixed(2)}</span>
        </div>

        <svg viewBox="0 0 300 110" className="w-full h-28 overflow-visible">
          {/* Grid lines */}
          <line x1="10" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="10" y1="10" x2="290" y2="10" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <line x1="10" y1="50" x2="290" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

          {/* Curve 1: Low (Triangular) - Sky blue */}
          <path
            d="M 10 10 L 130 90 L 290 90"
            fill="none"
            stroke="#8EC5FF"
            strokeWidth="2.2"
            opacity="0.85"
          />

          {/* Curve 2: Medium (Gaussian Bell) - Lime */}
          <path
            d="M 10 90 Q 90 90 120 70 Q 150 10 180 70 Q 210 90 290 90"
            fill="none"
            stroke="#C6F135"
            strokeWidth="2.2"
            opacity="0.95"
          />

          {/* Curve 3: High (Triangular) - Tangerine */}
          <path
            d="M 10 90 L 170 90 L 290 10"
            fill="none"
            stroke="#FF5A1F"
            strokeWidth="2.2"
            opacity="0.85"
          />

          {/* Active dynamic input marker line */}
          <line
            x1={10 + x * 280}
            y1="0"
            x2={10 + x * 280}
            y2="90"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
          <circle
            cx={10 + x * 280}
            cy="90"
            r="4"
            fill="#FFFFFF"
            stroke="#C6F135"
            strokeWidth="2"
          />
        </svg>

        {/* Legend */}
        <div className="flex items-center justify-between text-[10px] mt-2 pt-1 border-t border-white/5">
          <span className="flex items-center gap-1 text-sky">
            <span className="w-2 h-2 rounded-full bg-sky" /> Low (μ={muLow.toFixed(2)})
          </span>
          <span className="flex items-center gap-1 text-lime">
            <span className="w-2 h-2 rounded-full bg-lime" /> Medium (μ={muMedium.toFixed(2)})
          </span>
          <span className="flex items-center gap-1 text-tangerine">
            <span className="w-2 h-2 rounded-full bg-tangerine" /> High (μ={muHigh.toFixed(2)})
          </span>
        </div>
      </div>

      {/* Interactive Slider Input */}
      <div className="bg-white/5 p-3 rounded-xl border border-white/5 mb-3">
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="flex items-center gap-1.5 text-white/80">
            <Sliders className="w-3.5 h-3.5 text-lime" />
            Lesion Border Irregularity Index
          </span>
          <span className="font-bold text-lime">{sliderVal}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={(e) => setSliderVal(Number(e.target.value))}
          className="w-full accent-lime cursor-pointer h-1.5 bg-white/20 rounded-lg"
        />
        <div className="flex justify-between text-[9px] text-white/40 mt-1">
          <span>0 (Regular)</span>
          <span>50 (Moderate)</span>
          <span>100 (Severe Asymmetry)</span>
        </div>
      </div>

      {/* Confusion Matrix & Clinical Evaluation Tile */}
      <div className="grid grid-cols-2 gap-3">
        {/* Confusion Matrix */}
        <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
          <div className="text-[10px] text-white/50 mb-1.5 uppercase font-bold">
            Confusion Matrix (Audit)
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px] text-center">
            <div className="bg-lime/20 text-lime p-1 rounded font-bold">TP: 142</div>
            <div className="bg-white/5 text-white/50 p-1 rounded">FP: 14</div>
            <div className="bg-white/5 text-white/50 p-1 rounded">FN: 10</div>
            <div className="bg-lime/20 text-lime p-1 rounded font-bold">TN: 156</div>
          </div>
        </div>

        {/* Diagnostic Metrics */}
        <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
          <div className="text-[10px] text-white/50 uppercase font-bold">
            Evaluated Metrics
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-white/60">Accuracy</span>
              <span className="text-lime font-bold">92.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Precision</span>
              <span className="text-white font-bold">91.0%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Recall</span>
              <span className="text-white font-bold">93.4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
