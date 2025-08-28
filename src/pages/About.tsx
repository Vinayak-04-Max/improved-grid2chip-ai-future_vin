import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Lightbulb, 
  Shield, 
  Leaf,
  ArrowRight,
  Calendar,
  Award,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Grid2Chip established with vision to revolutionize data center infrastructure for AI era"
    },
    {
      year: "2021",
      title: "First AI-Ready Deployment",
      description: "Launched our first purpose-built AI data center for pharmaceutical research"
    },
    {
      year: "2022",
      title: "Edge Computing Expansion",
      description: "Introduced edge data center solutions for telecommunications and smart cities"
    },
    {
      year: "2023",
      title: "Global Scaling",
      description: "Expanded operations internationally with deployments across three continents"
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description: "Leading the industry in sustainable AI infrastructure with 100+ successful deployments"
    }
  ];

  const team = [
    {
      name: "Dr. Elena Vasquez",
      role: "Chief Executive Officer",
      background: "Former VP of Infrastructure at NVIDIA, 15+ years in AI hardware"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      background: "Ex-Google data center architect, specialist in sustainable computing"
    },
    {
      name: "Sarah Martinez",
      role: "VP of Engineering",
      background: "Previously at Microsoft Azure, expert in edge computing solutions"
    },
    {
      name: "David Kim",
      role: "Head of Sustainability",
      background: "Former Tesla energy systems engineer, green technology innovator"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in data center design and deployment."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our infrastructure delivers 99.99% uptime with enterprise-grade security."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Every solution is designed with environmental responsibility at its core."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with clients to ensure solutions exceed expectations."
    }
  ];

  const achievements = [
    { number: "100+", label: "Data Centers Deployed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.99%", label: "Uptime Guarantee" },
    { number: "40%", label: "Energy Savings" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            About Grid2Chip
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Building the <span className="text-gradient-ai">Infrastructure</span> of Tomorrow
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            We are pioneers in AI-ready data center infrastructure, combining cutting-edge technology 
            with sustainable practices to create the foundation for next-generation computing.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-gradient-ai mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="bg-gradient-card border-primary/20 ai-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-blue to-neon-cyan p-4 mb-6 ai-pulse">
                  <Target className="w-full h-full text-navy-deep" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to AI-ready infrastructure by designing and deploying sustainable, 
                  scalable data centers that empower organizations to harness the full potential of 
                  artificial intelligence and advanced computing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 ai-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary p-4 mb-6 ai-pulse">
                  <Lightbulb className="w-full h-full text-navy-deep" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every organization has access to intelligent, sustainable infrastructure 
                  that adapts to their needs, scales with their growth, and contributes to a more 
                  sustainable future through innovative technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-ai">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from initial design to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-ai">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup vision to industry leader, see how we've evolved to meet the growing demands of AI infrastructure.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-ai opacity-50"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-gradient-card border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-2xl font-display font-bold text-gradient-ai">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-8 h-8 rounded-full bg-gradient-ai ai-pulse"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Leadership <span className="text-gradient-ai">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans with decades of combined experience in AI, data centers, and sustainable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-ai mx-auto mb-4"></div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Join Us in Building the <span className="text-gradient-ai">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you're looking for infrastructure solutions or want to be part of our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/demo">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;