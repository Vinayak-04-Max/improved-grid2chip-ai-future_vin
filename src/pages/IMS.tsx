import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Brain, Cpu, Shield, Zap, Activity, BarChart3, AlertTriangle, Server, Clock, TrendingUp, Gauge, Eye, Database } from "lucide-react";
import heroImage from "@/assets/ai-neural-network.jpg";
import VerticalRoadmap from "@/components/ui/VerticalRoadmap";
import SemicircleFeatures from "@/components/ui/SemicircleFeatures";
const IMS = () => {
  const features = [{
    title: "Predictive Analytics",
    description: "Advanced algorithms for predictive maintenance and anomaly detection",
    icon: Brain,
    metric: "AI-Powered"
  }, {
    title: "Real-Time Monitoring",
    description: "24/7 continuous monitoring with instant alerts and notifications",
    icon: Monitor,
    metric: "24/7"
  }, {
    title: "Centralized Reporting",
    description: "Comprehensive dashboards and automated reports with insights",
    icon: BarChart3,
    metric: "Real-time"
  }, {
    title: "Security Integration",
    description: "Advanced cybersecurity monitoring with threat detection",
    icon: Shield,
    metric: "Zero Trust"
  }, {
    title: "Energy Optimization",
    description: "Data-driven energy management for maximum efficiency",
    icon: Zap,
    metric: "30% Savings"
  }, {
    title: "Proactive Alerting",
    description: "Smart alerting that predicts issues before they become critical",
    icon: AlertTriangle,
    metric: "Predictive"
  }];
  const specifications = [{
    label: "System Uptime",
    value: "99.99%",
    icon: TrendingUp,
    description: "Guaranteed"
  }, {
    label: "Energy Savings",
    value: "30%",
    icon: Gauge,
    description: "Potential"
  }, {
    label: "Monitoring",
    value: "24/7",
    icon: Eye,
    description: "Centralized"
  }, {
    label: "Detection",
    value: "Real-time",
    icon: AlertTriangle,
    description: "Threat"
  }, {
    label: "Response",
    value: "<100ms",
    icon: Clock,
    description: "Alert time"
  }, {
    label: "Systems",
    value: "100+",
    icon: Database,
    description: "Integrated"
  }];
  const monitoringSystems = [{
    name: "Power Distribution",
    icon: Zap
  }, {
    name: "UPS & Battery",
    icon: Server
  }, {
    name: "Cooling & HVAC",
    icon: Activity
  }, {
    name: "Fire Detection",
    icon: AlertTriangle
  }];
  const processSteps = [{
    step: "01",
    title: "System Assessment",
    description: "Comprehensive evaluation of existing infrastructure and monitoring needs",
    duration: "1-2 Weeks"
  }, {
    step: "02",
    title: "Integration Design",
    description: "Custom IMS architecture designed for your facility requirements",
    duration: "2-3 Weeks"
  }, {
    step: "03",
    title: "Deployment",
    description: "Professional installation with minimal disruption to operations",
    duration: "3-4 Weeks"
  }, {
    step: "04",
    title: "Optimization",
    description: "Continuous tuning and optimization for maximum performance",
    duration: "Ongoing"
  }];
  return <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background with Overlay
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Integrated Monitoring System" className="w-full h-full object-cover opacity-85" src="/lovable-uploads/2ef24791-74f4-4138-aa0a-9886c08c0ad7.jpg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div className="max-w-2xl" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <Badge variant="outline" className="mb-6 backdrop-blur-sm text-primary-foreground bg-white/0 border-primary-foreground">
              Integrated Monitoring
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Integrated Monitoring System
            </h1>
            <p className="text-fluid-body-lg text-white/80 leading-relaxed mb-8">
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

        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50" initial={{
        scaleX: 0
      }} animate={{
        scaleX: 1
      }} transition={{
        duration: 1.5,
        delay: 0.5
      }} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          STATISTICAL INFOGRAPHIC - Key Metrics Carousel
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
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
            
            <motion.div className="flex gap-6" animate={{
            x: [0, -1200]
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}>
              {[...specifications, ...specifications].map((spec, index) => {
              const Icon = spec.icon;
              return <div key={`${spec.label}-${index}`} className="relative group flex-shrink-0">
                    <div className="relative w-44 h-48 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center flex flex-col justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-xl font-bold text-foreground mb-1 leading-tight">
                          {spec.value}
                        </div>
                        <div className="text-xs font-medium uppercase tracking-wide text-primary">
                          {spec.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground/60 mt-1">
                          {spec.description}
                        </div>
                      </div>
                    </div>
                  </div>;
            })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SEMICIRCULAR INFOGRAPHIC - IMS Features
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-card/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-[30px]">
          <motion.div className="text-center mb-24" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
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

          <SemicircleFeatures features={features} gradientId="imsArcGradient" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CIRCULAR HUB INFOGRAPHIC - Monitoring Systems
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
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
                return <motion.div key={system.name} initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.15
                }} className="flex items-center gap-4 justify-end">
                      <div className="text-right">
                        <h4 className="font-semibold text-primary-glow text-xl">{system.name}</h4>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>;
              })}
              </div>

              {/* Center Hub */}
              <div className="flex justify-center">
                <motion.div className="relative w-40 h-40" initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }}>
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{
                  animationDuration: '20s'
                }} />
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
                return <motion.div key={system.name} initial={{
                  opacity: 0,
                  x: 30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.15
                }} className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary text-xl">{system.name}</h4>
                      </div>
                    </motion.div>;
              })}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{
                  animationDuration: '20s'
                }} />
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
                return <motion.div key={system.name} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }} className="p-4 rounded-xl bg-card/50 border border-primary/10 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{system.name}</h4>
                    </motion.div>;
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
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Implementation <span className="text-gradient-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamless deployment with minimal disruption
            </p>
          </motion.div>

          <VerticalRoadmap steps={processSteps} />
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
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
    </div>;
};
export default IMS;