import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { icon: TrendingUp, value: "327+", label: "Inquiries Generated", sub: "in the last 60 days" },
  { icon: Users, value: "50+", label: "Businesses Served", sub: "across 12+ industries" },
  { icon: Clock, value: "Under 48hrs", label: "Average Launch Time", sub: "from onboarding to live" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Real Estate Agent", text: "ENQS completely transformed our lead flow. We went from 5 inquiries a month to over 40. The ROI has been incredible.", rating: 5 },
  { name: "James Kennedy", role: "Roofing Contractor", text: "The AI follow-up system alone has saved us hundreds of hours. We close more deals with less effort than ever before.", rating: 5 },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const TrustSection = () => (
  <section id="results" className="section-padding bg-section-alt relative">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-5 mb-16">
        <span className="section-label">Results</span>
        <h2 className="section-title">Real Results from <span className="text-gradient">Real Businesses</span></h2>
        <p className="section-subtitle">Don't take our word for it. Here's what the numbers say.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {metrics.map(({ icon: Icon, value, label, sub }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-8 text-center card-elevated border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent/50" />
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-card-foreground mb-2">{value}</div>
            <p className="font-semibold text-card-foreground text-sm">{label}</p>
            <p className="text-xs text-muted-foreground mt-1">{sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-card rounded-2xl p-8 md:p-10 card-elevated border border-border/50 relative">
            <Quote className="h-10 w-10 text-accent/15 mb-5" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-card-foreground text-lg leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={scrollToForm}>
          Get Results Like These
        </Button>
      </div>
    </div>
  </section>
);
