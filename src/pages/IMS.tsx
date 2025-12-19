import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Monitor, Brain, Cpu, Shield, Zap, Activity, BarChart3, 
  AlertTriangle, Server, Clock, TrendingUp, Gauge, Eye, Database
} from "lucide-react";
import heroImage from "@/assets/ai-neural-network.jpg";

const IMS = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced algorithms for predictive maintenance and anomaly detection",
      icon: Brain,
      metric: "AI-Powered"
    },
    {
      title: "Real-Time Monitoring",
      description: "24/7 continuous monitoring with instant alerts and notifications",
      icon: Monitor,
      metric: "24/7"
    },
    {
      title: "Centralized Reporting",
      description: "Comprehensive dashboards and automated reports with insights",
      icon: BarChart3,
      metric: "Real-time"
    },
    {
      title: "Security Integration",
      description: "Advanced cybersecurity monitoring with threat detection",
      icon: Shield,
      metric: "Zero Trust"
    },
    {
      title: "Energy Optimization",
      description: "Data-driven energy management for maximum efficiency",
      icon: Zap,
      metric: "30% Savings"
    },
    {
      title: "Proactive Alerting",
      description: "Smart alerting that predicts issues before they become critical",
      icon: AlertTriangle,
      metric: "Predictive"
    }
  ];

  const specifications = [
    { label: "System Uptime", value: "99.99%", icon: TrendingUp, description: "Guaranteed" },
    { label: "Energy Savings", value: "30%", icon: Gauge, description: "Potential" },
    { label: "Monitoring", value: "24/7", icon: Eye, description: "Centralized" },
    { label: "Detection", value: "Real-time", icon: AlertTriangle, description: "Threat" },
    { label: "Response", value: "<100ms", icon: Clock, description: "Alert time" },
    { label: "Systems", value: "100+", icon: Database, description: "Integrated" }
  ];

  const monitoringSystems = [
    { name: "Power Distribution", icon: Zap },
    { name: "UPS & Battery", icon: Server },
    { name: "Cooling & HVAC", icon: Activity },
    { name: "Fire Detection", icon: AlertTriangle }
  ];

  const processSteps = [
    { step: "01", title: "System Assessment", description: "Comprehensive evaluation of existing infrastructure and monitoring needs", duration: "1-2 Weeks" },
    { step: "02", title: "Integration Design", description: "Custom IMS architecture designed for your facility requirements", duration: "2-3 Weeks" },
    { step: "03", title: "Deployment", description: "Professional installation with minimal disruption to operations", duration: "3-4 Weeks" },
    { step: "04", title: "Optimization", description: "Continuous tuning and optimization for maximum performance", duration: "Ongoing" }
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
            alt="Integrated Monitoring System"
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
              Integrated Monitoring
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Integrated Monitoring System
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Comprehensive IMS that transforms critical facility management with automation, predictive analytics, and centralized oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/demo">
                  Experience IMS Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Get Consultation</Link>
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
              Performance at a <span className="text-gradient-primary">Glance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading specifications for intelligent facility monitoring
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
          SEMICIRCULAR INFOGRAPHIC - IMS Features
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-card/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-2">
              The 6-Steps of
            </h2>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gradient-primary mb-4">
              Intelligent Monitoring
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive monitoring capabilities for superior facility management
            </p>
          </motion.div>

          {/* Semicircular Infographic - Desktop */}
          <div className="hidden lg:block relative">
            {/* Central Hub with Main Icon */}
            <div className="relative h-[500px] flex items-end justify-center">
              {/* Semicircle Arc Background */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  {/* Arc segments with different colors */}
                  <defs>
                    <linearGradient id="segment1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" />
                    </linearGradient>
                    <linearGradient id="segment2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="segment3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="segment4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="segment5" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient id="segment6" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  
                  {/* Arc segments */}
                  <path d="M 60 400 A 340 340 0 0 1 152 152" fill="none" stroke="url(#segment1)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
                  <path d="M 152 152 A 340 340 0 0 1 280 60" fill="none" stroke="url(#segment2)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
                  <path d="M 280 60 A 340 340 0 0 1 400 35" fill="none" stroke="url(#segment3)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
                  <path d="M 400 35 A 340 340 0 0 1 520 60" fill="none" stroke="url(#segment4)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
                  <path d="M 520 60 A 340 340 0 0 1 648 152" fill="none" stroke="url(#segment5)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
                  <path d="M 648 152 A 340 340 0 0 1 740 400" fill="none" stroke="url(#segment6)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
                </svg>
              </div>

              {/* Central Icon */}
              <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Monitor className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              {/* Feature Points positioned around the arc */}
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const positions = [
                  { left: '2%', bottom: '65%', align: 'left' },
                  { left: '8%', bottom: '95%', align: 'left' },
                  { left: '28%', bottom: '115%', align: 'left' },
                  { right: '28%', bottom: '115%', align: 'right' },
                  { right: '8%', bottom: '95%', align: 'right' },
                  { right: '2%', bottom: '65%', align: 'right' },
                ];
                const pos = positions[index];
                const colors = [
                  'from-primary to-primary/80',
                  'from-sky-400 to-sky-500',
                  'from-violet-400 to-violet-500',
                  'from-pink-400 to-pink-500',
                  'from-orange-400 to-orange-500',
                  'from-emerald-400 to-emerald-500',
                ];
                const bgColors = [
                  'bg-primary/10 border-primary/30',
                  'bg-sky-500/10 border-sky-500/30',
                  'bg-violet-500/10 border-violet-500/30',
                  'bg-pink-500/10 border-pink-500/30',
                  'bg-orange-500/10 border-orange-500/30',
                  'bg-emerald-500/10 border-emerald-500/30',
                ];
                const textColors = [
                  'text-primary',
                  'text-sky-400',
                  'text-violet-400',
                  'text-pink-400',
                  'text-orange-400',
                  'text-emerald-400',
                ];

                return (
                  <motion.div
                    key={feature.title}
                    className="absolute"
                    style={{ 
                      left: pos.left, 
                      right: pos.right, 
                      bottom: pos.bottom 
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className={`flex items-start gap-4 ${pos.align === 'right' ? 'flex-row-reverse text-right' : ''}`}>
                      {/* Icon with number */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className={`absolute -bottom-2 ${pos.align === 'right' ? '-left-2' : '-right-2'} w-7 h-7 rounded-full bg-background border-2 ${bgColors[index].split(' ')[1]} flex items-center justify-center`}>
                          <span className={`text-xs font-bold ${textColors[index]}`}>0{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="max-w-[200px]">
                        <h4 className="text-base font-display font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout - Vertical Steps */}
          <div className="lg:hidden space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = [
                'from-primary to-primary/80 border-primary/30',
                'from-sky-400 to-sky-500 border-sky-500/30',
                'from-violet-400 to-violet-500 border-violet-500/30',
                'from-pink-400 to-pink-500 border-pink-500/30',
                'from-orange-400 to-orange-500 border-orange-500/30',
                'from-emerald-400 to-emerald-500 border-emerald-500/30',
              ];

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
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index].split(' ').slice(0, 2).join(' ')} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border ${colors[index].split(' ')[2]} flex items-center justify-center`}>
                      <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    </div>
                    {index < features.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <div className="text-xs text-primary font-semibold mb-1">{feature.metric}</div>
                    <h4 className="text-lg font-display font-semibold text-white mb-1">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CIRCULAR HUB INFOGRAPHIC - Monitoring Systems
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
              Comprehensive <span className="text-gradient-primary">System Coverage</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor every critical aspect of your facility infrastructure
            </p>
          </motion.div>

          {/* Cross Layout Infographic */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                {monitoringSystems.slice(0, 2).map((system, index) => {
                  const Icon = system.icon;
                  return (
                    <motion.div
                      key={system.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-center gap-4 justify-end"
                    >
                      <div className="text-right">
                        <h4 className="text-lg font-semibold text-white">{system.name}</h4>
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
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {monitoringSystems.slice(2, 4).map((system, index) => {
                  const Icon = system.icon;
                  return (
                    <motion.div
                      key={system.name}
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
                        <h4 className="text-lg font-semibold text-white">{system.name}</h4>
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
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {monitoringSystems.map((system, index) => {
                  const Icon = system.icon;
                  return (
                    <motion.div
                      key={system.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-card/50 border border-primary/10 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{system.name}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          VERTICAL ROADMAP - Implementation Process
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
              Implementation <span className="text-gradient-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamless deployment with minimal disruption
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
              Ready to Deploy <span className="text-gradient-primary">IMS?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your critical facility management with our integrated monitoring system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IMS;
