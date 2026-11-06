import React from 'react';
import { Sparkles, Terminal, Cpu, Zap, Code, Shield } from 'lucide-react';

export const MarqueeRibbon: React.FC = () => {
  const row1 = [
    { text: 'ARTIFICIAL INTELLIGENCE', icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
    { text: 'GENERATIVE AI & LLMs', icon: <Sparkles className="w-4 h-4 text-pink-400" /> },
    { text: 'FULL-STACK SYSTEMS', icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { text: 'PYTORCH & TENSORFLOW', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { text: 'SHAP EXPLAINABILITY', icon: <Code className="w-4 h-4 text-violet-400" /> },
    { text: 'KMIT 8.7 CGPA RECORD', icon: <Shield className="w-4 h-4 text-lime-brand" /> },
  ];

  const row2 = [
    { text: 'SEMANTICS RANSOMWARE NLP', icon: <Shield className="w-4 h-4 text-pink-400" /> },
    { text: 'BIOINFORMATICS & TELEMEDICINE', icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
    { text: 'REACT · VITE · NODE · POSTGRES', icon: <Code className="w-4 h-4 text-cyan-400" /> },
    { text: 'LUMOVITA SOLAR MEDTECH', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { text: 'SAMVAAD SOCIAL ARCHITECTURE', icon: <Terminal className="w-4 h-4 text-violet-400" /> },
    { text: 'INNOVATION & PUBLIC SERVICE', icon: <Sparkles className="w-4 h-4 text-lime-brand" /> },
  ];

  return (
    <div className="relative py-12 overflow-hidden select-none my-8 perspective-1000">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-pink-500/5 to-violet-500/5 pointer-events-none" />

      {/* Row 1: Left-to-Right Marquee (Tilted -1.5deg) */}
      <div className="relative transform -rotate-1 py-3 bg-dark-900/90 dark:bg-dark-900/90 bg-white/90 border-y border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,245,255,0.15)] mb-4">
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-left whitespace-nowrap gap-8 items-center py-1">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 tracking-wider">
                {item.icon}
                <span className="hover:text-cyan-400 transition-colors">{item.text}</span>
                <span className="text-cyan-400/50 font-black">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Right-to-Left Marquee (Tilted +1.5deg) */}
      <div className="relative transform rotate-1 py-3 bg-dark-900/90 dark:bg-dark-900/90 bg-white/90 border-y border-pink-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(255,0,122,0.15)]">
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-right whitespace-nowrap gap-8 items-center py-1">
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 tracking-wider">
                {item.icon}
                <span className="hover:text-pink-400 transition-colors">{item.text}</span>
                <span className="text-pink-400/50 font-black">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

