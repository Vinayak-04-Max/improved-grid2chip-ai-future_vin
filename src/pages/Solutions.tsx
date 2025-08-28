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
  Settings,
  BarChart3
} from "lucide-react";
import solutionsImage from "@/assets/solutions-containers.jpg";

const Solutions = () => {
  const mainSolutions = [
    {
      title: "AI-Ready Data Centers",
      description: "Purpose-built infrastructure optimized for machine learning, deep learning, and AI workloads with specialized cooling and power systems.",
      icon: Cpu,
      path: "/solutions/ai-ready",
      features: ["GPU-optimized cooling", "High-density compute", "AI workflow orchestration", "Predictive maintenance"],
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Custom Container Data Centers",
      description: "Rapid deployment modular solutions in standardized containers, perfect for remote locations and quick scaling.",
      icon: Globe,
      path: "/solutions/container",
      features: ["Portable deployment", "Standardized modules", "Quick installation", "Remote monitoring"],
      color: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Edge Data Centers",
      description: "Ultra-low latency computing infrastructure positioned at the network edge for real-time applications.",
      icon: Zap,
      path: "/solutions/edge",
      features: ["Sub-millisecond latency", "Distributed architecture", "5G integration", "IoT optimization"],
      color: "from-primary to-accent"
    },
    {
      title: "Prefabricated Data Centers",
      description: "Factory-built, quality-controlled data center modules that can be rapidly deployed and scaled.",
      icon: Settings,
      path: "/solutions/prefab",
      features: ["Factory quality control", "Reduced construction time", "Scalable design", "Cost optimization"],
      color: "from-accent to-primary"
    },
    {
      title: "HPC Data Centers",
      description: "High-performance computing infrastructure designed for research, simulation, and complex computational workloads.",
      icon: BarChart3,
      path: "/solutions/hpc",
      features: ["Parallel processing", "High-speed interconnects", "Advanced cooling", "Research optimization"],
      color: "from-neon-blue to-primary"
    }
  ];

  const capabilities = [
    "Custom design and engineering",
    "Turnkey deployment services",
    "24/7 monitoring and support",
    "Sustainable energy solutions",
    "Regulatory compliance",
    "Global deployment capability"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                Infrastructure Solutions
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-gradient-ai">Next-Generation</span> Data Center Solutions
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                From AI-optimized facilities to edge computing infrastructure, we deliver cutting-edge 
                solutions tailored to your specific computational needs and deployment requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/demo">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact">Get Custom Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={solutionsImage}
                alt="Modular Data Center Solutions"
                className="rounded-2xl shadow-hero ai-float"
              />
              <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-2xl ai-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Complete <span className="text-gradient-ai">Solution Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each solution is designed with cutting-edge technology and optimized for specific use cases and deployment scenarios.
            </p>
          </div>

          <div className="space-y-8">
            {mainSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="space-y-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} p-4 ai-pulse`}>
                        <Icon className="w-full h-full text-navy-deep" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-4">{solution.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {solution.description}
                        </p>
                        <Button variant="outline" asChild>
                          <Link to={solution.path}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              End-to-End <span className="text-gradient-ai">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to ongoing support, we provide comprehensive services 
              throughout your infrastructure lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border border-primary/20">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Transform Your <span className="text-gradient-ai">Infrastructure?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our experts are ready to design a custom solution that meets your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/demo">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;