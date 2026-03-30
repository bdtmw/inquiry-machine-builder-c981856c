import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard Setup",
    price: "$500",
    period: "/month",
    sub: "+ $500 one-time setup fee",
    features: [
      "Full website build",
      "Ad campaign setup & management",
      "CRM & automation setup",
      "Monthly optimization",
      "Dedicated account manager",
    ],
    recommended: false,
    cta: "Get Started",
  },
  {
    name: "Pay Per Inquiry",
    price: "$0",
    period: " upfront",
    sub: "Pay only for qualified leads",
    features: [
      "No upfront cost at all",
      "Full website build included",
      "Ad campaign management",
      "AI follow-up system",
      "Only pay for real results",
    ],
    recommended: true,
    cta: "Start Risk-Free",
  },
];

export const PricingSection = () => (
  <section id="pricing" className="section-padding bg-section-alt relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-5"
      >
        <span className="section-label">Pricing</span>
        <h2 className="section-title">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h2>
        <p className="section-subtitle">No hidden fees. No long-term contracts. Choose what works best for your business.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`rounded-3xl text-left relative overflow-hidden ${
              plan.recommended
                ? "bg-card border-2 border-accent card-elevated ring-1 ring-accent/20"
                : "bg-card border border-border/60 card-elevated"
            }`}
          >
            {plan.recommended && (
              <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-1.5">
                <Star className="h-4 w-4" /> Most Popular — Best Value
              </div>
            )}
            
            <div className="p-8 md:p-10">
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">{plan.name}</h3>
              
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                <span className="text-lg text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">{plan.sub}</p>
              
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
              
              <Button
                variant={plan.recommended ? "cta" : "cta-outline"}
                className="w-full h-13 text-base py-3"
              >
                {plan.cta} <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-10"
      >
        Both plans include a 30-day money-back guarantee. No risk.
      </motion.p>
    </div>
  </section>
);
