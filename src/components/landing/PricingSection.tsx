import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Lead Generation System",
    price: "$1,000",
    setup: "$1,000 Setup",
    period: "/month",
    description: "We build and manage a complete system designed to consistently generate qualified inquiries for your business.",
    features: [
      "Website engineered to generate inquiries",
      "Targeted traffic from high-intent search",
      "CRM + automation system",
      "AI-powered follow-up (text & email)",
      "Ongoing optimization & tracking",
    ],
    recommended: false,
    cta: "Get Started",
  },
  {
    name: "Growth & Scale Plan",
    price: "$1,500",
    setup: "$1,500 Setup",
    period: "/month",
    description: "For businesses ready to scale faster with advanced optimization and automation.",
    features: [
      "Everything in the core system",
      "Advanced automation workflows",
      "Multiple landing pages & A/B testing",
      "Conversion rate optimization",
      "Priority support",
    ],
    recommended: true,
    cta: "Scale My Business",
  },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const PricingSection = () => (
  <section id="pricing" className="section-padding bg-section-alt relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 space-y-5">
        <span className="section-label">Pricing</span>
        <h2 className="section-title">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
        <p className="section-subtitle">No hidden fees. No long-term contracts. Choose what works best for your business.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`rounded-3xl text-left relative overflow-hidden ${plan.recommended ? "bg-card border-2 border-accent card-elevated ring-1 ring-accent/20" : "bg-card border border-border/60 card-elevated"}`}>
            {plan.recommended && (
              <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                Recommended
              </div>
            )}
            <div className="p-8 md:p-10">
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">{plan.name}</h3>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                <span className="text-lg text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-accent font-medium mb-3">{plan.setup}</p>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{plan.description}</p>
              <div className="h-px bg-border/60 mb-8" />
              <ul className="space-y-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-card-foreground">
                    <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.recommended ? "cta" : "cta-outline"} className="w-full h-13 text-base py-3" onClick={scrollToForm}>
                {plan.cta} <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-muted-foreground mt-10 space-y-1">
        <p>Most clients see 15–40 new inquiries within 30–60 days depending on market.</p>
        <p>Ad spend is separate and controlled by you.</p>
      </motion.div>
    </div>
  </section>
);
