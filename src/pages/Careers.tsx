import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users, Heart, Award, TrendingUp, ArrowRight, Briefcase } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Data Center Infrastructure Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of enterprise-grade data center solutions and intelligent infrastructure systems.",
      requirements: ["Infrastructure expertise", "Data center design", "System optimization", "Cloud platforms"],
      urgent: true
    },
    {
      title: "Data Center Solutions Architect",
      department: "Engineering", 
      location: "Mumbai, India",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and architect cutting-edge data center infrastructure solutions for enterprise clients.",
      requirements: ["Infrastructure design", "Cooling systems", "Power distribution", "Project management"],
      urgent: false
    },
    {
      title: "BMS Integration Specialist",
      department: "Operations",
      location: "Delhi, India", 
      type: "Full-time",
      experience: "4+ years",
      description: "Integrate and optimize building management systems for critical facility infrastructure.",
      requirements: ["BMS systems", "HVAC control", "Fire safety", "IoT integration"],
      urgent: true
    },
    {
      title: "Project Manager - Critical Facilities",
      department: "Operations",
      location: "Chennai, India",
      type: "Full-time", 
      experience: "6+ years",
      description: "Manage end-to-end delivery of critical infrastructure projects from conception to completion.",
      requirements: ["Project management", "Client relations", "Team leadership", "Risk management"],
      urgent: false
    },
    {
      title: "Research Scientist - Infrastructure",
      department: "R&D",
      location: "Pune, India",
      type: "Full-time",
      experience: "3+ years", 
      description: "Research and develop next-generation systems for predictive maintenance and infrastructure optimization.",
      requirements: ["PhD/MS in Engineering", "Research experience", "Publications", "System development"],
      urgent: false
    },
    {
      title: "Sales Engineer - Data Centers",
      department: "Sales",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive sales of critical infrastructure solutions to enterprise and government clients.",
      requirements: ["Technical sales", "Data center knowledge", "Client presentations", "B2B experience"],
      urgent: true
    }
  ];

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
      description: "Work on cutting-edge AI technology and shape the future of infrastructure",
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
    { name: "Engineering", openings: 8, description: "Build the future of AI infrastructure" },
    { name: "Operations", openings: 5, description: "Deliver excellence in project execution" },
    { name: "R&D", openings: 3, description: "Pioneer next-generation technologies" },
    { name: "Sales", openings: 4, description: "Drive growth and client success" },
    { name: "Support", openings: 2, description: "Ensure customer satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Join Our Team
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Build the Future with <span className="text-primary">Grid2Chip</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a team of innovators creating next-generation critical facility infrastructure. 
            Shape the future of technology while advancing your career with industry leaders.
          </p>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Teams & <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore career opportunities across our diverse teams and departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">{dept.openings}</div>
                  <div className="text-sm text-muted-foreground mb-4">Open Positions</div>
                  <p className="text-xs text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting opportunities to join our growing team of infrastructure experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-semibold">{position.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        {position.urgent && <Badge variant="destructive">Urgent</Badge>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      {position.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Requirements</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{req}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-primary/20">
                    <Button variant="default" className="flex-1">Apply Now</Button>
                    <Button variant="ghost" className="flex-1">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Benefits & <span className="text-primary">Perks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">Additional Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyPerks.map((perk, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{perk}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to <span className="text-primary">Join Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? Send us your resume and let us know how you'd like to contribute 
            to the future of critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg">
              Subscribe to Job Alerts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;