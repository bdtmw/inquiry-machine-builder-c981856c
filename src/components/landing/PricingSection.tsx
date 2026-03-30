import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard Setup",
    price: "$500",
    sub: "Setup + $500/month",
    features: ["Full website build", "Ad campaign setup", "CRM & automation", "Monthly optimization", "Dedicated account manager"],
    recommended: false,
  },
  {
    name: "Pay Per Inquiry",
    price: "$0",
    sub: "Upfront — Pay per qualified lead",
    features: ["No upfront cost", "Full website build", "Ad campaign management", "AI follow-up system", "Only pay for results"],
    recommended: true,
  },
];

export const PricingSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg">Choose what works best for your business.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-8 text-left relative ${
              plan.recommended
                ? "bg-card border-2 border-accent card-elevated"
                : "bg-card border border-border card-elevated"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                <Star className="h-4 w-4" /> Recommended
              </div>
            )}
            <h3 className="text-xl font-bold text-card-foreground mb-2">{plan.name}</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">{plan.sub}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-card-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.recommended ? "cta" : "cta-outline"}
              className="w-full h-12 text-base"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
