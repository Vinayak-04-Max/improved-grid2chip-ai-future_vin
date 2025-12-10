import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface HeroParticlesProps {
  count?: number;
  color?: 'primary' | 'accent' | 'mixed';
}

export const HeroParticles: React.FC<HeroParticlesProps> = ({
  count = 50,
  color = 'mixed',
}) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [count]);

  const getColor = (index: number) => {
    if (color === 'primary') return 'hsl(var(--primary))';
    if (color === 'accent') return 'hsl(var(--accent))';
    return index % 3 === 0
      ? 'hsl(var(--primary))'
      : index % 3 === 1
      ? 'hsl(var(--accent))'
      : 'hsl(var(--neon-cyan))';
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: getColor(particle.id),
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px ${getColor(particle.id)}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Connecting lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {particles.slice(0, 20).map((p1, i) =>
          particles.slice(i + 1, 25).map((p2, j) => {
            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );
            if (distance < 15) {
              return (
                <motion.line
                  key={`${p1.id}-${p2.id}`}
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 4,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
};

// Orbital rings component
export const OrbitalRings: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-primary/20 rounded-full"
          style={{
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + ring * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Orbiting node */}
          <motion.div
            className="absolute w-3 h-3 bg-primary rounded-full shadow-glow"
            style={{
              top: '50%',
              left: 0,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Neural network visualization
export const NeuralNetwork: React.FC = () => {
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 10 + (i % 4) * 30,
      y: 20 + Math.floor(i / 4) * 30,
    }));
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((target, j) => {
          const distance = Math.sqrt(
            Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
          );
          if (distance < 40) {
            return (
              <motion.line
                key={`${node.id}-${target.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            );
          }
          return null;
        })
      )}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={node.id}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="4"
          fill="hsl(var(--primary))"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </svg>
  );
};

export default HeroParticles;