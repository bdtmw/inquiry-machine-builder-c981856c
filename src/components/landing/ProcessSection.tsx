import { motion } from "framer-motion";
import { Wrench, Megaphone, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Wrench, num: "01", title: "We Build Your System", desc: "Custom website, CRM, and automation — all set up for you." },
  { icon: Megaphone, num: "02", title: "We Drive Traffic", desc: "Targeted ads and SEO to bring qualified prospects to your door." },
  { icon: HandshakeIcon, num: "03", title: "You Close Deals", desc: "Hot leads land in your inbox. Just pick up the phone and close." },
];

export const ProcessSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Simple <span className="text-gradient">3-Step</span> System
        </h2>
        <p className="text-muted-foreground text-lg">No complexity. No guesswork. Just results.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {steps.map(({ icon: Icon, num, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className="text-6xl font-bold text-accent/10 absolute -top-4 left-1/2 -translate-x-1/2">
              {num}
            </div>
            <div className="bg-card rounded-xl p-8 card-elevated relative pt-12">
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                <Icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Button variant="cta" size="lg" className="text-base px-8 py-6">
        Start My System
      </Button>
    </div>
  </section>
);
