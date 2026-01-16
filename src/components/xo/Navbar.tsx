import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "PC Builder", href: "/builder" },
    { name: "Get Quotes", href: "/quotes" },
    { name: "About", href: "/about" },
    { name: "Trust & Safety", href: "/trust" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-gold"
            >
              <Cpu className="w-5 h-5 text-obsidian" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight">
                XO <span className="text-gradient-gold">Rig</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase -mt-0.5">
                Love at First Boot
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-lavender"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-lavender to-gold rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild size="sm" className="btn-gold rounded-full px-6">
              <Link to="/builder">Build My PC</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "bg-lavender/10 text-lavender"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex gap-3 pt-4 mt-4 border-t border-border">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1 btn-gold">
                    <Link to="/builder">Build My PC</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
