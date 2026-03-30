import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { text: "High-converting website or landing page", sub: "Custom-built for your industry" },
  { text: "Google Ads + full tracking setup", sub: "Every click measured & optimized" },
  { text: "CRM + automation (GoHighLevel backend)", sub: "Manage all leads in one place" },
  { text: "AI-powered follow-up system", sub: "Nurture leads 24/7 automatically" },
  { text: "Monthly optimization & reporting", sub: "Continuous improvement guaranteed" },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const OfferSection = () => (
  <section className="section-padding bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(155_80%_40%/0.06),transparent_60%)]" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />
    
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-5 mb-14">
        <span className="section-label">Our Offer</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-hero-foreground leading-tight">
          Done-For-You <span className="text-gradient">Lead Generation System</span>
        </h2>
        <p className="text-lg text-hero-foreground/60 max-w-2xl mx-auto">
          Everything you need to generate consistent, qualified leads — managed entirely by our team.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-hero-foreground/[0.04] border border-hero-foreground/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <div className="grid gap-0 divide-y divide-hero-foreground/10">
          {features.map(({ text, sub }, i) => (
            <motion.div key={text} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
              <div className="h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4.5 w-4.5 text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-hero-foreground">{text}</span>
                <p className="text-sm text-hero-foreground/50 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-hero-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-hero-foreground/60">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm">Setup in as little as 48 hours</span>
          </div>
          <Button variant="cta" size="lg" className="text-base px-10 py-6 animate-pulse-glow" onClick={scrollToForm}>
            Get Started Today
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
