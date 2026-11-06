import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './animationUtils';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface InitHeroScrollOptions {
  heroElement?: HTMLElement | null;
  portraitElement?: HTMLElement | null;
  orbitalElement?: HTMLElement | null;
  waveElement?: HTMLElement | null;
  projectsTargetElement?: HTMLElement | null;
}

export const initHeroScrollChoreography = (
  options?: InitHeroScrollOptions
): (() => void) => {
  if (prefersReducedMotion() || typeof window === 'undefined') {
    return () => {};
  }

  const heroElement = options?.heroElement || document.getElementById('hero');
  if (!heroElement) {
    return () => {};
  }

  const portraitElement =
    options?.portraitElement ||
    (heroElement.querySelector('.portrait-red-halo')?.parentElement as HTMLElement | null);
  const orbitalElement =
    options?.orbitalElement ||
    (heroElement.querySelector('svg')?.parentElement as HTMLElement | null);
  const waveElement = options?.waveElement || null;

  const ctx = gsap.context(() => {
    // 1. Subtle upward portrait parallax shift (gentle, never moves outside viewport)
    if (portraitElement && window.innerWidth >= 768) {
      gsap.to(portraitElement, {
        y: -30,
        opacity: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }

    // 2. Orbital rings expansion into digital network
    if (orbitalElement && window.innerWidth >= 768) {
      gsap.to(orbitalElement, {
        scale: 1.15,
        rotation: 30,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }

    // 3. Digital wave depth expansion bridging smoothly into #about
    if (waveElement) {
      gsap.to(waveElement, {
        y: 25,
        scaleY: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }
  }, heroElement);

  return () => {
    ctx.revert();
  };
};
