import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Settings, Cpu, Monitor, Zap, ArrowRight, Server, Clock, Gauge, 
  TrendingUp, Shield, CheckCircle, Activity, Cog
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";

const ControlPanels = () => {
  const solutions = [
    {
      title: "PLC Control Panels",
      description: "Programmable Logic Controller panels for complex automation sequences",
      icon: Cpu,
      metric: "High Reliability"
    },
    {
      title: "Motor Control Centers",
      description: "Centralized motor control for HVAC to industrial machinery",
      icon: Zap,
      metric: "Unified Control"
    },
    {
      title: "VFD Panels",
      description: "Variable Frequency Drive panels for motor optimization and efficiency",
      icon: Activity,
      metric: "Energy Efficient"
    },
    {
      title: "BMS/DDC Panels",
      description: "Direct Digital Controller panels for Building Management Systems",
      icon: Monitor,
      metric: "Smart Control"
    },
    {
      title: "Custom HMI/SCADA",
      description: "Intuitive interfaces for visualization, logging, and control",
      icon: Settings,
      metric: "User-Friendly"
    },
    {
      title: "Safety Control Systems",
      description: "Emergency shutdown and safety interlock panel systems",
      icon: Shield,
      metric: "SIL Rated"
    }
  ];

  const specifications = [
    { label: "Response Time", value: "<10ms", icon: Clock, description: "PLC cycle" },
    { label: "Efficiency", value: "99%+", icon: Gauge, description: "VFD motors" },
    { label: "Reliability", value: "MTBF 50k+", icon: TrendingUp, description: "Hours" },
    { label: "Standards", value: "IEC/UL", icon: Shield, description: "Certified" },
    { label: "Integration", value: "100%", icon: Server, description: "BMS ready" },
    { label: "Support", value: "24/7", icon: Monitor, description: "Technical" }
  ];

  const benefits = [
    { name: "Tailored Design", icon: Settings },
    { name: "Enhanced Reliability", icon: Shield },
    { name: "Simplified Operations", icon: Monitor },
    { name: "Built for Durability", icon: TrendingUp }
  ];

  const processSteps = [
    { step: "01", title: "Requirements Analysis", description: "Comprehensive assessment of your control system needs and specifications", duration: "1 Week" },
    { step: "02", title: "Custom Design", description: "Engineering design with detailed schematics and component selection", duration: "2-3 Weeks" },
    { step: "03", title: "Manufacturing", description: "Professional fabrication with rigorous quality testing at each stage", duration: "3-4 Weeks" },
    { step: "04", title: "Installation & Commissioning", description: "On-site installation, testing, and operator training", duration: "1-2 Weeks" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background with Overlay
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Control Panel Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-6 backdrop-blur-sm">
              Control Systems
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Control Panel Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Gain precision control over your facility's critical systems with our custom-designed and expertly fabricated control panels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">View Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          STATISTICAL INFOGRAPHIC - Key Metrics Carousel
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Technical <span className="text-gradient-primary">Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading control panel specifications
            </p>
          </motion.div>

          {/* Stats Carousel - Auto Moving */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-6"
              animate={{ x: [0, -1200] }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...specifications, ...specifications].map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={`${spec.label}-${index}`} className="relative group flex-shrink-0">
                    <div className="relative w-44 h-48 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center flex flex-col justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-xl font-bold text-white mb-1 leading-tight">
                          {spec.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          {spec.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground/60 mt-1">
                          {spec.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FEATURE INFOGRAPHIC - Control Panel Solutions
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Custom Control Panel <span className="text-gradient-accent">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored control systems designed for your specific requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-500 group h-full">
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-white">
                      {solution.metric}
                    </div>
                    
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-primary to-primary/60' : 'from-accent to-accent/60'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CIRCULAR HUB INFOGRAPHIC - Key Benefits
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient-primary">Our Panels?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benefits of our custom control panel solutions
            </p>
          </motion.div>

          {/* Cross Layout Infographic */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                {benefits.slice(0, 2).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-center gap-4 justify-end"
                    >
                      <div className="text-right">
                        <h4 className="text-lg font-semibold text-white">{benefit.name}</h4>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Center Hub */}
              <div className="flex justify-center">
                <motion.div 
                  className="relative w-40 h-40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 rounded-full border border-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center">
                      <Cog className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {benefits.slice(2, 4).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.name}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{benefit.name}</h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center">
                      <Cog className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-card/50 border border-primary/10 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{benefit.name}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          VERTICAL ROADMAP - Project Process
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to commissioning in weeks
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full" />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3 justify-start lg:justify-end">
                      {index % 2 !== 0 && <span className="text-3xl font-bold text-primary/30">{step.step}</span>}
                      <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                        {step.duration}
                      </Badge>
                      {index % 2 === 0 && <span className="text-3xl font-bold text-primary/30">{step.step}</span>}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION - Modern Gradient
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ready for <span className="text-gradient-primary">Precision Control?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a custom control panel solution designed for your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ControlPanels;
