import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Cpu, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

const CustomDataCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Custom Solutions
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Custom Build <span className="text-gradient-ai">Data Centers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tailored AI-enhanced data center solutions designed specifically for your unique requirements and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Custom Design
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Bespoke Design", icon: Building2, desc: "Tailored to your exact specifications" },
              { title: "AI Integration", icon: Cpu, desc: "Built-in AI capabilities from the ground up" },
              { title: "Future-Proof", icon: Shield, desc: "Scalable architecture for tomorrow's needs" },
              { title: "Energy Efficient", icon: Zap, desc: "Optimized for minimal environmental impact" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-primary/20">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-navy-deep" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDataCenter;