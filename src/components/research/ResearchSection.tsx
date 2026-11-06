import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';
import {
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>(
    portfolioData.researchAreas[0].id
  );

  const activeArea =
    portfolioData.researchAreas.find((a) => a.id === selectedArea) ||
    portfolioData.researchAreas[0];

  const getDomainTheme = (index: number) => {
    const colors = [
      { text: 'text-cyan-400', border: 'border-cyan-500/30', badge: 'bg-cyan-500/10 text-cyan-300' },
      { text: 'text-emerald-400', border: 'border-emerald-500/30', badge: 'bg-emerald-500/10 text-emerald-300' },
      { text: 'text-lime-brand', border: 'border-lime-brand/30', badge: 'bg-lime-brand/10 text-lime-brand' },
      { text: 'text-violet-400', border: 'border-violet-500/30', badge: 'bg-violet-500/10 text-violet-300' },
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="research" className="relative py-24 sm:py-32 bg-dark-950/70 tech-grid">
      {/* Section Divider */}
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 04"
          category="RESEARCH & EMERGING INQUIRIES"
          title="Investigating Frontiers in Machine Intelligence."
          subtitle="Exploring empirical questions across domain-adapted Large Language Models, semantics-driven cybersecurity, multi-modal bioinformatics, and explainability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Research Focus Tabs */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            {portfolioData.researchAreas.map((area, idx) => {
              const theme = getDomainTheme(idx);
              const isSelected = selectedArea === area.id;

              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start justify-between group cursor-pointer ${
                    isSelected
                      ? `bg-dark-900 ${theme.border} shadow-[0_0_25px_rgba(0,245,255,0.15)]`
                      : 'bg-dark-900/60 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${theme.text}`}>
                        0{idx + 1} //
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                        {area.domain}
                      </span>
                    </div>
                    <h4 className="font-editorial text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {area.title}
                    </h4>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                      isSelected
                        ? `${theme.text} translate-x-1`
                        : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Exploration Card */}
          <div className="lg:col-span-7">
            <Card3D glowColor="violet" depth={8}>
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-7 sm:p-9 rounded-3xl bg-dark-900/85 backdrop-blur-xl border border-white/10 space-y-6 shadow-2xl relative overflow-hidden"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {activeArea.domain}
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-white mt-1">
                      {activeArea.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 w-fit font-semibold">
                    {activeArea.status}
                  </span>
                </div>

                {/* Research Summary */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    // INVESTIGATION THESIS
                  </span>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    {activeArea.summary}
                  </p>
                </div>

                {/* Core Inquiries / Open Research Questions */}
                <div className="p-5 rounded-2xl bg-dark-950 border border-white/10 space-y-3 shadow-inner">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                    <HelpCircle className="w-4 h-4" />
                    <span>Key Analytical Questions</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">
                    {activeArea.keyQuestions.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_#00f5ff]" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Methods & Architecture Link */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-dark-950 border border-white/5">
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      METHODS & PARADIGMS
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeArea.methods.map((m, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-200 border border-white/5"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block mb-1">
                        LINKED IMPLEMENTATION
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {activeArea.associatedProject || 'Independent Thesis'}
                      </span>
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-cyan-300 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Verified Project Codebase Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
