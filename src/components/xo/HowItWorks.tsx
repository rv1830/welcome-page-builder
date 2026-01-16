import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Cpu, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us Your Budget & Purpose",
    description: '"Gaming PC under ₹80,000" or "Music production workstation" — just describe what you need.',
    examples: ["Gaming PC under 1L", "Video editing setup", "Office PC under 40K"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Get Smart Recommendations",
    description: "AI-powered builds or competitive vendor offers — your choice. Compare and choose.",
    examples: ["AI Build", "Seller Quotes", "Custom Config"],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay Securely & Relax",
    description: "We handle procurement, assembly, testing, and delivery. You just wait for the magic.",
    examples: ["Secure Payment", "Expert Assembly", "Pan-India Delivery"],
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-card" ref={ref}>
      <div className="absolute inset-0 grid-pattern-strong" />
      <div className="orb-lavender w-[400px] h-[400px] -top-20 right-0 opacity-20" />
      <div className="orb-gold w-[300px] h-[300px] bottom-0 left-0 opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-lavender text-sm font-medium mb-6">
            <Cpu className="w-4 h-4 text-lavender" />
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            From Idea to <span className="text-gradient-gold">Power Button</span>
            <br />
            <span className="text-gradient-lavender">In 3 Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No technical knowledge required. Just tell us what you want to do, 
            and we'll handle the rest.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender via-gold to-lavender hidden lg:block" />

            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="glass-card p-8 h-full card-hover">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-2 text-6xl font-display font-bold text-gradient-lavender opacity-20">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-lavender to-gold flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-obsidian" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>

                    {/* Examples */}
                    <div className="flex flex-wrap gap-2">
                      {step.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow (between steps) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 w-8 h-8 rounded-full bg-card border border-border items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-lavender" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
