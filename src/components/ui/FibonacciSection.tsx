import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FibonacciSectionProps {
  children: React.ReactNode;
  className?: string;
  parallaxStrength?: number;
  revealDelay?: number;
  background?: 'void' | 'mesh' | 'holographic' | 'grid' | 'none';
}

export const FibonacciSection: React.FC<FibonacciSectionProps> = ({
  children,
  className,
  parallaxStrength = 50,
  revealDelay = 0,
  background = 'none',
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const bgClasses = {
    void: 'bg-void',
    mesh: 'bg-neural-mesh',
    holographic: 'bg-holographic',
    grid: 'tech-grid-3d',
    none: '',
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className={cn(
        'relative overflow-hidden section-fib',
        bgClasses[background],
        className
      )}
    >
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.8,
          delay: revealDelay,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal' | 'both';
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className,
  direction = 'vertical',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = 100 * speed;
  const xRange = 50 * speed;

  const y = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const x = useTransform(scrollYProgress, [0, 1], [xRange, -xRange]);

  const style = {
    y: direction !== 'horizontal' ? y : 0,
    x: direction !== 'vertical' ? x : 0,
  };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = children.split(' ');

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

interface GlowingNodeProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'accent' | 'cyan' | 'violet';
  className?: string;
  pulse?: boolean;
}

export const GlowingNode: React.FC<GlowingNodeProps> = ({
  size = 'md',
  color = 'primary',
  className,
  pulse = true,
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-8 h-8',
  };

  const colorClasses = {
    primary: 'bg-primary shadow-glow',
    accent: 'bg-accent shadow-glow-accent',
    cyan: 'bg-neon-cyan',
    violet: 'bg-neon-violet',
  };

  return (
    <motion.div
      className={cn(
        'rounded-full',
        sizeClasses[size],
        colorClasses[color],
        pulse && 'animate-pulse-glow',
        className
      )}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default FibonacciSection;