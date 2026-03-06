import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export interface AnimatedCounterProps {
  /** Target number to count up to */
  target: number;
  /** Animation duration in seconds (default: 2) */
  duration?: number;
  /** Text displayed after the number (e.g. "+", "%") */
  suffix?: string;
  /** Label displayed below the number */
  label: string;
  /** CSS class for the outer wrapper */
  className?: string;
  /** CSS class for the number display */
  numberClassName?: string;
  /** CSS class for the label */
  labelClassName?: string;
}

/**
 * Animated count-up number that triggers when scrolled into view.
 * Uses ease-out cubic easing for a natural feel.
 */
export function AnimatedCounter({
  target,
  duration = 2,
  suffix = '',
  label,
  className = 'text-center',
  numberClassName = 'text-4xl font-bold',
  labelClassName = 'mt-2 text-sm font-medium',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className={numberClassName}>
        {count}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </motion.div>
  );
}
