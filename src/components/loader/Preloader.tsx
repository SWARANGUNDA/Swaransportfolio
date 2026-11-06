import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IntroReactiveBackground } from './IntroReactiveBackground';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('INITIALIZING ENVIRONMENT');

  useEffect(() => {
    const messages = [
      'INITIALIZING WEBGL 3D ENGINES',
      'LOADING NEURAL CONSTELLATION MESH',
      'CALIBRATING MULTI-CHROMATIC SPACES',
      'PREPARING ARCHITECTURAL SHOWCASE',
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 6;
        const next = Math.min(prev + increment, 100);

        if (next > 75) setStatusMessage(messages[3]);
        else if (next > 50) setStatusMessage(messages[2]);
        else if (next > 25) setStatusMessage(messages[1]);

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 text-slate-100 select-none overflow-hidden"
      >
        {/* Cinematic Mouse-Reactive Interactive Background */}
        <IntroReactiveBackground />

        {/* Ambient Atmospheric Backdrop Glows */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
        <div className="absolute w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none z-[1]" />

        {/* Foreground Content (Stable & 100% Readable) */}
        <div className="relative z-10 flex flex-col items-center max-w-sm px-6 w-full">
          {/* Animated Monogram SG with Multi-Color Glow */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 rounded-3xl border border-cyan-400/40 flex items-center justify-center bg-dark-900/90 shadow-[0_0_40px_rgba(0,245,255,0.25)]"
            >
              <div className="relative font-editorial font-black text-4xl tracking-tighter flex items-center">
                <span className="text-cyan-300">S</span>
                <span className="text-lime-brand ml-0.5">G</span>
              </div>
            </motion.div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-r from-cyan-400 to-lime-brand rounded-full shadow-[0_0_10px_#00f5ff]" />
          </div>

          {/* Name & Tagline */}
          <div className="text-center mb-6">
            <h1 className="font-editorial text-xl tracking-wider font-extrabold text-white uppercase">
              Swaran Gunda
            </h1>
            <p className="text-xs font-mono text-cyan-400 tracking-widest mt-1 font-medium">
              AI/ML ENGINEER · FULL-STACK ARCHITECT
            </p>
          </div>

          {/* Progress Bar & Metric with Multi-Color Gradient */}
          <div className="w-full">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
              <span className="tracking-wider text-cyan-300 font-semibold">{statusMessage}</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>

            <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden border border-white/10 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-lime-brand to-emerald-400 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom subtle agency signature */}
        <div className="absolute bottom-6 text-[11px] font-mono text-slate-400 tracking-widest uppercase z-10">
          KMIT · B.Tech CSE · 8.7 CGPA · HYDERABAD
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
