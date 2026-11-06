import React, { useState, useEffect } from 'react';
import { Preloader } from './components/loader/Preloader';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ResearchSection } from './components/research/ResearchSection';
import { JourneySection } from './components/journey/JourneySection';
import { AchievementsSection } from './components/achievements/AchievementsSection';
import { BeyondCodeSection } from './components/personality/BeyondCodeSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { ResumeModal } from './components/resume/ResumeModal';
import { CommandPalette } from './components/navigation/CommandPalette';
import { NotFound } from './components/common/NotFound';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check if user navigated to a 404 preview hash or path
    if (window.location.hash === '#404' || window.location.pathname === '/404') {
      setIs404(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (is404) {
    return (
      <NotFound
        onReturnHome={() => {
          window.location.hash = '';
          setIs404(false);
        }}
      />
    );
  }

  return (
    <>
      {/* Animated Loading Screen with SG monogram */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Following Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 selection:bg-cyan-400 selection:text-dark-950">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResearchSection />
        <JourneySection />
        <AchievementsSection />
        <BeyondCodeSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </>
  );
};

export default App;

