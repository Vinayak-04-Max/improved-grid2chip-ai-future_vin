import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'cyber' | 'holographic' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  magneticStrength?: number;
  className?: string;
  asChild?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'cyber',
  size = 'md',
  magneticStrength = 0.3,
  className,
  asChild = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * magneticStrength,
      y: (e.clientY - centerY) * magneticStrength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const sizeClasses = {
    sm: 'px-fib-13 py-fib-8 text-sm',
    md: 'px-fib-21 py-fib-13 text-base',
    lg: 'px-fib-34 py-fib-21 text-lg',
  };

  const variantClasses = {
    cyber: 'bg-primary text-primary-foreground border border-primary-glow hover:shadow-glow',
    holographic: 'bg-transparent border border-primary/50 text-foreground hover:border-primary',
    ghost: 'bg-transparent text-foreground hover:bg-primary/10',
    glow: 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow',
  };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-fib font-medium uppercase tracking-wider inline-block',
        'transition-all duration-300 ease-smooth',
        'overflow-hidden cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-fib-8">
        {children}
      </span>
    </motion.div>
  );
};

export default MagneticButton;