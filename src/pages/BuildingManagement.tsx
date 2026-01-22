import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Thermometer, Zap, Shield, ArrowRight, Activity, BarChart3, AlertTriangle, Settings, CheckCircle, Server, Clock, Gauge, TrendingUp, Monitor, Cpu, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";
const BuildingManagement = () => {
  const features = [{
    title: "Centralized Monitoring",
    description: "Single interface to monitor all facility systems",
    icon: Activity,
    metric: "360°"
  }, {
    title: "Energy Management",
    description: "Track and optimize energy consumption in real-time",
    icon: Zap,
    metric: "30% Savings"
  }, {
    title: "Predictive Alerts",
    description: "Smart analytics predict equipment failures",
    icon: AlertTriangle,
    metric: "AI-Powered"
  }, {
    title: "Environmental Control",
    description: "Automated temperature and humidity management",
    icon: Thermometer,
    metric: "±0.5°C"
  }, {
    title: "Comprehensive Reports",
    description: "Detailed analytics and compliance reporting",
    icon: BarChart3,
    metric: "Real-time"
  }, {
    title: "Systems Integration",
    description: "Open-platform compatibility with all protocols",
    icon: Settings,
    metric: "100+"
  }];
  const specifications = [{
    label: "System Uptime",
    value: "99.998%",
    icon: TrendingUp,
    description: "Availability"
  }, {
    label: "Response Time",
    value: "<100ms",
    icon: Clock,
    description: "Alert speed"
  }, {
    label: "Protocols",
    value: "BACnet+",
    icon: Server,
    description: "Supported"
  }, {
    label: "Energy Savings",
    value: "30%",
    icon: Gauge,
    description: "Average"
  }, {
    label: "Integration",
    value: "Open",
    icon: Settings,
    description: "Platform"
  }, {
    label: "Monitoring",
    value: "24/7",
    icon: Monitor,
    description: "Continuous"
  }];
  const integratedSystems = [{
    name: "HVAC Systems",
    icon: Thermometer
  }, {
    name: "Power Management",
    icon: Zap
  }, {
    name: "Lighting Control",
    icon: Monitor
  }, {
    name: "Physical Security",
    icon: Shield
  }];
  const benefits = [{
    title: "Reduced Operational Costs",
    description: "Lower energy bills and maintenance expenses through intelligent automation",
    icon: Zap
  }, {
    title: "Improved Reliability",
    description: "Proactively address potential issues to ensure system availability",
    icon: Shield
  }, {
    title: "Enhanced Comfort & Safety",
    description: "Create safer, more comfortable environments for occupants",
    icon: Thermometer
  }, {
    title: "Centralized Efficiency",
    description: "Streamline facility management with single point of control",
    icon: Activity
  }];
  const applications = [{
    step: "01",
    title: "Mission-Critical Data Centers",
    description: "Maximum uptime and efficiency for critical IT environments",
    duration: "Tier III/IV"
  }, {
    step: "02",
    title: "Commercial Buildings",
    description: "Optimize comfort, safety, and energy across office towers",
    duration: "Enterprise"
  }, {
    step: "03",
    title: "Industrial Facilities",
    description: "Precise environmental controls for manufacturing processes",
    duration: "Industrial"
  }, {
    step: "04",
    title: "Healthcare & Life Sciences",
    description: "Compliance and reliability for sensitive environments",
    duration: "Certified"
  }];
  return <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background with Overlay
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Building Management Systems" className="w-full h-full object-cover opacity-85" />
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
            <Badge variant="outline" className="border-primary/50 text-primary mb-6 backdrop-blur-sm">
              IBMS Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Building Management Systems
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Centralize monitoring and control of your facility's critical infrastructure with advanced BMS. Gain unparalleled visibility, automate operations, and drive efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request System Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">Speak with Engineer</Link>
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
              Performance <span className="text-gradient-primary">Metrics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading specifications for intelligent facility management
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
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
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
          SEMICIRCULAR INFOGRAPHIC - Key Features
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent" />
        
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
              Key <span className="text-gradient-accent">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core components of an intelligent facility management platform
            </p>
          </motion.div>

          {/* Desktop Semicircular Layout */}
          <div className="hidden lg:block">
            <div className="relative max-w-5xl mx-auto">
              {/* Left Side Features */}
              <div className="absolute left-0 top-0 w-[280px] space-y-12 z-20">
                {features.slice(0, 3).map((feature, index) => {
                const Icon = feature.icon;
                return <motion.div key={feature.title} className="flex items-start gap-4" initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.1 * index
                }}>
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">0{index + 1}</span>
                        </div>
                      </div>
                      
                      <div className="pt-1">
                        <h4 className="text-base font-display font-semibold text-foreground mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>;
              })}
              </div>

              {/* Right Side Features */}
              <div className="absolute right-0 top-0 w-[280px] space-y-12 z-20">
                {features.slice(3, 6).map((feature, index) => {
                const Icon = feature.icon;
                return <motion.div key={feature.title} className="flex items-start gap-4 flex-row-reverse text-right" initial={{
                  opacity: 0,
                  x: 30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.1 * (index + 3)
                }}>
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/20">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-7 h-7 rounded-full bg-background border-2 border-accent/40 flex items-center justify-center">
                          <span className="text-xs font-bold text-accent">0{index + 4}</span>
                        </div>
                      </div>
                      
                      <div className="pt-1">
                        <h4 className="text-base font-display font-semibold text-foreground mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>;
              })}
              </div>

              {/* Center Semicircle Arc */}
              <div className="flex justify-center pt-8">
                <div className="relative w-[420px] h-[260px]">
                  <svg viewBox="0 0 420 260" className="w-full h-full mx-0">
                    <defs>
                      <linearGradient id="bmsArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                    
                    <path d="M 30 250 A 180 180 0 0 1 390 250" fill="none" stroke="hsl(var(--primary) / 0.15)" strokeWidth="60" strokeLinecap="round" />
                    <path d="M 30 250 A 180 180 0 0 1 390 250" fill="none" stroke="url(#bmsArcGradient)" strokeWidth="40" strokeLinecap="round" opacity="0.9" />
                    <path d="M 50 250 A 160 160 0 0 1 370 250" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="2" strokeLinecap="round" />
                    
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
            return <motion.div key={feature.title} className="flex items-start gap-4" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    </div>
                    {index < features.length - 1 && <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary/40 to-transparent" />}
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">{feature.metric}</div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CIRCULAR HUB INFOGRAPHIC - Integrated Systems
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
              Integrated <span className="text-gradient-primary">Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Holistic control over all critical facility systems
            </p>
          </motion.div>

          {/* Cross Layout Infographic */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                {integratedSystems.slice(0, 2).map((system, index) => {
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
                        <h4 className="text-lg font-semibold text-primary-glow">{system.name}</h4>
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
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {integratedSystems.slice(2, 4).map((system, index) => {
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
                        <h4 className="text-lg font-semibold text-secondary">{system.name}</h4>
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
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {integratedSystems.map((system, index) => {
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
          BENEFITS INFOGRAPHIC - Gradient Cards
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
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
              Core <span className="text-gradient-accent">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return <motion.div key={benefit.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="group">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          VERTICAL ROADMAP - Ideal Applications
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
              Ideal <span className="text-gradient-primary">Applications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for different facility types
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full" />
            
            {applications.map((app, index) => <motion.div key={app.step} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} className={`relative flex items-start gap-6 mb-12 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3 justify-start lg:justify-end">
                      {index % 2 !== 0 && <span className="text-3xl font-bold text-primary/30">{app.step}</span>}
                      <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                        {app.duration}
                      </Badge>
                      {index % 2 === 0 && <span className="text-3xl font-bold text-primary/30">{app.step}</span>}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
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
              Ready to Optimize Your <span className="text-gradient-primary">Facility?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take control of your building's performance with a powerful Building Management System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default BuildingManagement;