import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  metric?: string;
}

interface SemiclircleFeaturesProps {
  features: FeatureItem[];
  gradientId?: string;
}

const SemicircleFeatures = ({ features, gradientId = "defaultArcGradient" }: SemiclircleFeaturesProps) => {
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <div className="relative min-h-[450px]">
          {/* Left Side Features - Icon first, then text */}
          <div className="absolute left-0 top-0 w-[280px] space-y-12 z-20">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 h-[120px]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="pt-1 flex-1">
                    <h4 className="font-display font-semibold text-foreground mb-1 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side Features - Icon first, then text (aligned left) */}
          <div className="absolute right-0 top-0 w-[280px] space-y-12 z-20">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 h-[120px]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 3) }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-accent/40 flex items-center justify-center">
                      <span className="text-xs font-bold text-accent">0{index + 4}</span>
                    </div>
                  </div>
                  
                  <div className="pt-1 flex-1">
                    <h4 className="font-display font-semibold text-foreground mb-1 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Semicircle Arc */}
          <div className="flex justify-center pt-8">
            <div className="relative w-[420px] h-[260px]">
              <svg viewBox="0 0 420 260" className="w-full h-full mx-0">
                <defs>
                  <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
                
                <path
                  d="M 30 250 A 180 180 0 0 1 390 250"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.15)"
                  strokeWidth="60"
                  strokeLinecap="round"
                />
                <path
                  d="M 30 250 A 180 180 0 0 1 390 250"
                  fill="none"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="40"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M 50 250 A 160 160 0 0 1 370 250"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                
                {[0, 1, 2, 3, 4, 5].map(i => {
                  const angle = Math.PI * (i + 0.5) / 6;
                  const x = 210 + 180 * Math.cos(Math.PI - angle);
                  const y = 250 - 180 * Math.sin(angle);
                  return <circle key={i} cx={x} cy={y} r="6" fill="white" opacity="0.9" />;
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Vertical Steps */}
      <div className="lg:hidden space-y-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">0{index + 1}</span>
                </div>
                {index < features.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </div>
              
              <div className="flex-1 pt-1">
                {feature.metric && (
                  <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">{feature.metric}</div>
                )}
                <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SemicircleFeatures;
