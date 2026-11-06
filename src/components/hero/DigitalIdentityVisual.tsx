import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Activity, Cpu, Sparkles, Terminal } from 'lucide-react';

export const DigitalIdentityVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'neural' | 'telemetry'>('neural');

  // Mouse tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mousePosX = (e.clientX - rect.left) / width - 0.5;
    const mousePosY = (e.clientY - rect.top) / height - 0.5;
    x.set(mousePosX);
    y.set(mousePosY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center p-4 perspective-1000 select-none"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full rounded-3xl border border-white/10 bg-dark-900/80 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cobalt-brand/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/5 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-brand animate-pulse" />
            <span className="text-white font-medium tracking-wider">IDENTITY_CORE // SG-01</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('neural')}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                activeTab === 'neural'
                  ? 'bg-lime-brand text-dark-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              VISUAL
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                activeTab === 'telemetry'
                  ? 'bg-lime-brand text-dark-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TELEMETRY
            </button>
          </div>
        </div>

        {/* Central Core Content */}
        {activeTab === 'neural' ? (
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-6">
            {/* Outer Rotating Concentric Rings */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Outer Orbit */}
              <div className="absolute inset-0 rounded-full border border-dashed border-lime-brand/20 animate-spin" style={{ animationDuration: '30s' }} />
              
              {/* Middle Orbit with marker nodes */}
              <div className="absolute inset-4 rounded-full border border-white/10 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-lime-brand shadow-[0_0_8px_#d4ff32]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cobalt-light shadow-[0_0_8px_#3b82f6]" />
              </div>

              {/* Inner Glowing Ring */}
              <div className="absolute inset-10 rounded-full border border-lime-brand/40 shadow-[0_0_20px_rgba(212,255,50,0.15)] flex items-center justify-center">
                {/* Central Monogram Nucleus */}
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-950 border border-lime-brand/40 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,255,50,0.2)]">
                  <span className="font-editorial text-3xl font-black text-lime-brand tracking-tighter">
                    SG
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 tracking-widest mt-0.5">
                    SWARAN GUNDA
                  </span>
                  {/* Subtle corner ticks */}
                  <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-lime-brand" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-lime-brand" />
                  <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-lime-brand" />
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-lime-brand" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-lime-brand" /> ML / AI Systems
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cobalt-light" /> Full-Stack
              </span>
            </div>
          </div>
        ) : (
          /* Live Terminal Telemetry View */
          <div className="relative z-10 flex-1 flex flex-col justify-center py-4 font-mono text-xs space-y-2.5">
            <div className="bg-dark-950/70 p-3 rounded-xl border border-white/5 space-y-1.5">
              <div className="text-slate-400 flex items-center justify-between text-[11px]">
                <span className="text-lime-brand font-semibold">// SYSTEM ATTRIBUTES</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ACTIVE
                </span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Institution:</span>
                <span className="text-white">KMIT, Hyderabad</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Academic Index:</span>
                <span className="text-lime-brand font-bold">8.7 / 10 CGPA</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Primary Domains:</span>
                <span className="text-white">GenAI · CyberSec · MedTech</span>
              </div>
            </div>

            <div className="bg-dark-950/70 p-3 rounded-xl border border-white/5 space-y-1.5">
              <div className="text-slate-400 text-[11px] font-semibold text-cobalt-light">
                // ARCHITECTURAL PIPELINES
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-dark-800/60 p-2 rounded border border-white/5">
                  <span className="text-slate-400 block text-[10px]">TELEMEDICINE</span>
                  <span className="text-slate-200">Ensemble & SHAP</span>
                </div>
                <div className="bg-dark-800/60 p-2 rounded border border-white/5">
                  <span className="text-slate-400 block text-[10px]">SRDC NLP</span>
                  <span className="text-slate-200">Fine-Tuned GPT-2</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Ticker */}
        <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-lime-brand" />
            <span>KESHAV MEMORIAL INST. OF TECH.</span>
          </div>
          <span className="text-slate-500 font-mono">B.TECH CSE</span>
        </div>
      </motion.div>
    </div>
  );
};

