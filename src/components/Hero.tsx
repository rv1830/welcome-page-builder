import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Mail, Calendar, Phone } from "lucide-react";

const Hero = () => {
  const metrics = [
    { icon: Users, value: "48", label: "New Leads", change: "+12%", positive: true },
    { icon: Mail, value: "156", label: "Contacted", change: "+8%", positive: true },
    { icon: Calendar, value: "18", label: "Calls Booked", change: "+22%", positive: true },
    { icon: Phone, value: "14", label: "Calls Done", change: "0%", positive: true },
    { icon: TrendingUp, value: "5", label: "Won Deals", change: "+50%", positive: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Sales Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Your Complete
            <span className="block text-gradient">Sales Command Center</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Automate lead generation, streamline outreach, and close more deals with AI that works 24/7. 
            Transform your sales pipeline into a revenue machine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* AI Engine Status */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-accent-orange/10 border border-accent-orange/30">
              <Sparkles className="w-5 h-5 text-accent-orange" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">AI Engine Active</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="text-sm text-muted-foreground">12 workflows running • 156 emails sent today</span>
            </div>
          </div>

          {/* Metrics Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Glow effect on top */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-2 mb-3">
                  <metric.icon className="w-4 h-4 text-primary" />
                  {index < 3 && <Sparkles className="w-3 h-3 text-accent-orange" />}
                </div>
                
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                
                <div className="text-xs text-muted-foreground mb-2">
                  {metric.label}
                </div>
                
                <div className={`text-xs font-medium flex items-center gap-1 ${metric.positive ? 'text-primary' : 'text-destructive'}`}>
                  <TrendingUp className="w-3 h-3" />
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
