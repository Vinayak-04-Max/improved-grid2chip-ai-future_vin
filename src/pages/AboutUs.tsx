import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, Lightbulb, Award, Shield, Cpu, Users, TrendingUp, ArrowRight, 
  CheckCircle, Globe, Building2, Zap, Clock, BarChart3, PieChart, Activity
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";

const AboutUs = () => {
  const companyStats = [
    { label: "Years of Excellence", value: "15+", icon: Clock, description: "Industry experience" },
    { label: "Projects Delivered", value: "500+", icon: Building2, description: "Worldwide" },
    { label: "Client Satisfaction", value: "98%", icon: Users, description: "Rating" },
    { label: "Uptime Guarantee", value: "99.998%", icon: Activity, description: "SLA" },
    { label: "Countries Served", value: "25+", icon: Globe, description: "Global reach" },
    { label: "Team Members", value: "200+", icon: Users, description: "Experts" }
  ];

  const performanceMetrics = [
    { metric: "On-Time Delivery", value: 99.8, color: "primary" },
    { metric: "Quality Compliance", value: 100, color: "accent" },
    { metric: "Client Retention", value: 96, color: "neon-cyan" },
    { metric: "Energy Efficiency", value: 94, color: "neon-violet" }
  ];

  const industryDistribution = [
    { sector: "IT/ITES", percentage: 35, color: "from-primary to-primary/60" },
    { sector: "Pharmaceutical", percentage: 25, color: "from-accent to-accent/60" },
    { sector: "Smart Cities", percentage: 20, color: "from-neon-cyan to-neon-cyan/60" },
    { sector: "Industrial", percentage: 20, color: "from-neon-violet to-neon-violet/60" }
  ];

  const growthData = [
    { year: "2019", revenue: 25, projects: 45 },
    { year: "2020", revenue: 40, projects: 72 },
    { year: "2021", revenue: 65, projects: 110 },
    { year: "2022", revenue: 85, projects: 156 },
    { year: "2023", revenue: 100, projects: 200 },
    { year: "2024", revenue: 120, projects: 250 }
  ];

  const certifications = [
    { title: "ATD - Accredited Tier Designer", org: "UPTIME INSTITUTE", year: "2017", icon: Award },
    { title: "ISO 9001:2015", org: "Quality Management", year: "Current", icon: Shield },
    { title: "ISO 27001:2022", org: "Information Security", year: "Current", icon: Shield },
    { title: "LEED Certified", org: "Green Building", year: "Current", icon: Lightbulb }
  ];

  const coreValues = [
    { name: "Innovation", icon: Lightbulb },
    { name: "Reliability", icon: Shield },
    { name: "Excellence", icon: Award },
    { name: "Sustainability", icon: Globe }
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
            alt="About Grid2Chip"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-6 backdrop-blur-sm">
              About Grid2Chip
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Leading Expert in Data Center Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              We specialize in the design, construction, and lifecycle management of high-performance data centers. Our integrated approach ensures maximum reliability, efficiency, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/about/leadership">Meet Our Team</Link>
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
          STATISTICAL CAROUSEL - Company Metrics
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
              Company <span className="text-gradient-primary">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself - delivering excellence across the globe
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
              {[...companyStats, ...companyStats].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={`${stat.label}-${index}`} className="relative group flex-shrink-0">
                    <div className="relative w-44 h-48 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center flex flex-col justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-xl font-bold text-foreground mb-1 leading-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          {stat.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground/60 mt-1">
                          {stat.description}
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
          PERFORMANCE BAR CHART INFOGRAPHIC
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
              Performance <span className="text-gradient-accent">Metrics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable excellence across all key performance indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Horizontal Bar Chart */}
            <motion.div 
              className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-display font-bold">Key Performance</h3>
              </div>
              
              <div className="space-y-6">
                {performanceMetrics.map((item, index) => (
                  <motion.div 
                    key={item.metric}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.metric}</span>
                      <span className="text-sm font-bold text-primary">{item.value}%</span>
                    </div>
                    <div className="relative h-4 rounded-full bg-card overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-${item.color} to-${item.color}/60`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        style={{ 
                          background: item.color === 'primary' 
                            ? 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.6))' 
                            : item.color === 'accent'
                            ? 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--accent) / 0.6))'
                            : item.color === 'neon-cyan'
                            ? 'linear-gradient(to right, hsl(var(--neon-cyan)), hsl(var(--neon-cyan) / 0.6))'
                            : 'linear-gradient(to right, hsl(var(--neon-violet)), hsl(var(--neon-violet) / 0.6))'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Circular Progress Indicators */}
            <motion.div 
              className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <PieChart className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display font-bold">Industry Distribution</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {industryDistribution.map((item, index) => (
                  <motion.div 
                    key={item.sector}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Circular Progress */}
                    <div className="relative w-24 h-24 mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-card"
                        />
                        <motion.circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={251.2}
                          initial={{ strokeDashoffset: 251.2 }}
                          whileInView={{ strokeDashoffset: 251.2 - (251.2 * item.percentage / 100) }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          className="text-primary"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--accent))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{item.percentage}%</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground text-center">{item.sector}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          GROWTH TIMELINE CHART
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
              Growth <span className="text-gradient-primary">Trajectory</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent growth driven by innovation and client success
            </p>
          </motion.div>

          {/* Area Chart Visualization */}
          <motion.div 
            className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-display font-bold">Year over Year Growth</h3>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Revenue Index</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">Projects</span>
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
                <span>250</span>
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>
              
              {/* Chart Area */}
              <div className="ml-14 h-full relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-b border-primary/10 w-full" />
                  ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-0 flex items-end justify-around gap-2 pb-8">
                  {growthData.map((data, index) => (
                    <div key={data.year} className="flex flex-col items-center gap-1 flex-1">
                      <div className="flex gap-1 items-end h-48 w-full justify-center">
                        {/* Revenue Bar */}
                        <motion.div
                          className="w-6 bg-gradient-to-t from-primary to-primary/60 rounded-t-lg"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(data.revenue / 250) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                        {/* Projects Bar */}
                        <motion.div
                          className="w-6 bg-gradient-to-t from-accent to-accent/60 rounded-t-lg"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(data.projects / 250) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground mt-2">{data.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Growth Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">380%</div>
                <div className="text-sm text-muted-foreground">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">455%</div>
                <div className="text-sm text-muted-foreground">Project Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan">92%</div>
                <div className="text-sm text-muted-foreground">Innovation Index</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-violet">5x</div>
                <div className="text-sm text-muted-foreground">Team Expansion</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CIRCULAR HUB INFOGRAPHIC - Core Values
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Our Core <span className="text-gradient-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Cross Layout Infographic */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                {coreValues.slice(0, 2).map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-center gap-4 justify-end"
                    >
                      <div className="text-right">
                        <h4 className="text-lg font-semibold text-white">{value.name}</h4>
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
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {coreValues.slice(2, 4).map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.name}
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
                        <h4 className="text-lg font-semibold text-white">{value.name}</h4>
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
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/30 border border-primary/10"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-white">{value.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CERTIFICATIONS GRID
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
              Certifications & <span className="text-gradient-primary">Standards</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized excellence in quality, security, and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-white">
                    {cert.year}
                  </div>
                  
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build Your <span className="text-gradient-primary">Next Data Center?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with our expert team to experience unparalleled reliability and innovation in data center solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
