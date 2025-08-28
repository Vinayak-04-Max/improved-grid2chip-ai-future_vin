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
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                Next-Generation Infrastructure
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                Crafting <span className="text-gradient-ai">AI-Ready</span> Data Centers for the Future
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sustainable, scalable, and optimized infrastructure designed specifically for AI workloads, 
                edge computing, and next-generation applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/demo">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/solutions/ai-ready">Explore Solutions</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="AI-Ready Data Center Infrastructure"
                  className="rounded-2xl shadow-hero ai-float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-2xl ai-pulse"></div>
            </div>
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