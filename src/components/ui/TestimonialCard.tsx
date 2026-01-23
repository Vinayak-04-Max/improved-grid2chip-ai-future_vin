import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  text: string;
  author: string;
  company: string;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  company,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Staggered word animation for the quote
  const words = text.split(" ");

  return (
    <motion.div
      className="perspective-1000"
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <motion.div
        className={cn(
          "relative h-full rounded-2xl overflow-hidden cursor-pointer",
          "bg-gradient-to-br from-card via-card to-card/80",
          "border border-primary/10 shadow-xl"
        )}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02, z: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--g2c-green)) 100%)",
            padding: "2px",
          }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Inner content */}
        <div className="relative h-full p-6 md:p-8 z-10 bg-card rounded-2xl m-[1px]">
          {/* Floating quote icon */}
          <motion.div
            className="absolute -top-2 -left-2 text-primary/20"
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ 
              rotate: isHovered ? 0 : -10,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? -5 : 0
            }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <Quote className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} />
          </motion.div>
          
          {/* Animated particles on hover */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/40"
                  initial={{ 
                    x: "50%", 
                    y: "50%", 
                    scale: 0,
                    opacity: 1 
                  }}
                  animate={{ 
                    x: `${20 + Math.random() * 60}%`,
                    y: `${20 + Math.random() * 60}%`,
                    scale: [0, 1.5, 0],
                    opacity: [1, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random(),
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 0.5
                  }}
                />
              ))}
            </>
          )}
          
          {/* Quote text with word-by-word reveal on hover */}
          <div className="relative pt-8 md:pt-10 mb-6">
            <p className="text-muted-foreground italic text-base md:text-lg leading-relaxed">
              "
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-1"
                  initial={{ opacity: 0.7 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0.7,
                    y: isHovered ? 0 : 2,
                    color: isHovered ? "hsl(var(--foreground))" : undefined
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: isHovered ? wordIndex * 0.03 : 0
                  }}
                >
                  {word}
                </motion.span>
              ))}
              "
            </p>
          </div>
          
          {/* Author section with slide-up animation */}
          <motion.div 
            className="relative border-t border-primary/20 pt-4"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {/* Animated underline */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-g2c-green"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            <motion.div
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-semibold text-foreground flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ 
                    scale: isHovered ? [1, 1.3, 1] : 1,
                  }}
                  transition={{ 
                    duration: 0.6,
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 0.5
                  }}
                />
                {author}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{company}</div>
            </motion.div>
          </motion.div>
          
          {/* Corner accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
            style={{
              background: "radial-gradient(circle at bottom right, hsl(var(--primary)), transparent 70%)",
            }}
            animate={{ 
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 0.2 : 0.1
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
