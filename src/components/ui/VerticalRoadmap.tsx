import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

export interface RoadmapStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  icon?: LucideIcon;
}

interface VerticalRoadmapProps {
  steps: RoadmapStep[];
  finalBadge?: {
    icon: LucideIcon;
    text: string;
  };
  accentColor?: "primary" | "accent";
}

const VerticalRoadmap = ({ steps, finalBadge, accentColor = "primary" }: VerticalRoadmapProps) => {
  const borderColor = accentColor === "accent" ? "border-accent/20 hover:border-accent/40" : "border-primary/20 hover:border-primary/40";
  const badgeColor = accentColor === "accent" ? "border-accent/30 bg-accent/10 text-accent" : "border-primary/30 bg-primary/10 text-primary";
  const lineGradient = accentColor === "accent" 
    ? "from-accent via-primary to-accent/30" 
    : "from-primary via-accent to-primary/30";

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical Progress Line */}
      <div className={`absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b ${lineGradient} rounded-full`} />
      
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative flex items-start gap-6 pb-12 last:pb-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            {/* Node */}
            <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 border-4 border-background">
                {step.step}
              </div>
            </div>
            
            {/* Content Card - Fixed dimensions */}
            <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-40px)] ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:ml-auto'}`}>
              <div className={`h-[160px] w-full p-6 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border ${borderColor} transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col`}>
                <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {Icon && (
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <Badge variant="outline" className={`${badgeColor} text-xs`}>
                    {step.duration}
                  </Badge>
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{step.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Final Badge */}
      {finalBadge && (
        <motion.div
          className="relative z-20 flex justify-center pt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-8 py-4 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg shadow-accent/20">
            <div className="flex items-center gap-3 text-white">
              <finalBadge.icon className="w-6 h-6" />
              <span className="font-semibold text-lg">{finalBadge.text}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VerticalRoadmap;
