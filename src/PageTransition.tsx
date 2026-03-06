import { motion } from 'motion/react';
import { type ReactNode } from 'react';

export interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Fade-up animation wrapper for page-level transitions.
 * Animates content in on mount and out on unmount.
 */
export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
