import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cpu, Network, Building } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Schneider Electric",
      logo: "SE",
      description: "A global leader in energy management and automation solutions for critical infrastructure.",
      specialties: ["Power Management", "Cooling Solutions", "Automation", "Energy Efficiency"],
      color: "bg-primary",
      icon: Zap
    },
    {
      name: "Legrand",
      logo: "LG",
      description: "An innovator in electrical and digital building infrastructures.",
      specialties: ["Digital Infrastructure", "Cable Management", "Power Distribution", "Smart Buildings"],
      color: "bg-accent",
      icon: Building
    },
    {
      name: "Siemens",
      logo: "SI",
      description: "A pioneer in advanced building technologies and automation for intelligent facilities.",
      specialties: ["Building Automation", "Fire Safety", "Security Systems", "Integration"],
      color: "bg-primary",
      icon: Cpu
    },
    {
      name: "CommScope",
      logo: "CS",
      description: "A provider of next-generation network infrastructure solutions.",
      specialties: ["Network Infrastructure", "Fiber Solutions", "Wireless Systems", "Connectivity"],
      color: "bg-accent",
      icon: Network
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto border-primary/30 text-primary">
              Strategic Technology Partners
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              Strategic <span className="text-primary">Technology</span> Partners
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver cutting-edge critical facility 
              infrastructure solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-primary">Technology Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Working with global leaders in technology to provide comprehensive infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 ai-glow group hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${partner.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {partner.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {partner.name}
                          </CardTitle>
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="border-primary/30 text-primary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10" asChild>
                      <Link to="/contact">
                        Learn More About Partnership
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Partnership <span className="text-primary">Advantages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Leading Technology",
                description: "Latest products and innovative solutions from global technology leaders."
              },
              {
                title: "Certified Technical Expertise",
                description: "Factory-trained engineers with specialized knowledge in critical infrastructure."
              },
              {
                title: "Dedicated 24/7 Support",
                description: "Round-the-clock technical support and monitoring capabilities."
              },
              {
                title: "Compliance with Global Standards",
                description: "Adherence to international standards for critical facility infrastructure."
              },
              {
                title: "Early Access to Innovation",
                description: "Early access to emerging technologies and next-generation solutions."
              },
              {
                title: "Seamlessly Integrated Systems",
                description: "Fully integrated systems that work together for optimal performance."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Experience <span className="text-primary">Partner-Grade Solutions</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leverage our strategic partnerships to access the most advanced infrastructure solutions available today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/solutions">
                View Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;