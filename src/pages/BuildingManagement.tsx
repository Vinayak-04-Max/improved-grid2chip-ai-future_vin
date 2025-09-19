import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Thermometer, Zap, Shield, ArrowRight } from "lucide-react";

const BuildingManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            BMS Solutions
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Building Management <span className="text-gradient-ai">Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Intelligent building management systems with AI-powered automation and monitoring.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BuildingManagement;