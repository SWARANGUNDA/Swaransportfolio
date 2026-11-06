import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';

export const ContactSection: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const { contact } = portfolioData.personal;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrSubject: 'Opportunity / Collaboration',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger multi-chromatic celebratory confetti burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#36D9F5', '#35E6B0', '#D8FF58', '#A78BFA', '#F4F7F8'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 aurora-bg bg-dark-950/80">
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[550px] h-[550px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 08"
          category="INITIATE CONVERSATION"
          title="Have an idea worth building?"
          subtitle="Let's connect, exchange ideas, and build something meaningful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Direct Copy */}
          <div className="lg:col-span-5 space-y-6">
            <Card3D glowColor="cyan" depth={8}>
              <div className="p-8 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 space-y-6 shadow-2xl">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                    // DIRECT INBOX
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-white">
                    Let's create together.
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">
                    Whether discussing high-impact AI/ML engineering roles, research collaboration, hackathons, or systems architecture—my inbox is always open.
                  </p>
                </div>

                {/* 1-Click Copy Email Card */}
                <div className="p-4 rounded-2xl bg-dark-950/90 border border-cyan-500/30 flex items-center justify-between group shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-slate-400 block">
                        OFFICIAL EMAIL
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm font-mono text-white font-semibold hover:text-cyan-300 transition-colors truncate block"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Links & Channels */}
                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-dark-950/60 hover:bg-white/5 border border-white/5 hover:border-cyan-400/50 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>github.com/SWARANGUNDA</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </a>

                  <a
                    href={contact.linkedinPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-dark-950/60 hover:bg-white/5 border border-white/5 hover:border-violet-400/50 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-violet-400" />
                      <span>LinkedIn Profile (Editable Link)</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400" />
                  </a>
                </div>

                {/* Location & Timezone Specs */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>{contact.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{contact.timezone}</span>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Card3D glowColor="emerald" depth={8}>
              <div className="p-8 sm:p-10 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-lime-brand text-dark-950 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,245,255,0.4)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-editorial text-3xl font-extrabold text-white">
                      Transmission Dispatched.
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                      Thank you, {formData.name}! Your message has been received. I will review it and reply to{' '}
                      <strong className="text-cyan-300">{formData.email}</strong> shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            roleOrSubject: 'Opportunity / Collaboration',
                            message: '',
                          });
                        }}
                        className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors cursor-pointer"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-xs font-mono text-pink-400 uppercase tracking-wider block font-semibold">
                        // DIRECT MESSAGE FORM
                      </span>
                      <h4 className="font-editorial text-2xl font-bold text-white mt-1">
                        Send a Message
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Ada Lovelace"
                          className="w-full px-4 py-3 rounded-2xl bg-dark-950 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all font-mono"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="ada@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-dark-950 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Subject / Topic
                      </label>
                      <select
                        value={formData.roleOrSubject}
                        onChange={(e) =>
                          setFormData({ ...formData, roleOrSubject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-dark-950 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      >
                        <option value="Opportunity / Collaboration">
                          High-Impact AI/ML or Software Engineering Role
                        </option>
                        <option value="Research Discussion">
                          Research Discussion (SRDC, Healthcare AI, NLP)
                        </option>
                        <option value="Project Collaboration">
                          Collaborative Project / Hackathon Partnership
                        </option>
                        <option value="General Conversation">
                          General Engineering Exchange
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Share project context, scope, or questions..."
                        className="w-full px-4 py-3 rounded-2xl bg-dark-950 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all font-mono resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[11px] font-mono text-slate-400">
                        Responds typically within 24 hours.
                      </span>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 hover:scale-105 text-white font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,0,122,0.4)] cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>SENDING...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>DISPATCH MESSAGE</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
