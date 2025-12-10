import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/Card3D";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FibonacciSection, ParallaxLayer, RevealText, GlowingNode } from "@/components/ui/FibonacciSection";
import { HeroParticles, NeuralNetwork } from "@/components/HeroParticles";
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
  Ship
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const solutions = [
    {
      title: "HPC/AI-Ready Data Centers",
      description: "High-Performance Computing infrastructure optimized for AI/ML workloads and GPU-accelerated deep learning.",
      icon: Cpu,
      path: "/solutions/hpc",
      color: "primary" as const,
    },
    {
      title: "Edge Data Centers",
      description: "Ultra-low latency processing power closer to users for real-time IoT and 5G applications.",
      icon: Zap,
      path: "/solutions/edge",
      color: "accent" as const,
    },
    {
      title: "Prefabricated Data Centers",
      description: "Factory-engineered modules with up to 50% faster deployment times.",
      icon: Building2,
      path: "/solutions/prefabricated",
      color: "primary" as const,
    },
    {
      title: "Custom Build Data Center",
      description: "Tailored solutions engineered to your exact specifications.",
      icon: Globe,
      path: "/solutions/custom",
      color: "accent" as const,
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
    { title: "Building Management Systems (BMS)", icon: Building2, path: "/services/bms", desc: "Centralized control and automation" },
    { title: "DCIM", icon: Globe, path: "/services/ims", desc: "Real-time asset monitoring" },
    { title: "Integrated Monitoring", icon: CheckCircle, path: "/services/ims", desc: "Unified oversight dashboard" },
    { title: "ELV & Fire Safety", icon: Shield, path: "/services/elv", desc: "Maximum safety & security" },
    { title: "Control Panels", icon: Cpu, path: "/services/control-panels", desc: "Custom automation panels" },
    { title: "Operations & Maintenance", icon: Zap, path: "/services/ims", desc: "Proactive AMC services" },
  ];

  const stats = [
    { value: "99.998%", label: "Uptime" },
    { value: "100+", label: "Deployments" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-void overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Immersive Cinematic Experience
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/60 to-void" />
        </motion.div>

        {/* Animated Background Elements */}
        <HeroParticles count={40} color="mixed" />
        <NeuralNetwork />

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid-3d opacity-20" />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-[200px] h-[200px] rounded-full bg-primary/20 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[15%] w-[150px] h-[150px] rounded-full bg-accent/30 blur-[60px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 fib-container w-full"
        >
          <div className="max-w-4xl mx-auto text-center space-y-fib-34">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="glass-panel border-primary/30 px-fib-21 py-fib-8 text-sm">
                <span className="relative flex items-center gap-fib-8">
                  <GlowingNode size="sm" color="primary" />
                  Complete Data Center Solutions
                </span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <h1 className="text-phi-5xl md:text-phi-7xl font-display font-bold leading-none">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-foreground"
              >
                Your Complete
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className="block text-gradient-holographic"
              >
                Data Center
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="block text-foreground"
              >
                Partner
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-phi-lg md:text-phi-xl text-muted-foreground max-w-2xl mx-auto"
            >
              From concept to commissioning and beyond, we manage every phase of your critical infrastructure lifecycle.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-3 gap-fib-34 max-w-xl mx-auto py-fib-34"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-phi-3xl md:text-phi-4xl font-display font-bold text-gradient-primary group-hover:text-glow transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-fib-5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-fib-21 justify-center"
            >
              <Link to="/solutions">
                <MagneticButton variant="glow" size="lg" className="flex items-center gap-fib-8">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton variant="holographic" size="lg" className="flex items-center gap-fib-8">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-fib-34 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-fib-8 h-fib-34 rounded-full border-2 border-primary/50 flex justify-center pt-fib-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-fib-3 h-fib-13 bg-primary rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SOLUTIONS SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FibonacciSection background="mesh" className="relative">
        <div className="fib-container">
          <div className="text-center mb-fib-55">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-phi-4xl md:text-phi-5xl font-display font-bold mb-fib-21"
            >
              Advanced{" "}
              <span className="text-gradient-primary">Data Center Solutions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-phi-lg text-muted-foreground max-w-3xl mx-auto"
            >
              From high-performance computing clusters to agile containerized units, we build the resilient infrastructure that powers tomorrow's innovations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fib-21">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card3D glowColor={solution.color} className="h-full">
                    <div className="p-fib-21 flex flex-col h-full">
                      <div className={`w-fib-55 h-fib-55 rounded-fib-lg flex items-center justify-center mb-fib-21 ${solution.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                        <Icon className={`w-fib-34 h-fib-34 ${solution.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <h3 className="text-phi-lg font-display font-semibold mb-fib-13 text-foreground">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-grow mb-fib-21">
                        {solution.description}
                      </p>
                      <Link
                        to={solution.path}
                        className="inline-flex items-center gap-fib-8 text-sm font-medium text-primary hover:text-primary-glow transition-colors group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FibonacciSection>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FibonacciSection background="grid">
        <div className="fib-container">
          <div className="text-center mb-fib-55">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-phi-4xl md:text-phi-5xl font-display font-bold mb-fib-21"
            >
              Integrated Facility &{" "}
              <span className="text-gradient-accent">Management Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-phi-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Comprehensive building management and support services for peak performance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fib-21">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link to={service.path}>
                    <Card3D glowColor={index % 2 === 0 ? "primary" : "accent"} className="group">
                      <div className="p-fib-21">
                        <div className={`w-fib-55 h-fib-55 rounded-fib-lg flex items-center justify-center mb-fib-21 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'} group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-fib-34 h-fib-34 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <h3 className="text-phi-lg font-display font-semibold mb-fib-8 text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    </Card3D>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FibonacciSection>

      {/* ═══════════════════════════════════════════════════════════════════════════
          INDUSTRIES SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FibonacciSection background="holographic">
        <div className="fib-container">
          <div className="text-center mb-fib-55">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-phi-4xl md:text-phi-5xl font-display font-bold mb-fib-21"
            >
              Industries We{" "}
              <span className="text-gradient-primary">Serve</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-fib-21">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-panel rounded-fib-lg p-fib-21 text-center group cursor-pointer"
                >
                  <div className="w-fib-55 h-fib-55 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-fib-13 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-fib-21 h-fib-21 text-primary" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground mb-fib-5">
                    {industry.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{industry.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FibonacciSection>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FibonacciSection className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="fib-container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-fib-xl p-fib-55 text-center"
          >
            <h2 className="text-phi-3xl md:text-phi-4xl font-display font-bold mb-fib-21">
              Ready to Build Your{" "}
              <span className="text-gradient-holographic">Future Infrastructure</span>?
            </h2>
            <p className="text-phi-lg text-muted-foreground max-w-2xl mx-auto mb-fib-34">
              Let's discuss how our AI-ready data center solutions can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-fib-21 justify-center">
              <Link to="/contact">
                <MagneticButton variant="glow" size="lg">Get Started Today</MagneticButton>
              </Link>
              <Link to="/demo">
                <MagneticButton variant="holographic" size="lg">Book a Demo</MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </FibonacciSection>
    </div>
  );
};

export default Home;