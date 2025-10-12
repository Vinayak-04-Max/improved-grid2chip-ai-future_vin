import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Phone, Wifi, Shield, Monitor, Bell, ArrowRight, CheckCircle } from "lucide-react";

const ELVSystems = () => {
  const elvSystems = [
    {
      title: "CCTV & Video Surveillance",
      description: "High-definition IP cameras with intelligent analytics for comprehensive facility monitoring and security.",
      icon: Camera,
      features: ["4K resolution cameras", "AI-powered analytics", "Cloud storage", "24/7 monitoring"]
    },
    {
      title: "Access Control Systems",
      description: "Multi-level security with biometric authentication, card readers, and intelligent access management.",
      icon: Shield,
      features: ["Biometric authentication", "Card access control", "Visitor management", "Audit trails"]
    },
    {
      title: "Structured Cabling",
      description: "Enterprise-grade Cat6/Cat6a cabling infrastructure for reliable data and voice communications.",
      icon: Wifi,
      features: ["Cat6/Cat6a cabling", "Fiber optic backbone", "Cable management", "Future-proof design"]
    },
    {
      title: "Public Address Systems",
      description: "Crystal-clear audio communication for announcements, emergency alerts, and background music.",
      icon: Bell,
      features: ["Zone-based control", "Emergency override", "Voice evacuation", "Background music"]
    },
    {
      title: "Intercom Systems",
      description: "Modern IP-based intercom solutions for seamless internal and external communication.",
      icon: Phone,
      features: ["Video intercom", "Two-way audio", "Remote access", "Mobile integration"]
    },
    {
      title: "Building Automation Integration",
      description: "Seamless integration with BMS for centralized monitoring and control of all ELV systems.",
      icon: Monitor,
      features: ["BMS integration", "Centralized control", "Real-time monitoring", "Automated alerts"]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Multi-layered security systems protect your facility and assets 24/7."
    },
    {
      title: "Improved Communication",
      description: "Reliable infrastructure for voice, data, and video communications."
    },
    {
      title: "Scalable Infrastructure",
      description: "Future-proof systems that grow with your facility needs."
    },
    {
      title: "Centralized Management",
      description: "Single platform to monitor and control all ELV systems."
    }
  ];

  const applications = [
    "Data Centers & IT Facilities",
    "Corporate Office Buildings",
    "Manufacturing & Industrial Plants",
    "Healthcare Facilities",
    "Educational Institutions",
    "Retail & Commercial Spaces"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            ELV Systems
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Extra Low Voltage <span className="text-accent">Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive ELV solutions including security, communications, and monitoring systems for modern critical facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ELV Systems Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-primary">ELV Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete extra low voltage systems for security, communication, and building automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elvSystems.map((system, index) => {
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

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key <span className="text-accent">Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ideal <span className="text-primary">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ELV systems are perfect for a wide range of facilities and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-card rounded-lg border border-primary/20">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Upgrade Your <span className="text-accent">ELV Systems?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get a comprehensive ELV solution tailored to your facility's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELVSystems;