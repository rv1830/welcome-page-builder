import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Twitter, Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "AI PC Builder", href: "/builder" },
      { name: "Get Quotes", href: "/quotes" },
      { name: "Pre-Built PCs", href: "/prebuilt" },
      { name: "Accessories", href: "/accessories" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Trust & Safety", href: "/trust" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Warranty", href: "/warranty" },
      { name: "Returns", href: "/returns" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/xorig", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/xorig", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/xorig", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/xorig", label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="orb-lavender w-[400px] h-[400px] -bottom-40 -left-40 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-gold flex items-center justify-center"
              >
                <Cpu className="w-5 h-5 text-obsidian" />
              </motion.div>
              <div>
                <span className="text-xl font-display font-bold">
                  XO <span className="text-gradient-gold">Rig</span>
                </span>
                <p className="text-xs text-muted-foreground">Love at First Boot</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              India's most trusted custom PC platform. Build, quote, and get 
              your dream rig delivered to your doorstep.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lavender" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lavender" />
                <a href="mailto:hello@xorig.in" className="hover:text-foreground transition-colors">
                  hello@xorig.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lavender" />
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} XO Rig. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-lavender hover:glow-lavender transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
