import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SlotsPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.25) setVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-accent/20 bg-card p-5 shadow-2xl shadow-accent/10"
        >
          <button
            onClick={close}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
              Limited Availability
            </span>
          </div>

          <h4 className="text-lg font-bold text-foreground mb-1">
            Only 3 Slots Left This Month
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            We only take on a limited number of clients to ensure quality results. Secure your spot now.
          </p>

          <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-accent" /> 7 businesses onboarded this week
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-accent" /> Closing soon
            </span>
          </div>

          <Button variant="cta" size="sm" className="w-full" onClick={close}>
            Claim Your Spot
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
