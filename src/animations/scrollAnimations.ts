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
    // 1. Subtle upward portrait parallax shift
    if (portraitElement) {
      gsap.to(portraitElement, {
        y: -60,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }

    // 2. Orbital rings expansion into digital network
    if (orbitalElement) {
      gsap.to(orbitalElement, {
        scale: 1.25,
        rotation: 45,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // 3. Digital wave depth expansion bridging into the next section
    if (waveElement) {
      gsap.to(waveElement, {
        y: 40,
        scaleY: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }
  }, heroElement);

  return () => {
    ctx.revert();
  };
};
