import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { Shield, Zap, Award } from "lucide-react";

const badges = [
  { icon: Shield, label: "Trusted by 50+ businesses" },
  { icon: Zap, label: "Results in 30 days" },
  { icon: Award, label: "ROI Guaranteed" },
];

export const HeroSection = () => (
  <section className="bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(155_80%_40%/0.08),transparent_60%)]" />
    <div className="container mx-auto section-padding relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Zap className="h-4 w-4" />
            Lead Generation on Autopilot
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Get More Inquiries.{" "}
            <span className="text-gradient">Close More Deals.</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-foreground/70 max-w-lg leading-relaxed">
            We build websites, run ads, and automate follow-ups so your business consistently gets qualified leads on autopilot.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" className="text-base px-8 py-6 animate-pulse-glow">
              Get More Inquiries
            </Button>
            <Button variant="hero-secondary" size="lg" className="text-base px-8 py-6">
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-2">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-hero-foreground/60">
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LeadForm />
        </motion.div>
      </div>
    </div>
  </section>
);
