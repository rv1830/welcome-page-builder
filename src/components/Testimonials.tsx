import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LAPS transformed our outreach. We went from 5 to 25 meetings per week without adding headcount.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow",
      avatar: "SC",
    },
    {
      quote: "The AI sequences feel genuinely personal. Our response rates jumped 40% in the first month.",
      author: "Marcus Johnson",
      role: "Sales Director",
      company: "ScaleUp Inc",
      avatar: "MJ",
    },
    {
      quote: "Finally, a sales tool that actually saves time. Our team focuses on closing, not data entry.",
      author: "Emily Rodriguez",
      role: "Head of Growth",
      company: "Velocity",
      avatar: "ER",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient">Sales Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why thousands of companies trust LAPS to power their sales engine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
