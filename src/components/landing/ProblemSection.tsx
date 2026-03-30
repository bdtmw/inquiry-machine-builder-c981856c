import { motion } from "framer-motion";
import { AlertTriangle, UserX, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  { icon: AlertTriangle, title: "Not Getting Enough Inquiries", desc: "Your website gets traffic but nobody fills out a form or picks up the phone." },
  { icon: UserX, title: "Getting Low-Quality Leads", desc: "You spend money on ads but attract people who aren't ready to buy." },
  { icon: PhoneOff, title: "Losing Leads — No Follow-Up", desc: "Potential customers slip through the cracks because there's no system in place." },
];

export const ProblemSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6 mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Most Businesses Don't Have a Lead Problem —{" "}
          <span className="text-gradient">They Have a System Problem</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {problems.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 card-elevated text-left"
          >
            <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-2xl md:text-3xl font-bold text-foreground">
          We fix all three.
        </p>
        <Button variant="cta" size="lg" className="text-base px-8 py-6">
          Get More Inquiries
        </Button>
      </motion.div>
    </div>
  </section>
);
