import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Globe, Cpu, Shield, Clock, Network, ArrowRight, CheckCircle } from "lucide-react";
import edgeImage from "@/assets/edge-datacenter.jpg";

const EdgeDataCenter = () => {
  const edgeFeatures = [
    {
      title: "<1ms Ultra-Low Latency",
      description: "Enables sub-millisecond response times for critical real-time applications.",
      icon: Zap,
      metric: "<1ms"
    },
    {
      title: "Optimized Performance & Efficiency",
      description: "Advanced algorithms continuously optimize resource allocation for maximum efficiency.",
      icon: Cpu,
      metric: "Optimized"
    },
    {
      title: "Native 5G Integration",
      description: "Designed for seamless 5G connectivity to support next-generation mobile and IoT applications.",
      icon: Network,
      metric: "5G Ready"
    },
    {
      title: "Local Data Processing",
      description: "On-site data processing and analysis reduces cloud dependency and improves response times.",
      icon: Globe,
      metric: "Local"
    }
  ];

  const architectureTypes = [
    {
      name: "Micro Edge",
      capacity: "1-5 kW",
      footprint: "1-2 racks",
      applications: ["IoT gateways", "Smart sensors", "Local analytics"],
      ideal: "Small retail, remote offices, cell sites"
    },
    {
      name: "Mini Edge",
      capacity: "5-25 kW", 
      footprint: "3-10 racks",
      applications: ["5G base stations", "Video analytics", "AR/VR"],
      ideal: "Branch offices, factories, distribution centers"
    },
    {
      name: "Regional Edge",
      capacity: "25-100 kW",
      footprint: "10-40 racks", 
      applications: ["Content delivery networks (CDN)", "Distributed databases", "Gaming"],
      ideal: "Mid-sized cities, large corporate campuses"
    },
    {
      name: "Metro Edge",
      capacity: "100-500+ kW",
      footprint: "50+ racks",
      applications: ["Cloud services", "Large-scale data processing", "ML inference"],
      ideal: "Major metropolitan areas"
    }
  ];

  const useCases = [
    {
      industry: "Autonomous Vehicles",
      challenge: "Enabling real-time decision-making for self-driving cars.",
      solution: "Ultra-low latency edge processing for immediate response to dynamic road conditions.",
      benefits: ["<1ms processing", "Local data inference", "Support for safety-critical operations"]
    },
    {
      industry: "Smart Manufacturing",
      challenge: "Implementing real-time quality control and predictive maintenance.",
      solution: "On-premise edge processing for instant defect detection and equipment monitoring.",
      benefits: ["Improved quality control", "Predictive alerts", "Enhanced production optimization"]
    },
    {
      industry: "Healthcare",
      challenge: "Facilitating real-time patient monitoring and rapid diagnostics.",
      solution: "Edge computing for the immediate analysis of vital signs and medical imaging data.",
      benefits: ["Instant diagnostics", "Enhanced data privacy", "Critical emergency alerts"]
    },
    {
      industry: "Smart Cities",
      challenge: "Managing traffic, utilities, and public safety in real-time.",
      solution: "A distributed edge network for city-wide monitoring, analysis, and control.",
      benefits: ["Optimized traffic flow", "Improved energy savings", "Enhanced public safety"]
    }
  ];

  const specifications = [
    { label: "Latency", value: "<1ms" },
    { label: "Availability", value: "99.998%" },
    { label: "Locations", value: "1000+ Deployed" },
    { label: "Acceleration", value: "GPU/TPU Support" },
    { label: "Connectivity", value: "5G / Fiber" },
    { label: "Security", value: "Zero Trust Model" },
    { label: "Monitoring", value: "24/7 Remote" },
    { label: "Scalability", value: "Auto-Scaling" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="border-primary/30 text-primary">
                Edge Computing Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-display font-bold">
                Edge Data Centers
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bring high-performance computing closer to your data sources with ultra-low latency edge infrastructure. Perfect for IoT, 5G, autonomous systems, and other demanding real-time applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Plan Your Edge Network
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/demo">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={edgeImage}
                alt="Edge Data Center Infrastructure"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Edge Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              The Advantages of <span className="text-g2c-green">Edge Data Centers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the revolutionary capabilities of edge infrastructure for next-generation applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-gradient-card border-primary/20">
                  <CardHeader>
                    <div className={`w-16 h-16 mb-4 ${bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Types */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Edge Infrastructure <span className="text-g2c-blue">Architectures</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer scalable edge solutions from micro deployments to large-scale metro facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureTypes.map((type, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">{type.name}</CardTitle>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{type.capacity}</div>
                    <div className="text-sm text-muted-foreground">{type.footprint}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Applications</h4>
                    <ul className="space-y-1">
                      {type.applications.map((app, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-primary/20">
                    <div className="text-sm">
                      <span className="text-foreground font-medium">Ideal for: </span>
                      <span className="text-muted-foreground">{type.ideal}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Performance <span className="text-g2c-green">Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="text-center bg-gradient-card border-primary/20">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                  <div className="text-sm text-muted-foreground">{spec.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Real-World <span className="text-g2c-blue">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our edge data center solutions are transforming industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{useCase.industry}</Badge>
                  <CardTitle className="text-xl font-semibold">Challenge</CardTitle>
                  <p className="text-muted-foreground">{useCase.challenge}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                    <p className="text-muted-foreground text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {useCase.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
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
            Ready to Build Your <span className="text-g2c-green">Edge Network?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your applications with ultra-low latency edge data center infrastructure. Contact us to design your custom edge network today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Design Your Edge Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">See a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdgeDataCenter;
