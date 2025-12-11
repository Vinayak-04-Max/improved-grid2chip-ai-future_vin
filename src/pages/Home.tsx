import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from "framer-motion";
import { useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/Card3D";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FibonacciSection, ParallaxLayer, GlowingNode } from "@/components/ui/FibonacciSection";
import { HeroParticles, NeuralNetwork, OrbitalRings } from "@/components/HeroParticles";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { 
  OrbitingWheel, 
  FloatingObject, 
  DepthLayer, 
  PulseAccent, 
  RefractiveCard,
  ContinuousCarousel,
  MorphingBlob,
  DataStream,
  VelocityText,
} from "@/components/ui/CinematicMotion";
import { 
  ScrollRevealBlock, 
  StaggerReveal, 
  CharacterReveal,
  ScrollProgress,
  MagneticArea,
} from "@/components/ui/ScrollRevealBlock";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Building2,
  Microscope,
  Factory,
  Fuel,
  Server,
  Ship,
  Sparkles,
  CircuitBoard,
  Network,
  Cloud,
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 1.15]);
  const heroRotate = useTransform(heroProgress, [0, 1], [0, 5]);
  const textY = useTransform(heroProgress, [0, 1], [0, -100]);

  const solutions = [
    {
      title: "HPC/AI-Ready Data Centers",
      description: "High-Performance Computing infrastructure optimized for AI/ML workloads and GPU-accelerated deep learning.",
      icon: Cpu,
      path: "/solutions/hpc",
      color: "primary" as const,
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Edge Data Centers",
      description: "Ultra-low latency processing power closer to users for real-time IoT and 5G applications.",
      icon: Zap,
      path: "/solutions/edge",
      color: "accent" as const,
      gradient: "from-accent to-g2c-green-glow",
    },
    {
      title: "Prefabricated Modules",
      description: "Factory-engineered units with up to 50% faster deployment times.",
      icon: Building2,
      path: "/solutions/prefabricated",
      color: "primary" as const,
      gradient: "from-neon-cyan to-primary",
    },
    {
      title: "Custom Build Centers",
      description: "Tailored solutions engineered to your exact specifications.",
      icon: Globe,
      path: "/solutions/custom",
      color: "accent" as const,
      gradient: "from-neon-violet to-accent",
    },
  ];

  const industries = [
    { name: "Pharmaceutical", icon: Microscope, desc: "Drug discovery & research" },
    { name: "Oil & Gas/Energy", icon: Fuel, desc: "Energy infrastructure" },
    { name: "IT/ITES", icon: Server, desc: "Digital services" },
    { name: "Ports and Logistics", icon: Ship, desc: "Supply chain operations" },
    { name: "Semi Conductors", icon: Cpu, desc: "Chip manufacturing" },
    { name: "Manufacturing", icon: Factory, desc: "Industrial automation" },
  ];

  const services = [
    { title: "Building Management Systems", icon: Building2, path: "/services/bms", desc: "Centralized control and automation" },
    { title: "DCIM Solutions", icon: Globe, path: "/services/ims", desc: "Real-time asset monitoring" },
    { title: "Integrated Monitoring", icon: CheckCircle, path: "/services/ims", desc: "Unified oversight dashboard" },
    { title: "ELV & Fire Safety", icon: Shield, path: "/services/elv", desc: "Maximum safety & security" },
    { title: "Control Panels", icon: Cpu, path: "/services/control-panels", desc: "Custom automation panels" },
    { title: "Operations & Maintenance", icon: Zap, path: "/services/ims", desc: "Proactive AMC services" },
  ];

  const stats = [
    { value: "99.998%", label: "Uptime", icon: Sparkles },
    { value: "100+", label: "Deployments", icon: CircuitBoard },
    { value: "24/7", label: "Support", icon: Network },
  ];

  const industryItems = industries.map(ind => ({
    name: ind.name,
    icon: <ind.icon className="w-6 h-6" />,
  }));

  return (
    <div ref={containerRef} className="min-h-screen bg-void overflow-hidden">
      {/* Global Scroll Progress */}
      <ScrollProgress />

      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Fully Immersive Cinematic Experience
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[120vh] flex items-center overflow-hidden">
        {/* Multi-Layer Parallax Background */}
        <motion.div
          style={{ y: heroY, scale: heroScale, rotate: heroRotate }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/70 to-void" />
        </motion.div>

        {/* Animated Background Layers */}
        <AnimatedBackground variant="neural" intensity={0.5} />
        <HeroParticles count={60} color="mixed" />
        <NeuralNetwork />
        <DataStream columns={15} />

        {/* Floating 3D Orbs */}
        <FloatingObject className="absolute top-[15%] left-[8%] z-20" depth={1.5} floatIntensity={30}>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-sm" />
        </FloatingObject>
        <FloatingObject className="absolute top-[25%] right-[12%] z-20" depth={0.8} floatIntensity={25}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/40 to-neon-cyan/20 blur-sm" />
        </FloatingObject>
        <FloatingObject className="absolute bottom-[35%] left-[15%] z-20" depth={1.2} floatIntensity={20}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-violet/30 to-primary/20 blur-sm" />
        </FloatingObject>

        {/* Morphing Background Blobs */}
        <MorphingBlob className="top-[10%] left-[20%]" color="primary" size={400} />
        <MorphingBlob className="bottom-[20%] right-[10%]" color="accent" size={350} />
        <MorphingBlob className="top-[40%] right-[30%]" color="mixed" size={300} />

        {/* Tech Grid Overlay with Animation */}
        <motion.div 
          className="absolute inset-0 tech-grid-3d opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content with Depth Layers */}
        <motion.div
          style={{ opacity: heroOpacity, y: textY }}
          className="relative z-10 fib-container w-full"
        >
          <div className="max-w-5xl mx-auto text-center space-y-fib-34">
            {/* Animated Badge */}
            <ScrollRevealBlock variant="scale" delay={0.1}>
              <MagneticArea intensity={0.2}>
                <Badge className="glass-panel border-primary/30 px-fib-21 py-fib-8 text-sm animate-pulse-glow">
                  <span className="relative flex items-center gap-fib-8">
                    <PulseAccent size="sm" color="primary" />
                    <span className="ml-2">Complete Data Center Solutions</span>
                  </span>
                </Badge>
              </MagneticArea>
            </ScrollRevealBlock>

            {/* Headline with Character Animation */}
            <div className="space-y-fib-8">
              <motion.h1
                className="text-phi-3xl md:text-phi-4xl lg:text-phi-5xl font-semibold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ScrollRevealBlock variant="slide" direction="up" delay={0.2}>
                  <span className="block text-foreground">Your Complete</span>
                </ScrollRevealBlock>
                <ScrollRevealBlock variant="scale" delay={0.4}>
                  <motion.span
                    className="block text-gradient-holographic"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    Data Center
                  </motion.span>
                </ScrollRevealBlock>
                <ScrollRevealBlock variant="slide" direction="up" delay={0.6}>
                  <span className="block text-foreground">Partner</span>
                </ScrollRevealBlock>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <ScrollRevealBlock variant="fade" direction="up" delay={0.8}>
              <p className="text-phi-lg md:text-phi-xl text-muted-foreground max-w-2xl mx-auto">
                From concept to commissioning and beyond, we manage every phase of your critical infrastructure lifecycle.
              </p>
            </ScrollRevealBlock>

            {/* Animated Stats */}
            <ScrollRevealBlock variant="fade" delay={1}>
              <StaggerReveal 
                className="grid grid-cols-3 gap-fib-34 max-w-2xl mx-auto py-fib-34"
                staggerDelay={0.15}
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <MagneticArea key={stat.label} intensity={0.15}>
                      <motion.div
                        className="text-center group cursor-pointer"
                        whileHover={{ scale: 1.08, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <motion.div
                          className="flex items-center justify-center gap-fib-8 mb-fib-5"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Icon className="w-5 h-5 text-primary opacity-60" />
                          <span className="text-phi-3xl md:text-phi-4xl font-display font-bold text-gradient-primary group-hover:text-glow transition-all">
                            {stat.value}
                          </span>
                        </motion.div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    </MagneticArea>
                  );
                })}
              </StaggerReveal>
            </ScrollRevealBlock>

            {/* CTAs with Magnetic Effect */}
            <ScrollRevealBlock variant="slide" direction="up" delay={1.2}>
              <div className="flex flex-col sm:flex-row gap-fib-21 justify-center">
                <Link to="/solutions">
                  <MagneticButton variant="glow" size="lg" className="flex items-center gap-fib-8 group">
                    <span>Explore Solutions</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </MagneticButton>
                </Link>
                <Link to="/contact">
                  <MagneticButton variant="holographic" size="lg" className="flex items-center gap-fib-8">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </Link>
              </div>
            </ScrollRevealBlock>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-fib-55 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-fib-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              className="w-fib-8 h-fib-34 rounded-full border-2 border-primary/50 flex justify-center pt-fib-8"
              animate={{ borderColor: ['hsl(var(--primary) / 0.5)', 'hsl(var(--accent) / 0.5)', 'hsl(var(--primary) / 0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="w-fib-3 h-fib-13 bg-primary rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          VELOCITY TEXT MARQUEE
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-fib-21 overflow-hidden border-y border-primary/10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-void via-primary/5 to-void"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <VelocityText baseVelocity={-5} className="text-phi-2xl font-semibold text-primary/20">
          HPC • AI-READY • EDGE COMPUTING • PREFABRICATED • CUSTOM BUILD • SCALABLE INFRASTRUCTURE •
        </VelocityText>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SOLUTIONS SECTION - Animated Cards
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-fib-144 overflow-hidden">
        <AnimatedBackground variant="cosmic" intensity={0.3} />
        
        <div className="fib-container relative z-10">
          <ScrollRevealBlock variant="fade" className="text-center mb-fib-89">
            <motion.h2
              className="text-phi-4xl md:text-phi-5xl font-display font-bold mb-fib-21"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              Advanced{" "}
              <CharacterReveal text="Data Center Solutions" className="text-gradient-primary" delay={0.3} />
            </motion.h2>
            <ScrollRevealBlock variant="fade" delay={0.2}>
              <p className="text-phi-lg text-muted-foreground max-w-3xl mx-auto">
                From high-performance computing clusters to agile containerized units, we build the resilient infrastructure that powers tomorrow's innovations.
              </p>
            </ScrollRevealBlock>
          </ScrollRevealBlock>

          {/* Solution Cards with Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fib-21">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <DepthLayer key={solution.title} depth={0.3 + index * 0.1}>
                  <ScrollRevealBlock
                    variant="scale"
                    delay={index * 0.1}
                  >
                    <RefractiveCard className="h-full min-h-[280px] group">
                      <div className="p-fib-21 flex flex-col h-full min-h-[280px] relative overflow-hidden">
                        {/* Animated gradient background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />
                        
                        {/* Icon with pulse */}
                        <motion.div 
                          className={`w-fib-55 h-fib-55 rounded-fib-lg flex items-center justify-center mb-fib-21 ${solution.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} relative`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className={`w-fib-34 h-fib-34 ${solution.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                          <motion.div
                            className="absolute inset-0 rounded-fib-lg border border-primary/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                        
                        <h3 className="text-phi-lg font-display font-semibold mb-fib-13 text-foreground">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex-grow mb-fib-21">
                          {solution.description}
                        </p>
                        <Link
                          to={solution.path}
                          className="inline-flex items-center gap-fib-8 text-sm font-medium text-primary hover:text-primary-glow transition-colors group/link"
                        >
                          <span>Learn More</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </Link>
                      </div>
                    </RefractiveCard>
                  </ScrollRevealBlock>
                </DepthLayer>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SERVICES CAROUSEL SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-fib-89 overflow-hidden">
        <AnimatedBackground variant="grid" intensity={0.4} />
        
        <div className="fib-container relative z-10 mb-fib-55">
          <ScrollRevealBlock variant="fade" className="text-center">
            <h2 className="text-phi-4xl md:text-phi-5xl font-display font-bold mb-fib-21">
              Integrated Facility &{" "}
              <span className="text-gradient-accent">Management Services</span>
            </h2>
            <p className="text-phi-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive building management and support services for peak performance.
            </p>
          </ScrollRevealBlock>
        </div>

        {/* Continuous Carousel */}
        <ContinuousCarousel direction="left" speed={40}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} to={service.path}>
                <motion.div
                  className="glass-panel rounded-fib-xl p-fib-34 min-w-[300px] group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-fib-55 h-fib-55 rounded-fib-lg flex items-center justify-center mb-fib-21 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <Icon className={`w-fib-34 h-fib-34 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                  </motion.div>
                  <h3 className="text-phi-lg font-display font-semibold mb-fib-8 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </ContinuousCarousel>

        {/* Reverse direction carousel for visual interest */}
        <div className="mt-fib-21">
          <ContinuousCarousel direction="right" speed={45}>
            {[...services].reverse().map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={`rev-${service.title}`} to={service.path}>
                  <motion.div
                    className="glass-panel rounded-fib-xl p-fib-21 min-w-[250px] group cursor-pointer border border-primary/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-fib-13">
                      <div className={`w-fib-34 h-fib-34 rounded-fib flex items-center justify-center ${index % 2 === 0 ? 'bg-accent/20' : 'bg-primary/20'}`}>
                        <Icon className={`w-fib-21 h-fib-21 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{service.title}</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </ContinuousCarousel>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          INDUSTRIES ORBITING WHEEL SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-fib-144 overflow-hidden">
        <AnimatedBackground variant="aurora" intensity={0.5} />
        
        <div className="fib-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-fib-89 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <ScrollRevealBlock variant="slide" direction="left">
                <h2 className="text-phi-4xl md:text-phi-5xl font-display font-bold mb-fib-21">
                  Industries We{" "}
                  <span className="text-gradient-primary">Serve</span>
                </h2>
              </ScrollRevealBlock>
              
              <ScrollRevealBlock variant="fade" delay={0.2}>
                <p className="text-phi-lg text-muted-foreground mb-fib-34">
                  Our data center solutions power critical operations across diverse sectors, 
                  enabling digital transformation and operational excellence.
                </p>
              </ScrollRevealBlock>

              <StaggerReveal className="space-y-fib-13" staggerDelay={0.1}>
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={industry.name}
                      className="flex items-center gap-fib-13 glass-panel rounded-fib-lg p-fib-13 cursor-pointer group"
                      whileHover={{ x: 10, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                    >
                      <motion.div
                        className="w-fib-34 h-fib-34 rounded-full bg-primary/20 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-fib-21 h-fib-21 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {industry.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{industry.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </StaggerReveal>
            </div>

            {/* Orbiting Wheel */}
            <div className="order-1 lg:order-2 flex justify-center">
              <ScrollRevealBlock variant="scale" delay={0.3}>
                <OrbitingWheel
                  items={industryItems}
                  radius={200}
                  duration={40}
                  centerContent={
                    <motion.div
                      className="glass-panel rounded-full w-32 h-32 flex items-center justify-center"
                      animate={{ boxShadow: ['0 0 30px hsl(var(--primary) / 0.3)', '0 0 60px hsl(var(--primary) / 0.5)', '0 0 30px hsl(var(--primary) / 0.3)'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="text-center">
                        <Cloud className="w-10 h-10 text-primary mx-auto mb-2" />
                        <span className="text-xs font-medium text-foreground">Industries</span>
                      </div>
                    </motion.div>
                  }
                />
              </ScrollRevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION - Cinematic Finale
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-fib-144 overflow-hidden">
        {/* Dynamic Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 20%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <OrbitalRings className="opacity-30" />
        <DataStream columns={10} />

        <div className="fib-container relative z-10">
          <ScrollRevealBlock variant="morph">
            <motion.div
              className="glass-panel rounded-fib-xl p-fib-89 text-center relative overflow-hidden"
              whileInView={{ boxShadow: '0 0 100px hsl(var(--primary) / 0.2)' }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-fib-xl"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--neon-cyan)), hsl(var(--primary)))',
                  backgroundSize: '300% 100%',
                  padding: '1px',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              <ScrollRevealBlock variant="scale" delay={0.2}>
                <h2 className="text-phi-3xl md:text-phi-5xl font-display font-bold mb-fib-21 relative">
                  Ready to Build Your{" "}
                  <motion.span
                    className="text-gradient-holographic inline-block"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Future Infrastructure
                  </motion.span>?
                </h2>
              </ScrollRevealBlock>
              
              <ScrollRevealBlock variant="fade" delay={0.4}>
                <p className="text-phi-lg text-muted-foreground max-w-2xl mx-auto mb-fib-34">
                  Let's discuss how our AI-ready data center solutions can transform your operations.
                </p>
              </ScrollRevealBlock>

              <ScrollRevealBlock variant="slide" direction="up" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-fib-21 justify-center">
                  <Link to="/contact">
                    <MagneticButton variant="glow" size="lg" className="group">
                      <span className="flex items-center gap-fib-8">
                        Get Started Today
                        <motion.span
                          animate={{ x: [0, 5, 0], scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </span>
                    </MagneticButton>
                  </Link>
                  <Link to="/demo">
                    <MagneticButton variant="holographic" size="lg">
                      Book a Demo
                    </MagneticButton>
                  </Link>
                </div>
              </ScrollRevealBlock>
            </motion.div>
          </ScrollRevealBlock>
        </div>
      </section>
    </div>
  );
};

export default Home;
