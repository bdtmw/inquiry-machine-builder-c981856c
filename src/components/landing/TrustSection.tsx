import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { icon: TrendingUp, value: "327+", label: "Inquiries generated in 60 days" },
  { icon: Users, value: "50+", label: "Businesses served" },
  { icon: Clock, value: "< 48hrs", label: "Average time to launch" },
];

const testimonials = [
  { name: "Sarah M.", role: "Real Estate Agent", text: "ENQS completely transformed our lead flow. We went from 5 inquiries a month to over 40." },
  { name: "James K.", role: "Roofing Contractor", text: "The AI follow-up system alone has saved us hundreds of hours. We close more deals with less effort." },
];

export const TrustSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Real Results from <span className="text-gradient">Real Businesses</span>
        </h2>
      </motion.div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {metrics.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 text-center card-elevated"
          >
            <Icon className="h-8 w-8 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-card-foreground mb-2">{value}</div>
            <p className="text-sm text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 card-elevated"
          >
            <Quote className="h-8 w-8 text-accent/30 mb-4" />
            <p className="text-card-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold text-card-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta" size="lg" className="text-base px-8 py-6">
          Get Results Like These
        </Button>
      </div>
    </div>
  </section>
);
