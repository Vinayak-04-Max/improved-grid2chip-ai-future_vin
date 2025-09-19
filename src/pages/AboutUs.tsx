import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Eye, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto border-primary/30 text-primary">
              <span className="relative">
                AI Infrastructure Innovators
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ai-pulse"></span>
              </span>
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              About <span className="text-gradient-ai">Grid2Chip</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leading player in the critical facility industry, where seamless connections 
              and integrated AI-enhanced solutions redefine the landscape of cutting-edge system integration.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="bg-gradient-card border-primary/20 ai-glow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-ai rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-navy-deep" />
                  </div>
                  <CardTitle className="text-2xl">AI-Enhanced Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  G2C vision is to be the leader in ensuring the seamless, secure, and optimal performance of 
                  critical facilities powered by AI. We aspire to set new benchmarks in reliability, efficiency, 
                  and sustainability, contributing to the resilience of our clients' mission-critical AI operations.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gradient-card border-primary/20 ai-glow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-ai rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-navy-deep" />
                  </div>
                  <CardTitle className="text-2xl">AI-Powered Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to provide clients with customized, AI-enhanced innovative solutions that guarantee 
                  the reliability, security, and smooth operation of critical facilities. Through collaboration and 
                  ongoing AI advancement, we empower clients with intelligent, future-ready systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Aspects */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key Aspects of Our <span className="text-gradient-ai">AI-Enhanced Profile</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the key aspects that make us leaders in AI-ready critical facility solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cutting-Edge AI Technologies",
                description: "Advanced AI-powered systems for intelligent facility management and predictive analytics."
              },
              {
                title: "Client-Centric AI Approach",
                description: "Customized AI solutions tailored to each client's specific critical facility requirements."
              },
              {
                title: "Time-Bound AI Services",
                description: "Rapid deployment of AI-enhanced systems with guaranteed timelines and performance metrics."
              },
              {
                title: "AI Innovation Hub",
                description: "Continuous research and development in AI technologies for next-generation facility solutions."
              },
              {
                title: "Cross-Sectoral AI Impact",
                description: "AI solutions spanning pharmaceuticals, research, smart cities, and industrial automation."
              },
              {
                title: "AI-Driven Reliability",
                description: "Enhanced system reliability and efficiency through artificial intelligence and machine learning."
              }
            ].map((aspect, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 group-hover:text-accent transition-colors" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{aspect.title}</h3>
                      <p className="text-sm text-muted-foreground">{aspect.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              AI-Enhanced <span className="text-gradient-ai">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certifications ensure the highest standards in AI-ready critical facility design and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ATD - AI-Ready Tier Designer",
                subtitle: "Seetharam Mannava",
                date: "06 July 2017",
                organization: "2020 UPTIME INSTITUTE"
              },
              {
                title: "ISO 9001:2015",
                subtitle: "Quality Management",
                date: "Current",
                organization: "International Standard"
              },
              {
                title: "ISO 27001:2022",
                subtitle: "Information Security",
                date: "Current",
                organization: "International Standard"
              }
            ].map((cert, index) => (
              <Card key={index} className="text-center bg-gradient-card border-primary/20 ai-glow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-navy-deep" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-primary mb-1">{cert.subtitle}</p>
                  <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                  <p className="text-xs text-muted-foreground">{cert.organization}</p>
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
            Ready to Transform Your <span className="text-gradient-ai">Critical Facilities</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience unparalleled efficiency, innovation, and connectivity with our expert AI-enhanced team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact">
                Get AI Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/products/ims">
                Explore AI Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;