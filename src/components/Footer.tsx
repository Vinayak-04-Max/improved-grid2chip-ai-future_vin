import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, Globe, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/g2c-logo-new.png";
const Footer = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  return <footer className="relative bg-muted border-t border-border overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid-3d opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true
    }} className="relative fib-container section-fib">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fib-34">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-fib-21">
            <motion.img src={logo} alt="Grid2Chip Logo" className="h-10" whileHover={{
            scale: 1.05
          }} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting AI-ready data centers for the future. Sustainable, scalable, and optimized for next-generation computing.
            </p>
            <div className="flex gap-fib-13">
  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/company/grid2chip/?originalSubdomain=in"
    target="_blank"
    rel="noopener noreferrer"
    className="p-fib-8 rounded-fib bg-surface border border-border hover:border-primary transition-colors group"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
  </motion.a>

  {/* YouTube */}
  <motion.a
    href="https://www.youtube.com/channel/UCRVkgOLB_SH4wbOjCMxTozQ"
    target="_blank"
    rel="noopener noreferrer"
    className="p-fib-8 rounded-fib bg-surface border border-border hover:border-primary transition-colors group"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
  </motion.a>

  {/* Facebook */}
  <motion.a
    href="https://www.facebook.com/Grid2chip/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-fib-8 rounded-fib bg-surface border border-border hover:border-primary transition-colors group"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
  </motion.a>
</div>
           
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants} className="space-y-fib-21">
            <h3 className="text-lg font-display font-semibold text-gradient-primary">Solutions</h3>
            <div className="space-y-fib-13">
              {[{
              to: "/solutions/ai-ready",
              label: "AI-Ready Data Centers"
            }, {
              to: "/solutions/container",
              label: "Custom Build Centers"
            }, {
              to: "/solutions/edge",
              label: "Edge Data Centers"
            }, {
              to: "/solutions/prefab",
              label: "Prefabricated Data Centers"
            }, {
              to: "/solutions/hpc",
              label: "HPC Data Centers"
            }, {
              to: "/services/ims",
              label: "IMS"
            }].map(link => <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors link-underline">
                  {link.label}
                </Link>)}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div variants={itemVariants} className="space-y-fib-21">
            <h3 className="text-lg font-display font-semibold text-gradient-accent">Industries</h3>
            <div className="space-y-fib-13">
              {["Pharmaceutical", "Research & Development", "Smart Cities", "Telecommunications", "Defense & Security", "Autonomous Vehicles"].map(industry => <div key={industry} className="text-sm text-muted-foreground">
                  {industry}
                </div>)}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-fib-21">
            <h3 className="text-lg font-display font-semibold text-foreground">Contact</h3>
            <div className="space-y-fib-13">
              <div className="flex items-start gap-fib-8">
                <div className="p-fib-5 rounded-fib bg-primary/10 mt-1">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">#306, Downtown mall,
                <br />
                  Beside Lotus Hospital<br />
                  Lakdikapool, Hyderabad - 500004.
                </div>
              </div>
              <div className="flex items-start gap-fib-8">
                <div className="p-fib-5 rounded-fib bg-primary/10 mt-1">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:sales@grid2chip.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">sales@grid2chip.com</a>
              </div>
              <div className="flex items-start gap-fib-8">
                <div className="p-fib-5 rounded-fib bg-primary/10 mt-1">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  +91-40-23302112
                  7032808049
                </div>
              </div>
              <div className="space-y-fib-8 pt-fib-8">
                <Link to="/demo" className="block text-sm text-primary hover:text-primary-glow transition-colors font-medium">
                  Book a Demo →
                </Link>
                <Link to="/contact" className="block text-sm text-primary hover:text-primary-glow transition-colors font-medium">
                  Get in Touch →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div variants={itemVariants} className="border-t border-primary/10 mt-fib-55 pt-fib-21">
          <div className="flex flex-col md:flex-row justify-between items-center gap-fib-13">
            <p className="text-sm text-muted-foreground">© 2026 Grid2Chip. All rights reserved.</p>
            <div className="flex gap-fib-21">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>;
};
export default Footer;
