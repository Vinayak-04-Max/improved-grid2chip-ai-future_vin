import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Award, Users, ArrowRight } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer & Founder",
      experience: "20+ years",
      bio: "Visionary leader with extensive experience in critical facility infrastructure. Pioneer in AI-enhanced data center solutions and sustainable technology integration.",
      expertise: ["Strategic Leadership", "AI Infrastructure", "Business Development", "Sustainable Technology"],
      achievements: ["Founded Grid2Chip in 2008", "Led 500+ successful projects", "Industry AI Innovation Award 2024"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Technology Officer",
      experience: "15+ years",
      bio: "Technology innovator specializing in AI-driven infrastructure solutions. Expert in predictive maintenance systems and intelligent facility management.",
      expertise: ["AI & Machine Learning", "Predictive Analytics", "IoT Integration", "System Architecture"],
      achievements: ["PhD in Computer Science", "50+ published research papers", "AI Excellence Award 2023"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Chief Operating Officer",
      experience: "18+ years",
      bio: "Operations expert ensuring flawless project execution and delivery. Specialist in scaling infrastructure solutions and operational excellence.",
      expertise: ["Operations Management", "Project Delivery", "Quality Assurance", "Team Leadership"],
      achievements: ["99.8% project success rate", "Led international expansion", "Operations Excellence Award"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Williams",
      role: "Chief Financial Officer",
      experience: "12+ years",
      bio: "Financial strategist driving sustainable growth and innovation investments. Expert in infrastructure financing and risk management.",
      expertise: ["Financial Strategy", "Risk Management", "Investment Planning", "Corporate Finance"],
      achievements: ["CPA & MBA", "Led $50M+ funding rounds", "Financial Leadership Award"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Rodriguez",
      role: "VP of Engineering",
      experience: "16+ years",
      bio: "Engineering leader focusing on cutting-edge facility design and AI integration. Expert in thermal management and energy efficiency.",
      expertise: ["Facility Engineering", "Thermal Design", "AI Integration", "Energy Systems"],
      achievements: ["PE License", "100+ facility designs", "Green Engineering Award"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Lisa Zhang",
      role: "Head of AI Research",
      experience: "10+ years",
      bio: "AI research leader developing next-generation intelligent infrastructure solutions. Pioneer in autonomous facility management systems.",
      expertise: ["AI Research", "Machine Learning", "Autonomous Systems", "Innovation"],
      achievements: ["PhD in AI", "30+ patents", "Research Excellence Award"],
      image: "/api/placeholder/300/300"
    }
  ];

  const companyValues = [
    {
      title: "Innovation Excellence",
      description: "Continuously pushing the boundaries of AI-enhanced infrastructure technology",
      icon: Award
    },
    {
      title: "Client Success", 
      description: "Committed to delivering exceptional results that exceed expectations",
      icon: Users
    },
    {
      title: "Sustainable Future",
      description: "Building environmentally responsible solutions for tomorrow's world",
      icon: Award
    },
    {
      title: "Team Excellence",
      description: "Fostering a culture of collaboration, growth, and professional development",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Executive Leadership
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient-ai">Leadership Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation in AI-enhanced critical facility infrastructure. 
            Our diverse team brings decades of expertise in technology, operations, and strategic growth.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow group">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-ai p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold text-primary">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">{leader.name}</CardTitle>
                  <p className="text-primary font-medium">{leader.role}</p>
                  <Badge variant="secondary" className="w-fit mx-auto">{leader.experience}</Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {leader.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-primary/20">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-ai">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our leadership and drive our success in delivering 
              world-class AI-enhanced infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-navy-deep" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
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
            Ready to Work with <span className="text-gradient-ai">Our Team?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with our leadership team to discuss your AI-enhanced infrastructure needs 
            and discover how we can help achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Leadership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/about/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;