import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const aboutItems = [{
    name: "About Us",
    path: "/about/us"
  }, {
    name: "Our Clients",
    path: "/about/clients"
  }, {
    name: "Careers",
    path: "/about/careers"
  }];
  const dataCenterItems = [{
    name: "Edge Data Center",
    path: "/data-center/edge"
  }, {
    name: "Custom Build Data Center",
    path: "/data-center/custom"
  }, {
    name: "HPC/AI-Ready Data Centers",
    path: "/data-center/hpc"
  }, {
    name: "Prefabricated Data Centers",
    path: "/products/prefab-container"
  }];
  const ibmsItems = [{
    name: "IMS",
    path: "/products/ims"
  }, {
    name: "Building Management System",
    path: "/bms/building-management"
  }, {
    name: "ELV Systems",
    path: "/bms/elv-systems"
  }, {
    name: "Fire Safety Systems",
    path: "/bms/fire-safety"
  }, {
    name: "Control Panel Services",
    path: "/bms/control-panels"
  }];
  const NavLink = ({
    to,
    children,
    isActive
  }: {
    to: string;
    children: React.ReactNode;
    isActive: boolean;
  }) => <Link to={to} className={cn("relative font-medium transition-all duration-300 link-underline text-secondary text-base", isActive ? "text-primary" : "text-muted-foreground")}>
      {children}
    </Link>;
  const DropdownMenu = ({
    label,
    items,
    isOpen,
    setIsOpen,
    isActive
  }: {
    label: string;
    items: {
      name: string;
      path: string;
    }[];
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    isActive: boolean;
  }) => <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={cn("flex items-center gap-1 font-medium transition-all duration-300 text-secondary text-base", isActive ? "text-primary" : "text-muted-foreground")}>
        {label}
        <motion.span animate={{
        rotate: isOpen ? 180 : 0
      }} transition={{
        duration: 0.2
      }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 10,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 10,
        scale: 0.95
      }} transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }} className="absolute top-full left-0 pt-2 z-50">
            <div className="w-64 glass-frosted rounded-fib-lg overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-fib-lg border border-primary/20" />
              
              <div className="relative p-2">
                {items.map((item, index) => <motion.div key={item.path} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }}>
                    <Link to={item.path} className={cn("block px-4 py-3 text-sm rounded-fib", "text-foreground/80 hover:text-foreground", "hover:bg-primary/10 transition-all duration-200", "hover-glow-border")}>
                      {item.name}
                    </Link>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "glass-frosted shadow-depth-2" : "bg-transparent")}>
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="fib-container">
        <div className="flex items-center justify-between h-[var(--fib-55)]">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img src={logo} alt="Grid2Chip Logo" className="h-10" whileHover={{
            scale: 1.05
          }} transition={{
            type: 'spring',
            stiffness: 300
          }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-fib-21">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>

            <DropdownMenu label="About G2C" items={aboutItems} isOpen={aboutOpen} setIsOpen={setAboutOpen} isActive={location.pathname.startsWith("/about")} />

            <DropdownMenu label="Data Center" items={dataCenterItems} isOpen={dataCenterOpen} setIsOpen={setDataCenterOpen} isActive={location.pathname.startsWith("/data-center")} />

            <DropdownMenu label="IBMS" items={ibmsItems} isOpen={ibmsOpen} setIsOpen={setIbmsOpen} isActive={location.pathname.startsWith("/bms") || location.pathname.startsWith("/products/ims")} />

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

          {/* Mobile menu button */}
          <motion.button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-fib text-foreground hover:bg-primary/10" whileTap={{
          scale: 0.95
        }}>
            <AnimatePresence mode="wait">
              {isOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }}>
                  <X className="h-6 w-6" />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }}>
                  <Menu className="h-6 w-6" />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden glass-frosted border-t border-primary/20 overflow-hidden">
            <div className="fib-container py-fib-21 space-y-fib-13">
              <Link to="/" className="block text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              {/* Mobile dropdowns */}
              {[{
            label: "About G2C",
            items: aboutItems,
            open: aboutOpen,
            setOpen: setAboutOpen
          }, {
            label: "Data Center",
            items: dataCenterItems,
            open: dataCenterOpen,
            setOpen: setDataCenterOpen
          }, {
            label: "IBMS",
            items: ibmsItems,
            open: ibmsOpen,
            setOpen: setIbmsOpen
          }].map(dropdown => <div key={dropdown.label} className="space-y-fib-8">
                  <button onClick={() => dropdown.setOpen(!dropdown.open)} className="flex items-center w-full text-sm font-medium text-foreground hover:text-primary">
                    {dropdown.label}
                    <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", dropdown.open && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {dropdown.open && <motion.div initial={{
                opacity: 0,
                height: 0
              }} animate={{
                opacity: 1,
                height: 'auto'
              }} exit={{
                opacity: 0,
                height: 0
              }} className="pl-fib-13 space-y-fib-8 overflow-hidden">
                        {dropdown.items.map(item => <Link key={item.path} to={item.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                            {item.name}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>)}

              <Link to="/blog" className="block text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Blog
              </Link>

              <Link to="/contact" className="block text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>

              <Link to="/demo" onClick={() => setIsOpen(false)} className="block">
                <MagneticButton variant="cyber" size="sm" className="w-full">
                  Book a Demo
                </MagneticButton>
              </Link>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Bottom accent line when scrolled */}
      <motion.div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" initial={{
      scaleX: 0
    }} animate={{
      scaleX: scrolled ? 1 : 0
    }} transition={{
      duration: 0.3
    }} />
    </motion.nav>;
};
export default Navigation;