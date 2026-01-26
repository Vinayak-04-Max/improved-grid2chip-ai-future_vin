import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Lightbulb, Award, Shield, Cpu, Users, TrendingUp, ArrowRight, CheckCircle, Globe, Building2, Zap, Clock, BarChart3, PieChart, Activity, Network, Building, Star, Trophy, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";
import seetharam from "@/assets/seetharam.jpg";
import surya from "@/assets/surya.jpg";
const AboutUs = () => {
  const companyStats = [{
    label: "Years of Excellence",
    value: "15+",
    icon: Clock,
    description: "Industry experience"
  }, {
    label: "Projects Delivered",
    value: "500+",
    icon: Building2,
    description: "Worldwide"
  }, {
    label: "Client Satisfaction",
    value: "98%",
    icon: Users,
    description: "Rating"
  }, {
    label: "Uptime Guarantee",
    value: "99.998%",
    icon: Activity,
    description: "SLA"
  }, {
    label: "Countries Served",
    value: "25+",
    icon: Globe,
    description: "Global reach"
  }, {
    label: "Team Members",
    value: "200+",
    icon: Users,
    description: "Experts"
  }];
  const performanceMetrics = [{
    metric: "On-Time Delivery",
    value: 99.8,
    color: "primary"
  }, {
    metric: "Quality Compliance",
    value: 100,
    color: "accent"
  }, {
    metric: "Client Retention",
    value: 96,
    color: "neon-cyan"
  }, {
    metric: "Energy Efficiency",
    value: 94,
    color: "neon-violet"
  }];
  const industryDistribution = [{
    sector: "IT/ITES",
    percentage: 35,
    color: "from-primary to-primary/60"
  }, {
    sector: "Pharmaceutical",
    percentage: 25,
    color: "from-accent to-accent/60"
  }, {
    sector: "Smart Cities",
    percentage: 20,
    color: "from-neon-cyan to-neon-cyan/60"
  }, {
    sector: "Industrial",
    percentage: 20,
    color: "from-neon-violet to-neon-violet/60"
  }];
  const growthData = [{
    year: "2019",
    revenue: 25,
    projects: 45
  }, {
    year: "2020",
    revenue: 40,
    projects: 72
  }, {
    year: "2021",
    revenue: 65,
    projects: 110
  }, {
    year: "2022",
    revenue: 85,
    projects: 156
  }, {
    year: "2023",
    revenue: 100,
    projects: 200
  }, {
    year: "2024",
    revenue: 120,
    projects: 250
  }];
  const certifications = [{
    title: "ATD - Accredited Tier Designer",
    org: "UPTIME INSTITUTE",
    year: "2017",
    icon: Award
  }, {
    title: "ISO 9001:2015",
    org: "Quality Management",
    year: "Current",
    icon: Shield
  }, {
    title: "ISO 27001:2022",
    org: "Information Security",
    year: "Current",
    icon: Shield
  }, {
    title: "LEED Certified",
    org: "Green Building",
    year: "Current",
    icon: Lightbulb
  }];
  const companyValues = [{
    title: "Innovation Excellence",
    description: "Continuously pushing the boundaries of critical infrastructure technology",
    icon: Lightbulb
  }, {
    title: "Client Success",
    description: "Committed to delivering exceptional results that exceed expectations",
    icon: Users
  }, {
    title: "Reliability",
    description: "Building dependable solutions with uncompromising quality standards",
    icon: Shield
  }, {
    title: "Strategic Vision",
    description: "Fostering a culture of strategic planning and long-term excellence",
    icon: Target
  }];

  // Leadership Team Data
  const leaders = [{
    name: "Seetharam Mannava",
    role: "Founder & CEO",
    experience: "24+ years",
    image: seetharam,
    bio: "With over 24+ years of cross-functional experience, Seetharam is the visionary founder and CEO of Grid2Chip. Specializing in designing and executing critical infrastructure services for data centers.",
    expertise: ["Critical Infrastructure Services", "Data Center Design", "Strategic Planning", "Turnkey Solutions"],
    achievements: ["Founder of Grid2Chip", "24+ years industry experience", "Critical facility engagement expert"]
  }, {
    name: "M V Surya Ganesh",
    role: "Head of Research & Development",
    experience: "26+ years",
    image: surya,
    bio: "With over 26+ years of distinguished experience in designing and executing mechanical and electrical requirements for Indian Aviation projects, Surya Ganesh leads our Research & Development division with visionary expertise.",
    expertise: ["Mechanical & Electrical Design", "Embedded Computing Systems", "Critical Infrastructure", "Aviation Projects"],
    achievements: ["26+ years industry experience", "Pioneered embedded computing systems", "Aviation project specialist"]
  }];

  // Technology Partners Data
  const partners = [{
    name: "Schneider Electric",
    logo: "SE",
    description: "A global leader in energy management and automation solutions for critical infrastructure.",
    specialties: ["Power Management", "Cooling Solutions", "Automation", "Energy Efficiency"],
    color: "bg-primary",
    icon: Zap
  }, {
    name: "Legrand",
    logo: "LG",
    description: "An innovator in electrical and digital building infrastructures.",
    specialties: ["Digital Infrastructure", "Cable Management", "Power Distribution", "Smart Buildings"],
    color: "bg-accent",
    icon: Building
  }, {
    name: "Siemens",
    logo: "SI",
    description: "A pioneer in advanced building technologies and automation for intelligent facilities.",
    specialties: ["Building Automation", "Fire Safety", "Security Systems", "Integration"],
    color: "bg-primary",
    icon: Cpu
  }, {
    name: "CommScope",
    logo: "CS",
    description: "A provider of next-generation network infrastructure solutions.",
    specialties: ["Network Infrastructure", "Fiber Solutions", "Wireless Systems", "Connectivity"],
    color: "bg-accent",
    icon: Network
  }];

  // Testimonials Data
  const testimonials = [{
    text: "Grid2Chip's infrastructure accelerated our drug discovery pipeline by 300%. Their predictive maintenance capabilities have eliminated unexpected downtime completely.",
    author: "Dr. Sarah Chen",
    company: "Pharmaceutical Research",
    role: "Chief Technology Officer",
    rating: 5,
    industry: "Pharmaceutical"
  }, {
    text: "The modular design allowed us to scale our computing capacity seamlessly as our needs grew. System optimization reduced our energy costs by 40%.",
    author: "Michael Rodriguez",
    company: "Smart City Solutions",
    role: "Infrastructure Director",
    rating: 5,
    industry: "Smart Cities"
  }, {
    text: "Their edge data center solutions gave us the ultra-low latency we needed for our autonomous vehicle testing. Exceptional reliability and support.",
    author: "Emma Thompson",
    company: "AutoTech Innovations",
    role: "VP of Engineering",
    rating: 5,
    industry: "Automotive"
  }, {
    text: "Grid2Chip delivered our custom data center 30% faster than projected. The intelligent cooling system maintains perfect temperatures automatically.",
    author: "David Park",
    company: "Research Laboratory",
    role: "Facilities Manager",
    rating: 5,
    industry: "Research"
  }];

  // Awards Data
  const awards = [{
    title: "Data Center Excellence Award 2024",
    organization: "Data Center Institute",
    category: "Innovation",
    year: "2024"
  }, {
    title: "Green Technology Leader",
    organization: "Sustainable Tech Council",
    category: "Energy Efficiency",
    year: "2024"
  }, {
    title: "Critical Infrastructure Provider of the Year",
    organization: "Infrastructure Awards",
    category: "Innovation",
    year: "2023"
  }, {
    title: "Best Technology Integration",
    organization: "TechInnovate Awards",
    category: "Excellence",
    year: "2023"
  }];
  return <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Full Width Background with Overlay
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About Grid2Chip" className="w-full h-full object-cover opacity-85" />
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
            <Badge variant="outline" className="mb-6 backdrop-blur-sm text-primary-foreground border-primary-foreground">
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
                <Link to="/about/clients">Our Clients</Link>
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
          STATISTICAL CAROUSEL - Company Metrics
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
            
            <motion.div className="flex gap-6" animate={{
            x: [0, -1200]
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}>
              {[...companyStats, ...companyStats].map((stat, index) => {
              const Icon = stat.icon;
              return <div key={`${stat.label}-${index}`} className="relative group flex-shrink-0">
                    <div className="relative w-44 h-48 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center flex flex-col justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-xl font-bold text-foreground mb-1 leading-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs font-medium uppercase tracking-wide text-primary">
                          {stat.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground/60 mt-1">
                          {stat.description}
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
          LEADERSHIP TEAM SECTION
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
              Our <span className="text-gradient-primary">Leadership Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation in critical facility infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {leaders.map((leader, index) => {
            const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
            const nameParts = leader.name.split(' ');
            const initials = nameParts.length >= 2 ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}` : nameParts[0].substring(0, 2);
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow group h-full flex flex-col">
                    <CardHeader className="text-center flex-shrink-0">
                      <div className={`w-32 h-32 mx-auto mb-6 rounded-full ${bgColor} p-1`}>
                        <div className="w-full h-full rounded-full bg-card overflow-hidden">
                        <img
                        src={leader.image}
                        className="w-full h-full object-cover rounded-full"
                        />
                        </div>
                      </div>

                      <CardTitle className="text-xl font-semibold">{leader.name}</CardTitle>
                      <p className="text-primary font-medium">{leader.role}</p>
                      <Badge variant="secondary" className="w-fit mx-auto">{leader.experience}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-grow flex flex-col">
                      <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, i) => <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>)}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {leader.achievements.map((achievement, i) => <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>)}
                        </ul>
                      </div>

                      <div className="flex gap-2 pt-4 border-t border-primary/20 mt-auto">
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PERFORMANCE BAR CHART INFOGRAPHIC
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
              Performance <span className="text-gradient-accent">Metrics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable excellence across all key performance indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Horizontal Bar Chart */}
            <motion.div className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-display font-bold">Key Performance</h3>
              </div>
              
              <div className="space-y-6">
                {performanceMetrics.map((item, index) => <motion.div key={item.metric} initial={{
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
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.metric}</span>
                      <span className="text-sm font-bold text-primary">{item.value}%</span>
                    </div>
                    <div className="relative h-4 rounded-full bg-card overflow-hidden">
                      <motion.div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-${item.color} to-${item.color}/60`} initial={{
                    width: 0
                  }} whileInView={{
                    width: `${item.value}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 1,
                    delay: index * 0.2
                  }} style={{
                    background: item.color === 'primary' ? 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.6))' : item.color === 'accent' ? 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--accent) / 0.6))' : item.color === 'neon-cyan' ? 'linear-gradient(to right, hsl(var(--neon-cyan)), hsl(var(--neon-cyan) / 0.6))' : 'linear-gradient(to right, hsl(var(--neon-violet)), hsl(var(--neon-violet) / 0.6))'
                  }} />
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Circular Progress Indicators */}
            <motion.div className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center gap-3 mb-8">
                <PieChart className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display font-bold">Industry Distribution</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {industryDistribution.map((item, index) => <motion.div key={item.sector} className="flex flex-col items-center" initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.15
              }}>
                    {/* Circular Progress */}
                    <div className="relative w-24 h-24 mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-card" />
                        <motion.circle cx="48" cy="48" r="40" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray={251.2} initial={{
                      strokeDashoffset: 251.2
                    }} whileInView={{
                      strokeDashoffset: 251.2 - 251.2 * item.percentage / 100
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 1.5,
                      delay: index * 0.2
                    }} className="text-primary" />
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
                  </motion.div>)}
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
              Growth <span className="text-gradient-primary">Trajectory</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent growth driven by innovation and client success
            </p>
          </motion.div>

          {/* Area Chart Visualization */}
          <motion.div className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
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
                  {[...Array(6)].map((_, i) => <div key={i} className="border-b border-primary/10 w-full" />)}
                </div>

                {/* Bars */}
                <div className="absolute inset-0 flex items-end justify-around gap-2 pb-8">
                  {growthData.map((data, index) => <div key={data.year} className="flex flex-col items-center gap-1 flex-1">
                      <div className="flex gap-1 items-end h-48 w-full justify-center">
                        {/* Revenue Bar */}
                        <motion.div className="w-6 bg-gradient-to-t from-primary to-primary/60 rounded-t-lg" initial={{
                      height: 0
                    }} whileInView={{
                      height: `${data.revenue / 250 * 100}%`
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.8,
                      delay: index * 0.1
                    }} />
                        {/* Projects Bar */}
                        <motion.div className="w-6 bg-gradient-to-t from-accent to-accent/60 rounded-t-lg" initial={{
                      height: 0
                    }} whileInView={{
                      height: `${data.projects / 250 * 100}%`
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.1
                    }} />
                      </div>
                      <span className="text-xs text-muted-foreground mt-2">{data.year}</span>
                    </div>)}
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
          TECHNOLOGY PARTNERS SECTION
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
              Our <span className="text-gradient-accent">Technology Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with global leaders in technology to provide comprehensive infrastructure solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => {
            const Icon = partner.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <Card className="bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 rounded-xl ${partner.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {partner.logo}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                              {partner.name}
                            </CardTitle>
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.specialties.map(specialty => <Badge key={specialty} variant="outline" className="border-primary/30 text-primary">
                              {specialty}
                            </Badge>)}
                        </div>
                      </div>
                      
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10" asChild>
                        <Link to="/contact">
                          Learn More About Partnership
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CORE VALUES SECTION (from Leadership page)
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-card">
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
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-g2c-green">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our leadership and drive our success in delivering 
              world-class infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
            const Icon = value.icon;
            const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <Card className="text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className={`w-16 h-16 mx-auto mb-4 ${bgColor} rounded-full flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CERTIFICATIONS GRID
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
              Certifications & <span className="text-gradient-primary">Standards</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized excellence in quality, security, and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return <motion.div key={cert.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="relative p-6 rounded-2xl bg-gradient-to-br from-card/60 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-white">
                    {cert.year}
                  </div>
                  
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-primary">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          WHAT OUR CLIENTS SAY - AUTO-MOVING CAROUSEL
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
              What Our <span className="text-gradient-accent">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from organizations that trust Grid2Chip for their critical infrastructure needs
            </p>
          </motion.div>

          {/* Auto-moving Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div className="flex gap-6" animate={{
            x: [0, -1600]
          }} transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}>
              {[...testimonials, ...testimonials].map((testimonial, index) => <div key={`testimonial-${index}`} className="flex-shrink-0 w-[400px]">
                  <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow h-full">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-current" />)}
                      </div>
                      <Badge variant="secondary" className="w-fit">{testimonial.industry}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground italic line-clamp-4">"{testimonial.text}"</p>
                      <div className="border-t border-primary/20 pt-4">
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-primary">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          AWARDS & RECOGNITION - AUTO-MOVING CAROUSEL
       ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-card">
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
              Awards & <span className="text-gradient-primary">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our innovation in critical facility infrastructure
            </p>
          </motion.div>

          {/* Auto-moving Awards Carousel */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
            
            <motion.div className="flex gap-6" animate={{
            x: [0, -1200]
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}>
              {[...awards, ...awards].map((award, index) => {
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return <div key={`award-${index}`} className="flex-shrink-0 w-[280px]">
                    <Card className="text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className={`w-16 h-16 mx-auto mb-4 ${bgColor} rounded-full flex items-center justify-center`}>
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-lg font-semibold">{award.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-2">{award.organization}</p>
                        <Badge variant="outline" className="mb-2">{award.category}</Badge>
                        <p className="text-sm text-primary font-semibold">{award.year}</p>
                      </CardContent>
                    </Card>
                  </div>;
            })}
            </motion.div>
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
    </div>;
};
export default AboutUs;
