import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/g2c-logo-new.png";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [dataCenterOpen, setDataCenterOpen] = useState(false);
  const [bmsOpen, setBmsOpen] = useState(false);

  const aboutItems = [
    { name: "About Us", path: "/about/us" },
    { name: "Partners", path: "/about/partners" },
    { name: "Testimonials & Awards", path: "/about/testimonials" },
    { name: "Our Leadership", path: "/about/leadership" },
    { name: "Our Clients", path: "/about/clients" },
    { name: "Careers", path: "/about/careers" }
  ];

  const productItems = [
    { name: "IMS", path: "/products/ims" }
  ];

  const dataCenterItems = [
    { name: "Edge Data Center", path: "/data-center/edge" },
    { name: "Custom Build Data Center", path: "/data-center/custom" },
    { name: "AI Ready Data Centers", path: "/data-center/ai-ready" },
    { name: "Prefabricated Data Centers", path: "/products/prefab-container" }
  ];

  const bmsItems = [
    { name: "Building Management System", path: "/bms/building-management" },
    { name: "ELV Systems", path: "/bms/elv-systems" },
    { name: "Fire Safety Systems", path: "/bms/fire-safety" },
    { name: "Control Panel Services", path: "/bms/control-panels" }
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Grid2Chip Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* About G2C Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith("/about") ? "text-primary" : "text-muted-foreground"
                )}
              >
                About G2C
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {aboutOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-64 bg-card border border-primary/20 rounded-lg shadow-lg hover:border-primary/40 transition-all duration-300">
                    <div className="p-2">
                      {aboutItems.map((item) => (
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
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith("/products") ? "text-primary" : "text-muted-foreground"
                )}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-64 bg-card border border-primary/20 rounded-lg shadow-lg ai-glow">
                    <div className="p-2">
                      {productItems.map((item) => (
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
                </div>
              )}
            </div>

            {/* Data Center Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDataCenterOpen(true)}
              onMouseLeave={() => setDataCenterOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith("/data-center") ? "text-primary" : "text-muted-foreground"
                )}
              >
                Data Center
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dataCenterOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-64 bg-card border border-primary/20 rounded-lg shadow-lg ai-glow">
                    <div className="p-2">
                      {dataCenterItems.map((item) => (
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
                </div>
              )}
            </div>

            {/* BMS Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setBmsOpen(true)}
              onMouseLeave={() => setBmsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith("/bms") ? "text-primary" : "text-muted-foreground"
                )}
              >
                BMS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {bmsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-64 bg-card border border-primary/20 rounded-lg shadow-lg ai-glow">
                    <div className="p-2">
                      {bmsItems.map((item) => (
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
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === "/blog" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact Us
            </Link>

            <Button variant="ai" size="sm" asChild>
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-primary/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-t border-primary/20 ai-glow max-h-96 overflow-y-auto">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* About G2C Mobile */}
              <div className="space-y-2">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={cn(
                    "flex items-center w-full text-sm font-medium transition-colors hover:text-primary text-left",
                    location.pathname.startsWith("/about") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  About G2C
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", aboutOpen ? "rotate-180" : "")} />
                </button>
                
                {aboutOpen && (
                  <div className="pl-4 space-y-2">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Mobile */}
              <div className="space-y-2">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={cn(
                    "flex items-center w-full text-sm font-medium transition-colors hover:text-primary text-left",
                    location.pathname.startsWith("/products") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  Products
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", productsOpen ? "rotate-180" : "")} />
                </button>
                
                {productsOpen && (
                  <div className="pl-4 space-y-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Data Center Mobile */}
              <div className="space-y-2">
                <button
                  onClick={() => setDataCenterOpen(!dataCenterOpen)}
                  className={cn(
                    "flex items-center w-full text-sm font-medium transition-colors hover:text-primary text-left",
                    location.pathname.startsWith("/data-center") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  Data Center
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", dataCenterOpen ? "rotate-180" : "")} />
                </button>
                
                {dataCenterOpen && (
                  <div className="pl-4 space-y-2">
                    {dataCenterItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* BMS Mobile */}
              <div className="space-y-2">
                <button
                  onClick={() => setBmsOpen(!bmsOpen)}
                  className={cn(
                    "flex items-center w-full text-sm font-medium transition-colors hover:text-primary text-left",
                    location.pathname.startsWith("/bms") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  BMS
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", bmsOpen ? "rotate-180" : "")} />
                </button>
                
                {bmsOpen && (
                  <div className="pl-4 space-y-2">
                    {bmsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>

              <Button variant="ai" size="sm" className="w-full" asChild>
                <Link to="/demo" onClick={() => setIsOpen(false)}>Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;