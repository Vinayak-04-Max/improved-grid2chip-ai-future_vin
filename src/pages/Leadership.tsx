import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Award, Users, ArrowRight, Target, Shield, Lightbulb } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Seetharam Mannava",
      role: "Founder & CEO",
      experience: "24+ years",
      bio: "With over 24+ years of cross-functional experience, Seetharam is the visionary founder and CEO of Grid2Chip. Specializing in designing and executing critical infrastructure services for data centers.",
      expertise: ["Critical Infrastructure Services", "Data Center Design", "Strategic Planning", "Turnkey Solutions"],
      achievements: ["Founder of Grid2Chip", "24+ years industry experience", "Critical facility engagement expert"],
      image: "/images/Seetharam.jpg"
    },
    {
      name: "M V Surya Ganesh",
      role: "Head of Research & Development",
      experience: "26+ years",
      bio: "With over 26+ years of distinguished experience in designing and executing mechanical and electrical requirements for Indian Aviation projects, Surya Ganesh leads our Research & Development division with visionary expertise.",
      expertise: ["Mechanical & Electrical Design", "Embedded Computing Systems", "Critical Infrastructure", "Aviation Projects"],
      achievements: ["26+ years industry experience", "Pioneered embedded computing systems", "Aviation project specialist"],
      image: "/images/Surya.jpg"
    }
  ];

  const companyValues = [
    {
      title: "Innovation Excellence",
      description: "Continuously pushing the boundaries of critical infrastructure technology",
      icon: Lightbulb
    },
    {
      title: "Client Success", 
      description: "Committed to delivering exceptional results that exceed expectations",
      icon: Users
    },
    {
      title: "Reliability",
      description: "Building dependable solutions with uncompromising quality standards",
      icon: Shield
    },
    {
      title: "Strategic Vision",
      description: "Fostering a culture of strategic planning and long-term excellence",
      icon: Target
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
            Our <span className="text-g2c-blue">Leadership Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation in critical facility infrastructure. 
            Our team brings decades of expertise in technology, operations, and strategic growth.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {leaders.map((leader, index) => {
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              // Get first and last name initials only (max 2 letters)
              const nameParts = leader.name.split(' ');
              const initials = nameParts.length >= 2 
                ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
                : nameParts[0].substring(0, 2);
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow group h-full flex flex-col">
                  <CardHeader className="text-center flex-shrink-0">
                    <div className={`w-32 h-32 mx-auto mb-6 rounded-full ${bgColor} p-1`}>
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                        <span className="text-4xl font-bold text-primary">{initials}</span>
                      </div>
                    </div>
                  <CardTitle className="text-xl font-semibold">{leader.name}</CardTitle>
                  <p className="text-primary font-medium">{leader.role}</p>
                  <Badge variant="secondary" className="w-fit mx-auto">{leader.experience}</Badge>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Expertise</h4>
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

                  <div className="flex gap-2 pt-4 border-t border-primary/20 mt-auto">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-g2c-green">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our leadership and drive our success in delivering 
              world-class infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 ${bgColor} rounded-full flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
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
            Ready to Work with <span className="text-g2c-blue">Our Team?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with our leadership team to discuss your infrastructure needs 
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