import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.png";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-xl border-b border-hero-foreground/5">
    <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
      <img
        src={logo}
        alt="ihatemoving logo"
        className="h-10 w-auto object-contain"
      />

      <div className="hidden md:flex items-center gap-8">
        <a href="#how" className="text-sm text-hero-foreground/60 hover:text-hero-foreground transition-colors">
          How It Works
        </a>
        <a href="#pricing" className="text-sm text-hero-foreground/60 hover:text-hero-foreground transition-colors">
          Pricing
        </a>
        <a href="#results" className="text-sm text-hero-foreground/60 hover:text-hero-foreground transition-colors">
          Results
        </a>
      </div>

      <Button variant="cta" size="sm" className="text-sm px-6 rounded-lg" onClick={scrollToForm}>
        Get Started
      </Button>
    </div>
  </nav>
);