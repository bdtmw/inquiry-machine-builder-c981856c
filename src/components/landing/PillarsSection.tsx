import { motion } from "framer-motion";
import { Globe, Target, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  { icon: Globe, title: "Websites That Convert", desc: "Clean, fast landing pages built to turn visitors into inquiries. No fluff — just results." },
  { icon: Target, title: "Traffic That Actually Converts", desc: "Google Ads, Meta Ads, and SEO strategies that bring in buyers, not browsers." },
  { icon: Bot, title: "Automated Follow-Up", desc: "AI-powered email and SMS sequences that nurture leads 24/7 so you never lose a deal." },
];

export const PillarsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          We Build <span className="text-gradient">Inquiry Machines</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Three pillars that work together to generate consistent, qualified leads for your business.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 card-elevated text-center group"
          >
            <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
              <Icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      <Button variant="cta" size="lg" className="text-base px-8 py-6">
        See How It Works
      </Button>
    </div>
  </section>
);
