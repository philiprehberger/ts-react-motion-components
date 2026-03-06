import { motion } from 'motion/react';
import { type ReactNode } from 'react';

export interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts */
  delay?: number;
  className?: string;
}

/**
 * Scroll-triggered fade-up reveal animation.
 * Content fades in and slides up when it enters the viewport.
 * Only animates once per element.
 */
export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
