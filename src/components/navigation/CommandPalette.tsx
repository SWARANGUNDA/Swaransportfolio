import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X, Layers, ExternalLink, Mail, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
  onOpenResume?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sections = [
    { name: 'Home / Hero', href: '#hero', type: 'Section' },
    { name: 'About & Academic Foundations', href: '#about', type: 'Section' },
    { name: 'Featured Projects Showcase', href: '#projects', type: 'Section' },
    { name: 'Technical Skills & Ecosystem', href: '#skills', type: 'Section' },
    { name: 'Research & Emerging Inquiries', href: '#research', type: 'Section' },
    { name: 'Experience & Journey Timeline', href: '#journey', type: 'Section' },
    { name: 'Achievements & Milestones', href: '#achievements', type: 'Section' },
    { name: 'Beyond Code: Personality', href: '#beyond-code', type: 'Section' },
    { name: 'Initiate Contact & Inquiry', href: '#contact', type: 'Section' },
  ];

  const projects = portfolioData.projects.map((p) => ({
    name: p.title,
    id: p.id,
    type: 'Project Deep Dive',
    badge: p.badge,
  }));

  const allItems = [
    ...sections.map((s) => ({ ...s, isProject: false })),
    ...projects.map((p) => ({ ...p, href: '#projects', isProject: true })),
  ];

  const filtered = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: (typeof allItems)[0]) => {
    if (item.isProject && onSelectProject && 'id' in item) {
      onSelectProject((item as any).id);
    }
    const el = document.querySelector(item.href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-dark-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-dark-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-dark-850">
            <Search className="w-5 h-5 text-lime-brand shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections, projects, research topics... (ESC to exit)"
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Action Shortcuts */}
          <div className="p-3 bg-dark-950/50 border-b border-white/5 flex items-center justify-between text-[11px] text-slate-400 px-5">
            <span>QUICK ACTIONS</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenResume) onOpenResume();
                }}
                className="hover:text-lime-brand flex items-center gap-1 transition-colors"
              >
                <FileText className="w-3 h-3 text-lime-brand" />
                <span>Open Resume</span>
              </button>
              <span>•</span>
              <a
                href={`mailto:${portfolioData.personal.contact.email}`}
                className="hover:text-lime-brand flex items-center gap-1 transition-colors"
              >
                <Mail className="w-3 h-3 text-cobalt-light" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Result Items */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded-xl hover:bg-white/5 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/5 uppercase">
                    {item.type}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-lime-brand transition-colors" />
              </button>
            ))}

            {filtered.length === 0 && (
              <div className="py-8 text-center text-xs text-slate-500">
                No matching destinations found for "{query}".
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

