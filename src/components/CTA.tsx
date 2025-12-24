import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "Full feature access",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-card border border-border shadow-xl overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-cyan/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Free Today</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="text-gradient"> Sales Pipeline?</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of sales teams who've consolidated their tech stack and 
                increased conversions with LAPS. Get started in 15 minutes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto group">
                  <Link to="/signup">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Link to="/login">
                    Talk to Sales
                  </Link>
                </Button>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
