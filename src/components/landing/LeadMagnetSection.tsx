import { motion } from "framer-motion";
import { Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  "Full website & funnel audit",
  "Custom lead generation strategy",
  "ROI projection for your business",
];

export const LeadMagnetSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-hero text-hero-foreground rounded-3xl relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(155_80%_40%/0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Rocket className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Get 10–30 Inquiries in the Next{" "}
                <span className="text-gradient">30 Days</span>
              </h2>
              <p className="text-hero-foreground/60 text-lg leading-relaxed">
                Claim your free audit + strategy call. We'll map out exactly how to generate qualified leads for your business.
              </p>
            </div>

            {/* Right */}
            <div className="bg-hero-foreground/[0.04] border border-hero-foreground/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 text-hero-foreground">What you'll get:</h3>
              <ul className="space-y-4 mb-8">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-hero-foreground/80">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full text-base py-6 animate-pulse-glow">
                Get My Free Plan <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
              <p className="text-xs text-center text-hero-foreground/40 mt-4">
                Free · No obligation · Takes 2 minutes
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
