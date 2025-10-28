import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Award, Shield, Cpu, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { 
  RadialBarChart, 
  RadialBar, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip
} from "recharts";

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

      {/* Key Strengths */}
      <section className="py-20 lg:py-32 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Key Strengths of <span className="text-g2c-green">Our Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the core principles that make us a leader in data center solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Engineering - Radial Chart */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-4">Advanced Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                      cx="50%" 
                      cy="50%" 
                      innerRadius="60%" 
                      outerRadius="90%" 
                      barSize={15} 
                      data={[{ name: 'Tech Adoption', value: 95, fill: 'hsl(var(--primary))' }]}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar
                        background
                        dataKey="value"
                        cornerRadius={10}
                      />
                      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-primary text-3xl font-bold">
                        95%
                      </text>
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-muted-foreground text-sm">
                  We leverage cutting-edge technologies, including advanced analytics and smart systems, for predictive maintenance and optimized data center management.
                </p>
              </CardContent>
            </Card>

            {/* Client-Centric Solutions - Bar Chart */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-4">Client-Centric Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Satisfaction', value: 98 },
                      { name: 'Retention', value: 96 },
                      { name: 'NPS Score', value: 92 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis domain={[0, 100]} className="text-xs" />
                      <RechartsTooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our process is built around your unique requirements. We design and build tailored data center infrastructure that aligns perfectly with your operational and business goals.
                </p>
              </CardContent>
            </Card>

            {/* Guaranteed Performance - Progress Bars */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-4">Guaranteed Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mb-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">On-Time Delivery</span>
                      <span className="text-sm font-bold text-primary">99.998%</span>
                    </div>
                    <Progress value={99.998} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Quality Standards</span>
                      <span className="text-sm font-bold text-primary">100%</span>
                    </div>
                    <Progress value={100} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Client Satisfaction</span>
                      <span className="text-sm font-bold text-primary">98%</span>
                    </div>
                    <Progress value={98} className="h-3" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  We are committed to rapid, on-time deployment. Our projects are managed with precision to meet guaranteed timelines and performance metrics.
                </p>
              </CardContent>
            </Card>

            {/* Culture of Innovation - Line Chart */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-4">Culture of Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { year: '2021', investment: 65 },
                      { year: '2022', investment: 78 },
                      { year: '2023', investment: 85 },
                      { year: '2024', investment: 92 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="year" className="text-xs" />
                      <YAxis domain={[0, 100]} className="text-xs" />
                      <RechartsTooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="investment" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-muted-foreground text-sm">
                  Through continuous research and development, we stay at the forefront of data center technology to deliver next-generation solutions for our clients.
                </p>
              </CardContent>
            </Card>

            {/* Cross-Sector Expertise - Pie Chart */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-4">Cross-Sector Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Pharma', value: 25 },
                          { name: 'IT/ITES', value: 30 },
                          { name: 'Smart Cities', value: 20 },
                          { name: 'Industrial', value: 25 }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {[
                          'hsl(var(--primary))',
                          'hsl(var(--chart-2))',
                          'hsl(var(--chart-3))',
                          'hsl(var(--chart-4))'
                        ].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-muted-foreground text-sm">
                  We have a proven track record of success across diverse industries, including pharmaceuticals, research, smart cities, and industrial automation.
                </p>
              </CardContent>
            </Card>

            {/* Uncompromising Reliability - Radial Gauge */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-4">Uncompromising Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                      cx="50%" 
                      cy="50%" 
                      innerRadius="50%" 
                      outerRadius="100%" 
                      barSize={20} 
                      data={[{ name: 'Uptime', value: 99.998, fill: 'hsl(var(--primary))' }]}
                      startAngle={180}
                      endAngle={0}
                    >
                      <RadialBar
                        background
                        dataKey="value"
                        cornerRadius={10}
                      />
                      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="fill-primary text-2xl font-bold">
                        99.998%
                      </text>
                      <text x="50%" y="70%" textAnchor="middle" dominantBaseline="middle" className="fill-muted-foreground text-xs">
                        Uptime
                      </text>
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our core focus is on maximizing data center uptime and operational efficiency through superior design, intelligent monitoring, and proactive maintenance.
                </p>
              </CardContent>
            </Card>
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
