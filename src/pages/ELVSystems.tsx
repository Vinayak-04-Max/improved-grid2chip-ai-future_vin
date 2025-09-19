import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Camera, Phone, Shield, ArrowRight } from "lucide-react";

const ELVSystems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            ELV Systems
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Extra Low Voltage <span className="text-gradient-ai">Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive ELV solutions including security, communications, and monitoring systems.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ELVSystems;