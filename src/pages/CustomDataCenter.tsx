import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Cpu, Shield, Zap, ArrowRight, CheckCircle, ClipboardCheck, Layers, Settings, HardHat } from "lucide-react";

const CustomDataCenter = () => {
  const advantages = [
    {
      title: "Precision Engineering",
      description: "Every aspect—from power and cooling to layout and security—is tailored to your specific workload and business goals.",
      icon: Settings
    },
    {
      title: "Optimized Performance & Efficiency",
      description: "Benefit from a design that maximizes performance and minimizes PUE (Power Usage Effectiveness) for your exact applications.",
      icon: Cpu
    },
    {
      title: "Future-Proof Scalability",
      description: "Build the foundation for future growth with a scalable, modular design that can evolve with your technology roadmap.",
      icon: Layers
    },
    {
      title: "End-to-End Project Management",
      description: "Our dedicated team manages the entire lifecycle, from initial design and site selection to construction and final commissioning.",
      icon: HardHat
    },
    {
      title: "Compliance & Certification",
      description: "We ensure your facility is designed and built to meet all relevant industry standards and certifications, such as Uptime Institute Tiers.",
      icon: ClipboardCheck
    },
    {
      title: "Total Control & Security",
      description: "Gain complete control over your critical infrastructure with a facility that meets your exact physical and digital security requirements.",
      icon: Shield
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation & Design",
      activities: "Needs analysis, feasibility studies, conceptual design, and technology roadmap planning.",
      outcome: "A detailed blueprint and project plan tailored to your requirements."
    },
    {
      step: "2",
      title: "Site Selection & Preparation",
      activities: "Site evaluation, acquisition support, permitting, and ground preparation.",
      outcome: "A fully prepared site ready for construction."
    },
    {
      step: "3",
      title: "Construction & Engineering",
      activities: "Structural build-out, installation of core mechanical and electrical systems.",
      outcome: "The physical data center structure and core infrastructure."
    },
    {
      step: "4",
      title: "Systems Integration",
      activities: "Installation of racks, cabling, fire suppression, security, and monitoring systems.",
      outcome: "A fully integrated, functional data center environment."
    },
    {
      step: "5",
      title: "Commissioning & Handover",
      activities: "Rigorous testing of all systems (Level 1-5 commissioning), staff training, and official handover.",
      outcome: "A certified, operationally-ready data center."
    }
  ];

  const customizations = [
    { label: "Power", value: "N, N+1, 2N, 2N+1 Redundancy" },
    { label: "Cooling", value: "Air, Liquid, or Hybrid Cooling" },
    { label: "Density", value: "Low to High-Density Racks" },
    { label: "Security", value: "Multi-Layer Access Control" },
    { label: "Connectivity", value: "Carrier-Neutral Design" },
    { label: "Monitoring", value: "Integrated BMS/DCIM" },
    { label: "Sustainability", value: "Green Energy Options" },
    { label: "Tier Level", value: "Uptime Tier I, II, III, or IV" }
  ];

  const idealFor = [
    {
      title: "Large Enterprises",
      description: "A flagship data center to consolidate IT operations and support long-term growth."
    },
    {
      title: "Hyperscalers & Cloud Providers",
      description: "Massive, highly efficient facilities built for cloud-scale infrastructure."
    },
    {
      title: "High-Performance Computing (HPC)",
      description: "Specialized environments for research, simulation, and data-intensive workloads."
    },
    {
      title: "Government & Public Sector",
      description: "Secure, compliant, and highly resilient facilities for mission-critical services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Custom Solutions
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Custom-Build <span className="text-g2c-blue">Data Centers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Engineered from the ground up to meet your unique operational, performance, and scalability requirements. We transform your vision into a state-of-the-art, mission-critical facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">Explore Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              The Advantages of a <span className="text-g2c-green">Custom-Build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the unparalleled benefits of a data center designed exclusively for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-gradient-card border-primary/20">
                  <CardHeader>
                    <div className={`w-16 h-16 mb-4 ${bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom-Build Process */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-g2c-blue">Custom-Build Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured, transparent approach to delivering your data center on time and on budget.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Activities:</h4>
                      <p className="text-sm text-muted-foreground">{item.activities}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Outcome:</h4>
                      <p className="text-sm text-muted-foreground">{item.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Infrastructure Customizations */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key Infrastructure <span className="text-g2c-green">Customizations</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {customizations.map((custom, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="font-semibold text-primary mb-2">{custom.label}</div>
                  <div className="text-sm text-muted-foreground">{custom.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ideal <span className="text-g2c-blue">For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealFor.map((item, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground"><span className="font-semibold">Need:</span> {item.description}</p>
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
            Ready to Build Your <span className="text-g2c-green">Data Center?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's partner to engineer a custom data center that serves as the foundation for your future success. Contact our experts today.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CustomDataCenter;
