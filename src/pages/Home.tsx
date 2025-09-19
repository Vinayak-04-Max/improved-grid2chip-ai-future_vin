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
      title: "AI-Ready Data Centers",
      description: "Purpose-built for machine learning and AI workloads",
      icon: Cpu,
      path: "/solutions/ai-ready",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Edge Data Centers",
      description: "Ultra-low latency computing at the network edge",
      icon: Zap,
      path: "/solutions/edge",
      color: "from-primary to-accent"
    },
    {
      title: "HPC Solutions",
      description: "High-performance computing for research and analysis",
      icon: Shield,
      path: "/solutions/hpc",
      color: "from-accent to-primary"
    },
    {
      title: "Container Solutions",
      description: "Rapid deployment modular data center infrastructure",
      icon: Globe,
      path: "/solutions/container",
      color: "from-neon-cyan to-neon-blue"
    }
  ];

  const features = [
    "AI-optimized cooling systems",
    "Modular scalable architecture",
    "99.99% uptime guarantee",
    "Sustainable green technology"
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
      text: "Grid2Chip's AI-ready infrastructure accelerated our drug discovery pipeline by 300%.",
      author: "Dr. Sarah Chen",
      company: "BioTech Research Inc.",
      role: "Chief Technology Officer"
    },
    {
      text: "The modular design allowed us to scale our computing capacity seamlessly as our needs grew.",
      author: "Michael Rodriguez",
      company: "SmartCity Solutions",
      role: "Infrastructure Director"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
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
                <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.1}} />
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
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-ai opacity-20 blur-xl animate-ai-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-accent to-primary opacity-30 blur-lg animate-ai-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-md animate-glow-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              {/* Animated Badge */}
              <Badge variant="outline" className="w-fit border-primary/30 text-primary animate-fade-in hover:border-primary/60 transition-colors duration-300">
                <span className="relative">
                  Next-Generation Infrastructure
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ai-pulse"></span>
                </span>
              </Badge>
              
              {/* Animated Title */}
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                <span className="inline-block animate-fade-in" style={{animationDelay: '0.2s'}}>
                  AI-Enhanced 
                </span>{' '}
                <span className="text-gradient-ai inline-block animate-scale-in" style={{animationDelay: '0.4s'}}>
                  Critical Facility
                </span>{' '}
                <span className="inline-block animate-fade-in" style={{animationDelay: '0.6s'}}>
                  Infrastructure Solutions
                </span>
              </h1>
              
              {/* Typewriter Effect Text */}
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '0.8s'}}>
                Leading player in the critical facility industry with cutting-edge AI-ready infrastructure solutions. 
                We're not just connecting systems; we're shaping the future of integrated AI-powered solutions.
              </p>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 animate-fade-in" style={{animationDelay: '1s'}}>
                <div className="text-center group hover-scale">
                  <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">99.99%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center group hover-scale">
                  <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">50+</div>
                  <div className="text-sm text-muted-foreground">Deployments</div>
                </div>
                <div className="text-center group hover-scale">
                  <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
              
              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '1.2s'}}>
                <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
                  <Link to="/demo">
                    <span className="relative z-10">Experience AI Infrastructure</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </Link>
                </Button>
                <Button variant="glass" size="lg" className="group hover-scale" asChild>
                  <Link to="/data-center/ai-ready">
                    <span>Book AI Demo</span>
                    <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-ai-pulse"></div>
                  </Link>
                </Button>
              </div>

              {/* Enhanced Features with Animation */}
              <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in" style={{animationDelay: '1.4s'}}>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 group hover-scale">
                    <CheckCircle className="h-5 w-5 text-primary group-hover:text-accent transition-colors animate-ai-pulse" style={{animationDelay: `${index * 0.2}s`}} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.5s'}}>
              {/* Multiple Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-ai-float blur-sm" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-accent/30 rounded-full animate-ai-float blur-sm" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-gradient-ai opacity-20 rounded-full animate-glow-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Main Image with Enhanced Effects */}
              <div className="relative z-10 group">
                <img
                  src={heroImage}
                  alt="AI-Ready Data Center Infrastructure"
                  className="rounded-2xl shadow-hero ai-float group-hover:scale-105 transition-transform duration-700"
                />
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-ai opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-2xl ai-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl animate-glow-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Tech Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-primary/30 rounded-lg bg-card/50 backdrop-blur-sm flex items-center justify-center animate-ai-pulse">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-accent/30 rounded-lg bg-card/50 backdrop-blur-sm flex items-center justify-center animate-ai-pulse" style={{animationDelay: '0.5s'}}>
                <Zap className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-ai-pulse"></div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Advanced <span className="text-gradient-ai">Infrastructure Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-optimized data centers to edge computing solutions, we build the infrastructure 
              that powers tomorrow's innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} p-4 mb-4 ai-pulse`}>
                      <Icon className="w-full h-full text-navy-deep" />
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

      {/* AI Technology Showcase */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-display font-bold">
                Powered by <span className="text-gradient-ai">Artificial Intelligence</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our infrastructure leverages AI for predictive maintenance, optimal resource allocation, 
                and autonomous operations, ensuring maximum efficiency and minimal downtime.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-ai mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Predictive Analytics</h3>
                    <p className="text-muted-foreground">AI-driven insights prevent issues before they occur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-ai mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dynamic Scaling</h3>
                    <p className="text-muted-foreground">Automatically adjust capacity based on demand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-ai mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Intelligent Cooling</h3>
                    <p className="text-muted-foreground">AI-optimized thermal management systems</p>
                  </div>
                </div>
              </div>

              <Button variant="ai" size="lg" asChild>
                <Link to="/solutions/ai-ready">
                  Explore AI Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={aiNetworkImage}
                alt="AI Neural Network Technology"
                className="rounded-2xl ai-float"
              />
              <div className="absolute inset-0 bg-gradient-ai opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Industries We <span className="text-gradient-ai">Empower</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading organizations across diverse sectors for mission-critical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
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
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Trusted by <span className="text-gradient-ai">Industry Leaders</span>
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
                    <div className="w-12 h-12 rounded-full bg-gradient-ai"></div>
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
            Ready to Build the <span className="text-gradient-ai">Future?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how Grid2Chip can design and deploy the perfect AI-ready infrastructure for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/demo">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;