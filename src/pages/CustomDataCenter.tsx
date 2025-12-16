import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, Cpu, Shield, Zap, ArrowRight, CheckCircle, ClipboardCheck, 
  Layers, Settings, HardHat, MapPin, Server, Thermometer, Lock, 
  Wifi, Leaf, Award, ChevronRight, CircleDot, Factory, Cloud, Building, Landmark, TrendingUp
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
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.06)_0%,_transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

          {/* Central Hub */}
          <motion.div 
            className="mx-auto w-36 h-36 lg:w-44 lg:h-44 relative mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <motion.div 
              className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full border-2 border-dashed border-accent/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-card to-card/90 border border-primary/20 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-1 rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center">
                  <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <span className="text-[10px] lg:text-xs font-display font-bold text-white">Custom<br/>Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {idealFor.map((item, index) => {
              const Icon = item.icon;
              const styles = [
                { border: 'border-primary/30 hover:border-primary/60', iconBg: 'from-primary/25 to-primary/10', iconBorder: 'border-primary/30', iconColor: 'text-primary' },
                { border: 'border-neon-cyan/30 hover:border-neon-cyan/60', iconBg: 'from-neon-cyan/25 to-neon-cyan/10', iconBorder: 'border-neon-cyan/30', iconColor: 'text-neon-cyan' },
                { border: 'border-accent/30 hover:border-accent/60', iconBg: 'from-accent/25 to-accent/10', iconBorder: 'border-accent/30', iconColor: 'text-accent' },
                { border: 'border-neon-violet/30 hover:border-neon-violet/60', iconBg: 'from-neon-violet/25 to-neon-violet/10', iconBorder: 'border-neon-violet/30', iconColor: 'text-neon-violet' }
              ];
              const style = styles[index];
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`group h-full p-6 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border ${style.border} transition-all duration-300 hover:shadow-lg hover:shadow-primary/5`}>
                    <div className="flex items-start gap-5">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.iconBg} border ${style.iconBorder} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className={`w-8 h-8 ${style.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
