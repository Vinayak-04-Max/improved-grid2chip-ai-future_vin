import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Thermometer, Zap, Shield, ArrowRight, Activity, BarChart3, AlertTriangle, Settings, CheckCircle } from "lucide-react";

const BuildingManagement = () => {
  const features = [
    {
      title: "Centralized Monitoring & Control",
      description: "A single, intuitive interface to monitor and manage all of your facility's mechanical and electrical systems, from HVAC to power distribution.",
      icon: Activity
    },
    {
      title: "Advanced Energy Management",
      description: "Track, analyze, and optimize energy consumption in real-time. Implement intelligent scheduling and load management to reduce operational costs and carbon footprint.",
      icon: Zap
    },
    {
      title: "Predictive Maintenance Alerts",
      description: "Leverage smart analytics to predict potential equipment failures before they occur. Shift from reactive repairs to a proactive maintenance strategy, maximizing uptime.",
      icon: AlertTriangle
    },
    {
      title: "Automated Environmental Control",
      description: "Maintain optimal temperature, humidity, and air quality with automated adjustments based on real-time sensor data and occupancy patterns.",
      icon: Thermometer
    },
    {
      title: "Comprehensive Reporting & Analytics",
      description: "Generate detailed reports on system performance, energy usage, and operational trends. Use data-driven insights to make informed decisions and demonstrate compliance.",
      icon: BarChart3
    },
    {
      title: "Seamless Systems Integration",
      description: "Our open-platform approach ensures compatibility with a wide range of building systems and protocols, creating a unified and cohesive management ecosystem.",
      icon: Settings
    }
  ];

  const integratedSystems = {
    systems: ["HVAC Systems", "Power Management", "Lighting Control", "Physical Security", "Fire & Life Safety", "Environmental Sensors"],
    protocols: ["BACnet", "Modbus", "LonWorks", "OPC", "SNMP", "MQTT"]
  };

  const benefits = [
    {
      title: "Reduced Operational Costs",
      description: "Significantly lower your energy bills and maintenance expenses through intelligent automation and optimization."
    },
    {
      title: "Improved Reliability & Uptime",
      description: "Proactively address potential issues to ensure your critical systems are always available when you need them."
    },
    {
      title: "Enhanced Occupant Comfort & Safety",
      description: "Create a safer, more comfortable, and productive environment for employees and visitors."
    },
    {
      title: "Centralized Operational Efficiency",
      description: "Streamline facility management with a single point of control, reducing complexity and freeing up staff."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Utilize comprehensive analytics to optimize long-term facility performance and capital planning."
    }
  ];

  const applications = [
    { title: "Mission-Critical Data Centers", description: "Ensure maximum uptime and efficiency for your most critical IT environments." },
    { title: "Commercial & Corporate Buildings", description: "Optimize comfort, safety, and energy use across office towers and corporate campuses." },
    { title: "Industrial & Manufacturing Facilities", description: "Maintain precise environmental controls for complex manufacturing processes." },
    { title: "Healthcare & Life Sciences", description: "Ensure compliance and reliability for sensitive environments like hospitals and laboratories." }
  ];

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
            Centralize the monitoring and control of your facility's critical infrastructure with our advanced Building Management Systems (BMS). Gain unparalleled visibility, automate operations, and drive significant gains in efficiency and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request System Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">Speak with a BMS Engineer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key Features of Our <span className="text-gradient-ai">BMS Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the core components of a truly intelligent and integrated facility management platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-primary/20">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 bg-gradient-ai rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrated Systems */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Integrated Systems & <span className="text-gradient-ai">Protocols</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We integrate a wide array of critical facility systems for holistic control.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle>Integrated Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {integratedSystems.systems.map((system, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span className="text-muted-foreground">{system}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle>Protocols Supported</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {integratedSystems.protocols.map((protocol, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span className="text-muted-foreground">{protocol}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Core <span className="text-gradient-ai">Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Applications */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ideal <span className="text-gradient-ai">Applications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="w-6 h-6 text-primary mr-3" />
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Ready to Optimize Your <span className="text-gradient-ai">Facility Management?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Take control of your building's performance with a powerful, centralized Building Management System. Contact us to learn how.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingManagement;
