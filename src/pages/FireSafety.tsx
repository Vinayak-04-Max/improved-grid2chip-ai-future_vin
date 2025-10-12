import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flame, Shield, AlertTriangle, Zap, Wind, Bell, ArrowRight, CheckCircle } from "lucide-react";

const FireSafety = () => {
  const fireSystems = [
    {
      title: "Fire Detection Systems",
      description: "Advanced early warning systems with intelligent smoke, heat, and flame detection for rapid response.",
      icon: AlertTriangle,
      features: ["Intelligent smoke detectors", "Heat detection", "Flame sensors", "Early warning alerts"]
    },
    {
      title: "Fire Suppression Systems",
      description: "Automated suppression systems including sprinklers, gas-based, and specialized solutions for critical areas.",
      icon: Shield,
      features: ["Sprinkler systems", "FM-200/Novec 1230", "Clean agent systems", "Automated activation"]
    },
    {
      title: "Fire Alarm Systems",
      description: "Comprehensive alarm networks with voice evacuation, visual alerts, and emergency communication.",
      icon: Bell,
      features: ["Voice evacuation", "Visual alarms", "Emergency PA", "Zone-based control"]
    },
    {
      title: "Emergency Lighting",
      description: "Reliable emergency and exit lighting systems ensuring safe evacuation during power failures.",
      icon: Zap,
      features: ["LED exit signs", "Emergency luminaires", "Battery backup", "Automatic testing"]
    },
    {
      title: "Smoke Extraction Systems",
      description: "Mechanical and natural smoke extraction to maintain visibility and reduce heat during fire events.",
      icon: Wind,
      features: ["Mechanical extraction", "Natural ventilation", "Smoke control", "Stairwell pressurization"]
    },
    {
      title: "Firefighting Equipment",
      description: "Complete range of portable and fixed firefighting equipment strategically positioned throughout facilities.",
      icon: Flame,
      features: ["Fire extinguishers", "Hose reels", "Fire hydrants", "Cabinet installations"]
    }
  ];

  const standards = [
    "NFPA (National Fire Protection Association)",
    "NBC (National Building Code)",
    "IS Standards (Indian Standards)",
    "FM Global Requirements",
    "UL Listed Equipment",
    "Local Fire Safety Regulations"
  ];

  const benefits = [
    {
      title: "Life Safety",
      description: "Protect occupants with early detection and rapid response systems."
    },
    {
      title: "Asset Protection",
      description: "Minimize damage to critical equipment and infrastructure."
    },
    {
      title: "Business Continuity",
      description: "Reduce downtime and maintain operations during emergencies."
    },
    {
      title: "Compliance Assured",
      description: "Meet all local and international fire safety regulations."
    }
  ];

  const criticalFacilities = [
    {
      type: "Data Centers",
      requirements: "Clean agent suppression systems to protect sensitive equipment without water damage."
    },
    {
      type: "Industrial Facilities",
      requirements: "Heavy-duty systems for high-risk areas with specialized suppression methods."
    },
    {
      type: "Commercial Buildings",
      requirements: "Comprehensive protection with sprinklers, alarms, and evacuation systems."
    },
    {
      type: "Healthcare Facilities",
      requirements: "Life-safety focused systems with smoke compartmentation and staged evacuation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Fire Safety
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Fire Safety <span className="text-primary">Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Advanced fire detection, suppression, and safety systems for critical facilities. Protect lives, assets, and ensure business continuity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Safety Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">View Systems</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fire Safety Systems Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Comprehensive Fire <span className="text-accent">Safety Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete fire protection systems designed for mission-critical facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fireSystems.map((system, index) => {
              const Icon = system.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 mb-4 ${bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{system.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{system.description}</p>
                    <div className="space-y-2">
                      {system.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Critical Facilities */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Critical <span className="text-primary">Facility Protection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized fire safety solutions for different facility types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {criticalFacilities.map((facility, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{facility.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.requirements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Compliance & <span className="text-accent">Standards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All our systems comply with international and local fire safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {standards.map((standard, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-card rounded-lg border border-primary/20">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key <span className="text-primary">Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="text-center bg-card border-primary/20">
                  <CardHeader>
                    <div className={`w-12 h-12 ${bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Protect Your Facility with <span className="text-accent">Advanced Fire Safety</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get a comprehensive fire safety assessment and customized protection plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule Safety Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireSafety;