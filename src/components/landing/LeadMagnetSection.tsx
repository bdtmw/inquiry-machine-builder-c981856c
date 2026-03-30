import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LeadMagnetSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-hero text-hero-foreground rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(155_80%_40%/0.1),transparent_60%)]" />
        <div className="relative z-10 space-y-6">
          <div className="h-16 w-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto">
            <Rocket className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get 10–30 Inquiries in the Next <span className="text-gradient">30 Days</span>
          </h2>
          <p className="text-hero-foreground/70 text-lg max-w-lg mx-auto">
            Claim your free audit + strategy call. We'll show you exactly how to generate qualified leads for your business.
          </p>
          <Button variant="cta" size="lg" className="text-base px-10 py-6 animate-pulse-glow">
            Get My Free Plan
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
