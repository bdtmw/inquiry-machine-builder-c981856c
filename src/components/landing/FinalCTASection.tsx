import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => (
  <section className="section-padding bg-hero text-hero-foreground relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(155_80%_40%/0.08),transparent_50%)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
    
    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <span className="section-label">Let's Go</span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-hero-foreground">
          Ready to Get More{" "}
          <span className="text-gradient">Inquiries?</span>
        </h2>
        
        <p className="text-hero-foreground/60 text-lg max-w-lg mx-auto leading-relaxed">
          Stop losing leads. Let us build a system that works around the clock — so you can focus on closing deals.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button variant="cta" size="lg" className="text-base px-10 py-6 animate-pulse-glow">
            Book a Call <ArrowRight className="h-5 w-5 ml-1" />
          </Button>
          <Button variant="hero-secondary" size="lg" className="text-base px-10 py-6">
            Get Started
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-hero-foreground/40">
          <span className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-accent" /> 30-day money-back guarantee
          </span>
          <span className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent" /> Setup in 48 hours
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);
