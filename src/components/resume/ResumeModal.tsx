import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, ExternalLink, Printer } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textResume = `
SWARAN GUNDA
AI/ML Engineer · Full-Stack Developer
Email: ${portfolioData.personal.contact.email}
GitHub: ${portfolioData.personal.contact.github}
Location: ${portfolioData.personal.contact.location}

EDUCATION
B.Tech in Computer Science and Engineering
Keshav Memorial Institute of Technology (KMIT), Hyderabad
CGPA: 8.7 / 10.0 (2022 - 2026)

CORE TECHNICAL SKILLS
- Programming: Python, C, Java, JavaScript, SQL
- AI/ML & Deep Learning: PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face, Generative AI, GPT-2, NLP, Transformers, SHAP Explainability, XGBoost, LightGBM
- Web Development: React.js, Vite, Tailwind CSS, Node.js, Express.js, FastAPI, REST APIs
- Databases: PostgreSQL, MySQL, SQLite, Supabase, Redis
- Tools & DevOps: Git, GitHub, Docker, Google Colab, Jupyter Notebook, Prometheus, Grafana

FEATURED PROJECTS
1. Generative AI Assisted Telemedicine Platform for Personalized Gut Microbiome Analysis
   - Multi-modal healthcare system integrating microbiome OTU counts, clinical biomarkers, and wearable biometrics.
   - Ensemble modeling (XGBoost, Random Forest, LightGBM), SHAP explainability, LLM-generated clinical summaries.

2. SRDC: Semantics-Based Ransomware Detection and Classification
   - Fine-tuned GPT-2 on binary execution traces & opcode sequences to classify zero-day ransomware.
   - NLP-assisted behavioral modeling, PE analysis, PyTorch.

3. LUMOVITA: Solar-Powered Wound Healing Device
   - Photobiomodulation medical technology innovation utilizing solar harvesting for remote wound care.

4. SAMVAAD: Social Media Platform
   - Full-stack responsive social networking platform using React, Vite, Node.js, and PostgreSQL.
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSimulatedPDF = () => {
    // Generate text/markdown downloadable blob for immediate real file download
    const blob = new Blob(
      [
        `SWARAN GUNDA - RESUME\nAI/ML Engineer · Full-Stack Developer\n\nContact:\nEmail: ${portfolioData.personal.contact.email}\nGitHub: ${portfolioData.personal.contact.github}\n\nEducation:\nB.Tech CSE - Keshav Memorial Institute of Technology (KMIT)\nCGPA: 8.7 / 10\n\nProjects:\n1. Generative AI Assisted Telemedicine Platform (XGBoost, Random Forest, LightGBM, SHAP, LLMs)\n2. SRDC - Semantics-Based Ransomware Detection (GPT-2 Fine-Tuning, NLP, PyTorch)\n3. LUMOVITA - Solar-Powered Wound Healing Device\n4. SAMVAAD - Full-Stack Social Platform (React, Vite, Node.js, PostgreSQL)\n\nSkills:\nPython, C, Java, JavaScript, PyTorch, TensorFlow, Hugging Face, FastAPI, Node.js, PostgreSQL, Docker, Git.`
      ],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Swaran_Gunda_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-dark-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-850">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-lime-brand" />
              <h3 className="font-editorial text-lg font-bold text-white tracking-wide">
                Swaran Gunda — Curriculum Vitae
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-dark-800 text-xs text-slate-300 hover:text-white hover:border-lime-brand/50 flex items-center gap-1.5 transition-colors"
                title="Copy Plain Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-lime-brand" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg border border-white/10 bg-dark-800 text-slate-300 hover:text-white hover:border-lime-brand/50 transition-colors"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownloadSimulatedPDF}
                className="px-3 py-1.5 rounded-lg bg-lime-brand text-dark-950 text-xs font-semibold hover:bg-lime-hover flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Preview Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-sm text-slate-300">
            {/* Header / Contact */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="font-editorial text-3xl font-extrabold text-white tracking-tight">
                  SWARAN GUNDA
                </h1>
                <p className="font-mono text-lime-brand text-xs tracking-wider mt-1">
                  AI/ML ENGINEER · FULL-STACK DEVELOPER
                </p>
              </div>
              <div className="font-mono text-xs text-slate-400 space-y-1">
                <div>Email: <a href={`mailto:${portfolioData.personal.contact.email}`} className="text-slate-200 hover:text-lime-brand">{portfolioData.personal.contact.email}</a></div>
                <div>GitHub: <a href={portfolioData.personal.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-lime-brand">github.com/SWARANGUNDA</a></div>
                <div>Location: {portfolioData.personal.contact.location}</div>
              </div>
            </div>

            {/* Education */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-lime-brand font-bold mb-3 flex items-center gap-2">
                <span>01. EDUCATION</span>
                <span className="h-px flex-1 bg-white/10" />
              </h2>
              <div className="bg-dark-950/60 p-4 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row justify-between font-semibold text-white">
                  <span>Bachelor of Technology (B.Tech) — Computer Science and Engineering</span>
                  <span className="font-mono text-xs text-slate-400">2022 — 2026</span>
                </div>
                <div className="text-slate-400 mt-1">
                  Keshav Memorial Institute of Technology (KMIT), Hyderabad
                </div>
                <div className="mt-2 inline-flex items-center gap-2 bg-lime-brand/10 border border-lime-brand/20 text-lime-brand px-2.5 py-1 rounded text-xs font-mono font-bold">
                  Academic Performance: 8.7 / 10 CGPA
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-lime-brand font-bold mb-3 flex items-center gap-2">
                <span>02. TECHNICAL SKILLS</span>
                <span className="h-px flex-1 bg-white/10" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-dark-950/40 rounded-lg border border-white/5">
                  <div className="font-mono text-xs text-white font-semibold mb-1">AI & Machine Learning</div>
                  <div className="text-xs text-slate-400">
                    PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face, Generative AI, GPT-2 fine-tuning, NLP, Transformers, SHAP Explainability, XGBoost, Random Forest, LightGBM
                  </div>
                </div>
                <div className="p-3 bg-dark-950/40 rounded-lg border border-white/5">
                  <div className="font-mono text-xs text-white font-semibold mb-1">Languages & Systems</div>
                  <div className="text-xs text-slate-400">
                    Python, C, Java, JavaScript (ES6+), SQL
                  </div>
                </div>
                <div className="p-3 bg-dark-950/40 rounded-lg border border-white/5">
                  <div className="font-mono text-xs text-white font-semibold mb-1">Full-Stack & Backend</div>
                  <div className="text-xs text-slate-400">
                    React.js, Vite, Tailwind CSS, Node.js, Express.js, FastAPI, REST APIs
                  </div>
                </div>
                <div className="p-3 bg-dark-950/40 rounded-lg border border-white/5">
                  <div className="font-mono text-xs text-white font-semibold mb-1">Databases & DevOps</div>
                  <div className="text-xs text-slate-400">
                    PostgreSQL, MySQL, SQLite, Supabase, Redis, Docker, Git, GitHub, Prometheus, Grafana
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-lime-brand font-bold mb-3 flex items-center gap-2">
                <span>03. SELECTED PROJECTS</span>
                <span className="h-px flex-1 bg-white/10" />
              </h2>
              <div className="space-y-3">
                {portfolioData.projects.map((proj) => (
                  <div key={proj.id} className="p-4 bg-dark-950/50 rounded-xl border border-white/5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                      <span className="font-mono text-xs text-lime-brand/80">{proj.badge}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.technologies.slice(0, 6).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

