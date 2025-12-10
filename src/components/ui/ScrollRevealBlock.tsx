import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════
// CINEMATIC SCROLL REVEAL BLOCK
// ═══════════════════════════════════════════════════════════════════════════
interface ScrollRevealBlockProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'rotate' | 'split' | 'morph';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  once?: boolean;
  parallax?: boolean;
  parallaxIntensity?: number;
}

export const ScrollRevealBlock: React.FC<ScrollRevealBlockProps> = ({
  children,
  className,
  variant = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  parallax = false,
  parallaxIntensity = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * parallaxIntensity, -100 * parallaxIntensity]
  );
  const smoothParallaxY = useSpring(parallaxY, { stiffness: 100, damping: 30 });

  const getInitialState = () => {
    switch (variant) {
      case 'fade':
        return { opacity: 0, y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0, x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0 };
      case 'slide':
        return { x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0, y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0, opacity: 0 };
      case 'scale':
        return { scale: 0.8, opacity: 0 };
      case 'rotate':
        return { rotate: direction === 'left' ? -15 : 15, scale: 0.9, opacity: 0 };
      case 'split':
        return { clipPath: 'inset(50% 0 50% 0)', opacity: 0 };
      case 'morph':
        return { borderRadius: '50%', scale: 0.5, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    switch (variant) {
      case 'fade':
      case 'slide':
        return { opacity: 1, x: 0, y: 0 };
      case 'scale':
        return { scale: 1, opacity: 1 };
      case 'rotate':
        return { rotate: 0, scale: 1, opacity: 1 };
      case 'split':
        return { clipPath: 'inset(0% 0 0% 0)', opacity: 1 };
      case 'morph':
        return { borderRadius: '0%', scale: 1, opacity: 1 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={parallax ? { y: smoothParallaxY } : undefined}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// STAGGERED CHILDREN REVEAL
// ═══════════════════════════════════════════════════════════════════════════
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childClassName?: string;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  className,
  staggerDelay = 0.1,
  childClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// TEXT CHARACTER REVEAL
// ═══════════════════════════════════════════════════════════════════════════
interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export const CharacterReveal: React.FC<CharacterRevealProps> = ({
  text,
  className,
  delay = 0,
  charDelay = 0.03,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -90 }}
          transition={{
            duration: 0.4,
            delay: delay + index * charDelay,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS INDICATOR
// ═══════════════════════════════════════════════════════════════════════════
interface ScrollProgressProps {
  className?: string;
  color?: 'primary' | 'accent' | 'gradient';
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className,
  color = 'gradient',
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const colorClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    gradient: 'bg-gradient-to-r from-primary via-accent to-neon-cyan',
  };

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        "fixed top-0 left-0 right-0 h-1 origin-left z-50",
        colorClasses[color],
        className
      )}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAGNETIC CURSOR FOLLOW
// ═══════════════════════════════════════════════════════════════════════════
interface MagneticAreaProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const MagneticArea: React.FC<MagneticAreaProps> = ({
  children,
  className,
  intensity = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealBlock;
