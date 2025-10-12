import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, Cpu, Monitor, Zap, ArrowRight } from "lucide-react";

const ControlPanels = () => {
  const solutions = [
    { title: "PLC (Programmable Logic Controller) Panels", description: "The core of your automation system, programmed to manage complex sequences and processes with high reliability." },
    { title: "Motor Control Centers (MCCs)", description: "Centralize the control of all your motors in a single, organized enclosure for applications from HVAC to industrial machinery." },
    { title: "VFD (Variable Frequency Drive) Panels", description: "Optimize motor speed, improve energy efficiency, and reduce mechanical stress with custom VFD control panels." },
    { title: "BMS/DDC Panels", description: "Build the hardware backbone for your Building Management System with panels housing Direct Digital Controllers." },
    { title: "Custom HMI/SCADA Interfaces", description: "Develop intuitive interfaces that provide clear visualization, data logging, and control over your operations." }
  ];

  const benefits = [
    { title: "Tailored to Your Exact Needs", description: "Move beyond off-the-shelf solutions with a control panel designed specifically for your application." },
    { title: "Enhanced System Reliability", description: "Professionally wired and tested panels reduce the risk of failure and improve stability." },
    { title: "Simplified Operations", description: "Logical layouts and clear labeling make our panels easy to operate and maintain." },
    { title: "Built for Durability", description: "High-quality enclosures and components ensure long-term performance in demanding environments." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">Control Systems</Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Control Panel <span className="text-g2c-blue">Services</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Gain precision control over your facility's critical systems with our custom-designed and expertly fabricated control panels.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request Quote for Custom Panel<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Custom Control Panel <span className="text-g2c-green">Solutions</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20">
                <CardHeader><CardTitle>{solution.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{solution.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready for <span className="text-g2c-blue">Precision Control?</span>
          </h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Custom Quote<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ControlPanels;
