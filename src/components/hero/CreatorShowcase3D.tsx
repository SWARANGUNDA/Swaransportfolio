import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Award, Shield, CheckCircle2, Zap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const CreatorShowcase3D: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-14deg', '14deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;

    x.set(normX);
    y.set(normY);

    setGlare({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-square mx-auto flex items-center justify-center p-2 perspective-1200 select-none">
      {/* Background ambient radial glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/12 to-emerald-500/12 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full rounded-3xl p-[1.5px] bg-gradient-to-b from-cyan-400/50 via-emerald-400/30 to-white/10 shadow-[0_20px_50px_rgba(8,11,16,0.9)] group cursor-pointer"
      >
        {/* Inner Card Container */}
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-dark-950 flex flex-col justify-end">
          {/* Creator Portrait Image */}
          <img
            src={portfolioData.personal.avatarUrl || '/swaran-avatar.png'}
            alt={portfolioData.personal.name}
            className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
          />

          {/* Vignette Overlay for Editorial Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/40 via-transparent to-dark-950/40 pointer-events-none" />

          {/* Dynamic Specular Glare */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.4), transparent 50%)`,
            }}
          />

          {/* --- 3D FLOATING ORBITING BADGES (POP OUT ON Z-AXIS) --- */}

          {/* Top Left Floating Badge */}
          <div
            style={{ transform: 'translateZ(55px)' }}
            className="absolute top-5 left-4 z-20"
          >
            <div className="px-3.5 py-1.5 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-cyan-400/40 text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.3)] animate-float">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-bold">AI/ML ENGINEER</span>
            </div>
          </div>

          {/* Top Right Floating Badge */}
          <div
            style={{ transform: 'translateZ(50px)' }}
            className="absolute top-5 right-4 z-20"
          >
            <div className="px-3 py-1.5 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-emerald-400/30 text-xs font-mono text-emerald-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(53,230,176,0.18)] animate-float-reverse">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold">KMIT 8.7 CGPA</span>
            </div>
          </div>

          {/* Middle Right Floating Technology Pill */}
          <div
            style={{ transform: 'translateZ(65px)' }}
            className="absolute top-1/2 right-3 -translate-y-1/2 z-20 hidden sm:block"
          >
            <div className="p-2.5 rounded-2xl bg-dark-900/95 backdrop-blur-md border border-cyan-400/30 text-[11px] font-mono text-cyan-300 shadow-[0_0_15px_rgba(54,217,245,0.18)] space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>GEN AI & NLP</span>
              </div>
              <span className="text-[9px] text-slate-400 block">Fine-Tuned GPT-2</span>
            </div>
          </div>

          {/* Bottom Left Floating Telemetry Pill */}
          <div
            style={{ transform: 'translateZ(60px)' }}
            className="absolute bottom-24 left-4 z-20 hidden sm:block"
          >
            <div className="p-2.5 rounded-2xl bg-dark-900/95 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300 shadow-[0_0_20px_rgba(0,255,135,0.3)] space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>FULL-STACK</span>
              </div>
              <span className="text-[9px] text-slate-400 block">FastAPI · React · Node</span>
            </div>
          </div>

          {/* Bottom Identity Plate */}
          <div
            style={{ transform: 'translateZ(45px)' }}
            className="relative z-20 p-5 bg-gradient-to-t from-dark-950 via-dark-950/90 to-transparent space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-editorial text-2xl font-black text-white tracking-tight">
                  SWARAN GUNDA
                </h3>
                <p className="font-mono text-xs text-gradient-cyan-lime font-bold">
                  AI/ML ENGINEER · FULL-STACK DEVELOPER
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-dark-900/90 border border-white/20 flex items-center justify-center font-editorial font-bold text-sm text-cyan-300">
                SG
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for High-Impact Roles
              </span>
              <span className="text-cyan-400 font-semibold">Hyderabad, IN</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
