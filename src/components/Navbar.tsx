import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">LAPS</span>
              <span className="text-[9px] text-primary font-medium tracking-wider uppercase -mt-1">AI Sales Engine</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm"><Link to="/login">Log in</Link></Button>
            <Button asChild variant="default" size="sm"><Link to="/signup">Get Started</Link></Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>{link.name}</a>
            ))}
            <div className="flex gap-2 pt-4 mt-2 border-t border-border">
              <Button asChild variant="ghost" size="sm" className="flex-1"><Link to="/login">Log in</Link></Button>
              <Button asChild size="sm" className="flex-1"><Link to="/signup">Get Started</Link></Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
