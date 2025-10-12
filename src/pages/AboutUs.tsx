import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Award, Shield, Cpu, Users, TrendingUp, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            About Grid2Chip
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Leading Expert in <span className="text-primary">Data Center Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading expert in the data center industry, specializing in the design, construction, and lifecycle management of high-performance data centers. Our integrated approach ensures that every project, from concept to completion, is engineered for maximum reliability, efficiency, and scalability.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-display font-bold mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the industry's most trusted partner in developing the data center infrastructure that powers the future. We are committed to setting new benchmarks in performance and sustainability, ensuring our clients' mission-critical operations are resilient and future-proof.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-display font-bold mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver customized, innovative solutions that guarantee the security and peak performance of our clients' data center facilities. Through expert engineering, collaborative partnership, and a commitment to technological advancement, we empower organizations with robust, intelligent, and scalable infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key Strengths of <span className="text-primary">Our Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the core principles that make us a leader in data center solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Advanced Engineering",
                description: "We leverage cutting-edge technologies, including advanced analytics and smart systems, for predictive maintenance and optimized data center management."
              },
              {
                icon: Users,
                title: "Client-Centric Solutions",
                description: "Our process is built around your unique requirements. We design and build tailored data center infrastructure that aligns perfectly with your operational and business goals."
              },
              {
                icon: Award,
                title: "Guaranteed Performance & Delivery",
                description: "We are committed to rapid, on-time deployment. Our projects are managed with precision to meet guaranteed timelines and performance metrics."
              },
              {
                icon: Lightbulb,
                title: "A Culture of Innovation",
                description: "Through continuous research and development, we stay at the forefront of data center technology to deliver next-generation solutions for our clients."
              },
              {
                icon: TrendingUp,
                title: "Cross-Sector Expertise",
                description: "We have a proven track record of success across diverse industries, including pharmaceuticals, research, smart cities, and industrial automation."
              },
              {
                icon: Shield,
                title: "Uncompromising Reliability",
                description: "Our core focus is on maximizing data center uptime and operational efficiency through superior design, intelligent monitoring, and proactive maintenance."
              }
            ].map((aspect, index) => {
              const Icon = aspect.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{aspect.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{aspect.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certifications reflect our commitment to the highest standards in data center design, implementation, and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ATD - Accredited Tier Designer",
                description: "Seetharam Mannava",
                date: "06 July 2017",
                organization: "UPTIME INSTITUTE",
                icon: Award,
                status: "Certified"
              },
              {
                title: "ISO 9001:2015",
                description: "Quality Management System",
                date: "Current",
                organization: "ISO",
                icon: Shield,
                status: "Current"
              },
              {
                title: "ISO 27001:2022",
                description: "Information Security Management",
                date: "Current",
                organization: "ISO",
                icon: Shield,
                status: "Current"
              }
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="secondary">{cert.status}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground"><span className="font-semibold">Date:</span> {cert.date}</p>
                      <p className="text-sm text-muted-foreground"><span className="font-semibold">By:</span> {cert.organization}</p>
                    </div>
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
            Ready to Build Your <span className="text-primary">Next Data Center?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Partner with our expert team to experience unparalleled reliability and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/solutions">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
