import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Building2, 
  Car, 
  Phone, 
  Landmark, 
  Factory,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Pharmaceutical & Biotech",
      icon: Microscope,
      description: "Accelerate drug discovery and genomic research with AI-optimized computing infrastructure.",
      challenges: [
        "Complex molecular simulations",
        "Large-scale genomic data processing",
        "Regulatory compliance requirements",
        "Secure data handling protocols"
      ],
      solutions: [
        "GPU-accelerated computing clusters",
        "Compliant data storage systems",
        "Secure network architecture",
        "24/7 monitoring and support"
      ],
      caseStudy: {
        client: "Global Pharmaceutical Leader",
        challenge: "Reducing drug discovery time from 10+ years to 5 years",
        solution: "Deployed AI-ready HPC cluster with 1000+ NVIDIA A100 GPUs",
        result: "300% faster molecular simulation processing"
      },
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Research & Academia",
      icon: Building2,
      description: "Enable breakthrough scientific research with high-performance computing infrastructure.",
      challenges: [
        "Limited research budgets",
        "Scalable computing needs",
        "Multi-disciplinary requirements",
        "Equipment maintenance costs"
      ],
      solutions: [
        "Cost-effective modular solutions",
        "Flexible scaling options",
        "Multi-tenant architectures",
        "Managed service offerings"
      ],
      caseStudy: {
        client: "State University Research Center",
        challenge: "Supporting 500+ researchers across multiple disciplines",
        solution: "Modular HPC infrastructure with elastic scaling",
        result: "60% reduction in research computation time"
      },
      color: "from-primary to-accent"
    },
    {
      title: "Smart Cities & Government",
      icon: Landmark,
      description: "Power smart city initiatives with edge computing and IoT infrastructure.",
      challenges: [
        "Real-time data processing",
        "Citizen privacy protection",
        "Budget constraints",
        "Legacy system integration"
      ],
      solutions: [
        "Edge computing networks",
        "Secure data processing",
        "Public-private partnerships",
        "Legacy system bridges"
      ],
      caseStudy: {
        client: "Metropolitan Smart City Initiative",
        challenge: "Processing traffic data from 10,000+ sensors in real-time",
        solution: "Distributed edge data center network",
        result: "40% reduction in traffic congestion"
      },
      color: "from-accent to-primary"
    },
    {
      title: "Autonomous Vehicles",
      icon: Car,
      description: "Support autonomous vehicle development with ultra-low latency edge computing.",
      challenges: [
        "Ultra-low latency requirements",
        "Massive data volumes",
        "Safety-critical operations",
        "Geographic distribution"
      ],
      solutions: [
        "Edge data center networks",
        "Real-time AI processing",
        "Redundant safety systems",
        "5G integration"
      ],
      caseStudy: {
        client: "Leading Automotive Manufacturer",
        challenge: "Processing sensor data from autonomous vehicle fleet",
        solution: "Multi-tier edge computing infrastructure",
        result: "Sub-10ms response times achieved"
      },
      color: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Telecommunications",
      icon: Phone,
      description: "Enable 5G and next-generation network services with edge infrastructure.",
      challenges: [
        "5G network demands",
        "Edge computing requirements",
        "Service quality guarantees",
        "Rapid deployment needs"
      ],
      solutions: [
        "Pre-configured edge modules",
        "5G-optimized architecture",
        "SLA-backed services",
        "Rapid deployment solutions"
      ],
      caseStudy: {
        client: "Major Telecom Provider",
        challenge: "Deploying 5G edge computing across 200+ cell towers",
        solution: "Containerized edge data centers",
        result: "90% faster deployment vs traditional methods"
      },
      color: "from-primary to-neon-blue"
    },
    {
      title: "Manufacturing & Industry 4.0",
      icon: Factory,
      description: "Transform manufacturing with AI-driven automation and predictive analytics.",
      challenges: [
        "Predictive maintenance needs",
        "Quality control automation",
        "Supply chain optimization",
        "Safety compliance"
      ],
      solutions: [
        "Industrial IoT platforms",
        "AI-powered analytics",
        "Real-time monitoring",
        "Compliance automation"
      ],
      caseStudy: {
        client: "Global Manufacturing Corporation",
        challenge: "Implementing predictive maintenance across 50 facilities",
        solution: "Distributed AI analytics infrastructure",
        result: "35% reduction in unplanned downtime"
      },
      color: "from-accent to-neon-cyan"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Performance",
      description: "2-5x faster processing speeds across all industry applications"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security with industry-specific compliance"
    },
    {
      icon: Zap,
      title: "Reduced Costs",
      description: "30-50% lower total cost of ownership vs traditional infrastructure"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Industry Solutions
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="text-primary">Transforming Industries</span> with Data Center Infrastructure
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            From pharmaceutical research to smart cities, our infrastructure solutions 
            are driving innovation across diverse industries and use cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className={`w-16 h-16 rounded-xl ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'} p-4`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h2 className="text-3xl font-display font-bold">{industry.title}</h2>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Key Challenges</h3>
                        <div className="space-y-2">
                          {industry.challenges.map((challenge, challengeIndex) => (
                            <div key={challengeIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Our Solutions</h3>
                        <div className="space-y-2">
                          {industry.solutions.map((solution, solutionIndex) => (
                            <div key={solutionIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" asChild>
                      <Link to="/demo">
                        Discuss Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <Card className={`bg-gradient-card border-primary/20 ai-glow ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <CardHeader>
                      <CardTitle className="text-xl">Case Study</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {industry.caseStudy.client}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{industry.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{industry.caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Result</h4>
                        <p className="text-sm text-primary font-medium">{industry.caseStudy.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Transform Your <span className="text-gradient-ai">Industry?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how Grid2Chip can design a custom infrastructure solution 
            tailored to your industry's specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/demo">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Request Case Study</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;