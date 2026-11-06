import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';
import {
  GraduationCap,
  Sparkles,
  Trophy,
  GitBranch,
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const types = ['All', 'Education', 'Research', 'Hackathon / SIH', 'Development', 'Milestone'];

  const filteredItems =
    filter === 'All'
      ? portfolioData.timeline
      : portfolioData.timeline.filter((item) => item.type === filter);

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Education':
        return {
          icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
          glow: 'cyan' as const,
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          dot: 'border-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.6)] bg-cyan-400',
        };
      case 'Research':
        return {
          icon: <Sparkles className="w-4 h-4 text-violet-400" />,
          glow: 'violet' as const,
          badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
          dot: 'border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)] bg-violet-400',
        };
      case 'Hackathon / SIH':
        return {
          icon: <Trophy className="w-4 h-4 text-lime-brand" />,
          glow: 'lime' as const,
          badge: 'bg-lime-brand/10 text-lime-brand border-lime-brand/30',
          dot: 'border-lime-brand shadow-[0_0_12px_rgba(216,255,88,0.4)] bg-lime-brand',
        };
      case 'Development':
        return {
          icon: <GitBranch className="w-4 h-4 text-emerald-400" />,
          glow: 'emerald' as const,
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          dot: 'border-emerald-400 shadow-[0_0_12px_rgba(53,230,176,0.4)] bg-emerald-400',
        };
      default:
        return {
          icon: <Layers className="w-4 h-4 text-cyan-400" />,
          glow: 'cyan' as const,
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          dot: 'border-cyan-400 shadow-[0_0_12px_rgba(54,217,245,0.4)] bg-cyan-400',
        };
    }
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-dark-950/70">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 05"
          category="TIMELINE & MILESTONES"
          title="The Technical Journey So Far."
          subtitle="A transparent record of academic rigor, research initiatives, collaborative hackathons, and systems engineering milestones."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-4 border-b border-white/10 font-mono text-xs">
          <span className="text-slate-400 mr-2 tracking-widest uppercase font-semibold">STAGE:</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-xl transition-all ${
                filter === t
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                  : 'bg-dark-900/90 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item, index) => {
            const style = getTypeStyle(item.type);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-6 rounded-full bg-dark-950 border-2 flex items-center justify-center group-hover:scale-125 transition-transform ${style.dot}`}>
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Timeline Card wrapped in Card3D */}
                <Card3D glowColor={style.glow} depth={6}>
                  <div className="p-7 sm:p-9 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 space-y-4 shadow-2xl">
                    {/* Meta Top Line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 font-mono text-xs">
                        {style.icon}
                        <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${style.badge}`}>
                          {item.type}
                        </span>
                        {item.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-pink-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-cyan-400/90 mt-1">
                        {item.organization}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                        {item.highlights.map((h, hidx) => (
                          <li key={hidx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, tidx) => (
                        <span
                          key={tidx}
                          className="text-xs font-mono px-3 py-1 rounded-xl bg-dark-950 text-slate-200 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
