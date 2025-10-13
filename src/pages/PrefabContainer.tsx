import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container, Zap, Shield, Clock, Thermometer, Cpu, ArrowRight, CheckCircle } from "lucide-react";
import solutionsImage from "@/assets/solutions-containers.jpg";

const PrefabContainer = () => {
  const features = [
    {
      title: "Rapid Deployment",
      description: "Become fully operational in as little as 4-6 weeks, a fraction of the time required for traditional builds.",
      icon: Clock
    },
    {
      title: "Quality Controlled",
      description: "Factory-tested and certified for reliability, ensuring consistent quality standards.",
      icon: Shield
    },
    {
      title: "Modular Scalability",
      description: "Our modular design allows you to seamlessly expand your capacity as your operational needs grow.",
      icon: Container
    },
    {
      title: "Cost Effective",
      description: "Significant reduction in total cost of ownership compared to traditional builds.",
      icon: Zap
    },
    {
      title: "Reliable Performance",
      description: "Redundant power and cooling systems, combined with predictive maintenance, ensure maximum availability.",
      icon: Cpu
    },
    {
      title: "Quick Installation",
      description: "Simple plug-and-play installation with full remote monitoring and management capabilities.",
      icon: Thermometer
    }
  ];

  const specifications = [
    { label: "IT Capacity", value: "100-500 kW" },
    { label: "Deployment Time", value: "4-6 weeks" },
    { label: "Dimensions", value: "40ft x 8ft x 9.5ft" },
    { label: "Power Efficiency", value: "PUE < 1.3" },
    { label: "Cooling", value: "Load-Adaptive" },
    { label: "Monitoring", value: "24/7 Remote" },
    { label: "Redundancy", value: "N+1 / 2N" },
    { label: "Operating Temp", value: "-40°C to +50°C" }
  ];

  const useCases = [
    {
      title: "Edge Computing",
      description: "Deploy computing power closer to data sources for ultra-low latency applications like 5G, IoT, and real-time analytics.",
      applications: ["5G base stations", "IoT processing", "Real-time analytics", "Autonomous vehicles"]
    },
    {
      title: "Disaster Recovery",
      description: "Ensure business continuity with rapidly deployable IT infrastructure for emergency response and backup operations.",
      applications: ["Emergency response", "Temporary facilities", "Backup sites", "Mobile command centers"]
    },
    {
      title: "Remote Operations",
      description: "Bring enterprise-grade infrastructure to challenging and remote environments, including mining, energy, and military sites.",
      applications: ["Mining operations", "Oil & gas", "Military bases", "Research stations"]
    },
    {
      title: "Rapid Expansion", 
      description: "Quickly add data center capacity to support business growth, handle peak loads, or create temporary testing environments.",
      applications: ["Business growth", "Peak load handling", "Testing environments", "Temporary projects"]
    }
  ];

  const benefits = [
    "Up to 40% faster deployment than traditional builds",
    "Significant reduction in total cost of ownership",
    "Simple plug-and-play installation",
    "Factory-tested and certified for reliability",
    "Durable, weather-resistant design for any environment",
    "Full remote monitoring and management capabilities",
    "Comprehensive warranty and 24/7 technical support"
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
                Prefabricated Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-display font-bold">
                Prefabricated <span className="text-g2c-blue">Data Centers</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rapidly deployable, factory-built modular data centers, perfect for edge computing, disaster recovery, and remote operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/demo">Schedule Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={solutionsImage}
                alt="Prefabricated Data Center"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Advanced <span className="text-g2c-green">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every container is engineered with cutting-edge technology for superior performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-gradient-card border-primary/20">
                  <CardHeader>
                    <div className={`w-16 h-16 mb-4 ${bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
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
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Technical <span className="text-g2c-blue">Specifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineered to enterprise standards for the most demanding mission-critical applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="text-center bg-card border-primary/20">
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Common <span className="text-g2c-green">Use Cases</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Versatile solutions designed for a wide range of industries and deployment scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">{useCase.title}</CardTitle>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.applications.map((app, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Why Choose <span className="text-g2c-blue">Prefabricated Containers?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Factory-built quality, speed-to-market, and high-performance make our containers the ideal solution for modern infrastructure challenges.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready for <span className="text-g2c-green">Rapid Deployment?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get your prefabricated container data center deployed in weeks, not months. Contact us today for a custom quote and deployment timeline.
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
        </div>
      </section>
    </div>
  );
};

export default PrefabContainer;
