import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight,
  CheckCircle,
  Video,
  MessageSquare,
  Phone
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    solutionType: "",
    teamSize: "",
    timeline: "",
    demoType: "",
    preferredTime: "",
    requirements: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Scheduled!",
      description: "Thank you for booking a demo. We'll send you a calendar invitation within 2 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      solutionType: "",
      teamSize: "",
      timeline: "",
      demoType: "",
      preferredTime: "",
      requirements: "",
      agreeToTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const demoTypes = [
    {
      type: "virtual",
      icon: Video,
      title: "Virtual Demo",
      duration: "30 minutes",
      description: "Live online demonstration with Q&A session",
      features: [
        "Interactive solution walkthrough",
        "Real-time Q&A with experts",
        "Custom use case discussion",
        "Follow-up resource sharing"
      ]
    },
    {
      type: "phone",
      icon: Phone,
      title: "Phone Consultation", 
      duration: "20 minutes",
      description: "Initial consultation to understand your needs",
      features: [
        "Requirements assessment",
        "Solution recommendations",
        "Timeline discussion",
        "Next steps planning"
      ]
    },
    {
      type: "onsite",
      icon: Users,
      title: "On-Site Visit",
      duration: "2-4 hours",
      description: "Comprehensive on-site consultation and demonstration",
      features: [
        "Facility assessment",
        "Team presentations",
        "Technical deep-dive",
        "Custom solution design"
      ]
    }
  ];

  const benefits = [
    "See live demonstrations of our AI-ready infrastructure",
    "Discuss your specific requirements with our experts",
    "Get custom solution recommendations",
    "Receive detailed ROI analysis and cost estimates",
    "Learn about implementation timelines and support",
    "Access to exclusive technical resources and documentation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Book Your Demo
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Experience <span className="text-primary">Infrastructure</span> in Action
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            See firsthand how Grid2Chip's AI-ready data center solutions can transform 
            your organization's computing capabilities and accelerate innovation.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>30-minute sessions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Expert-led demonstrations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Free consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Choose Your <span className="text-primary">Demo Format</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the format that works best for your team and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {demoTypes.map((demo, index) => {
              const Icon = demo.icon;
              const bgColor = index % 2 === 0 ? "bg-primary" : "bg-accent";
              return (
                <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 ai-glow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-xl ${bgColor} p-4 mx-auto mb-4 ai-pulse`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{demo.title}</CardTitle>
                    <p className="text-primary font-medium">{demo.duration}</p>
                    <p className="text-muted-foreground">{demo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {demo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display">Schedule Your Demo</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll contact you within 2 hours to confirm your demo session.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      placeholder="CTO, IT Director, etc."
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Project Information */}
                <div className="border-t border-primary/20 pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Project Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="solutionType">Solution Interest *</Label>
                      <Select value={formData.solutionType} onValueChange={(value) => handleInputChange("solutionType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select solution type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-ready">AI-Ready Data Centers</SelectItem>
                          <SelectItem value="edge">Edge Computing</SelectItem>
                          <SelectItem value="hpc">High-Performance Computing</SelectItem>
                          <SelectItem value="container">Container Solutions</SelectItem>
                          <SelectItem value="prefab">Prefabricated Solutions</SelectItem>
                          <SelectItem value="multiple">Multiple Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Select value={formData.teamSize} onValueChange={(value) => handleInputChange("teamSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 people</SelectItem>
                          <SelectItem value="11-50">11-50 people</SelectItem>
                          <SelectItem value="51-200">51-200 people</SelectItem>
                          <SelectItem value="200+">200+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                          <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                          <SelectItem value="long">Long-term (12+ months)</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="demoType">Preferred Demo Format *</Label>
                      <Select value={formData.demoType} onValueChange={(value) => handleInputChange("demoType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select demo format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="virtual">Virtual Demo (30 min)</SelectItem>
                          <SelectItem value="phone">Phone Consultation (20 min)</SelectItem>
                          <SelectItem value="onsite">On-Site Visit (2-4 hours)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements or Questions</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    placeholder="Tell us about your specific needs, current challenges, or any questions you'd like us to address during the demo..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to receive communications about Grid2Chip solutions and understand that 
                    my information will be used according to the Privacy Policy.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.agreeToTerms}
                >
                  Schedule My Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              What to <span className="text-primary">Expect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what you'll gain from your demo session with our AI infrastructure experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-card rounded-lg border border-primary/20">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block bg-gradient-ai/10 border-primary/30">
              <CardContent className="p-6">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Questions Before Booking?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is available to answer any questions about our solutions or demo process.
                </p>
                <Button variant="outline" size="sm">
                  Chat with Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;