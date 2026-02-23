import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import logo from "@/assets/g2c-logo-new.png";

const Navigation = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [dataCenterOpen, setDataCenterOpen] = useState(false);
  const [ibmsOpen, setIbmsOpen] = useState(false);

  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileDataCenterOpen, setMobileDataCenterOpen] = useState(false);
  const [mobileIbmsOpen, setMobileIbmsOpen] = useState(false);

  const aboutItems = [
    { name: "About Us", path: "/about/us" },
    { name: "Our Clients", path: "/about/clients" },
    { name: "Careers", path: "/about/careers" },
  ];

  const dataCenterItems = [
    { name: "Edge Data Center", path: "/data-center/edge" },
    { name: "Custom Build Data Center", path: "/data-center/custom" },
    { name: "HPC/AI-Ready Data Centers", path: "/data-center/hpc" },
    { name: "Prefabricated Data Centers", path: "/products/prefab-container" },
  ];

  const ibmsItems = [
    { name: "IMS", path: "/products/ims" },
    { name: "Building Management System", path: "/bms/building-management" },
    { name: "ELV Systems", path: "/bms/elv-systems" },
    { name: "Fire Safety Systems", path: "/bms/fire-safety" },
    { name: "Control Panel Services", path: "/bms/control-panels" },
  ];

  const NavLink = ({
    to,
    children,
    isActive,
  }: {
    to: string;
    children: React.ReactNode;
    isActive: boolean;
  }) => (
    <Link
      to={to}
      className={cn(
        "relative font-medium transition-all duration-300 text-base link-underline",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );

  const DropdownMenu = ({
    label,
    items,
    isOpen: menuOpen,
    setIsOpen: setMenuOpen,
    isActive,
  }: {
    label: string;
    items: { name: string; path: string }[];
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    isActive: boolean;
  }) => (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 font-medium transition-all duration-300 text-base",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {label}
        <motion.span
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="w-64 glass-frosted rounded-fib-lg overflow-hidden">
              <div className="absolute inset-0 border border-primary/20 rounded-fib-lg" />
              <div className="relative p-2">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm rounded-fib text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MobileAccordion = ({
    label,
    items,
    isOpen: accordionOpen,
    toggle,
    isActive,
  }: {
    label: string;
    items: { name: string; path: string }[];
    isOpen: boolean;
    toggle: () => void;
    isActive: boolean;
  }) => (
    <div>
      <button
        onClick={toggle}
        className={cn(
          "flex items-center justify-between w-full py-3 font-medium text-base",
          isActive ? "text-primary" : "text-foreground"
        )}
      >
        {label}
        <motion.span
          animate={{ rotate: accordionOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence>
        {accordionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-frosted shadow-depth-2"
    >
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="fib-container">
        <div className="flex items-center justify-between h-[var(--fib-55)]">
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Grid2Chip Logo"
              className="h-10"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-fib-21">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>

            <DropdownMenu
              label="About G2C"
              items={aboutItems}
              isOpen={aboutOpen}
              setIsOpen={setAboutOpen}
              isActive={location.pathname.startsWith("/about")}
            />

            <DropdownMenu
              label="Data Center"
              items={dataCenterItems}
              isOpen={dataCenterOpen}
              setIsOpen={setDataCenterOpen}
              isActive={location.pathname.startsWith("/data-center")}
            />

            <DropdownMenu
              label="IBMS"
              items={ibmsItems}
              isOpen={ibmsOpen}
              setIsOpen={setIbmsOpen}
              isActive={
                location.pathname.startsWith("/bms") ||
                location.pathname.startsWith("/products/ims")
              }
            />

            <NavLink to="/blog" isActive={location.pathname === "/blog"}>
              Blog
            </NavLink>

            <NavLink to="/contact" isActive={location.pathname === "/contact"}>
              Contact Us
            </NavLink>

            <Link to="/demo">
              <MagneticButton variant="cyber" size="sm">
                Book a Demo
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-primary/10"
          >
            <div className="px-4 py-4 space-y-1 bg-background/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 font-medium text-base",
                  location.pathname === "/" ? "text-primary" : "text-foreground"
                )}
              >
                Home
              </Link>

              <MobileAccordion
                label="About G2C"
                items={aboutItems}
                isOpen={mobileAboutOpen}
                toggle={() => setMobileAboutOpen(!mobileAboutOpen)}
                isActive={location.pathname.startsWith("/about")}
              />

              <MobileAccordion
                label="Data Center"
                items={dataCenterItems}
                isOpen={mobileDataCenterOpen}
                toggle={() => setMobileDataCenterOpen(!mobileDataCenterOpen)}
                isActive={location.pathname.startsWith("/data-center")}
              />

              <MobileAccordion
                label="IBMS"
                items={ibmsItems}
                isOpen={mobileIbmsOpen}
                toggle={() => setMobileIbmsOpen(!mobileIbmsOpen)}
                isActive={
                  location.pathname.startsWith("/bms") ||
                  location.pathname.startsWith("/products/ims")
                }
              />

              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 font-medium text-base",
                  location.pathname === "/blog" ? "text-primary" : "text-foreground"
                )}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 font-medium text-base",
                  location.pathname === "/contact" ? "text-primary" : "text-foreground"
                )}
              >
                Contact Us
              </Link>

              <div className="pt-3 pb-1">
                <Link to="/demo" onClick={() => setIsOpen(false)}>
                  <MagneticButton variant="cyber" size="sm" className="w-full">
                    Book a Demo
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </motion.nav>
  );
};

export default Navigation;
