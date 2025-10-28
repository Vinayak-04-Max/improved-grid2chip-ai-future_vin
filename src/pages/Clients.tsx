import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Clients = () => {
  const clientLogos = [
    { name: "Global Pharma Research", industry: "Pharmaceutical", logo: "GPR", color: "bg-primary" },
    { name: "Smart Cities International", industry: "Smart Cities", logo: "SCI", color: "bg-accent" },
    { name: "Automotive Tech Group", industry: "Automotive", logo: "ATG", color: "bg-primary" },
    { name: "Research Institute", industry: "Research", logo: "RI", color: "bg-accent" },
    { name: "Medical Devices Inc", industry: "Healthcare", logo: "MDI", color: "bg-primary" },
    { name: "Telecom Solutions", industry: "Telecommunications", logo: "TS", color: "bg-accent" },
    { name: "Data Systems Corp", industry: "Technology", logo: "DSC", color: "bg-primary" },
    { name: "Energy Solutions", industry: "Energy", logo: "ES", color: "bg-accent" },
    { name: "Security Systems Global", industry: "Security", logo: "SSG", color: "bg-primary" },
    { name: "Cloud Technologies", industry: "Cloud Services", logo: "CT", color: "bg-accent" },
    { name: "Research Labs", industry: "Research", logo: "RL", color: "bg-primary" },
    { name: "Financial Systems", industry: "Financial", logo: "FS", color: "bg-accent" }
  ];


  const testimonials = [
    {
      text: "Grid2Chip's expertise in critical infrastructure is unmatched. They delivered exactly what we needed.",
      author: "Dr. Sarah Chen, CTO",
      company: "Research Institute"
    },
    {
      text: "The modular approach allowed us to scale seamlessly. Exceptional service and support.",
      author: "Michael Rodriguez",
      company: "Smart Cities International"
    },
    {
      text: "Outstanding reliability and performance. Grid2Chip exceeded our expectations.",
      author: "Emma Thompson, VP Engineering",
      company: "Automotive Tech Group"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Trusted by Industry Leaders
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="text-g2c-blue">Clientele</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the organizations that trust Grid2Chip for their critical infrastructure needs. 
            From pharmaceutical research to smart cities, we power innovation across industries.
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Trusted by <span className="text-g2c-green">Leading Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 500 successful projects delivered for clients across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${client.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {client.logo}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{client.name}</h3>
                  <Badge variant="secondary" className="text-xs">{client.industry}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Client <span className="text-g2c-blue">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t border-primary/20 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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
            Ready to Join Our <span className="text-g2c-green">Client Family?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover how Grid2Chip can transform your critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;