import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Video, Headphones, Code, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Gamepad2,
    title: "Competitive Gamers",
    description: "Valorant, CS2, AAA Titles — smooth 144fps+ gameplay",
    specs: ["RTX 4070+", "32GB RAM", "1TB NVMe"],
    budget: "₹80K - ₹2L",
    color: "lavender",
  },
  {
    icon: Video,
    title: "Video Editors & 3D Artists",
    description: "Premiere Pro, After Effects, Blender workflows",
    specs: ["RTX 4080", "64GB RAM", "2TB NVMe"],
    budget: "₹1.2L - ₹3L",
    color: "gold",
  },
  {
    icon: Headphones,
    title: "Music Producers",
    description: "DAW optimization, low latency, studio reliability",
    specs: ["i7/Ryzen 7", "32GB RAM", "Quiet Build"],
    budget: "₹60K - ₹1.5L",
    color: "lavender",
  },
  {
    icon: Code,
    title: "Developers & AI Engineers",
    description: "Docker, ML training, multi-monitor setups",
    specs: ["RTX 4090", "128GB RAM", "RAID Storage"],
    budget: "₹1L - ₹4L",
    color: "gold",
  },
  {
    icon: Building2,
    title: "Offices & Startups",
    description: "Reliable workstations for your entire team",
    specs: ["i5/Ryzen 5", "16GB RAM", "SSD"],
    budget: "₹35K - ₹60K",
    color: "lavender",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern" />
      <div className="orb-gold w-[500px] h-[500px] -top-40 right-1/4 opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-sm font-medium mb-6">
            <Gamepad2 className="w-4 h-4 text-gold" />
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Built for <span className="text-gradient-lavender">Every Kind</span> of User
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a gamer, creator, developer, or running a business — 
            we've got the perfect rig for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-6 card-hover group relative overflow-hidden ${
                i === useCases.length - 1 && useCases.length % 3 !== 0
                  ? "lg:col-span-1"
                  : ""
              }`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  useCase.color === "gold"
                    ? "bg-gradient-to-br from-gold/5 to-transparent"
                    : "bg-gradient-to-br from-lavender/5 to-transparent"
                }`}
              />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                    useCase.color === "gold"
                      ? "bg-gold/10 border border-gold/20"
                      : "bg-lavender/10 border border-lavender/20"
                  }`}
                >
                  <useCase.icon
                    className={`w-5 h-5 ${
                      useCase.color === "gold" ? "text-gold" : "text-lavender"
                    }`}
                  />
                </div>

                <h3 className="text-lg font-display font-semibold mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {useCase.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-1 text-xs rounded-md bg-muted/50 text-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Budget</span>
                  <span
                    className={`text-sm font-semibold ${
                      useCase.color === "gold" ? "text-gold" : "text-lavender"
                    }`}
                  >
                    {useCase.budget}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="btn-lavender rounded-full px-8 group">
            <Link to="/builder">
              Find Your Perfect Build
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
