import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => (
  <section className="section-padding bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(155_80%_40%/0.1),transparent_50%)]" />
    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to Get More{" "}
          <span className="text-gradient">Inquiries?</span>
        </h2>
        <p className="text-hero-foreground/70 text-lg max-w-lg mx-auto">
          Stop losing leads. Let us build a system that works while you sleep.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="cta" size="lg" className="text-base px-8 py-6 animate-pulse-glow">
            Book a Call <ArrowRight className="h-5 w-5 ml-1" />
          </Button>
          <Button variant="hero-secondary" size="lg" className="text-base px-8 py-6">
            Get Started
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
