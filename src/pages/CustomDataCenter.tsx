import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Cpu, Shield, Zap, ArrowRight, CheckCircle, ClipboardCheck, Layers, Settings, HardHat, MapPin } from "lucide-react";

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
      description: "Comprehensive needs analysis and blueprint creation tailored to your requirements.",
      icon: ClipboardCheck
    },
    {
      step: "2",
      title: "Site Preparation",
      description: "Site evaluation, permitting, and ground preparation for construction readiness.",
      icon: MapPin
    },
    {
      step: "3",
      title: "Construction",
      description: "Structural build-out with core mechanical and electrical systems installation.",
      icon: HardHat
    },
    {
      step: "4",
      title: "Integration",
      description: "Complete installation of racks, cabling, security, and monitoring systems.",
      icon: Layers
    },
    {
      step: "5",
      title: "Commissioning",
      description: "Rigorous testing, staff training, and certified operational handover.",
      icon: CheckCircle
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
      <section className="relative py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="text-primary">Custom-Build Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five proven steps to deliver your data center on time and on budget.
            </p>
          </div>

          {/* Compact Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Solid Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2 hidden lg:block" />

            {/* Steps */}
            <div className="space-y-12 lg:space-y-16">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                const iconBg = isEven ? 'bg-primary/10' : 'bg-accent/10';
                const iconColor = isEven ? 'text-primary' : 'text-accent';

                return (
                  <div key={index} className="relative">
                    {/* Step Circle */}
                    <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
                        <span className="text-white text-xl font-bold">{item.step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                      <div className={`${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                        {/* Mobile step number */}
                        <div className="flex items-center gap-3 mb-3 lg:hidden">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{item.step}</span>
                          </div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>

                        {/* Desktop title with icon */}
                        <div className={`hidden lg:flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : ''}`}>
                          <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center ${isEven ? 'order-2' : ''}`}>
                            <Icon className={`w-6 h-6 ${iconColor}`} />
                          </div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>

                        {/* Description */}
                        <div className={`flex gap-3 p-4 rounded-xl bg-card border border-primary/20 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                          <Icon className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0 lg:hidden`} />
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="hidden lg:block" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final Badge */}
            <div className="mt-12 flex justify-center">
              <div className="px-6 py-3 bg-accent rounded-full shadow-lg">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Data Center Ready</span>
                </div>
              </div>
            </div>
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
