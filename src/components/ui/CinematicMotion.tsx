import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════
// VELOCITY-BASED SCROLL TEXT
// ═══════════════════════════════════════════════════════════════════════════
interface VelocityTextProps {
  children: string;
  baseVelocity?: number;
  className?: string;
}

export const VelocityText: React.FC<VelocityTextProps> = ({
  children,
  baseVelocity = 100,
  className,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 80,
    stiffness: 200,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className={cn("flex whitespace-nowrap flex-nowrap", className)} style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mr-fib-34">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Wrap helper function
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

// ═══════════════════════════════════════════════════════════════════════════
// ORBITING CATEGORY WHEEL
// ═══════════════════════════════════════════════════════════════════════════
interface CategoryItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface OrbitingWheelProps {
  items: CategoryItem[];
  radius?: number;
  duration?: number;
  animated?: boolean;
  className?: string;
  centerContent?: React.ReactNode;
}

export const OrbitingWheel: React.FC<OrbitingWheelProps> = ({
  items,
  radius = 180,
  duration = 30,
  animated = true,
  className,
  centerContent,
}) => {
  const angleStep = (2 * Math.PI) / items.length;

  const ring1Animate = animated ? { rotate: 360 } : undefined;
  const ring1Transition = animated
    ? ({ duration: duration * 2, repeat: Infinity, ease: "linear" } as const)
    : undefined;

  const ring2Animate = animated ? { rotate: -360 } : undefined;
  const ring2Transition = animated
    ? ({ duration: duration * 1.5, repeat: Infinity, ease: "linear" } as const)
    : undefined;

  const orbitAnimate = animated ? { rotate: 360 } : undefined;
  const orbitTransition = animated
    ? ({ duration, repeat: Infinity, ease: "linear" } as const)
    : undefined;

  const itemAnimate = animated ? { rotate: -360 } : undefined;
  const itemTransition = animated
    ? ({ duration, repeat: Infinity, ease: "linear" } as const)
    : undefined;

  const innerPulseAnimate = animated ? { scale: [1, 1.05, 1] } : undefined;
  const innerPulseTransition = animated
    ? ({ duration: 2, repeat: Infinity, ease: "easeInOut" } as const)
    : undefined;

  return (
    <div className={cn("relative flex items-center justify-center", className)} style={{ height: radius * 2.8, width: radius * 2.8 }}>
      {/* Center Content */}
      {animated ? (
        <motion.div
          className="absolute z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {centerContent}
        </motion.div>
      ) : (
        <div className="absolute z-10">{centerContent}</div>
      )}

      {/* Orbital Rings */}
      <motion.div
        className="absolute border border-primary/20 rounded-full"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={ring1Animate}
        transition={ring1Transition}
      />
      <motion.div
        className="absolute border border-accent/10 rounded-full"
        style={{ width: radius * 1.5, height: radius * 1.5 }}
        animate={ring2Animate}
        transition={ring2Transition}
      />

      {/* Orbiting Items */}
      <motion.div
        className="absolute"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={orbitAnimate}
        transition={orbitTransition}
      >
        {items.map((item, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.name}
              className="absolute glass-panel rounded-xl p-3 md:p-4 cursor-pointer group shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                x: x - 55,
                y: y - 40,
              }}
              animate={itemAnimate}
              transition={itemTransition}
              whileHover={{ scale: 1.1, zIndex: 50 }}
            >
              <motion.div
                className="flex flex-col items-center gap-1.5 min-w-[90px] md:min-w-[100px]"
                animate={innerPulseAnimate}
                transition={
                  animated
                    ? ({
                        ...innerPulseTransition,
                        delay: index * 0.2,
                      } as const)
                    : undefined
                }
              >
                <div className="text-primary group-hover:text-accent transition-colors [&>svg]:w-7 [&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                  {item.name}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// FLOATING 3D OBJECTS
// ═══════════════════════════════════════════════════════════════════════════
interface FloatingObjectProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  rotateIntensity?: number;
  floatIntensity?: number;
}

export const FloatingObject: React.FC<FloatingObjectProps> = ({
  children,
  className,
  depth = 1,
  rotateIntensity = 5,
  floatIntensity = 20,
}) => {
  return (
    <motion.div
      className={cn("", className)}
      animate={{
        y: [0, -floatIntensity * depth, 0],
        rotateX: [0, rotateIntensity, 0, -rotateIntensity, 0],
        rotateY: [0, -rotateIntensity, 0, rotateIntensity, 0],
        rotateZ: [0, rotateIntensity / 2, 0, -rotateIntensity / 2, 0],
      }}
      transition={{
        duration: 8 / depth,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CINEMATIC HORIZONTAL SCROLL SECTION
// ═══════════════════════════════════════════════════════════════════════════
interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalScrollSection: React.FC<HorizontalScrollProps> = ({
  children,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x, scale }}
          className={cn("flex gap-fib-34", className)}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DEPTH PARALLAX LAYER
// ═══════════════════════════════════════════════════════════════════════════
interface DepthLayerProps {
  children: React.ReactNode;
  depth: number;
  className?: string;
  direction?: 'vertical' | 'horizontal' | 'both';
}

export const DepthLayer: React.FC<DepthLayerProps> = ({
  children,
  depth,
  className,
  direction = 'vertical',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = 100 * depth;
  const xRange = 50 * depth;

  const rawY = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const rawX = useTransform(scrollYProgress, [0, 1], [xRange, -xRange]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-depth * 2, depth * 2]);

  const y = useSpring(rawY, { stiffness: 100, damping: 30 });
  const x = useSpring(rawX, { stiffness: 100, damping: 30 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30 });
  const rotate = useSpring(rawRotate, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction !== 'horizontal' ? y : 0,
        x: direction !== 'vertical' ? x : 0,
        scale,
        rotate,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// GLOWING PULSE ACCENT
// ═══════════════════════════════════════════════════════════════════════════
interface PulseAccentProps {
  className?: string;
  color?: 'primary' | 'accent' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PulseAccent: React.FC<PulseAccentProps> = ({
  className,
  color = 'primary',
  size = 'md',
}) => {
  const colorClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    cyan: 'bg-neon-cyan',
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-8 h-8',
    xl: 'w-16 h-16',
  };

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className={cn("absolute rounded-full blur-sm", colorClasses[color], sizeClasses[size])}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn("absolute rounded-full blur-md", colorClasses[color], sizeClasses[size])}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0.1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <div className={cn("relative rounded-full", colorClasses[color], sizeClasses[size])} />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// REFRACTIVE CARD
// ═══════════════════════════════════════════════════════════════════════════
interface RefractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export const RefractiveCard: React.FC<RefractiveCardProps> = ({
  children,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const springConfig = { stiffness: 300, damping: 30 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative overflow-hidden rounded-fib-xl glass-panel border border-primary/20",
        className
      )}
    >
      {/* Refractive Glare */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, hsl(var(--primary) / 0.15), transparent 50%)`,
        }}
      />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CONTINUOUS ANIMATED CAROUSEL
// ═══════════════════════════════════════════════════════════════════════════
interface CarouselProps {
  children: React.ReactNode[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const ContinuousCarousel: React.FC<CarouselProps> = ({
  children,
  direction = 'left',
  speed = 30,
  className,
}) => {
  const duplicatedChildren = [...children, ...children, ...children];

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex gap-fib-21"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MORPHING BLOB
// ═══════════════════════════════════════════════════════════════════════════
interface MorphingBlobProps {
  className?: string;
  color?: 'primary' | 'accent' | 'mixed';
  size?: number;
}

export const MorphingBlob: React.FC<MorphingBlobProps> = ({
  className,
  color = 'primary',
  size = 300,
}) => {
  const gradients = {
    primary: 'from-primary/30 to-primary/5',
    accent: 'from-accent/30 to-accent/5',
    mixed: 'from-primary/30 via-accent/20 to-neon-cyan/10',
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl bg-gradient-radial",
        gradients[color],
        className
      )}
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.2, 0.9, 1.1, 1],
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 30, -10, 0],
        borderRadius: ['50%', '40%', '60%', '45%', '50%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DATA STREAM EFFECT
// ═══════════════════════════════════════════════════════════════════════════
interface DataStreamProps {
  className?: string;
  columns?: number;
}

export const DataStream: React.FC<DataStreamProps> = ({
  className,
  columns = 20,
}) => {
  const streams = useMemo(() => {
    return Array.from({ length: columns }, (_, i) => ({
      id: i,
      chars: Array.from({ length: 20 }, () => 
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      ),
      speed: 2 + Math.random() * 3,
      delay: Math.random() * 2,
      x: (i / columns) * 100,
    }));
  }, [columns]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden opacity-20 pointer-events-none", className)}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute text-primary font-mono text-xs leading-relaxed"
          style={{ left: `${stream.x}%` }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '100%', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: stream.speed,
            delay: stream.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {stream.chars.map((char, i) => (
            <div key={i} style={{ opacity: 1 - i * 0.05 }}>
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default {
  VelocityText,
  OrbitingWheel,
  FloatingObject,
  HorizontalScrollSection,
  DepthLayer,
  PulseAccent,
  RefractiveCard,
  ContinuousCarousel,
  MorphingBlob,
  DataStream,
};
