import { Variants } from 'framer-motion';

// Adapted animation utilities inspired by meta-droid project (MIT Licensed)
// Original author: Vignesh Gupta (https://github.com/vignesh-gupta/meta-droid)
// Changes: TypeScript typings, simplified prop lists, naming tweaks.

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren }
  }
});

export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down' | 'none' = 'none',
  type: 'tween' | 'spring' = 'tween',
  delay = 0,
  duration = 0.8
): Variants => {
  const x = direction === 'left' ? -80 : direction === 'right' ? 80 : 0;
  const y = direction === 'up' ? 80 : direction === 'down' ? -80 : 0;
  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type, delay, duration, ease: 'easeOut' }
    }
  };
};

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: 'tween' | 'spring',
  delay = 0,
  duration = 0.8
): Variants => fadeIn(direction, type, delay, duration);

export const zoomIn = (delay = 0, duration = 0.6): Variants => ({
  hidden: { scale: 0.85, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'tween', delay, duration, ease: 'easeOut' }
  }
});

export const textReveal = (delay = 0.1): Variants => ({
  hidden: { y: 32, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18, delay }
  }
});

export const staggerChildrenSimple: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export const charVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut' } }
};
