import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Sparkles, Terminal, ChevronDown, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';
import { CreatorShowcase3D } from './CreatorShowcase3D';
import { MarqueeRibbon } from '../common/MarqueeRibbon';
import { ResumeModal } from '../resume/ResumeModal';

export const HeroSection: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { personal } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-8 overflow-hidden aurora-bg">
      {/* Background Interactive Neural Canvas */}
      <NeuralCanvas />

      {/* Subtle Radial Emerald & Cyan Ambient Gradients */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Availability Badge Pill with Multi-Color Pulse */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-dark-900/80 dark:bg-dark-900/80 bg-white/80 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,245,255,0.15)] group hover:border-cyan-400 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-cyan-400 to-lime-brand" />
          </span>
          <span className="text-xs font-mono tracking-wide text-slate-700 dark:text-slate-200">
            <span className="text-cyan-500 dark:text-cyan-400 font-semibold">{personal.availability.status}:</span>{' '}
            <span className="font-medium hidden sm:inline">
              {personal.availability.detail}
            </span>
            <span className="font-medium sm:hidden">
              AI/ML & Engineering
            </span>
          </span>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Prominent Name & Identity Banner with Prismatic Hue */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-500 dark:text-cyan-400 font-semibold">
                <Terminal className="w-3.5 h-3.5 text-lime-brand" />
                <span>KMIT CSE · 8.7 CGPA · INTELLIGENT SYSTEMS ARCHITECT</span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tight">
                SWARAN <span className="text-gradient-cyan-lime">GUNDA</span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs sm:text-sm">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 font-semibold">
                  AI/ML ENGINEER
                </span>
                <span className="text-slate-400">•</span>
                <span className="px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/30 font-semibold">
                  FULL-STACK ARCHITECT
                </span>
                <span className="text-slate-400">•</span>
                <span className="px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/30 font-semibold">
                  RESEARCH INNOVATOR
                </span>
              </div>
            </motion.div>

            {/* Main Creative Headline with Eye-Catching Multi-Chromatic Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
                <span className="block text-slate-900 dark:text-white">Building Intelligence.</span>
                <span className="block text-gradient-vibrant">Creating Real Impact.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-light leading-relaxed">
                {personal.heroSubheadline}
              </p>
            </motion.div>

            {/* Call To Actions with Glowing Gradients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-lime-brand to-emerald-400 text-dark-950 font-bold text-sm font-mono shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_40px_rgba(212,255,50,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW ARCHITECTURES</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-4 rounded-2xl bg-dark-900/90 dark:bg-dark-900/90 bg-white/90 text-slate-900 dark:text-white font-semibold text-sm font-mono border border-cyan-500/30 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(255,0,122,0.25)] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Let's Connect</span>
              </button>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-5 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-sm font-mono border border-slate-300 dark:border-white/10 hover:border-violet-500/50 hover:text-violet-500 dark:hover:text-violet-300 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Resume CV</span>
              </button>
            </motion.div>

            {/* Micro Metrics Ticker with Distinct Chromatic Identity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-white/10 max-w-lg font-mono"
            >
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-dark-900/70 border border-cyan-500/20">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-500 dark:text-cyan-400 font-editorial">
                  8.7
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 tracking-wider">
                  KMIT CGPA
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-dark-900/70 border border-pink-500/20">
                <span className="block text-2xl sm:text-3xl font-extrabold text-pink-500 dark:text-pink-400 font-editorial">
                  04
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 tracking-wider">
                  CORE WORKS
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-dark-900/70 border border-emerald-500/20">
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-500 dark:text-lime-brand font-editorial">
                  XAI+NLP
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 tracking-wider">
                  SPECIALIZATION
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Creator Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center items-center relative"
          >
            <div className="w-full relative">
              <CreatorShowcase3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* DUAL-DIRECTION 3D MARQUEE RIBBON (LEFT-TO-RIGHT & RIGHT-TO-LEFT) */}
      <div className="mt-12 w-full">
        <MarqueeRibbon />
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors group cursor-pointer"
        >
          <span className="tracking-widest">SCROLL TO EXPLORE WORKS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
