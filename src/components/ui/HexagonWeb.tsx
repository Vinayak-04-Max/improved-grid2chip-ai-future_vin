import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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

// ─── Mobile carousel-style layout ───
const MobileHexagonWeb: React.FC<{ items: HexagonItem[] }> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center gap-6 py-4">
      {/* Rotating central ring */}
      <motion.div
        className="relative w-48 h-48 mx-auto"
        style={{ rotate }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="mobileHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#mobileHexGrad)" strokeWidth="2" strokeDasharray="8 4" />
          {/* Inner ring */}
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#mobileHexGrad)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5" />
          {/* Inner ring 2 */}
          <circle cx="100" cy="100" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          {/* Radial lines */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + Math.cos(rad) * 90}
                y2={100 + Math.sin(rad) * 90}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.25"
              />
            );
          })}
          {/* Orbiting dots */}
          {[0, 120, 240].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <circle
                key={`dot-${i}`}
                cx={100 + Math.cos(rad) * 90}
                cy={100 + Math.sin(rad) * 90}
                r="4"
                fill="hsl(var(--primary))"
              />
            );
          })}
        </svg>
        {/* Center label */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ rotate: useTransform(rotate, (v) => -v) }} // counter-rotate to keep text upright
        >
          <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center shadow-lg">
            <span className="font-bold text-primary text-sm">G2C</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Cards in a 2-column grid */}
      <div className="grid grid-cols-2 gap-3 w-full px-2">
        {items.slice(0, 6).map((item, index) => (
          <motion.div
            key={item.name}
            className="glass-panel rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col items-center justify-center text-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className="font-semibold text-foreground text-sm leading-tight">{item.name}</span>
            {item.desc && (
              <span className="text-muted-foreground text-xs leading-snug">{item.desc}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── Desktop hexagon web with scroll-driven rotation ───
export const HexagonWeb: React.FC<HexagonWebProps> = ({
  items,
  className,
  size = 280,
}) => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  if (isMobile) {
    return <MobileHexagonWeb items={items} />;
  }

  // Regular hexagon vertices
  const hexAngles = [-90, -30, 30, 90, 150, 210].map((deg) => (deg * Math.PI) / 180);
  const cardWidth = 140;
  const cardHeight = 120;
  const containerSize = size * 2 + cardWidth + 60;
  const center = containerSize / 2;

  const hexagonPath =
    hexAngles
      .map((angle, i) => {
        const x = Math.cos(angle) * size + center;
        const y = Math.sin(angle) * size + center;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ') + ' Z';

  const innerRings = [0.4, 0.7];

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Rotating SVG web */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${containerSize} ${containerSize}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ rotate }}
      >
        <defs>
          <linearGradient id="hexWebGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="hexRadialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer hexagon */}
        <motion.path
          d={hexagonPath}
          fill="none"
          stroke="url(#hexWebGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Inner rings */}
        {innerRings.map((scale, ringIndex) => {
          const innerPath =
            hexAngles
              .map((angle, i) => {
                const x = Math.cos(angle) * size * scale + center;
                const y = Math.sin(angle) * size * scale + center;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              })
              .join(' ') + ' Z';
          return (
            <motion.path
              key={`ring-${ringIndex}`}
              d={innerPath}
              fill="none"
              stroke="url(#hexWebGradient)"
              strokeWidth="1.5"
              strokeOpacity={0.4 - ringIndex * 0.1}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 + ringIndex * 0.2, ease: 'easeOut' }}
            />
          );
        })}

        {/* Radial lines */}
        {hexAngles.map((angle, i) => {
          const endX = Math.cos(angle) * size + center;
          const endY = Math.sin(angle) * size + center;
          return (
            <motion.line
              key={`radial-${i}`}
              x1={center}
              y1={center}
              x2={endX}
              y2={endY}
              stroke="url(#hexRadialGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
            />
          );
        })}

        {/* Cross-connecting lines */}
        {hexAngles.map((angle, i) => {
          const nextI = (i + 1) % 6;
          const nextAngle = hexAngles[nextI];
          return innerRings.map((scale, ringIndex) => {
            const x1 = Math.cos(angle) * size * scale + center;
            const y1 = Math.sin(angle) * size * scale + center;
            const x2 = Math.cos(nextAngle) * size * scale + center;
            const y2 = Math.sin(nextAngle) * size * scale + center;
            return (
              <motion.line
                key={`cross-${i}-${ringIndex}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity={0.25}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.05 + ringIndex * 0.1, ease: 'easeOut' }}
              />
            );
          });
        })}

        {/* Center circles */}
        <motion.circle
          cx={center}
          cy={center}
          r={40}
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.circle
          cx={center}
          cy={center}
          r={25}
          fill="hsl(var(--primary) / 0.15)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
      </motion.svg>

      {/* Cards at vertices (static, not rotating) */}
      {items.slice(0, 6).map((item, index) => {
        const angle = hexAngles[index];
        const cardRadius = size + 20;
        const x = Math.cos(angle) * cardRadius + center;
        const y = Math.sin(angle) * cardRadius + center;
        return (
          <motion.div
            key={item.name}
            className="absolute"
            style={{
              left: x - cardWidth / 2,
              top: y - cardHeight / 2,
              width: cardWidth,
              height: cardHeight,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.12,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          >
            <motion.div
              className="w-full h-full glass-panel rounded-xl p-4 cursor-pointer group shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col items-center justify-center"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px -8px hsl(var(--primary) / 0.25)',
              }}
            >
              <span className="font-semibold text-foreground text-center leading-tight text-base">
                {item.name}
              </span>
              {item.desc && (
                <span className="text-muted-foreground text-center leading-snug mt-1 text-sm">
                  {item.desc}
                </span>
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center label (counter-rotated to stay upright) */}
      <motion.div
        className="absolute z-20 flex items-center justify-center"
        style={{
          left: center - 35,
          top: center - 35,
          width: 70,
          height: 70,
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
      >
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-primary/40 shadow-lg">
          <span className="font-bold text-primary text-base">G2C</span>
        </div>
      </motion.div>
    </div>
  );
};
