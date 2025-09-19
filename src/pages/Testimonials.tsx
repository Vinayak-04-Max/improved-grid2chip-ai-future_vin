import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Trophy, Award, Users, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Grid2Chip's AI-ready infrastructure accelerated our drug discovery pipeline by 300%. Their predictive maintenance capabilities have eliminated unexpected downtime completely.",
      author: "Dr. Sarah Chen",
      company: "BioTech Research Inc.",
      role: "Chief Technology Officer",
      rating: 5,
      industry: "Pharmaceutical"
    },
    {
      text: "The modular design allowed us to scale our computing capacity seamlessly as our needs grew. The AI optimization reduced our energy costs by 40%.",
      author: "Michael Rodriguez",
      company: "SmartCity Solutions",
      role: "Infrastructure Director", 
      rating: 5,
      industry: "Smart Cities"
    },
    {
      text: "Their edge data center solutions gave us the ultra-low latency we needed for our autonomous vehicle testing. Exceptional reliability and support.",
      author: "Emma Thompson",
      company: "AutoTech Innovations",
      role: "VP of Engineering",
      rating: 5,
      industry: "Automotive"
    },
    {
      text: "Grid2Chip delivered our custom data center 30% faster than projected. The AI-enhanced cooling system maintains perfect temperatures automatically.",
      author: "David Park",
      company: "QuantumLab Research",
      role: "Facilities Manager",
      rating: 5,
      industry: "Research"
    },
    {
      text: "Outstanding fire safety and BMS integration. Their team's expertise in critical facility infrastructure is unmatched in the industry.",
      author: "Lisa Chang",
      company: "MedDevice Corp",
      role: "Safety Director",
      rating: 5,
      industry: "Healthcare"
    },
    {
      text: "The prefab container solution was perfect for our rapid deployment needs. Fully operational in just 6 weeks with AI monitoring built-in.",
      author: "James Wilson",
      company: "TelecomEdge",
      role: "Network Operations",
      rating: 5,
      industry: "Telecommunications"
    }
  ];

  const awards = [
    {
      title: "Data Center Excellence Award 2024",
      organization: "Data Center Institute",
      category: "AI Innovation",
      year: "2024"
    },
    {
      title: "Green Technology Leader",
      organization: "Sustainable Tech Council",
      category: "Energy Efficiency",
      year: "2024"
    },
    {
      title: "Critical Infrastructure Provider of the Year", 
      organization: "Infrastructure Awards",
      category: "Innovation",
      year: "2023"
    },
    {
      title: "Best AI Integration in Infrastructure",
      organization: "TechInnovate Awards",
      category: "AI Excellence",
      year: "2023"
    }
  ];

  const stats = [
    { label: "Client Satisfaction", value: "99.8%", icon: Users },
    { label: "Uptime Delivered", value: "99.99%", icon: Trophy },
    { label: "Projects Completed", value: "500+", icon: Award },
    { label: "Years of Excellence", value: "15+", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Client Success Stories
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Testimonials & <span className="text-gradient-ai">Awards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our clients and see the recognition we've earned for delivering 
            exceptional AI-enhanced critical facility infrastructure solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-navy-deep" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              What Our <span className="text-gradient-ai">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from organizations that trust Grid2Chip for their critical infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="w-fit">{testimonial.industry}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="border-t border-primary/20 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Awards & <span className="text-gradient-ai">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry recognition for our innovation in AI-enhanced critical facility infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-navy-deep" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{award.organization}</p>
                  <Badge variant="outline" className="mb-2">{award.category}</Badge>
                  <p className="text-sm text-primary font-semibold">{award.year}</p>
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
            Ready to Join Our <span className="text-gradient-ai">Success Stories?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let us design and build AI-enhanced critical facility infrastructure that exceeds your expectations.
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

export default Testimonials;