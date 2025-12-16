import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Cpu, Zap, Server, Database, Network, Shield, ArrowRight, CheckCircle,
  Brain, Atom, TrendingUp, Building2, FlaskConical, Landmark, ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";

const HPC = () => {
  const features = [
    {
      title: "Massively Parallel Processing",
      description: "Purpose-built architecture supporting thousands of processor cores for complex simulations.",
      icon: Cpu,
      metric: "10,000+ Cores"
    },
    {
      title: "High-Density Infrastructure",
      description: "Optimized for demanding computational workloads with advanced cooling.",
      icon: Server,
      metric: "100+ kW/rack"
    },
    {
      title: "Low-Latency Interconnect",
      description: "Ultra-fast InfiniBand and high-speed Ethernet for rapid data exchange.",
      icon: Network,
      metric: "400 Gbps+"
    },
    {
      title: "High-Performance Storage",
      description: "Parallel file systems and NVMe storage for massive dataset processing.",
      icon: Database,
      metric: "Petabyte Scale"
    },
    {
      title: "Advanced Cooling Solutions",
      description: "Liquid cooling and precision air handling for high-density environments.",
      icon: Zap,
      metric: "Liquid Cooled"
    },
    {
      title: "99.99% Uptime SLA",
      description: "Redundant systems and predictive maintenance ensure maximum availability.",
      icon: Shield,
      metric: "Guaranteed"
    }
  ];

  const specifications = [
    { label: "Compute Density", value: "100 kW", unit: "per rack" },
    { label: "Networking", value: "400", unit: "Gbps" },
    { label: "Storage", value: "PB", unit: "Scale" },
    { label: "PUE", value: "< 1.2", unit: "Efficiency" },
    { label: "Redundancy", value: "2N", unit: "Power" },
    { label: "Uptime", value: "99.99%", unit: "SLA" }
  ];

  const useCases = [
    {
      title: "Scientific Research",
      description: "Accelerate discovery in genomics, drug discovery, and materials science.",
      icon: FlaskConical,
      applications: ["Molecular dynamics", "Climate modeling", "Quantum chemistry"]
    },
    {
      title: "Financial Services",
      description: "Power complex risk analysis, fraud detection, and algorithmic trading.",
      icon: TrendingUp,
      applications: ["Monte Carlo simulations", "Real-time risk", "Trading algorithms"]
    },
    {
      title: "Engineering & Design",
      description: "Run computationally intensive simulations for aerospace and automotive.",
      icon: Building2,
      applications: ["CFD analysis", "Structural simulations", "Crash testing"]
    },
    {
      title: "Research Institutions",
      description: "Support academic and government research with cutting-edge resources.",
      icon: Landmark,
      applications: ["Large-scale data analysis", "AI/ML training", "Astrophysics"]
    }
  ];

  const processSteps = [
    { step: "01", title: "Assessment", description: "Analyze your computational requirements and workloads", duration: "1 Week" },
    { step: "02", title: "Architecture", description: "Design optimal HPC infrastructure for your needs", duration: "2 Weeks" },
    { step: "03", title: "Procurement", description: "Source and configure specialized HPC hardware", duration: "4 Weeks" },
    { step: "04", title: "Deployment", description: "Install, integrate, and optimize your HPC environment", duration: "3 Weeks" },
    { step: "05", title: "Operations", description: "Ongoing management, monitoring, and support", duration: "Continuous" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background Image with Overlay
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="HPC Data Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 border-primary/50 bg-primary/10 text-primary">
              High-Performance Computing
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
              HPC Data Centers
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Purpose-built infrastructure for complex simulations, scientific research, and data-intensive workloads at unprecedented scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">View HPC Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CAROUSEL - Auto-Moving Feature Showcase
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 border-y border-primary/10 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              HPC <span className="text-gradient-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade computing infrastructure built for the most demanding workloads
            </p>
          </motion.div>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 pl-6"
            animate={{ x: [0, -1800] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...features, ...features].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {feature.metric}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          STATISTICS INFOGRAPHIC - Key Metrics
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.06)_0%,_transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Technical <span className="text-gradient-accent">Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading performance metrics for high-performance computing
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-1">
                    {spec.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {spec.unit}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {spec.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROCESS TIMELINE - Vertical Roadmap Infographic
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Implementation <span className="text-gradient-primary">Roadmap</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology for deploying world-class HPC infrastructure
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden lg:block" />

            <div className="space-y-8 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:mb-12`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-[45%] ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                          {step.duration}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/30">
                    {step.step}
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden absolute -left-3 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    {step.step}
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          USE CASES - Cross Layout Infographic
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--accent)/0.06)_0%,_transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Ideal <span className="text-gradient-accent">Use Cases</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powering breakthrough research and innovation across industries
            </p>
          </motion.div>

          {/* Central Hub + Cards */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* Left Cards */}
            <div className="space-y-6">
              {useCases.slice(0, 2).map((useCase, index) => {
                const Icon = useCase.icon;
                const colors = index === 0 ? 'border-primary/40 hover:border-primary/60' : 'border-neon-cyan/40 hover:border-neon-cyan/60';
                const iconColors = index === 0 ? 'from-primary/25 to-primary/10 text-primary' : 'from-neon-cyan/25 to-neon-cyan/10 text-neon-cyan';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-5 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border ${colors} transition-all duration-300 group`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColors} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-base font-display font-bold text-white mb-1">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{useCase.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {useCase.applications.slice(0, 2).map((app, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80">{app}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Central Hub */}
            <motion.div 
              className="relative w-36 h-36 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              <motion.div 
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-3 rounded-full border-2 border-dashed border-accent/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-card to-card/90 border border-primary/30 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-display font-bold text-white leading-tight">HPC<br/>Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Right Cards */}
            <div className="space-y-6">
              {useCases.slice(2, 4).map((useCase, index) => {
                const Icon = useCase.icon;
                const colors = index === 0 ? 'border-accent/40 hover:border-accent/60' : 'border-neon-violet/40 hover:border-neon-violet/60';
                const iconColors = index === 0 ? 'from-accent/25 to-accent/10 text-accent' : 'from-neon-violet/25 to-neon-violet/10 text-neon-violet';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-5 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border ${colors} transition-all duration-300 group`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColors} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-base font-display font-bold text-white mb-1">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{useCase.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {useCase.applications.slice(0, 2).map((app, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/80">{app}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4 max-w-md mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const styles = [
                { border: 'border-primary/40', iconBg: 'from-primary/25 to-primary/10', iconColor: 'text-primary' },
                { border: 'border-neon-cyan/40', iconBg: 'from-neon-cyan/25 to-neon-cyan/10', iconColor: 'text-neon-cyan' },
                { border: 'border-accent/40', iconBg: 'from-accent/25 to-accent/10', iconColor: 'text-accent' },
                { border: 'border-neon-violet/40', iconBg: 'from-neon-violet/25 to-neon-violet/10', iconColor: 'text-neon-violet' }
              ];
              const style = styles[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-card/95 to-card/80 border ${style.border}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${style.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-bold text-white mb-0.5">{useCase.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
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
              <span className="text-gradient-primary">HPC Infrastructure?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Partner with us to deploy world-class high-performance computing tailored to your research and computational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
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

export default HPC;