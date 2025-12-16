import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, Cpu, Shield, Zap, ArrowRight, CheckCircle, ClipboardCheck, 
  Layers, Settings, HardHat, MapPin, Server, Thermometer, Lock, 
  Wifi, Leaf, Award, ChevronRight, CircleDot, Factory, Cloud, Building, Landmark
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";

const CustomDataCenter = () => {
  const advantages = [
    {
      title: "Precision Engineering",
      description: "Every aspect tailored to your specific workload and business goals",
      icon: Settings,
      metric: "100%",
      color: "from-primary to-primary/60"
    },
    {
      title: "Optimized Efficiency",
      description: "Maximizes performance and minimizes PUE for your applications",
      icon: Cpu,
      metric: "PUE 1.2",
      color: "from-accent to-accent/60"
    },
    {
      title: "Future-Proof Design",
      description: "Scalable, modular architecture that evolves with your roadmap",
      icon: Layers,
      metric: "Scalable",
      color: "from-neon-cyan to-neon-cyan/60"
    },
    {
      title: "End-to-End Management",
      description: "Complete lifecycle management from design to commissioning",
      icon: HardHat,
      metric: "Full Service",
      color: "from-neon-violet to-neon-violet/60"
    },
    {
      title: "Compliance Ready",
      description: "Built to meet Uptime Institute Tiers and industry standards",
      icon: ClipboardCheck,
      metric: "Certified",
      color: "from-primary to-primary/60"
    },
    {
      title: "Total Security",
      description: "Complete control over physical and digital security",
      icon: Shield,
      metric: "Multi-Layer",
      color: "from-accent to-accent/60"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Design",
      description: "Comprehensive needs analysis and blueprint creation tailored to your requirements.",
      icon: ClipboardCheck,
      duration: "2-4 weeks"
    },
    {
      step: "02",
      title: "Site Preparation",
      description: "Site evaluation, permitting, and ground preparation for construction.",
      icon: MapPin,
      duration: "4-8 weeks"
    },
    {
      step: "03",
      title: "Construction",
      description: "Structural build-out with core mechanical and electrical systems.",
      icon: HardHat,
      duration: "12-24 weeks"
    },
    {
      step: "04",
      title: "Integration",
      description: "Installation of racks, cabling, security, and monitoring systems.",
      icon: Layers,
      duration: "4-8 weeks"
    },
    {
      step: "05",
      title: "Commissioning",
      description: "Rigorous testing, staff training, and certified operational handover.",
      icon: CheckCircle,
      duration: "2-4 weeks"
    }
  ];

  const customizations = [
    { label: "Power Redundancy", value: "N, N+1, 2N, 2N+1", icon: Zap, description: "Choose your redundancy level" },
    { label: "Cooling Systems", value: "Air / Liquid / Hybrid", icon: Thermometer, description: "Optimized thermal management" },
    { label: "Rack Density", value: "Low to High Density", icon: Server, description: "Flexible power per rack" },
    { label: "Security Layers", value: "Multi-Layer Access", icon: Lock, description: "Biometric & surveillance" },
    { label: "Connectivity", value: "Carrier-Neutral", icon: Wifi, description: "Multiple provider options" },
    { label: "Monitoring", value: "BMS / DCIM", icon: Cpu, description: "Integrated management" },
    { label: "Sustainability", value: "Green Energy", icon: Leaf, description: "Renewable power options" },
    { label: "Tier Level", value: "Tier I - IV", icon: Award, description: "Uptime Institute certified" }
  ];

  const idealFor = [
    {
      title: "Large Enterprises",
      description: "A flagship data center to consolidate IT operations and support long-term growth.",
      icon: Building2,
      color: "primary"
    },
    {
      title: "Hyperscalers & Cloud",
      description: "Massive, highly efficient facilities built for cloud-scale infrastructure.",
      icon: Cloud,
      color: "accent"
    },
    {
      title: "HPC & Research",
      description: "Specialized environments for research, simulation, and data-intensive workloads.",
      icon: Factory,
      color: "neon-cyan"
    },
    {
      title: "Government & Public",
      description: "Secure, compliant facilities for mission-critical services.",
      icon: Landmark,
      color: "neon-violet"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background with Overlay
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Custom Data Center Infrastructure"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-6 backdrop-blur-sm">
              Custom Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Custom-Build Data Centers
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Engineered from the ground up to meet your unique operational, performance, and scalability requirements. Transform your vision into a state-of-the-art facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">Explore Our Process</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Accent Line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-neon-cyan"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CUSTOMIZATION CAROUSEL - Auto Moving Stats
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
              Infrastructure <span className="text-gradient-primary">Customizations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your data center, tailored to your exact specifications
            </p>
          </motion.div>

          {/* Auto-Moving Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-6"
              animate={{ x: [0, -1600] }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Double the items for seamless loop */}
              {[...customizations, ...customizations].map((custom, index) => {
                const Icon = custom.icon;
                return (
                  <div
                    key={`${custom.label}-${index}`}
                    className="relative group flex-shrink-0"
                  >
                    <div className="relative w-48 h-52 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center flex flex-col justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-12 h-12 mb-3 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-lg font-bold text-white mb-1 leading-tight">
                          {custom.value}
                        </div>
                        <div className="text-xs text-primary font-medium uppercase tracking-wide">
                          {custom.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground/60 mt-2">
                          {custom.description}
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
          FEATURE INFOGRAPHIC - Advantages with Visual Layout
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
              Custom-Build <span className="text-gradient-accent">Advantages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unparalleled benefits of a data center designed exclusively for you
            </p>
          </motion.div>

          {/* Hexagonal Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-500 group h-full">
                    {/* Metric Badge */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundImage: `linear-gradient(to right, hsl(var(--${index % 2 === 0 ? 'primary' : 'accent'})), hsl(var(--${index % 2 === 0 ? 'primary' : 'accent'}) / 0.7))` }}>
                      {advantage.metric}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROCESS INFOGRAPHIC - Timeline with Duration
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
              Our <span className="text-gradient-primary">Build Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five proven steps to deliver your data center on time and on budget
            </p>
          </motion.div>

          {/* Vertical Roadmap Infographic */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-neon-cyan" />

            <div className="space-y-0">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={step.step}
                    className="relative"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Connector Line */}
                    <div className={`absolute top-1/2 w-12 h-0.5 bg-gradient-to-r ${isEven ? 'right-1/2 mr-6 from-transparent to-primary' : 'left-1/2 ml-6 from-primary to-transparent'}`} />
                    
                    {/* Center Node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-14 h-14 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-xl font-bold text-primary">{step.step}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`grid grid-cols-2 gap-24 py-8 ${isEven ? '' : ''}`}>
                      {/* Left side content (for even steps) */}
                      <div className={`${isEven ? 'text-right pr-8' : 'opacity-0 pointer-events-none'}`}>
                        {isEven && (
                          <div className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                            {/* Duration Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                              <span>{step.duration}</span>
                            </div>
                            
                            <div className="flex items-center justify-end gap-3 mb-3">
                              <h3 className="text-xl font-display font-semibold text-white">
                                {step.title}
                              </h3>
                              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right side content (for odd steps) */}
                      <div className={`${!isEven ? 'text-left pl-8' : 'opacity-0 pointer-events-none'}`}>
                        {!isEven && (
                          <div className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                            {/* Duration Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
                              <span>{step.duration}</span>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon className="w-6 h-6 text-accent" />
                              </div>
                              <h3 className="text-xl font-display font-semibold text-white">
                                {step.title}
                              </h3>
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Final Badge */}
            <motion.div 
              className="relative z-20 flex justify-center pt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="px-8 py-4 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg shadow-accent/20">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold text-lg">Data Center Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          USE CASE INFOGRAPHIC - Ideal For Section
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Ideal <span className="text-gradient-accent">For</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom-build solutions tailored for enterprise-scale requirements
            </p>
          </motion.div>

          {/* Circular Infographic */}
          <div className="relative max-w-5xl mx-auto min-h-[600px] lg:min-h-[700px]">
            {/* Central Hub */}
            <motion.div 
              className="relative mx-auto w-44 h-44 lg:w-56 lg:h-56 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Outer spinning dashed ring */}
              <div 
                className="absolute inset-0 rounded-full border-4 border-dashed border-primary/50"
                style={{ 
                  animation: 'spin 25s linear infinite'
                }} 
              />
              
              {/* Second ring - counter spin */}
              <div 
                className="absolute inset-3 rounded-full border-2 border-dashed border-accent/40"
                style={{ 
                  animation: 'spin 20s linear infinite reverse'
                }} 
              />
              
              {/* Inner glow */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
              
              {/* Center content */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-card via-card/90 to-card/80 border-2 border-primary/40 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <Building2 className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  <span className="text-sm lg:text-base font-display font-bold text-white">Custom<br/>Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Connector Lines (Desktop only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 700">
              {/* Top connector */}
              <line x1="400" y1="350" x2="400" y2="120" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="8 4" />
              {/* Right connector */}
              <line x1="400" y1="350" x2="650" y2="350" stroke="url(#lineGradient2)" strokeWidth="2" strokeDasharray="8 4" />
              {/* Bottom connector */}
              <line x1="400" y1="350" x2="400" y2="580" stroke="url(#lineGradient3)" strokeWidth="2" strokeDasharray="8 4" />
              {/* Left connector */}
              <line x1="400" y1="350" x2="150" y2="350" stroke="url(#lineGradient4)" strokeWidth="2" strokeDasharray="8 4" />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--neon-cyan))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--neon-cyan))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient4" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--neon-violet))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--neon-violet))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Orbital Items */}
            <div className="mt-8 lg:mt-0 space-y-6 lg:space-y-0">
              {idealFor.map((item, index) => {
                const Icon = item.icon;
                const positions = [
                  'lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2', // Top
                  'lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2', // Right
                  'lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2', // Bottom
                  'lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2' // Left
                ];
                const borderColors = [
                  'border-primary/60 hover:border-primary',
                  'border-accent/60 hover:border-accent', 
                  'border-neon-cyan/60 hover:border-neon-cyan',
                  'border-neon-violet/60 hover:border-neon-violet'
                ];
                const iconBgColors = [
                  'bg-primary/20',
                  'bg-accent/20',
                  'bg-neon-cyan/20',
                  'bg-neon-violet/20'
                ];
                const iconColors = [
                  'text-primary',
                  'text-accent',
                  'text-neon-cyan',
                  'text-neon-violet'
                ];
                
                return (
                  <motion.div
                    key={item.title}
                    className={`${positions[index]} lg:w-64`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className={`flex lg:flex-col items-center gap-4 lg:gap-3 p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-2 ${borderColors[index]} transition-all duration-300 group lg:text-center hover:shadow-lg hover:shadow-primary/10`}>
                      {/* Icon Circle */}
                      <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full ${iconBgColors[index]} border-2 ${borderColors[index]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 lg:w-10 lg:h-10 ${iconColors[index]}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow lg:flex-grow-0">
                        <h3 className="text-lg lg:text-xl font-display font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION - Modern Gradient Design
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build Your{" "}
              <span className="text-gradient-primary">Custom Data Center?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's partner to engineer a data center that serves as the foundation for your future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">See Our Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomDataCenter;
