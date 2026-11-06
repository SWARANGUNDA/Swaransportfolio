import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  FileText,
  Search,
  Sun,
  Moon,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCommandPalette,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-dark-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram matching Reference Image */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group select-none"
          >
            <div className="relative px-2.5 py-1 rounded bg-dark-900/90 border border-cyan-400/50 flex items-center justify-center font-mono font-extrabold text-base text-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.25)] group-hover:scale-105 transition-all">
              <span className="text-cyan-400">SG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-editorial text-sm font-bold text-white tracking-wider block leading-tight">
                SWARAN GUNDA
              </span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest block font-medium">
                AI/ML ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-dark-900/80 border border-white/10 backdrop-blur-xl px-2.5 font-mono text-xs shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full transition-all relative ${
                    isActive
                      ? 'text-dark-950 font-bold bg-lime-brand shadow-[0_0_15px_rgba(216,255,88,0.35)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search, Theme Toggle, Resume Pill */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenCommandPalette}
              className="p-2.5 rounded-full bg-dark-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-pointer"
              title="Search (⌘K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-dark-900/80 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all cursor-pointer active:scale-95"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            {/* Resume Button matching Reference Image */}
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-full bg-dark-900/90 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-dark-950 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,245,255,0.2)] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Search Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-300 dark:border-cyan-500/30 text-cyan-500 dark:text-cyan-400 cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 cursor-pointer active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-500 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-12 bg-dark-950/98 backdrop-blur-2xl flex flex-col justify-between lg:hidden"
          >
            <div className="space-y-4 font-editorial">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-2 font-semibold">
                // NAVIGATION MENU
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-2.5 text-2xl font-bold text-white hover:text-cyan-400 transition-colors block border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-lime-brand to-emerald-400 text-dark-950 font-bold text-sm font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.4)]"
              >
                <FileText className="w-4 h-4" />
                <span>Download / Inspect Resume CV</span>
              </button>

              <div className="text-center font-mono text-xs text-slate-400">
                KMIT CSE · 8.7 CGPA · swarangunda023@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
