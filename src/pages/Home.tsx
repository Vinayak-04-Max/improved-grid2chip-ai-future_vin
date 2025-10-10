import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Building2,
  Microscope,
  Car,
  Phone,
  Landmark,
  Factory
} from "lucide-react";
import heroImage from "@/assets/hero-ai-datacenter.jpg";
import solutionsImage from "@/assets/solutions-containers.jpg";
import aiNetworkImage from "@/assets/ai-neural-network.jpg";

const Home = () => {
  const solutions = [
    {
      title: "HPC Data Centers",
      description: "High-Performance Computing at scale, built to support complex simulations, scientific research, and data-intensive workloads.",
      icon: Cpu,
      path: "/solutions/hpc",
      color: "bg-primary"
    },
    {
      title: "AI-Ready Data Centers",
      description: "Purpose-built for intelligent workloads with GPU-accelerated infrastructure optimized for AI/ML tasks like deep learning and edge inference.",
      icon: Cpu,
      path: "/solutions/ai-ready",
      color: "bg-accent"
    },
    {
      title: "Edge Data Centers",
      description: "Bringing processing power closer to users and data sources for ultra-low latency, enabling real-time insights for IoT and 5G applications.",
      icon: Zap,
      path: "/solutions/edge",
      color: "bg-primary"
    },
    {
      title: "Prefabricated Data Centers",
      description: "Factory-engineered and pre-tested modules that deliver fully integrated IT infrastructure with up to 50% faster deployment times.",
      icon: Building2,
      path: "/solutions/prefabricated",
      color: "bg-accent"
    },
    {
      title: "Container-Based Data Centers",
      description: "Portable, scalable, and rugged solutions housed in ISO containers for rapid deployment in remote, temporary, or mission-critical environments.",
      icon: Globe,
      path: "/solutions/container",
      color: "bg-primary"
    }
  ];

  const industries = [
    { name: "Pharmaceutical", icon: Microscope, desc: "Drug discovery & research" },
    { name: "Research Labs", icon: Building2, desc: "Scientific computing" },
    { name: "Smart Cities", icon: Landmark, desc: "Urban infrastructure" },
    { name: "Automotive", icon: Car, desc: "Autonomous systems" },
    { name: "Telecom", icon: Phone, desc: "5G & edge computing" },
    { name: "Manufacturing", icon: Factory, desc: "Industrial automation" }
  ];

  const testimonials = [
    {
      text: "Grid2Chip's infrastructure provides the reliability and uptime our mission-critical pharmaceutical research demands. Their support is second to none.",
      author: "Dr. Sarah Chen",
      company: "BioTech Research Inc.",
      role: "Chief Technology Officer"
    },
    {
      text: "The modular design allowed us to scale our city's computing capacity seamlessly as our needs grew. Grid2Chip delivered on time and on budget.",
      author: "Michael Rodriguez",
      company: "SmartCity Solutions",
      role: "Infrastructure Director"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary/30 rounded-full animate-ai-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Neural Network Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
            <g className="animate-ai-pulse">
              <path d="M0,200 Q200,100 400,150 T800,120" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
              <path d="M100,300 Q300,200 500,250 T900,220" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
              <path d="M0,400 Q250,300 450,350 T850,320" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
            </g>
          </svg>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-ai-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-accent/30 blur-lg animate-ai-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-md animate-ai-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated Badge */}
            <Badge variant="outline" className="border-white/30 text-white animate-fade-in hover:border-white/60 transition-colors duration-300">
              <span className="relative">
                Complete Data Center Solutions
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ai-pulse"></span>
              </span>
            </Badge>
            
            {/* Animated Title */}
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-white">
              <span className="inline-block animate-fade-in" style={{animationDelay: '0.2s'}}>
                Your Complete 
              </span>{' '}
              <span className="text-accent inline-block animate-scale-in" style={{animationDelay: '0.4s'}}>
                Data Center
              </span>{' '}
              <span className="inline-block animate-fade-in" style={{animationDelay: '0.6s'}}>
                Partner
              </span>
            </h1>
            
            {/* Typewriter Effect Text */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed animate-fade-in max-w-3xl mx-auto" style={{animationDelay: '0.8s'}}>
              From concept to commissioning and beyond, we manage every phase of your critical infrastructure lifecycle.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 animate-fade-in max-w-2xl mx-auto" style={{animationDelay: '1s'}}>
              <div className="text-center group hover-scale">
                <div className="text-3xl lg:text-4xl font-bold text-accent group-hover:text-primary transition-colors">99.99%</div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl lg:text-4xl font-bold text-accent group-hover:text-primary transition-colors">50+</div>
                <div className="text-sm text-white/80">Deployments</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl lg:text-4xl font-bold text-accent group-hover:text-primary transition-colors">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
            
            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
                <Link to="/solutions">
                  <span className="relative z-10">Explore Our Solutions</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" className="group hover-scale bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/contact">
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ai-pulse"></div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Advanced <span className="text-g2c-blue">Data Center Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From high-performance computing clusters to agile containerized units, we build the resilient infrastructure that powers tomorrow's innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="group bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 g2c-hover hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-xl ${solution.color} p-4 mb-4 ai-pulse`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{solution.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10" asChild>
                      <Link to={solution.path}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrated Facility & Management Services */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Integrated Facility & <span className="text-g2c-green">Management Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond the data center, we provide comprehensive building management and support services to ensure your entire critical facility operates at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">Building Management Systems (BMS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Centralized control and automation for your facility's mechanical and electrical equipment.</p>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link to="/services/bms">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">ELV & Fire Safety Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Integrated Extra-Low Voltage systems and robust fire detection and suppression for maximum safety and security.</p>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link to="/services/elv">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">Operations & Maintenance (O&M)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Proactive AMC services for critical power, cooling, and facility infrastructure to guarantee uptime and reliability.</p>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link to="/services/ims">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">Control Panel Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Custom design and implementation of control panels for seamless system integration.</p>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link to="/services/control-panels">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/solutions">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Industries We <span className="text-g2c-green">Empower</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading organizations across diverse sectors for mission-critical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
                    <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/industries">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Trusted by <span className="text-g2c-blue">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-primary/20">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary"></div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Build Your <span className="text-g2c-blue">Next-Generation Infrastructure?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how Grid2Chip can design, deploy, and manage the perfect critical infrastructure for your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;