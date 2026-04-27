import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark py-16">
    <div className="container mx-auto">
      {/* Main Footer Content */}
      <div className="grid lg:grid-cols-3 gap-12 mb-12">
        {/* Brand & Description */}
        <div className="lg:col-span-1">
          <Link to="/" className="font-heading text-3xl font-extrabold inline-block mb-5">
            <span className="text-gradient-orange">Kincaid</span><span className="text-surface-dark-foreground"> Internet</span>
          </Link>
          <p className="text-surface-dark-foreground/70 text-sm leading-relaxed mb-6">
            A third-party service assistance startup providing general guidance for internet, broadband, and cable TV services. Launched in 2026.
          </p>
          <div className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-xl p-4 mb-4">
            <p className="text-surface-dark-foreground/90 text-xs font-semibold mb-2">Important Disclosure</p>
            <p className="text-surface-dark-foreground/70 text-xs leading-relaxed">
              Kincaid Internet is a third-party service assistance provider. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-8">
          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-surface-dark-foreground text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-sm text-surface-dark-foreground/60">
              <li><Link to="/about" className="hover:text-primary transition-colors inline-block">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors inline-block">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors inline-block">FAQ</Link></li>
              <li><Link to="/disclaimer" className="hover:text-primary transition-colors inline-block">Disclaimer</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-surface-dark-foreground text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2.5 text-sm text-surface-dark-foreground/60">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors inline-block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors inline-block">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-primary transition-colors inline-block">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-1">
          <h4 className="font-heading font-bold mb-4 text-surface-dark-foreground text-sm uppercase tracking-wide">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-surface-dark-foreground/70">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-surface-dark-foreground/50 mb-0.5">Email</p>
                <a href="mailto:support@kincaidinternet.com" className="text-sm hover:text-primary transition-colors">
                  support@kincaidinternet.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-surface-dark-foreground/70">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-surface-dark-foreground/50 mb-0.5">Phone</p>
                <a href="tel:8886110830" className="text-sm hover:text-primary transition-colors">
                  (888) 611-0830
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-surface-dark-foreground/70">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-surface-dark-foreground/50 mb-0.5">Location</p>
                <span className="text-sm">United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-surface-dark-foreground/40 text-xs">
            © {new Date().getFullYear()} Kincaid Internet. All rights reserved.
          </p>
          <p className="text-surface-dark-foreground/40 text-xs max-w-2xl">
            Kincaid Internet is a third-party service assistance startup. All trademarks belong to their respective owners. Brand names, if mentioned, are used strictly for informational purposes only.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
