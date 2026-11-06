import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 font-mono text-xs">
      {/* Background Multi-Color Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-36 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-violet-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-dark-900 border border-cyan-400/40 flex items-center justify-center font-editorial font-black text-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                SG
              </div>
              <span className="font-editorial text-xl font-extrabold text-white tracking-wide">
                SWARAN GUNDA
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              AI/ML Engineer & Full-Stack Developer passionate about transforming empirical machine learning research and intelligent system architectures into production-ready software.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-cyan-300 pt-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Hyderabad, India (IST): <strong className="text-white">{time || 'Calculating...'}</strong></span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] text-white font-semibold tracking-wider uppercase block">
              QUICK NAV
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  01 // About & Story
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-400 transition-colors">
                  02 // Project Architectures
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  03 // Skill Ecosystem
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-violet-400 transition-colors">
                  04 // Research Frontiers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime-brand transition-colors">
                  08 // Direct Inquiries
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] text-white font-semibold tracking-wider uppercase block">
              CONNECTIVITY
            </span>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-dark-900 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all text-slate-300 hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.contact.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-dark-900 border border-white/10 hover:border-violet-400/50 hover:text-violet-300 transition-all text-slate-300 hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.contact.email}`}
                className="p-3 rounded-2xl bg-dark-900 border border-white/10 hover:border-pink-400/50 hover:text-pink-300 transition-all text-slate-300 hover:scale-105"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-3 rounded-2xl bg-dark-900 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all text-slate-300 ml-auto flex items-center gap-1.5 hover:scale-105 cursor-pointer shadow-lg"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] hidden sm:inline font-bold">TOP</span>
              </button>
            </div>
            <div className="text-[11px] text-slate-400">
              Keshav Memorial Institute of Technology (KMIT)
            </div>
          </div>
        </div>

        {/* Bottom Signature Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Swaran Gunda. All engineering rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & Developed by</span>
            <span className="text-white font-bold text-gradient-cyan-lime">Swaran Gunda</span>
            <span className="text-cyan-400 animate-pulse">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
