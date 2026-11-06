import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';
import {
  Trophy,
  Award,
  CheckCircle,
  GraduationCap,
  Sparkles,
  Info,
  Calendar,
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getGlow = (idx: number): 'cyan' | 'emerald' | 'lime' | 'violet' | 'slate' => {
    const list: ('cyan' | 'emerald' | 'lime' | 'violet' | 'slate')[] = [
      'cyan',
      'emerald',
      'lime',
      'cyan',
      'emerald',
    ];
    return list[idx % list.length];
  };

  const getTagStyle = (idx: number) => {
    const styles = [
      'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      'bg-lime-brand/10 text-lime-brand border-lime-brand/30',
      'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    ];
    return styles[idx % styles.length];
  };

  return (
    <section id="achievements" className="relative py-24 sm:py-32 bg-dark-950/70">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 06"
          category="CREDENTIALS & VERIFIED RECORD"
          title="Achievements & Academic Milestones."
          subtitle="Grounded in verifiable performance, research milestones, and institutional participation without inflated claims."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="h-full"
            >
              <Card3D glowColor={getGlow(idx)} depth={10} className="h-full">
                <div className="p-7 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 flex flex-col justify-between space-y-4 shadow-2xl h-full">
                  <div className="space-y-3">
                    {/* Top Badge & Status */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-3 py-1 rounded-full border font-bold ${getTagStyle(idx)}`}>
                        {ach.tag}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {ach.verifiedStatus}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="font-editorial text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {ach.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-400 mt-1">
                        {ach.organization}
                      </p>
                    </div>

                    {/* Detail */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {ach.detail}
                    </p>
                  </div>

                  {/* Bottom Date / Notice */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ach.dateOrPeriod}</span>
                    </div>
                    {ach.placeholderNotice && (
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300 bg-white/5 p-2 rounded-xl border border-white/5">
                        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{ach.placeholderNotice}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
