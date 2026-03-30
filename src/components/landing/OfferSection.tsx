import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "High-converting website or landing page",
  "Google Ads + full tracking setup",
  "CRM + automation (GoHighLevel backend)",
  "AI-powered follow-up system",
  "Monthly optimization & reporting",
];

export const OfferSection = () => (
  <section className="section-padding bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(155_80%_40%/0.06),transparent_60%)]" />
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          Everything You Need
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Done-For-You <span className="text-gradient">Lead Generation System</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-12 bg-hero-foreground/5 border border-hero-foreground/10 rounded-2xl p-8 md:p-12"
      >
        <ul className="space-y-5 mb-10">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-4">
              <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-accent" />
              </div>
              <span className="text-lg text-hero-foreground/90">{f}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button variant="cta" size="lg" className="text-base px-10 py-6 animate-pulse-glow">
            Get Started Today
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
