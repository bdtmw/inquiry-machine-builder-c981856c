import { motion } from "framer-motion";
import { Wrench, Megaphone, HandshakeIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Wrench, num: "01", title: "We Build Your System", desc: "Custom website, CRM, and automation — all set up and ready to capture leads." },
  { icon: Megaphone, num: "02", title: "We Drive Traffic", desc: "Targeted ads and SEO strategies to bring qualified prospects directly to you." },
  { icon: HandshakeIcon, num: "03", title: "You Close Deals", desc: "Qualified leads land in your inbox. Just pick up the phone and close the deal." },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const ProcessSection = () => (
  <section className="section-padding bg-background relative">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 space-y-5">
        <span className="section-label">How It Works</span>
        <h2 className="section-title">Simple <span className="text-gradient">3-Step</span> System</h2>
        <p className="section-subtitle">No complexity. No guesswork. Just a proven system that delivers results.</p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border/60 -translate-y-1/2 z-0" />
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center card-elevated">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Step {num}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
        <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={scrollToForm}>
          Start My System <ArrowRight className="h-5 w-5 ml-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);
