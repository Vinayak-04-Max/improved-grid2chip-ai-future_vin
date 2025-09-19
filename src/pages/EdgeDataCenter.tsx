import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Globe, Cpu, Shield, Clock, Network, ArrowRight, CheckCircle } from "lucide-react";
import edgeImage from "@/assets/edge-datacenter.jpg";

const EdgeDataCenter = () => {
  const edgeFeatures = [
    {
      title: "Ultra-Low Latency",
      description: "Sub-millisecond response times for real-time applications and AI processing",
      icon: Zap,
      metric: "<1ms",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms continuously optimize performance and efficiency",
      icon: Cpu,
      metric: "40% efficiency",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "5G Integration",
      description: "Native 5G connectivity for next-generation mobile and IoT applications",
      icon: Network,
      metric: "Multi-operator",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Edge Intelligence",
      description: "Local AI inference and processing reduces cloud dependency",
      icon: Globe,
      metric: "99.9% local",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Rapid Deployment",
      description: "Modular design enables quick setup in diverse environments",
      icon: Clock,
      metric: "2-4 weeks",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Security First",
      description: "Military-grade security with encrypted data processing at the edge",
      icon: Shield,
      metric: "AES-256",
      color: "from-red-500 to-red-600"
    }
  ];

  const architectureTypes = [
    {
      name: "Micro Edge",
      capacity: "1-5 kW",
      footprint: "1-2 racks",
      applications: ["IoT gateways", "Smart sensors", "Local analytics"],
      ideal: "Small retail, offices"
    },
    {
      name: "Mini Edge",
      capacity: "5-25 kW", 
      footprint: "3-10 racks",
      applications: ["5G base stations", "Video analytics", "AR/VR"],
      ideal: "Branch offices, factories"
    },
    {
      name: "Regional Edge",
      capacity: "25-100 kW",
      footprint: "10-40 racks", 
      applications: ["Content delivery", "AI training", "Gaming"],
      ideal: "Cities, large campuses"
    },
    {
      name: "Metro Edge",
      capacity: "100-500 kW",
      footprint: "50+ racks",
      applications: ["Cloud services", "Data processing", "ML inference"],
      ideal: "Metropolitan areas"
    }
  ];

  const useCases = [
    {
      industry: "Autonomous Vehicles",
      challenge: "Real-time decision making for self-driving cars",
      solution: "Ultra-low latency edge processing for immediate response to road conditions",
      benefits: ["<1ms processing", "Local AI inference", "Safety critical operations"]
    },
    {
      industry: "Smart Manufacturing",
      challenge: "Real-time quality control and predictive maintenance",
      solution: "Edge AI for instant defect detection and equipment monitoring",
      benefits: ["Zero defect rates", "Predictive alerts", "Production optimization"]
    },
    {
      industry: "Healthcare",
      challenge: "Real-time patient monitoring and emergency response",
      solution: "Edge computing for immediate analysis of vital signs and medical imaging",
      benefits: ["Instant diagnostics", "Privacy compliance", "Emergency alerts"]
    },
    {
      industry: "Smart Cities",
      challenge: "Managing traffic, utilities, and public safety in real-time",
      solution: "Distributed edge network for city-wide monitoring and control",
      benefits: ["Traffic optimization", "Energy savings", "Public safety"]
    }
  ];

  const specifications = [
    { label: "Latency", value: "<1ms" },
    { label: "Availability", value: "99.99%" },
    { label: "Edge Locations", value: "1000+" },
    { label: "AI Acceleration", value: "GPU/TPU" },
    { label: "Connectivity", value: "5G/Fiber" },
    { label: "Security", value: "Zero Trust" },
    { label: "Monitoring", value: "24/7 AI" },
    { label: "Scalability", value: "Auto-scale" }
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
                <span className="text-gradient-ai">AI-Enhanced</span> Edge Data Centers
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bring computing power closer to your data sources with ultra-low latency edge infrastructure. 
                Perfect for IoT, 5G, autonomous systems, and real-time AI applications.
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
                className="rounded-2xl ai-float"
              />
              <div className="absolute inset-0 bg-gradient-ai opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Edge Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Edge <span className="text-gradient-ai">Advantages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary edge computing capabilities designed for next-generation applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
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

      {/* Architecture Types */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Edge <span className="text-gradient-ai">Architectures</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scalable edge solutions from micro to metro deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureTypes.map((type, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
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
                          <CheckCircle className="w-3 h-3 text-primary mr-2" />
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
              Performance <span className="text-gradient-ai">Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="text-center bg-gradient-card border-primary/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
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
              Real-World <span className="text-gradient-ai">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how edge computing transforms industries with real-time AI processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
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
                          <Zap className="w-4 h-4 text-primary mr-2" />
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
            Ready to Deploy <span className="text-gradient-ai">Edge Intelligence?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your applications with ultra-low latency edge computing infrastructure. 
            Contact us to design your custom edge network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Design Edge Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">See Edge Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdgeDataCenter;