import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const solutionItems = [
    { name: "AI-Ready Data Centers", path: "/solutions/ai-ready" },
    { name: "Container Data Centers", path: "/solutions/container" },
    { name: "Edge Data Centers", path: "/solutions/edge" },
    { name: "Prefabricated Data Centers", path: "/solutions/prefab" },
    { name: "HPC Data Centers", path: "/solutions/hpc" },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-ai rounded-lg ai-glow"></div>
            <span className="text-xl font-display font-bold text-gradient-ai">Grid2Chip</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith("/solutions") ? "text-primary" : "text-muted-foreground"
                )}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {solutionsOpen && (
                <div
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-primary/20 rounded-lg shadow-lg ai-glow z-50"
                >
                  <div className="p-2">
                    {solutionItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/industries") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Industries
            </Link>

            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              )}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>

            <Button variant="hero" size="sm" asChild>
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-primary/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Solutions</div>
                <div className="space-y-1 ml-4">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-1 text-sm text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/industries"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>

              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 pt-2">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/demo" onClick={() => setIsOpen(false)}>
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;