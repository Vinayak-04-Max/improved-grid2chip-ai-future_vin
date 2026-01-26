import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Globe, Cpu, Shield, Clock, Network, ArrowRight, CheckCircle, Car, Factory, HeartPulse, Building2, TrendingUp, Server, Wifi, Lock, ChevronRight, CircleDot } from "lucide-react";
import edgeImage from "@/assets/edge-datacenter.jpg";
const EdgeDataCenter = () => {
  const edgeFeatures = [{
    title: "Ultra-Low Latency",
    description: "Sub-millisecond response times for critical real-time applications",
    icon: Zap,
    metric: "<1ms",
    color: "from-primary to-primary/60"
  }, {
    title: "Optimized Performance",
    description: "Advanced algorithms for maximum resource efficiency",
    icon: Cpu,
    metric: "99.9%",
    color: "from-accent to-accent/60"
  }, {
    title: "5G Integration",
    description: "Seamless connectivity for next-gen mobile and IoT",
    icon: Network,
    metric: "5G Ready",
    color: "from-neon-cyan to-neon-cyan/60"
  }, {
    title: "Local Processing",
    description: "On-site data analysis reducing cloud dependency",
    icon: Globe,
    metric: "Edge-First",
    color: "from-neon-violet to-neon-violet/60"
  }];
  const architectureTypes = [{
    name: "Micro Edge",
    capacity: "1-5 kW",
    footprint: "1-2 racks",
    scale: 25,
    applications: ["IoT gateways", "Smart sensors", "Local analytics"],
    ideal: "Small retail, remote offices"
  }, {
    name: "Mini Edge",
    capacity: "5-25 kW",
    footprint: "3-10 racks",
    scale: 45,
    applications: ["5G base stations", "Video analytics", "AR/VR"],
    ideal: "Branch offices, factories"
  }, {
    name: "Regional Edge",
    capacity: "25-100 kW",
    footprint: "10-40 racks",
    scale: 70,
    applications: ["CDN", "Distributed databases", "Gaming"],
    ideal: "Mid-sized cities, campuses"
  }, {
    name: "Metro Edge",
    capacity: "100-500+ kW",
    footprint: "50+ racks",
    scale: 100,
    applications: ["Cloud services", "Large-scale processing", "ML inference"],
    ideal: "Major metropolitan areas"
  }];
  const useCases = [{
    industry: "Autonomous Vehicles",
    icon: Car,
    challenge: "Real-time decision-making for self-driving cars",
    solution: "Ultra-low latency edge processing for immediate response",
    benefits: ["<1ms processing", "Local inference", "Safety-critical ops"],
    color: "primary"
  }, {
    industry: "Smart Manufacturing",
    icon: Factory,
    challenge: "Real-time quality control and predictive maintenance",
    solution: "On-premise edge processing for instant defect detection",
    benefits: ["Quality control", "Predictive alerts", "Production optimization"],
    color: "accent"
  }, {
    industry: "Healthcare",
    icon: HeartPulse,
    challenge: "Real-time patient monitoring and rapid diagnostics",
    solution: "Edge computing for immediate analysis of vital signs",
    benefits: ["Instant diagnostics", "Data privacy", "Emergency alerts"],
    color: "neon-cyan"
  }, {
    industry: "Smart Cities",
    icon: Building2,
    challenge: "Managing traffic, utilities, and public safety",
    solution: "Distributed edge network for city-wide monitoring",
    benefits: ["Traffic optimization", "Energy savings", "Public safety"],
    color: "neon-violet"
  }];
  const specifications = [{
    label: "Latency",
    value: "<1ms",
    icon: Clock,
    description: "Response time"
  }, {
    label: "Availability",
    value: "99.998%",
    icon: TrendingUp,
    description: "Uptime guarantee"
  }, {
    label: "Deployments",
    value: "1000+",
    icon: Server,
    description: "Global locations"
  }, {
    label: "Connectivity",
    value: "5G/Fiber",
    icon: Wifi,
    description: "Network options"
  }, {
    label: "Security",
    value: "Zero Trust",
    icon: Lock,
    description: "Security model"
  }, {
    label: "Scalability",
    value: "Auto",
    icon: Cpu,
    description: "Dynamic scaling"
  }];
  return <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background with Overlay
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img alt="Edge Data Center Infrastructure" className="w-full h-full object-cover opacity-95" src="/lovable-uploads/6a174ba7-bee2-4c01-bab5-406e4a84f87a.jpg" />
        </div>

        {/* Content */}
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
            <Badge variant="outline" className="mb-6 backdrop-blur-sm text-primary-foreground border-primary-foreground">
              Edge Computing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Edge Data Centers
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Bring high-performance computing closer to your data sources with ultra-low latency edge infrastructure. Perfect for IoT, 5G, autonomous systems, and real-time applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Plan Your Edge Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Accent Line */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-neon-cyan" initial={{
        scaleX: 0
      }} animate={{
        scaleX: 1
      }} transition={{
        duration: 1.5,
        delay: 0.5
      }} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          STATISTICAL INFOGRAPHIC - Key Metrics Dashboard
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
              Performance at a <span className="text-gradient-primary text-secondary">Glance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading specifications that power your edge infrastructure
            </p>
          </motion.div>

          {/* Stats Carousel - Auto Moving */}
          <div className="relative overflow-hidden">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div className="flex gap-6" animate={{
            x: [0, -1200]
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}>
              {/* Double the items for seamless loop */}
              {[...specifications, ...specifications].map((spec, index) => {
              const Icon = spec.icon;
              return <div key={`${spec.label}-${index}`} className="relative group flex-shrink-0">
                    <div className="relative w-44 h-48 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center flex flex-col justify-center">
                      {/* Glow Effect */}
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
          FEATURE INFOGRAPHIC - Visual Icons with Connecting Lines
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Edge <span className="text-gradient-accent">Advantages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revolutionary capabilities for next-generation applications
            </p>
          </motion.div>

          {/* Circular Feature Layout */}
          <div className="relative">
            {/* Central Hub */}
            

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {edgeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return <motion.div key={feature.title} className="relative" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.15
              }}>
                    {/* Connecting Line (hidden on mobile) */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
                    
                    <div className="relative h-[320px] p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-500 group flex flex-col">
                      {/* Metric Badge */}
                      <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r text-xs font-bold text-white" style={{
                    backgroundImage: `linear-gradient(to right, hsl(var(--${index % 2 === 0 ? 'primary' : 'accent'})), hsl(var(--${index % 2 === 0 ? 'primary' : 'accent'}) / 0.7))`
                  }}>
                        {feature.metric}
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex-shrink-0">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          COMPARISON INFOGRAPHIC - Architecture Scale Visualization
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
              Infrastructure <span className="text-gradient-primary">Scale</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scalable edge solutions from micro deployments to metro facilities
            </p>
          </motion.div>

          {/* Scale Comparison Infographic */}
          <div className="space-y-6">
            {architectureTypes.map((type, index) => <motion.div key={type.name} className="relative" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-card/60 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  {/* Name & Capacity */}
                  <div className="lg:w-48 flex-shrink-0">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {type.name}
                    </h3>
                    <div className="text-2xl font-bold text-primary">{type.capacity}</div>
                    <div className="text-sm text-muted-foreground">{type.footprint}</div>
                  </div>

                  {/* Scale Bar */}
                  <div className="flex-grow">
                    <div className="relative h-4 rounded-full bg-card overflow-hidden mb-4">
                      <motion.div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent" initial={{
                    width: 0
                  }} whileInView={{
                    width: `${type.scale}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 1,
                    delay: index * 0.2
                  }} />
                      <div className="absolute inset-0 flex items-center justify-end pr-2">
                        <span className="text-xs font-bold drop-shadow-lg text-slate-900">{type.scale}%</span>
                      </div>
                    </div>
                    
                    {/* Applications Tags */}
                    <div className="flex flex-wrap gap-2">
                      {type.applications.map((app, i) => <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {app}
                        </span>)}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="lg:w-56 flex-shrink-0 lg:text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal For</div>
                    <div className="text-sm text-foreground">{type.ideal}</div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROCESS INFOGRAPHIC - Use Cases Timeline Style
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
              Industry <span className="text-gradient-accent">Applications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How edge computing transforms real-world operations
            </p>
          </motion.div>

          {/* Use Cases - Timeline/Flow Style */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

            <div className="space-y-12 lg:space-y-0">
              {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 0;
              return <motion.div key={useCase.industry} className={`relative lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} initial={{
                opacity: 0,
                x: isEven ? -50 : 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.2
              }}>
                    {/* Content Card */}
                    <div className={`lg:w-[calc(50%-3rem)] ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="">
                            <Icon className={`w-7 h-7 text-${useCase.color}`} />
                          </div>
                          <div>
                            <h3 className="font-display font-semibold text-foreground text-2xl">
                              {useCase.industry}
                            </h3>
                          </div>
                        </div>

                        {/* Challenge → Solution Flow */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-destructive">!</span>
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Challenge</div>
                              <p className="text-foreground text-base">{useCase.challenge}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pl-3">
                            <ChevronRight className="w-4 h-4 text-primary" />
                            <ChevronRight className="w-4 h-4 text-primary/70" />
                            <ChevronRight className="w-4 h-4 text-primary/40" />
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Solution</div>
                              <p className="text-foreground text-base">{useCase.solution}</p>
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mt-6 pt-6 border-t border-primary/10">
                          <div className="flex flex-wrap gap-2">
                            {useCase.benefits.map((benefit, i) => <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium bg-accent/10 text-accent text-sm">
                                <CircleDot className="w-3 h-3" />
                                {benefit}
                              </span>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                  </motion.div>;
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
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build Your{" "}
              <span className="text-gradient-primary">Edge Network?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transform your applications with ultra-low latency edge infrastructure. Let's design your custom edge network today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Design Your Edge Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">See a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default EdgeDataCenter;