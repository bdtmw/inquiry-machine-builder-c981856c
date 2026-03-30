import { motion } from "framer-motion";
import { AlertTriangle, UserX, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: AlertTriangle,
    title: "Not Getting Enough Inquiries",
    desc: "Your website gets traffic but nobody fills out a form or picks up the phone.",
    stat: "72%",
    statLabel: "of websites fail to convert visitors",
  },
  {
    icon: UserX,
    title: "Getting Low-Quality Leads",
    desc: "You spend money on ads but attract people who aren't ready to buy.",
    stat: "61%",
    statLabel: "of leads are unqualified on average",
  },
  {
    icon: PhoneOff,
    title: "Losing Leads — No Follow-Up",
    desc: "Potential customers slip through the cracks because there's no system in place.",
    stat: "80%",
    statLabel: "of sales need 5+ follow-ups to close",
  },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const ProblemSection = () => (
  <section id="problems" className="section-padding bg-section-alt relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
    
    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16 space-y-5">
        <span className="section-label">The Problem</span>
        <h2 className="section-title">
          Most Businesses Don't Have a Lead Problem —{" "}
          <span className="text-gradient">They Have a System Problem</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {problems.map(({ icon: Icon, title, desc, stat, statLabel }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }} className="group bg-card rounded-2xl p-8 card-elevated border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/60 rounded-t-2xl" />
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/15 transition-colors">
              <Icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{desc}</p>
            <div className="pt-6 border-t border-border/50">
              <span className="text-3xl font-bold text-destructive">{stat}</span>
              <p className="text-xs text-muted-foreground mt-1">{statLabel}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-6">
        <div className="divider-line" />
        <p className="text-3xl md:text-4xl font-bold text-foreground">We fix all three.</p>
        <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={scrollToForm}>
          Fix My Lead System
        </Button>
      </motion.div>
    </div>
  </section>
);
