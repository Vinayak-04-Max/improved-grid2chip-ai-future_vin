import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HexagonItem {
  name: string;
  icon: React.ReactNode;
  desc?: string;
}

interface HexagonWebProps {
  items: HexagonItem[];
  className?: string;
  size?: number;
}

export const HexagonWeb: React.FC<HexagonWebProps> = ({
  items,
  className,
  size = 380
}) => {
  // Regular hexagon vertices (6 corners) - starting from top, going clockwise
  // Angles: -90°, -30°, 30°, 90°, 150°, 210° (in degrees from center)
  const hexAngles = [-90, -30, 30, 90, 150, 210].map(deg => (deg * Math.PI) / 180);
  
  // Calculate positions for each corner
  const getPosition = (index: number) => {
    const angle = hexAngles[index];
    const x = Math.cos(angle) * size;
    const y = Math.sin(angle) * size;
    return { x, y };
  };

  // Generate SVG path for the hexagon outline
  const hexagonPath = hexAngles.map((angle, i) => {
    const x = Math.cos(angle) * size + size + 100;
    const y = Math.sin(angle) * size + size + 100;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ') + ' Z';

  // Generate radial web lines from center to each vertex
  const centerX = size + 100;
  const centerY = size + 100;

  // Inner hexagon rings for web effect
  const innerRings = [0.33, 0.66];

  return (
    <div 
      className={cn("relative flex items-center justify-center", className)}
      style={{ 
        width: (size + 100) * 2, 
        height: (size + 100) * 2,
        minHeight: 600
      }}
    >
      {/* SVG Spider Web Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${(size + 100) * 2} ${(size + 100) * 2}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="radialLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer hexagon frame */}
        <motion.path
          d={hexagonPath}
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Inner hexagon rings */}
        {innerRings.map((scale, ringIndex) => {
          const innerPath = hexAngles.map((angle, i) => {
            const x = Math.cos(angle) * size * scale + centerX;
            const y = Math.sin(angle) * size * scale + centerY;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
          }).join(' ') + ' Z';
          
          return (
            <motion.path
              key={`ring-${ringIndex}`}
              d={innerPath}
              fill="none"
              stroke="url(#webGradient)"
              strokeWidth="1.5"
              strokeOpacity={0.5 - ringIndex * 0.15}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 + ringIndex * 0.2, ease: "easeOut" }}
            />
          );
        })}

        {/* Radial lines from center to each vertex */}
        {hexAngles.map((angle, i) => {
          const endX = Math.cos(angle) * size + centerX;
          const endY = Math.sin(angle) * size + centerY;
          
          return (
            <motion.line
              key={`radial-${i}`}
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke="url(#radialLineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: "easeOut" }}
            />
          );
        })}

        {/* Cross-connecting web lines between adjacent vertices through inner rings */}
        {hexAngles.map((angle, i) => {
          const nextI = (i + 1) % 6;
          const nextAngle = hexAngles[nextI];
          
          return innerRings.map((scale, ringIndex) => {
            const x1 = Math.cos(angle) * size * scale + centerX;
            const y1 = Math.sin(angle) * size * scale + centerY;
            const x2 = Math.cos(nextAngle) * size * scale + centerX;
            const y2 = Math.sin(nextAngle) * size * scale + centerY;
            
            return (
              <motion.line
                key={`cross-${i}-${ringIndex}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity={0.2}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.05 + ringIndex * 0.1, ease: "easeOut" }}
              />
            );
          });
        })}

        {/* Center decoration */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={30}
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={15}
          fill="hsl(var(--primary) / 0.3)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
      </svg>

      {/* Industry boxes at each hexagon vertex */}
      {items.slice(0, 6).map((item, index) => {
        const pos = getPosition(index);
        
        return (
          <motion.div
            key={item.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.15,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <motion.div 
              className="glass-panel rounded-2xl p-6 cursor-pointer group shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.3)"
              }}
              style={{
                minWidth: 160,
                maxWidth: 180
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-colors duration-300">
                  <div className="text-primary group-hover:text-accent transition-colors [&>svg]:w-7 [&>svg]:h-7">
                    {item.icon}
                  </div>
                </div>
                <span className="text-base font-semibold text-foreground text-center leading-tight">
                  {item.name}
                </span>
                {item.desc && (
                  <span className="text-xs text-muted-foreground text-center leading-snug">
                    {item.desc}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center label */}
      <motion.div
        className="absolute z-20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
      >
        <div className="glass-panel rounded-full w-20 h-20 flex items-center justify-center border-2 border-primary/30">
          <span className="font-bold text-primary text-sm">G2C</span>
        </div>
      </motion.div>
    </div>
  );
};
