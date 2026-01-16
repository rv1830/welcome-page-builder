import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Wrench, 
  Brain, 
  ShieldCheck, 
  Truck, 
  IndianRupee,
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Purpose-Driven Builds",
    description: "Not random parts. Every component chosen specifically for your use-case.",
    color: "lavender",
  },
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Tell us your budget and goal. We do the thinking.",
    color: "gold",
  },
  {
    icon: ShieldCheck,
    title: "Verified Hardware Sellers",
    description: "Compare real quotes, real stock, real photos from trusted vendors.",
    color: "lavender",
  },
  {
    icon: Truck,
    title: "End-to-End Fulfilment",
    description: "From shop shelf to your doorstep — we handle everything.",
    color: "gold",
  },
  {
    icon: IndianRupee,
    title: "India-First Pricing",
    description: "Optimized for Indian availability, warranty, and best prices.",
    color: "lavender",
  },
  {
    icon: Sparkles,
    title: "Zero Hassle Experience",
    description: "No confusion, no research fatigue. Just pure excitement.",
    color: "gold",
  },
];

const WhyXORig = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Why Thousands Will Trust{" "}
            <span className="text-gradient-lavender">XO Rig</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another PC store. We're your personal tech consultant, 
            builder, and delivery partner — all in one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-6 card-hover group ${
                feature.color === "gold" ? "hover:glow-gold" : "hover:glow-lavender"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                  feature.color === "gold"
                    ? "bg-gold/10 border border-gold/20"
                    : "bg-lavender/10 border border-lavender/20"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.color === "gold" ? "text-gold" : "text-lavender"
                  }`}
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyXORig;
