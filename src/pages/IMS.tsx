import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Brain, Cpu, Shield, Zap, Activity, BarChart3, AlertTriangle } from "lucide-react";

const IMS = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for predictive maintenance and anomaly detection."
    },
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "24/7 continuous monitoring of all critical systems with instant alerts and notifications."
    },
    {
      icon: BarChart3,
      title: "Intelligent Reporting",
      description: "Comprehensive dashboards and automated reports with AI-driven insights and trends."
    },
    {
      icon: Shield,
      title: "Security Integration",
      description: "Advanced cybersecurity monitoring with AI threat detection and response capabilities."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "AI-driven energy management for maximum efficiency and cost reduction."
    },
    {
      icon: AlertTriangle,
      title: "Predictive Alerts",
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
      description: "Guaranteed availability with AI-powered redundancy"
    },
    {
      metric: "30%",
      label: "Energy Savings",
      description: "Reduced operational costs through AI optimization"
    },
    {
      metric: "24/7",
      label: "AI Monitoring", 
      description: "Continuous intelligent oversight and analysis"
    },
    {
      metric: "Real-time",
      label: "Threat Detection",
      description: "Instant AI-powered security threat identification"
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
                <span className="relative">
                  AI-Enhanced Monitoring
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ai-pulse"></span>
                </span>
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-gradient-ai">Intelligent</span> Monitoring System
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolutionary AI-Enhanced Integrated Monitoring System (IMS) that transforms critical facility 
                management with intelligent automation, predictive analytics, and comprehensive oversight.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link to="/demo">
                    Experience AI IMS Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact">
                    Get AI Consultation
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
              AI-Enhanced <span className="text-gradient-ai">IMS Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive monitoring capabilities powered by artificial intelligence for superior facility management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-ai rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy-deep" />
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
                <span className="text-gradient-ai">Comprehensive</span> System Coverage
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our AI-Enhanced IMS monitors every critical aspect of your facility infrastructure, 
                providing complete visibility and intelligent control over all systems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monitoringSystems.map((system, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <Activity className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-foreground group-hover:text-primary transition-colors">{system}</span>
                  </div>
                ))}
              </div>

              <Button variant="ai" size="lg" asChild>
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
                      <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Optimal
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Cooling Systems</span>
                      <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        Efficient
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Security Systems</span>
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                        AI Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm">Fire Safety</span>
                      <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
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
            Ready to Deploy <span className="text-gradient-ai">AI-Enhanced IMS</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your critical facility management with our intelligent monitoring system 
            powered by cutting-edge artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/demo">
                Schedule AI Demo
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