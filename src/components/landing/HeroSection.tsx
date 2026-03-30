import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { Shield, Zap, Award, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: Shield, label: "Trusted by 50+ businesses" },
  { icon: Zap, label: "Results in 30 days" },
  { icon: Award, label: "ROI Guaranteed" },
];

export const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[92vh] flex items-center text-hero-foreground">
    {/* Background image with Ken Burns */}
    <motion.div
      className="absolute inset-0 z-0"
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Overlays */}
    <div className="absolute inset-0 z-[1] bg-hero/80" />
    <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top_right,hsl(155_80%_40%/0.08),transparent_60%)]" />
    <div className="absolute bottom-0 left-0 right-0 h-32 z-[2] bg-gradient-to-t from-hero to-transparent" />

    <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="section-label">
            <Zap className="h-3.5 w-3.5" />
            Lead Generation on Autopilot
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight">
            Get More Inquiries.{" "}
            <span className="text-gradient">Close More Deals.</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-foreground/60 max-w-lg leading-relaxed">
            We build websites, run ads, and automate follow-ups so your business consistently gets qualified leads on autopilot.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" className="text-base px-8 py-6 animate-pulse-glow">
              Get More Inquiries <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
            <Button variant="hero-secondary" size="lg" className="text-base px-8 py-6">
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-hero-foreground/50">
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
