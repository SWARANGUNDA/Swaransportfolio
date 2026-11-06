import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Activity, ShieldCheck } from 'lucide-react';

interface FloatingBadgesProps {
  parallaxOffset?: { x: number; y: number };
}

export const FloatingBadges: React.FC<FloatingBadgesProps> = ({
  parallaxOffset = { x: 0, y: 0 },
}) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none z-20"
      style={{
        transform: `translate(${parallaxOffset.x * 0.6}px, ${parallaxOffset.y * 0.6}px)`,
        transition: 'transform 0.18s ease-out',
      }}
    >
      {/* 1. TOP LEFT BADGE: AI/ML Engineering */}
      <div className="absolute top-[8%] left-[2%] sm:left-[-4%] lg:left-[-8%] pointer-events-auto">
        <div className="badge-float-1 group cursor-pointer">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-lime-brand/40 shadow-[0_0_20px_rgba(216,255,88,0.12)] hover:border-lime-brand hover:shadow-[0_0_25px_rgba(216,255,88,0.25)] hover:scale-105 transition-all duration-300">
            <div className="p-1.5 rounded-xl bg-lime-brand/15 text-lime-brand group-hover:scale-110 transition-transform">
              <Brain className="w-4 h-4 text-lime-brand" />
            </div>
            <div className="text-left font-mono leading-tight">
              <span className="block text-xs font-bold text-white tracking-wide">
                AI/ML
              </span>
              <span className="block text-[10px] text-slate-400">
                Engineering
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM LEFT BADGE: Full-Stack Development */}
      <div className="absolute top-[48%] left-[-2%] sm:left-[-6%] lg:left-[-10%] pointer-events-auto">
        <div className="badge-float-2 group cursor-pointer">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_20px_rgba(54,217,245,0.12)] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(54,217,245,0.25)] hover:scale-105 transition-all duration-300">
            <div className="p-1.5 rounded-xl bg-cyan-400/15 text-cyan-400 group-hover:scale-110 transition-transform">
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-left font-mono leading-tight">
              <span className="block text-xs font-bold text-white tracking-wide">
                Full-Stack
              </span>
              <span className="block text-[10px] text-slate-400">
                Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TOP RIGHT BADGE: Healthcare AI */}
      <div className="absolute top-[12%] right-[2%] sm:right-[-4%] lg:right-[-6%] pointer-events-auto">
        <div className="badge-float-3 group cursor-pointer">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-emerald-400/40 shadow-[0_0_20px_rgba(53,230,176,0.12)] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(53,230,176,0.25)] hover:scale-105 transition-all duration-300">
            <div className="p-1.5 rounded-xl bg-emerald-400/15 text-emerald-400 group-hover:scale-110 transition-transform">
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-left font-mono leading-tight">
              <span className="block text-xs font-bold text-white tracking-wide">
                Healthcare
              </span>
              <span className="block text-[10px] text-slate-400">
                AI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM RIGHT BADGE: Cybersecurity & NLP */}
      <div className="absolute top-[52%] right-[-2%] sm:right-[-6%] lg:right-[-8%] pointer-events-auto">
        <div className="badge-float-4 group cursor-pointer">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-lime-brand/40 shadow-[0_0_20px_rgba(216,255,88,0.12)] hover:border-lime-brand hover:shadow-[0_0_25px_rgba(216,255,88,0.25)] hover:scale-105 transition-all duration-300">
            <div className="p-1.5 rounded-xl bg-lime-brand/15 text-lime-brand group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4 text-lime-brand" />
            </div>
            <div className="text-left font-mono leading-tight">
              <span className="block text-xs font-bold text-white tracking-wide">
                Cybersecurity
              </span>
              <span className="block text-[10px] text-slate-400">
                & NLP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
