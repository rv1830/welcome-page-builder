import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Shield, Truck } from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { icon: Cpu, x: "10%", y: "20%", delay: 0 },
    { icon: Zap, x: "85%", y: "15%", delay: 0.2 },
    { icon: Shield, x: "5%", y: "70%", delay: 0.4 },
    { icon: Truck, x: "90%", y: "65%", delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="orb-lavender w-[600px] h-[600px] -top-40 -left-40 opacity-30" />
      <div className="orb-gold w-[500px] h-[500px] -bottom-20 -right-20 opacity-20" />
      <div className="orb-royal w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: item.delay + 0.5, duration: 0.5 }}
          className="absolute hidden lg:flex items-center justify-center w-16 h-16 glass-card float"
          style={{ left: item.x, top: item.y, animationDelay: `${item.delay}s` }}
        >
          <item.icon className="w-6 h-6 text-lavender" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-lavender mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium">India's #1 Custom PC Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Custom PCs,{" "}
            <span className="text-gradient-lavender">Built for</span>
            <br />
            <span className="text-gradient-gold">Your Life.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            From gaming rigs to creator workstations — XO Rig designs, sources, builds, 
            and delivers PCs tailored exactly to your budget and purpose.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button asChild size="lg" className="btn-gold rounded-full px-8 h-14 text-base group">
              <Link to="/builder">
                Build My PC
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-glass rounded-full px-8 h-14 text-base">
              <Link to="/quotes">Get Seller Quotes</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "10K+", label: "PCs Built" },
              { value: "500+", label: "Verified Sellers" },
              { value: "₹0", label: "Service Fee" },
              { value: "Pan India", label: "Delivery" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-card p-4 text-center card-hover"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-lavender">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-2 glow-lavender">
              <div className="aspect-video bg-gradient-to-br from-royal via-obsidian to-royal rounded-xl overflow-hidden relative">
                {/* Mock PC Builder Interface */}
                <div className="absolute inset-4 glass rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-lavender" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-lavender/20 rounded w-1/2 mb-2" />
                        <div className="h-2 bg-muted rounded w-1/3" />
                      </div>
                      <div className="text-sm font-mono text-gold">₹45,999</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gold/20 rounded w-2/3 mb-2" />
                        <div className="h-2 bg-muted rounded w-1/4" />
                      </div>
                      <div className="text-sm font-mono text-gold">₹62,499</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 glass-gold rounded-xl flex items-center justify-center glow-gold">
              <span className="text-2xl">🎮</span>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 glass-lavender rounded-xl flex items-center justify-center glow-lavender">
              <span className="text-xl">⚡</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
