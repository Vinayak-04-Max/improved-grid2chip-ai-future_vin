import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Brain, Cpu, Shield, Zap, Activity, BarChart3, AlertTriangle } from "lucide-react";

const IMS = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Advanced algorithms for predictive maintenance and anomaly detection."
    },
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "24/7 continuous monitoring of all critical systems with instant alerts and notifications."
    },
    {
      icon: BarChart3,
      title: "Centralized Reporting",
      description: "Comprehensive dashboards and automated reports with insights and trends."
    },
    {
      icon: Shield,
      title: "Security Integration",
      description: "Advanced cybersecurity monitoring with threat detection and response capabilities."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Data-driven energy management for maximum efficiency and cost reduction."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Alerting",
      description: "Smart alerting system that predicts issues before they become critical problems."
    }
  ];

  const monitoringSystems = [
    "Power Distribution Systems",
    "UPS & Battery Management",
    "Cooling & HVAC Systems", 
    "Fire Detection & Suppression",
    "Access Control & Security",
    "Environmental Monitoring",
    "Network Infrastructure",
    "Server & Equipment Health"
  ];

  const benefits = [
    {
      metric: "99.99%",
      label: "System Uptime",
      description: "Guaranteed availability through automated redundancy"
    },
    {
      metric: "30%",
      label: "Potential Energy Savings",
      description: "Reduced operational costs through optimization"
    },
    {
      metric: "24/7",
      label: "Centralized Monitoring", 
      description: "Continuous oversight and analysis"
    },
    {
      metric: "Real-time",
      label: "Threat Detection",
      description: "Instant security threat identification"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                Integrated Monitoring System
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-primary">Integrated</span> Monitoring System (IMS)
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive Integrated Monitoring System (IMS) that transforms critical facility 
                management with automation, predictive analytics, and centralized oversight.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link to="/demo">
                    Experience IMS Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact">
                    Get Consultation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-2xl ai-pulse"></div>
              <Card className="bg-gradient-card border-primary/20 ai-glow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{benefit.metric}</div>
                        <div className="text-sm font-medium text-foreground mb-1">{benefit.label}</div>
                        <div className="text-xs text-muted-foreground">{benefit.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-primary">IMS Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive monitoring capabilities for superior facility management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monitoring Systems */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-display font-bold">
                <span className="text-primary">Comprehensive</span> System Coverage
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our IMS monitors every critical aspect of your facility infrastructure, 
                providing complete visibility and control over all systems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monitoringSystems.map((system, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <Activity className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-foreground group-hover:text-primary transition-colors">{system}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request IMS Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card border-primary/20 ai-glow">
                <CardHeader>
                  <CardTitle className="text-center">AI Control Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Power Systems</span>
                      <Badge variant="outline" className="bg-accent/20 text-foreground border-accent/30">
                        Optimal
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Cooling Systems</span>
                      <Badge variant="outline" className="bg-primary/20 text-foreground border-primary/30">
                        Efficient
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Security Systems</span>
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Fire Safety</span>
                      <Badge variant="outline" className="bg-accent/20 text-foreground border-accent/30">
                        Protected
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Deploy <span className="text-primary">IMS</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your critical facility management with our integrated monitoring system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/demo">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IMS;