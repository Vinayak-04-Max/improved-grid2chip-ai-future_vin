import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Microscope, Car, Phone, Landmark, Factory, Zap, Shield, ArrowRight } from "lucide-react";

const Clients = () => {
  const clientLogos = [
    { name: "BioTech Research Inc.", industry: "Pharmaceutical", logo: "BTR", color: "from-blue-500 to-blue-600" },
    { name: "SmartCity Solutions", industry: "Smart Cities", logo: "SCS", color: "from-green-500 to-green-600" },
    { name: "AutoTech Innovations", industry: "Automotive", logo: "ATI", color: "from-red-500 to-red-600" },
    { name: "QuantumLab Research", industry: "Research", logo: "QLR", color: "from-purple-500 to-purple-600" },
    { name: "MedDevice Corp", industry: "Healthcare", logo: "MDC", color: "from-teal-500 to-teal-600" },
    { name: "TelecomEdge", industry: "Telecommunications", logo: "TEL", color: "from-orange-500 to-orange-600" },
    { name: "DataFlow Systems", industry: "Technology", logo: "DFS", color: "from-indigo-500 to-indigo-600" },
    { name: "EnergyGrid Solutions", industry: "Energy", logo: "EGS", color: "from-yellow-500 to-yellow-600" },
    { name: "SecureNet Global", industry: "Security", logo: "SNG", color: "from-gray-500 to-gray-600" },
    { name: "CloudFirst Technologies", industry: "Cloud Services", logo: "CFT", color: "from-cyan-500 to-cyan-600" },
    { name: "AI Research Institute", industry: "AI Research", logo: "ARI", color: "from-pink-500 to-pink-600" },
    { name: "FinTech Dynamics", industry: "Financial", logo: "FTD", color: "from-emerald-500 to-emerald-600" }
  ];

  const caseStudies = [
    {
      client: "BioTech Research Inc.",
      industry: "Pharmaceutical",
      challenge: "Needed AI-ready infrastructure for drug discovery algorithms requiring massive computational power",
      solution: "Custom AI data center with specialized cooling and 99.99% uptime guarantee",
      results: ["300% faster drug discovery", "40% energy cost reduction", "Zero unplanned downtime"],
      icon: Microscope,
      color: "from-blue-500 to-blue-600"
    },
    {
      client: "SmartCity Solutions", 
      industry: "Smart Cities",
      challenge: "Required edge computing infrastructure for real-time city management and IoT sensors",
      solution: "Distributed edge data centers with AI-powered predictive maintenance",
      results: ["50% improved response time", "Seamless scalability", "30% operational efficiency gain"],
      icon: Building2,
      color: "from-green-500 to-green-600"
    },
    {
      client: "AutoTech Innovations",
      industry: "Automotive", 
      challenge: "Ultra-low latency computing needed for autonomous vehicle testing and development",
      solution: "Edge data center with specialized AI processors and real-time analytics",
      results: ["<1ms latency achieved", "100% reliability", "Accelerated testing cycles"],
      icon: Car,
      color: "from-red-500 to-red-600"
    },
    {
      client: "TelecomEdge",
      industry: "Telecommunications",
      challenge: "Rapid deployment needed for 5G infrastructure rollout across multiple locations",
      solution: "Prefab container data centers with integrated BMS and fire safety",
      results: ["6-week deployment", "Nationwide coverage", "AI-powered optimization"],
      icon: Phone,
      color: "from-orange-500 to-orange-600"
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
      text: "Grid2Chip's expertise in AI infrastructure is unmatched. They delivered exactly what we needed.",
      author: "Dr. Sarah Chen, CTO",
      company: "BioTech Research Inc."
    },
    {
      text: "The modular approach allowed us to scale seamlessly. Exceptional service and support.",
      author: "Michael Rodriguez",
      company: "SmartCity Solutions"
    },
    {
      text: "Outstanding reliability and performance. Grid2Chip exceeded our expectations.",
      author: "Emma Thompson, VP Engineering",
      company: "AutoTech Innovations"
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
            Our <span className="text-gradient-ai">Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the organizations that trust Grid2Chip for their critical AI infrastructure needs. 
            From pharmaceutical research to smart cities, we power innovation across industries.
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Trusted by <span className="text-gradient-ai">Leading Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 500 successful projects delivered for clients across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${client.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
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
              Industries We <span className="text-gradient-ai">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized AI infrastructure solutions tailored to the unique needs of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-navy-deep" />
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
              Success <span className="text-gradient-ai">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real client challenges solved with innovative AI-enhanced infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-full flex items-center justify-center`}>
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
              Client <span className="text-gradient-ai">Testimonials</span>
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
            Ready to Join Our <span className="text-gradient-ai">Client Family?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover how Grid2Chip can transform your critical infrastructure with AI-enhanced solutions.
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