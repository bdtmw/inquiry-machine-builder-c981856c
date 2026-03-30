export const Footer = () => (
  <footer className="bg-hero text-hero-foreground/50 py-10 px-4 border-t border-hero-foreground/10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <span className="font-semibold text-hero-foreground">
        ENQS<span className="text-accent">.com</span>
      </span>
      <span>© {new Date().getFullYear()} ENQS. All rights reserved.</span>
    </div>
  </footer>
);
