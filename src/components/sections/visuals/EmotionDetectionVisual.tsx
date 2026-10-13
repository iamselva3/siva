import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Smile, Eye, Cpu, ShieldCheck } from 'lucide-react';

interface EmotionBar {
  name: string;
  pct: number;
}

export function EmotionDetectionVisual() {
  const [emotions, setEmotions] = useState<EmotionBar[]>([
    { name: 'Happy', pct: 86 },
    { name: 'Neutral', pct: 45 },
    { name: 'Surprise', pct: 28 },
    { name: 'Sad', pct: 12 },
    { name: 'Fear', pct: 8 },
    { name: 'Angry', pct: 6 },
    { name: 'Disgust', pct: 4 },
  ]);

  const [topEmotion, setTopEmotion] = useState('HAPPY');
  const [confidence, setConfidence] = useState(0.88);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live DeepFace streaming fluctuations
      const happyScore = Math.floor(70 + Math.random() * 25);
      const neutralScore = Math.floor(30 + Math.random() * 25);
      const surpriseScore = Math.floor(15 + Math.random() * 20);

      setEmotions([
        { name: 'Happy', pct: happyScore },
        { name: 'Neutral', pct: neutralScore },
        { name: 'Surprise', pct: surpriseScore },
        { name: 'Sad', pct: Math.floor(5 + Math.random() * 12) },
        { name: 'Fear', pct: Math.floor(3 + Math.random() * 8) },
        { name: 'Angry', pct: Math.floor(2 + Math.random() * 8) },
        { name: 'Disgust', pct: Math.floor(1 + Math.random() * 5) },
      ]);

      setTopEmotion(happyScore >= neutralScore ? 'HAPPY' : 'NEUTRAL');
      setConfidence(Number(((happyScore >= neutralScore ? happyScore : neutralScore) / 100).toFixed(2)));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#111315] rounded-2xl border border-white/10 p-4 sm:p-6 text-white flex flex-col justify-between shadow-2xl font-mono select-none">
      {/* Mock Camera Viewfinder Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-lime" />
          <span className="text-xs font-bold text-white tracking-wider">
            OPENCV + DEEPFACE HUD
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-white/60">
          <span className="flex items-center gap-1 text-lime font-bold">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
            LIVE FEED • 30 FPS
          </span>
          <span className="bg-white/10 px-2 py-0.5 rounded">DEV 0</span>
        </div>
      </div>

      {/* Center Simulated Camera Frame with Bounding Box */}
      <div className="relative bg-black/60 rounded-xl h-44 sm:h-48 border border-white/10 flex items-center justify-center overflow-hidden mb-3">
        {/* Subtle camera grid guidelines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-white" />
          <div className="border-r border-white" />
          <div />
        </div>

        {/* Dynamic Facial Bounding Box */}
        <motion.div
          animate={{ scale: [0.98, 1.02, 0.99], x: [-2, 3, -1], y: [1, -2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative w-36 h-36 border-2 border-lime rounded-lg p-1.5 flex flex-col justify-between shadow-[0_0_15px_rgba(198,241,53,0.35)]"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between bg-lime text-ink-light px-1.5 py-0.5 rounded text-[9px] font-bold">
            <span>{topEmotion}</span>
            <span>{confidence}</span>
          </div>

          {/* Center facial landmark reticle */}
          <div className="flex items-center justify-center">
            <Smile className="w-12 h-12 text-lime/40" />
          </div>

          {/* Bottom telemetry coords */}
          <div className="flex justify-between text-[8px] text-lime/80 font-mono">
            <span>x: 320 y: 240</span>
            <span>w: 180 h: 210</span>
          </div>
        </motion.div>

        {/* Viewfinder overlay watermark */}
        <div className="absolute bottom-2 left-2 text-[9px] text-white/40">
          MODEL: VGG-Face / Facenet
        </div>
        <div className="absolute top-2 right-2 text-[9px] text-lime font-bold">
          [FACE DETECTED: 01]
        </div>
      </div>

      {/* Emotion Probabilities Bar Chart */}
      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
        <div className="flex justify-between items-center text-[10px] text-white/60 mb-2 uppercase font-bold">
          <span>7-Class Softmax Probability Distribution</span>
          <span className="text-lime">ARGMAX: {topEmotion}</span>
        </div>

        <div className="space-y-1.5">
          {emotions.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-xs">
              <span className="w-16 text-[10px] text-white/60 shrink-0">
                {item.name}
              </span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    item.name.toUpperCase() === topEmotion
                      ? 'bg-lime shadow-[0_0_8px_#C6F135]'
                      : 'bg-white/40'
                  }`}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>
              <span className="w-8 text-[10px] text-right font-mono text-white/70">
                {item.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
