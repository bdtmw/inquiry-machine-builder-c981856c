import { motion } from "framer-motion";
import { Globe, Target, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Globe,
    title: "Websites That Convert",
    desc: "Clean, fast landing pages engineered to turn visitors into inquiries. Every element is designed with conversion in mind.",
    features: ["Mobile-first design", "A/B tested layouts", "Speed optimized"],
  },
  {
    icon: Target,
    title: "Traffic That Converts",
    desc: "Google Ads, Meta Ads, and SEO strategies that bring in qualified buyers — not random browsers.",
    features: ["Targeted campaigns", "ROI tracking", "Weekly optimization"],
  },
  {
    icon: Bot,
    title: "Automated Follow-Up",
    desc: "AI-powered email and SMS sequences that nurture leads 24/7 so you never lose a potential deal.",
    features: ["AI-driven sequences", "Multi-channel outreach", "Smart scheduling"],
  },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const PillarsSection = () => (
  <section id="how" className="section-padding bg-background relative">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 space-y-5">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">We Build <span className="text-gradient">Inquiry Machines</span></h2>
        <p className="section-subtitle">Three integrated pillars that work together to generate consistent, qualified leads for your business.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
        {pillars.map(({ icon: Icon, title, desc, features }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }} className="group bg-card rounded-2xl border border-border/50 card-elevated overflow-hidden">
            <div className="h-1 bg-accent/60" />
            <div className="p-8">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                <Icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <ArrowRight className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={scrollToForm}>
          See How It Works
        </Button>
      </div>
    </div>
  </section>
);
