import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-ai rounded-lg ai-glow"></div>
              <span className="text-xl font-display font-bold text-gradient-ai">Grid2Chip</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting AI-ready data centers for the future. Sustainable, scalable, and optimized for next-generation computing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@grid2chip.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
            <div className="space-y-2">
              <Link to="/solutions/ai-ready" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                AI-Ready Data Centers
              </Link>
              <Link to="/solutions/container" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Container Data Centers
              </Link>
              <Link to="/solutions/edge" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Edge Data Centers
              </Link>
              <Link to="/solutions/prefab" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Prefabricated Data Centers
              </Link>
              <Link to="/solutions/hpc" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                HPC Data Centers
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Industries</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Pharmaceutical</div>
              <div className="text-sm text-muted-foreground">Research & Development</div>
              <div className="text-sm text-muted-foreground">Smart Cities</div>
              <div className="text-sm text-muted-foreground">Telecommunications</div>
              <div className="text-sm text-muted-foreground">Defense & Security</div>
              <div className="text-sm text-muted-foreground">Autonomous Vehicles</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Innovation Hub<br />
                  Tech District, Silicon Valley
                </div>
              </div>
              <div className="space-y-2">
                <Link to="/demo" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                  Book a Demo
                </Link>
                <Link to="/contact" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Grid2Chip. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;