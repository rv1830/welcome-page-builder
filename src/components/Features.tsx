import { Bot, Mail, Users, BarChart3, Zap, Shield, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Outreach",
      description: "Automated personalized emails and follow-ups that feel human. Let AI handle the repetitive work while you focus on closing.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Smart Lead Scoring",
      description: "Prioritize your hottest leads with AI-driven scoring. Know exactly who's ready to buy and when to reach out.",
      color: "cyan",
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description: "Design and automate multi-step campaigns that nurture leads from first contact to closed deal.",
      color: "orange",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track every metric that matters. From open rates to revenue, get insights that drive better decisions.",
      color: "yellow",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Connect your entire sales stack. Automate tasks, sync data, and eliminate manual busywork.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance. Your data is protected with SOC 2 and GDPR standards.",
      color: "cyan",
    },
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary": return "text-primary bg-primary/10 border-primary/30";
      case "cyan": return "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30";
      case "orange": return "text-accent-orange bg-accent-orange/10 border-accent-orange/30";
      case "yellow": return "text-accent-yellow bg-accent-yellow/10 border-accent-yellow/30";
      default: return "text-primary bg-primary/10 border-primary/30";
    }
  };

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="text-gradient"> Scale Sales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools that work together seamlessly to help you find, engage, and convert more leads into customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${getIconColor(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Learn more link */}
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
