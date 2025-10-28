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
            Leading Expert in <span className="text-g2c-blue">Data Center Solutions</span>
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
                <CardTitle className="text-3xl font-display font-bold mb-4">Our Purpose</CardTitle>
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
                <CardTitle className="text-3xl font-display font-bold mb-4">Our Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We foster a culture of excellence, collaboration, and continuous innovation. Our team is driven by integrity, accountability, and a passion for pushing technological boundaries. We believe in empowering our people to think creatively, work collaboratively, and deliver exceptional results that exceed client expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Strengths - Illustrated Infographic */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-g2c-green/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Key Strengths of <span className="text-g2c-green">Our Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the core principles that make us a leader in data center solutions.
            </p>
          </div>
          
          {/* Infographic Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Row 1: Large Feature - Advanced Engineering */}
            <div className="lg:col-span-7 relative animate-fade-in">
              <div className="flex flex-col items-center text-center p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02]">
                <Cpu className="w-24 h-24 lg:w-32 lg:h-32 text-primary mb-8 animate-pulse" />
                <div className="text-7xl lg:text-9xl font-bold text-primary mb-4 tracking-tight">95%</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Advanced Engineering</h3>
                <p className="text-muted-foreground text-base lg:text-lg max-w-lg">
                  We leverage cutting-edge technologies, including advanced analytics and smart systems, for predictive maintenance and optimized data center management.
                </p>
              </div>
            </div>
            
            {/* Row 1: Medium Feature - Client-Centric */}
            <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-g2c-blue/10 via-g2c-blue/5 to-transparent border border-g2c-blue/20 hover:border-g2c-blue/40 transition-all duration-500 hover:scale-[1.02] h-full">
                <Users className="w-20 h-20 lg:w-24 lg:h-24 text-g2c-blue mb-6" />
                <div className="flex gap-4 lg:gap-6 mb-6">
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-g2c-blue">98%</div>
                    <div className="text-xs lg:text-sm text-muted-foreground mt-1">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-g2c-blue">96%</div>
                    <div className="text-xs lg:text-sm text-muted-foreground mt-1">Retention</div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-g2c-blue">92</div>
                    <div className="text-xs lg:text-sm text-muted-foreground mt-1">NPS Score</div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">Client-Centric Solutions</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Our process is built around your unique requirements. We design and build tailored data center infrastructure.
                </p>
              </div>
            </div>
            
            {/* Row 2: Three Equal Columns */}
            {/* Guaranteed Performance */}
            <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:scale-[1.02] h-full">
                <Award className="w-16 h-16 lg:w-20 lg:h-20 text-green-500 mb-6" />
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-green-500">99.998%</div>
                    <div className="text-xs text-muted-foreground">On-Time</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-green-500">100%</div>
                    <div className="text-xs text-muted-foreground">Quality</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-green-500">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-2">Guaranteed Performance</h3>
                <p className="text-muted-foreground text-sm">
                  We are committed to rapid, on-time deployment. Our projects are managed with precision.
                </p>
              </div>
            </div>
            
            {/* Culture of Innovation */}
            <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:scale-[1.02] h-full">
                <Lightbulb className="w-16 h-16 lg:w-20 lg:h-20 text-yellow-500 mb-6" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-500">2021</div>
                  <div className="text-3xl lg:text-4xl text-yellow-500">→</div>
                  <div className="text-3xl lg:text-5xl font-bold text-yellow-500">2024</div>
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-yellow-500 mb-4">↑92%</div>
                <h3 className="text-lg lg:text-xl font-bold mb-2">Culture of Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Through continuous R&D, we stay at the forefront of data center technology.
                </p>
              </div>
            </div>
            
            {/* Uncompromising Reliability */}
            <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] h-full">
                <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-blue-500 mb-6" />
                <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">99.998%</div>
                <div className="text-sm lg:text-base text-muted-foreground mb-6 uppercase tracking-wider">Uptime</div>
                <h3 className="text-lg lg:text-xl font-bold mb-2">Uncompromising Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Our core focus is on maximizing data center uptime through superior design.
                </p>
              </div>
            </div>
            
            {/* Row 3: Full Width Cross-Sector */}
            <div className="lg:col-span-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-8 mb-8">
                  <TrendingUp className="w-12 h-12 lg:w-16 lg:h-16 text-purple-500 mb-4 lg:mb-0" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-center lg:text-left">Cross-Sector Expertise</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                      <div className="text-2xl lg:text-3xl font-bold text-purple-500">25%</div>
                    </div>
                    <div className="text-sm lg:text-base font-medium text-center">Pharmaceutical</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                      <div className="text-2xl lg:text-3xl font-bold text-purple-500">30%</div>
                    </div>
                    <div className="text-sm lg:text-base font-medium text-center">IT/ITES</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                      <div className="text-2xl lg:text-3xl font-bold text-purple-500">20%</div>
                    </div>
                    <div className="text-sm lg:text-base font-medium text-center">Smart Cities</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                      <div className="text-2xl lg:text-3xl font-bold text-purple-500">25%</div>
                    </div>
                    <div className="text-sm lg:text-base font-medium text-center">Industrial</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
                  We have a proven track record of success across diverse industries, including pharmaceuticals, research, smart cities, and industrial automation.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-g2c-blue">Certifications</span>
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
            Ready to Build Your <span className="text-g2c-green">Next Data Center?</span>
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
