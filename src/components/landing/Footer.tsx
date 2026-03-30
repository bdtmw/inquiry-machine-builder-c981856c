import { Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

export const Footer = () => (
  <footer className="bg-hero text-hero-foreground py-14 px-4 border-t border-hero-foreground/10">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
           <img
        src={logo}
        alt="ihatemoving logo"
        className="h-10 w-auto object-contain"
      />
          <p className="text-sm text-hero-foreground/40 mt-3 leading-relaxed max-w-xs">
            Done-for-you lead generation systems that help businesses get more inquiries and close more deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-hero-foreground/70 uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-hero-foreground/50">
            <li><a href="#how" className="hover:text-hero-foreground transition-colors">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-hero-foreground transition-colors">Pricing</a></li>
            <li><a href="#results" className="hover:text-hero-foreground transition-colors">Results</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-hero-foreground/70 uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-hero-foreground/50">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              hello@enqs.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              (555) 123-4567
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-hero-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hero-foreground/30">
        <span>© {new Date().getFullYear()} ENQS. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-hero-foreground/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-hero-foreground/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
