import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════
// LAYERED ANIMATED BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
interface AnimatedBackgroundProps {
  variant?: 'neural' | 'cosmic' | 'grid' | 'aurora';
  className?: string;
  intensity?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'neural',
  className,
  intensity = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100 * intensity]);
  const smoothY = useSpring(backgroundY, { stiffness: 50, damping: 30 });

  const renderVariant = () => {
    switch (variant) {
      case 'neural':
        return <NeuralBackground intensity={intensity} />;
      case 'cosmic':
        return <CosmicBackground intensity={intensity} />;
      case 'grid':
        return <GridBackground intensity={intensity} />;
      case 'aurora':
        return <AuroraBackground intensity={intensity} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
    >
      {renderVariant()}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// NEURAL NETWORK BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
const NeuralBackground: React.FC<{ intensity: number }> = ({ intensity }) => {
  const nodes = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      pulseDelay: Math.random() * 2,
    }));
  }, []);

  return (
    <>
      {/* Animated gradient layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: '30% 30%' }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: '70% 70%' }}
      />

      {/* Neural nodes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="neuralGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {nodes.slice(0, 15).map((node, i) =>
          nodes.slice(i + 1, 20).map((target) => {
            const distance = Math.sqrt(
              Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
            );
            if (distance < 25) {
              return (
                <motion.line
                  key={`${node.id}-${target.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  opacity={0.2}
                  filter="url(#neuralGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 0.3, 0.3, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              );
            }
            return null;
          })
        )}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="hsl(var(--primary))"
            filter="url(#neuralGlow)"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              r: [node.size, node.size * 1.3, node.size],
            }}
            transition={{
              duration: 3,
              delay: node.pulseDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COSMIC BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
const CosmicBackground: React.FC<{ intensity: number }> = ({ intensity }) => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      twinkleDuration: 2 + Math.random() * 3,
      twinkleDelay: Math.random() * 2,
    }));
  }, []);

  return (
    <>
      {/* Nebula layers */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-primary/20"
        style={{ left: '10%', top: '20%' }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-accent/15"
        style={{ right: '15%', bottom: '30%' }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[60px] bg-neon-violet/10"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.twinkleDuration,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ANIMATED GRID BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
const GridBackground: React.FC<{ intensity: number }> = ({ intensity }) => {
  return (
    <>
      {/* Main grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated scan lines */}
      <motion.div
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ top: '0%', opacity: 0 }}
        animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent"
        initial={{ left: '0%', opacity: 0 }}
        animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
      />

      {/* Glowing intersections */}
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        return (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-primary/50 blur-sm"
            style={{
              left: `${25 + col * 25}%`,
              top: `${25 + row * 25}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// AURORA BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
const AuroraBackground: React.FC<{ intensity: number }> = ({ intensity }) => {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            transparent 0%,
            hsl(var(--primary) / 0.1) 20%,
            hsl(var(--accent) / 0.15) 40%,
            hsl(var(--neon-cyan) / 0.1) 60%,
            hsl(var(--neon-violet) / 0.05) 80%,
            transparent 100%
          )`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Aurora waves */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-x-0 h-[200px]"
          style={{
            top: `${20 + i * 15}%`,
            background: `linear-gradient(
              90deg,
              transparent,
              hsl(var(--primary) / ${0.1 + i * 0.05}),
              hsl(var(--accent) / ${0.1 + i * 0.03}),
              hsl(var(--neon-cyan) / ${0.08 + i * 0.02}),
              transparent
            )`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: ['-100%', '100%'],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBackground;
