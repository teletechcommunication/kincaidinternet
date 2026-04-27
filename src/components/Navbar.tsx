import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-heading text-2xl font-extrabold tracking-tight">
          <span className="text-gradient-orange">Kincaid</span> Internet
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="tel:8886110830">
          <Button className="hidden md:inline-flex gradient-orange text-primary-foreground rounded-full px-6 font-semibold hover:opacity-90 transition-opacity">
            (888) 611-0830
          </Button>
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href="tel:8886110830" onClick={() => setOpen(false)}>
            <Button className="w-full gradient-orange text-primary-foreground rounded-full font-semibold">(888) 611-0830</Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
