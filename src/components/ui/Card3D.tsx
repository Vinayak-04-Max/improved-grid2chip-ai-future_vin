import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent' | 'cyan';
  depth?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className,
  glowColor = 'primary',
  depth = 20,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotateX((-mouseY / rect.height) * depth);
    setRotateY((mouseX / rect.width) * depth);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const glowClasses = {
    primary: 'shadow-glow',
    accent: 'shadow-glow-accent',
    cyan: 'shadow-[0_0_2rem_hsl(var(--neon-cyan)/0.3)]',
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={cn(
        'relative rounded-fib-lg overflow-hidden',
        'bg-gradient-to-br from-surface to-elevated',
        'border border-border/50',
        isHovered && glowClasses[glowColor],
        className
      )}
    >
      {/* Reflective highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + rotateY * 2}% ${50 - rotateX * 2}%, hsl(var(--foreground) / 0.05) 0%, transparent 50%)`,
        }}
      />
      
      {/* Scan line effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        </motion.div>
      )}
      
      {/* Content with depth */}
      <div style={{ transform: 'translateZ(40px)' }} className="relative z-10">
        {children}
      </div>
      
      {/* Bottom glow bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--${glowColor === 'primary' ? 'primary' : glowColor === 'accent' ? 'accent' : 'neon-cyan'})), transparent)`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Card3D;