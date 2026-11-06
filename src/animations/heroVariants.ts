import { Variants } from 'framer-motion';
import { TRANSITION_EASE } from './motionConfig';

export const containerStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

export const heroContainerVariants = containerStaggerVariants;

export const textMaskVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 0.9,
      ease: TRANSITION_EASE.cinematic,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: TRANSITION_EASE.cinematic,
    },
  },
};

export const portraitContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.25,
      ease: TRANSITION_EASE.cinematic,
    },
  },
};

export const redHaloVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      delay: 0.5,
      ease: TRANSITION_EASE.cinematic,
    },
  },
};

export const orbitalRingVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      delay: 0.4,
      ease: TRANSITION_EASE.cinematic,
    },
  },
};

export const floatingBadgeVariants = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: TRANSITION_EASE.cinematic,
    },
  },
});
