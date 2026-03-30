import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";

export const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card/95 backdrop-blur-md rounded-2xl p-10 text-center border border-border/40 card-elevated">
        <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground">We'll reach out within 24 hours with your custom strategy.</p>
      </div>
    );
  }

  return (
    <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-border/40 card-elevated overflow-hidden">
      {/* Header */}
      <div className="bg-accent/5 border-b border-border/40 px-8 py-5">
        <h3 className="text-xl font-bold text-card-foreground">Get Your Free Strategy Call</h3>
        <p className="text-sm text-muted-foreground mt-1">See how we can generate leads for your business</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-4">
        <Input
          placeholder="Full Name"
          required
          className="h-12 bg-secondary/80 border border-border/40 text-secondary-foreground placeholder:text-muted-foreground rounded-xl focus:border-accent/50 transition-colors"
        />
        <Input
          type="email"
          placeholder="Email Address"
          required
          className="h-12 bg-secondary/80 border border-border/40 text-secondary-foreground placeholder:text-muted-foreground rounded-xl focus:border-accent/50 transition-colors"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          className="h-12 bg-secondary/80 border border-border/40 text-secondary-foreground placeholder:text-muted-foreground rounded-xl focus:border-accent/50 transition-colors"
        />
        <Input
          placeholder="Business Name"
          className="h-12 bg-secondary/80 border border-border/40 text-secondary-foreground placeholder:text-muted-foreground rounded-xl focus:border-accent/50 transition-colors"
        />
        <Button type="submit" variant="cta" className="w-full h-13 text-base py-3 rounded-xl">
          Get My Free Plan <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
          <Shield className="h-3.5 w-3.5" />
          <span>Your info is safe. No spam, ever.</span>
        </div>
      </form>
    </div>
  );
};
