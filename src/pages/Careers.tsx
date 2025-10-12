import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Award, TrendingUp, ArrowRight, AlertCircle, Send } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses and equity participation",
      icon: Award
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement paths",
      icon: TrendingUp
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support",
      icon: Heart
    },
    {
      title: "Innovation Culture",
      description: "Work on cutting-edge technology and shape the future of infrastructure",
      icon: Users
    }
  ];

  const companyPerks = [
    "Flexible work arrangements",
    "Annual learning budget ₹50,000",
    "International conference attendance",
    "State-of-the-art office facilities",
    "Free meals and snacks",
    "Gym membership reimbursement",
    "Team building events",
    "Innovation time (20% for research)",
    "Employee stock options",
    "Relocation assistance",
    "Parental leave policy",
    "Birthday & work anniversary gifts"
  ];

  const departments = [
    { name: "Engineering", openings: 0, description: "Build the future of infrastructure" },
    { name: "Operations", openings: 0, description: "Deliver excellence in project execution" },
    { name: "R&D", openings: 0, description: "Pioneer next-generation technologies" },
    { name: "Sales", openings: 0, description: "Drive growth and client success" },
    { name: "Support", openings: 0, description: "Ensure customer satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Careers at Grid2Chip
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Stay Connected with <span className="text-primary">Grid2Chip</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While we don't have current openings, we're always interested in connecting with 
            talented professionals who share our passion for critical facility infrastructure.
          </p>
        </div>
      </section>

      {/* No Current Openings Message */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-primary/20 text-center">
            <CardContent className="p-12">
              <AlertCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-display font-bold mb-4">
                No Current Openings
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We currently have no open positions, but we're always interested in connecting with 
                talented professionals. Submit your resume below to be considered for future opportunities.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Submit Your Resume
                  <Send className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-primary">Teams</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about the diverse teams that make Grid2Chip an industry leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, index) => {
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full ${bgColor} mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                      {dept.openings}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Why <span className="text-primary">Grid2Chip?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When opportunities arise, here's what makes Grid2Chip an exceptional place to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 mb-4 ${bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Company <span className="text-primary">Perks</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {companyPerks.map((perk, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-foreground">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Join Us in the <span className="text-primary">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Submit your resume today to be considered for future opportunities at Grid2Chip.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;