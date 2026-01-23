import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Zap, Shield, Clock, Thermometer, Cpu, ArrowRight, CheckCircle, Truck, MapPin, Building2, Radio, Factory, Cloud, Landmark, ChevronRight, Server, Gauge, Ruler, Activity, Monitor, TrendingUp } from "lucide-react";
import solutionsImage from "@/assets/solutions-containers.jpg";
const PrefabContainer = () => {
  const features = [{
    title: "Rapid Deployment",
    description: "Fully operational in 4-6 weeks, a fraction of traditional build time.",
    icon: Clock,
    metric: "4-6 Weeks"
  }, {
    title: "Quality Controlled",
    description: "Factory-tested and certified for reliability and consistent standards.",
    icon: Shield,
    metric: "ISO Certified"
  }, {
    title: "Modular Scalability",
    description: "Seamlessly expand capacity as your operational needs grow.",
    icon: Container,
    metric: "Scalable"
  }, {
    title: "Cost Effective",
    description: "Significant reduction in total cost of ownership vs traditional builds.",
    icon: Zap,
    metric: "40% Savings"
  }, {
    title: "Reliable Performance",
    description: "Redundant power and cooling with predictive maintenance.",
    icon: Cpu,
    metric: "99.99% Uptime"
  }, {
    title: "All-Weather Ready",
    description: "Durable, weather-resistant design for any environment.",
    icon: Thermometer,
    metric: "-40°C to +50°C"
  }];
  const specifications = [{
    label: "IT Capacity",
    value: "100-500kW",
    scale: 85,
    applications: ["High-density racks", "GPU compute", "Edge AI"],
    ideal: "Enterprise workloads"
  }, {
    label: "Deployment",
    value: "4-6 Weeks",
    scale: 95,
    applications: ["Factory-built", "Pre-tested", "Plug & play"],
    ideal: "Rapid capacity needs"
  }, {
    label: "Dimensions",
    value: "40ft Container",
    scale: 70,
    applications: ["20ft/40ft options", "Stackable", "ISO standard"],
    ideal: "Any location"
  }, {
    label: "PUE Rating",
    value: "< 1.3",
    scale: 80,
    applications: ["Precision cooling", "Free cooling", "Hot/cold aisle"],
    ideal: "Cost-efficient operations"
  }];
  const useCases = [{
    title: "Edge Computing",
    description: "Deploy computing power closer to data sources for ultra-low latency.",
    icon: Radio,
    applications: ["5G base stations", "IoT processing", "Real-time analytics"]
  }, {
    title: "Disaster Recovery",
    description: "Rapidly deployable IT infrastructure for emergency response.",
    icon: Shield,
    applications: ["Emergency response", "Backup sites", "Mobile command"]
  }, {
    title: "Remote Operations",
    description: "Enterprise-grade infrastructure for challenging environments.",
    icon: MapPin,
    applications: ["Mining operations", "Oil & gas", "Military bases"]
  }, {
    title: "Rapid Expansion",
    description: "Quick capacity addition to support business growth.",
    icon: Factory,
    applications: ["Peak load handling", "Testing environments", "Projects"]
  }];
  const benefits = ["Up to 40% faster deployment than traditional builds", "Significant reduction in total cost of ownership", "Simple plug-and-play installation", "Factory-tested and certified for reliability", "Durable, weather-resistant design", "Full remote monitoring capabilities", "24/7 technical support"];
  const deploymentSteps = [{
    step: "01",
    title: "Site Assessment",
    description: "Evaluate location requirements and infrastructure needs",
    duration: "3-5 Days"
  }, {
    step: "02",
    title: "Configuration",
    description: "Customize container specs to match your workload",
    duration: "1 Week"
  }, {
    step: "03",
    title: "Manufacturing",
    description: "Factory assembly with rigorous quality testing",
    duration: "3-4 Weeks"
  }, {
    step: "04",
    title: "Delivery",
    description: "Transport and position at your designated site",
    duration: "3-5 Days"
  }, {
    step: "05",
    title: "Activation",
    description: "Connect, commission, and go live",
    duration: "2-3 Days"
  }];
  return <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background Image with Overlay
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={solutionsImage} alt="Prefabricated Data Center Container" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-accent/50 bg-accent/10 text-accent">
              Prefabricated Solutions
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
              Prefabricated Data Centers
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Rapidly deployable, factory-built modular data centers perfect for edge computing, disaster recovery, and remote operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">Schedule Demo</Link>
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
          <motion.div className="text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Container <span className="text-gradient-accent">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure in a rapidly deployable package
            </p>
          </motion.div>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden">
          <motion.div className="flex gap-6 pl-6" animate={{
          x: [0, -1800]
        }} transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}>
            {[...features, ...features].map((feature, index) => {
            const Icon = feature.icon;
            return <div key={index} className="flex-shrink-0 w-80 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 border border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                      {feature.metric}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>;
          })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          COMPARISON INFOGRAPHIC - Technical Specifications Scale Visualization
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
              Technical <span className="text-gradient-primary">Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineered to enterprise standards for mission-critical applications
            </p>
          </motion.div>

          {/* Scale Comparison Infographic */}
          <div className="space-y-6">
            {specifications.map((spec, index) => <motion.div key={spec.label} className="relative" initial={{
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
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-card/60 to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300">
                  {/* Name & Value */}
                  <div className="lg:w-48 flex-shrink-0">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {spec.label}
                    </h3>
                    <div className="text-2xl font-bold text-accent">{spec.value}</div>
                  </div>

                  {/* Scale Bar */}
                  <div className="flex-grow">
                    <div className="relative h-4 rounded-full bg-card overflow-hidden mb-4">
                      <motion.div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-primary" initial={{
                    width: 0
                  }} whileInView={{
                    width: `${spec.scale}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 1,
                    delay: index * 0.2
                  }} />
                      <div className="absolute inset-0 flex items-center justify-end pr-2">
                        <span className="font-bold drop-shadow-lg text-[g2c-green-glow] text-secondary">{spec.scale}%</span>
                      </div>
                    </div>
                    
                    {/* Applications Tags */}
                    <div className="flex flex-wrap gap-2">
                      {spec.applications.map((app, i) => <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                          {app}
                        </span>)}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="lg:w-56 flex-shrink-0 lg:text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal For</div>
                    <div className="text-sm text-foreground">{spec.ideal}</div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          DEPLOYMENT TIMELINE - Horizontal Process Infographic
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
              Deployment <span className="text-gradient-accent">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From assessment to activation in weeks, not months
            </p>
          </motion.div>

          {/* Vertical Roadmap Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Progress Line */}
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent/30 rounded-full" />
            
            {deploymentSteps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} className={`relative flex items-start gap-6 pb-12 last:pb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Node */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/30 border-4 border-background">
                    {step.step}
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-40px)] ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:ml-auto'}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <Badge variant="outline" className="mb-3 bg-accent/10 border-accent/30 text-accent text-xs">
                      {step.duration}
                    </Badge>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          USE CASES - 2x2 Grid Infographic
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.06)_0%,_transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-12 lg:mb-16" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Common <span className="text-gradient-primary">Use Cases</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Versatile solutions for a wide range of deployment scenarios
            </p>
          </motion.div>

          {/* Central Hub + Cards */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* Left Cards */}
            <div className="space-y-6">
              {useCases.slice(0, 2).map((useCase, index) => {
              const Icon = useCase.icon;
              const colors = index === 0 ? 'border-accent/40 hover:border-accent/60' : 'border-primary/40 hover:border-primary/60';
              const iconColors = index === 0 ? 'from-accent/25 to-accent/10 text-accent' : 'from-primary/25 to-primary/10 text-primary';
              return <motion.div key={index} initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    <div className={`p-5 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border ${colors} transition-all duration-300 group`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColors} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-base font-display font-bold text-foreground mb-1">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{useCase.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {useCase.applications.slice(0, 2).map((app, i) => <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/80">{app}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>;
            })}
            </div>

            {/* Central Hub */}
            <motion.div className="relative w-36 h-36 mx-auto" initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl" />
              <motion.div className="absolute inset-0 rounded-full border-[3px] border-dashed border-accent/40" animate={{
              rotate: 360
            }} transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.div className="absolute inset-3 rounded-full border-2 border-dashed border-primary/30" animate={{
              rotate: -360
            }} transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }} />
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-card to-card/90 border border-accent/30 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                    <Container className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-display font-bold text-white leading-tight bg-primary">Prefab<br />Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Right Cards */}
            <div className="space-y-6">
              {useCases.slice(2, 4).map((useCase, index) => {
              const Icon = useCase.icon;
              const colors = index === 0 ? 'border-neon-cyan/40 hover:border-neon-cyan/60' : 'border-neon-violet/40 hover:border-neon-violet/60';
              const iconColors = index === 0 ? 'from-neon-cyan/25 to-neon-cyan/10 text-neon-cyan' : 'from-neon-violet/25 to-neon-violet/10 text-neon-violet';
              return <motion.div key={index} initial={{
                opacity: 0,
                x: 30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    <div className={`p-5 rounded-2xl bg-gradient-to-br from-card/95 to-card/80 border ${colors} transition-all duration-300 group`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColors} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-base font-display font-bold text-foreground mb-1">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{useCase.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {useCase.applications.slice(0, 2).map((app, i) => <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan/80">{app}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4 max-w-md mx-auto">
            {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const styles = [{
              border: 'border-accent/40',
              iconBg: 'from-accent/25 to-accent/10',
              iconColor: 'text-accent'
            }, {
              border: 'border-primary/40',
              iconBg: 'from-primary/25 to-primary/10',
              iconColor: 'text-primary'
            }, {
              border: 'border-neon-cyan/40',
              iconBg: 'from-neon-cyan/25 to-neon-cyan/10',
              iconColor: 'text-neon-cyan'
            }, {
              border: 'border-neon-violet/40',
              iconBg: 'from-neon-violet/25 to-neon-violet/10',
              iconColor: 'text-neon-violet'
            }];
            const style = styles[index];
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-card/95 to-card/80 border ${style.border}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${style.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-bold text-foreground mb-0.5">{useCase.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          BENEFITS - Checklist Infographic
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient-accent">Prefabricated Data Centers?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Factory-built quality with speed-to-market advantages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/50 border border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">{benefit}</span>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION - Modern Gradient Design
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
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
              Ready for{" "}
              <span className="text-gradient-accent">Rapid Deployment?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get your prefabricated container data center deployed in weeks, not months. Contact us today for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/demo">View Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default PrefabContainer;