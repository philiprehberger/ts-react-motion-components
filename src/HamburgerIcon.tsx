import { MotionConfig, type Variants, motion } from 'motion/react';

export interface HamburgerIconProps {
  onClick?: () => void;
  isOpen?: boolean;
  /** CSS class for the SVG element */
  className?: string;
}

const topVariants: Variants = {
  closed: { rotate: [45, 0, 0], y: [6, 6, 0] },
  opened: { rotate: [0, 0, 45], y: [0, 6, 6] },
};

const centerVariants: Variants = {
  closed: { opacity: [0, 0, 1] },
  opened: { opacity: [1, 0, 0] },
};

const bottomVariants: Variants = {
  closed: { rotate: [-45, 0, 0], y: [-6, -6, 0] },
  opened: { rotate: [0, 0, -45], y: [0, -6, -6] },
};

/**
 * Animated hamburger menu icon that morphs between open/closed states.
 * Three-line hamburger transforms to an X when open.
 */
export function HamburgerIcon({
  onClick,
  isOpen,
  className = 'h-8 w-8',
}: HamburgerIconProps) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'opened' : 'closed'}
      className="flex"
      onClick={onClick}
    >
      <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <button className="relative z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <motion.line variants={topVariants} x1={3} y1={6} x2={21} y2={6} />
            <motion.line variants={centerVariants} x1={3} y1={12} x2={21} y2={12} />
            <motion.line variants={bottomVariants} x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </button>
      </MotionConfig>
    </motion.div>
  );
}
