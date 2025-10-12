import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Microscope, Car, Phone, Landmark, Factory, Zap, Shield, ArrowRight } from "lucide-react";

const Clients = () => {
  const clientLogos = [
    { name: "Global Pharma Research", industry: "Pharmaceutical", logo: "GPR", color: "bg-primary" },
    { name: "Smart Cities International", industry: "Smart Cities", logo: "SCI", color: "bg-accent" },
    { name: "Automotive Tech Group", industry: "Automotive", logo: "ATG", color: "bg-primary" },
    { name: "Research Institute", industry: "Research", logo: "RI", color: "bg-accent" },
    { name: "Medical Devices Inc", industry: "Healthcare", logo: "MDI", color: "bg-primary" },
    { name: "Telecom Solutions", industry: "Telecommunications", logo: "TS", color: "bg-accent" },
    { name: "Data Systems Corp", industry: "Technology", logo: "DSC", color: "bg-primary" },
    { name: "Energy Solutions", industry: "Energy", logo: "ES", color: "bg-accent" },
    { name: "Security Systems Global", industry: "Security", logo: "SSG", color: "bg-primary" },
    { name: "Cloud Technologies", industry: "Cloud Services", logo: "CT", color: "bg-accent" },
    { name: "Research Labs", industry: "Research", logo: "RL", color: "bg-primary" },
    { name: "Financial Systems", industry: "Financial", logo: "FS", color: "bg-accent" }
  ];

  const caseStudies = [
    {
      client: "Pharmaceutical Research",
      industry: "Pharmaceutical",
      challenge: "Needed high-performance infrastructure for drug discovery research requiring massive computational power",
      solution: "Custom data center with specialized cooling and 99.99% uptime guarantee",
      results: ["300% faster processing", "40% energy cost reduction", "Zero unplanned downtime"],
      icon: Microscope,
      color: "bg-primary"
    },
    {
      client: "Smart City Infrastructure", 
      industry: "Smart Cities",
      challenge: "Required edge computing infrastructure for real-time city management and IoT sensors",
      solution: "Distributed edge data centers with predictive maintenance systems",
      results: ["50% improved response time", "Seamless scalability", "30% operational efficiency gain"],
      icon: Building2,
      color: "bg-accent"
    },
    {
      client: "Automotive Testing",
      industry: "Automotive", 
      challenge: "Ultra-low latency computing needed for autonomous vehicle testing and development",
      solution: "Edge data center with specialized processors and real-time analytics",
      results: ["<1ms latency achieved", "100% reliability", "Accelerated testing cycles"],
      icon: Car,
      color: "bg-primary"
    },
    {
      client: "Telecommunications Provider",
      industry: "Telecommunications",
      challenge: "Rapid deployment needed for infrastructure rollout across multiple locations",
      solution: "Prefab container data centers with integrated BMS and fire safety",
      results: ["6-week deployment", "Nationwide coverage", "Optimized operations"],
      icon: Phone,
      color: "bg-accent"
    }
  ];

  const industries = [
    { name: "Pharmaceutical", icon: Microscope, clients: 25, projects: 78 },
    { name: "Research Labs", icon: Building2, clients: 18, projects: 65 },
    { name: "Smart Cities", icon: Landmark, clients: 12, projects: 45 },
    { name: "Automotive", icon: Car, clients: 15, projects: 52 },
    { name: "Telecommunications", icon: Phone, clients: 22, projects: 89 },
    { name: "Manufacturing", icon: Factory, clients: 30, projects: 95 }
  ];

  const testimonials = [
    {
      text: "Grid2Chip's expertise in critical infrastructure is unmatched. They delivered exactly what we needed.",
      author: "Dr. Sarah Chen, CTO",
      company: "Research Institute"
    },
    {
      text: "The modular approach allowed us to scale seamlessly. Exceptional service and support.",
      author: "Michael Rodriguez",
      company: "Smart Cities International"
    },
    {
      text: "Outstanding reliability and performance. Grid2Chip exceeded our expectations.",
      author: "Emma Thompson, VP Engineering",
      company: "Automotive Tech Group"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Trusted by Industry Leaders
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="text-primary">Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the organizations that trust Grid2Chip for their critical infrastructure needs. 
            From pharmaceutical research to smart cities, we power innovation across industries.
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Trusted by <span className="text-primary">Leading Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 500 successful projects delivered for clients across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${client.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {client.logo}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{client.name}</h3>
                  <Badge variant="secondary" className="text-xs">{client.industry}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized infrastructure solutions tailored to the unique needs of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{industry.clients}</div>
                        <div className="text-sm text-muted-foreground">Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{industry.projects}</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real client challenges solved with innovative infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${study.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{study.client}</CardTitle>
                        <Badge variant="secondary">{study.industry}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Zap className="w-4 h-4 text-primary mr-2" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t border-primary/20 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Join Our <span className="text-primary">Client Family?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover how Grid2Chip can transform your critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;