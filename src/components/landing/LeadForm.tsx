import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

export const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center card-elevated">
        <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="text-xl font-bold text-card-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 card-elevated">
      <h3 className="text-xl font-bold text-card-foreground mb-1">Get Your Free Strategy Call</h3>
      <p className="text-sm text-muted-foreground mb-6">See how we can generate leads for your business</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Full Name" required className="h-12 bg-secondary border-0 text-secondary-foreground placeholder:text-muted-foreground" />
        <Input type="email" placeholder="Email Address" required className="h-12 bg-secondary border-0 text-secondary-foreground placeholder:text-muted-foreground" />
        <Input type="tel" placeholder="Phone Number" className="h-12 bg-secondary border-0 text-secondary-foreground placeholder:text-muted-foreground" />
        <Input placeholder="Business Name" className="h-12 bg-secondary border-0 text-secondary-foreground placeholder:text-muted-foreground" />
        <Button type="submit" variant="cta" className="w-full h-12 text-base">
          Get My Free Plan →
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </form>
    </div>
  );
};
