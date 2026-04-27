import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck, MapPin, Clock, MessageSquare } from "lucide-react";
import connectedDevices from "@/assets/connected-devices.jpg";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero Banner */}
      <section className="pt-28 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <MessageSquare size={14} /> We're Here to Help
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-gradient-orange">Contact</span> Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Reach out to our third-party support team for assistance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-5xl">
          {/* Disclosure */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-12 text-sm text-foreground/80 text-center">
            <ShieldCheck size={16} className="inline mr-2 text-primary" />
            Kincaid Internet is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: Mail, title: "Email Us", info: "support@kincaidinternet.com", sub: "We respond within 24 hours" },
                { icon: Phone, title: "Call Us", info: "(888) 611-0830", sub: "\"Thank you for calling Kincaid Internet, a third-party service assistance platform.\"" },
                { icon: Clock, title: "Hours", info: "Mon - Fri: 9 AM - 6 PM EST", sub: "Weekend support available" },
                { icon: MapPin, title: "Location", info: "United States", sub: "Nationwide assistance" },
              ].map((item) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-0.5">{item.title}</h3>
                    <p className="text-foreground text-sm">{item.info}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Request Assistance</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                    <input type="email" placeholder="Your Email" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                  </div>
                  <input type="tel" placeholder="Your Phone Number" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                  <textarea placeholder="How can we assist you?" rows={5} className="w-full px-5 py-3.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/30 resize-none text-sm" />
                  <Button type="submit" className="w-full gradient-orange text-primary-foreground rounded-full py-4 font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Submit Request
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground text-center mt-4 italic">
                  We do not request provider passwords or sensitive account credentials.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
