import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, Zap, Server, Database, Network, Shield, ArrowRight, CheckCircle } from "lucide-react";

const HPC = () => {
  const features = [
    {
      title: "Massively Parallel Processing",
      description: "Purpose-built architecture supporting thousands of processor cores for complex simulations and research.",
      icon: Cpu,
      metric: "10,000+ Cores"
    },
    {
      title: "High-Density Infrastructure",
      description: "Optimized for demanding computational workloads with advanced cooling and power distribution.",
      icon: Server,
      metric: "100+ kW/rack"
    },
    {
      title: "Low-Latency Interconnect",
      description: "Ultra-fast InfiniBand and high-speed Ethernet for rapid data exchange between compute nodes.",
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
      description: "Liquid cooling and precision air handling for high-density compute environments.",
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
    { label: "Compute Density", value: "Up to 100 kW per rack" },
    { label: "Networking", value: "400 Gbps InfiniBand/Ethernet" },
    { label: "Storage", value: "Parallel file systems, NVMe" },
    { label: "Cooling", value: "Direct liquid or rear-door cooling" },
    { label: "Power", value: "2N redundant distribution" },
    { label: "PUE", value: "< 1.2 (optimized efficiency)" }
  ];

  const useCases = [
    {
      title: "Scientific Research",
      description: "Accelerate discovery in fields like genomics, drug discovery, and materials science.",
      applications: ["Molecular dynamics simulations", "Climate modeling", "Quantum chemistry"]
    },
    {
      title: "Financial Services",
      description: "Power complex risk analysis, fraud detection, and algorithmic trading.",
      applications: ["Monte Carlo simulations", "Real-time risk assessment", "Trading algorithms"]
    },
    {
      title: "Engineering & Design",
      description: "Run computationally intensive simulations for aerospace, automotive, and energy sectors.",
      applications: ["CFD analysis", "Structural simulations", "Crash testing"]
    },
    {
      title: "Research Institutions",
      description: "Support academic and government research with cutting-edge computational resources.",
      applications: ["Large-scale data analysis", "AI/ML model training", "Astrophysics simulations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            High-Performance Computing
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-g2c-blue">HPC</span> Data Centers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            High-Performance Computing at scale, built to support complex simulations, scientific research, and data-intensive workloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/demo">View HPC Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key <span className="text-g2c-green">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built infrastructure optimized for the most demanding computational workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-primary font-bold">{feature.metric}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Technical <span className="text-g2c-blue">Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="text-center bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                  <div className="text-2xl font-bold text-primary">{spec.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ideal <span className="text-g2c-green">Use Cases</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powering breakthrough research and innovation across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">{useCase.title}</CardTitle>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
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
            Ready to Build Your <span className="text-g2c-green">HPC Infrastructure?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Partner with us to deploy world-class high-performance computing infrastructure tailored to your research needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HPC;
