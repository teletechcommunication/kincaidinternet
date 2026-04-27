import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, HelpCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Are you an official cable or internet service provider?",
    a: "No. Kincaid Internet is a third-party assistance platform. We do not provide internet, cable, or streaming services. We are not affiliated with, endorsed by, or sponsored by any service provider.",
  },
  {
    q: "Do you sell internet, cable, or streaming plans?",
    a: "No. We do not sell any internet, cable, or streaming subscriptions. We provide general guidance and informational assistance only to help users understand their connectivity options.",
  },
  {
    q: "Do you charge for your services?",
    a: "Yes. Our service fees are separate from any charges by your internet or cable service provider. Our fees cover the guidance and assistance we provide.",
  },
  {
    q: "Will I still be billed by my service provider?",
    a: "Yes. Any billing from your internet, cable, or streaming service provider remains unchanged and separate from our assistance fees. We have no control over provider billing.",
  },
  {
    q: "Do you need my account passwords or sensitive information?",
    a: "No. We never request provider account passwords or sensitive credentials. Your privacy and security are important to us.",
  },
  {
    q: "Which providers do you support?",
    a: "We may reference multiple providers for informational and guidance purposes only. We are not affiliated with, authorized by, or endorsed by any of them. All provider names and trademarks belong to their respective owners.",
  },
  {
    q: "Are your services refundable?",
    a: "Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on the service type and whether assistance has already been delivered. Please review our Refund Policy page for full details.",
  },
  {
    q: "How do I reach your support team?",
    a: "You can contact us via email at support@kincaidinternet.com or call us at (888) 611-0830. Our call greeting will confirm: 'Thank you for calling Kincaid Internet, a third-party service assistance platform.'",
  },
];

const FAQ = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero Banner */}
      <section className="pt-28 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <HelpCircle size={14} /> Got Questions?
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Frequently Asked <span className="text-gradient-orange">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Common questions about our third-party assistance service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-12 text-sm text-foreground/80 text-center">
            <ShieldCheck size={16} className="inline mr-2 text-primary" />
            Kincaid Internet is a third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <AccordionItem value={`faq-${i}`} className="border border-border rounded-2xl px-6 bg-card shadow-sm">
                  <AccordionTrigger className="font-heading font-semibold text-left text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-14 gradient-orange rounded-3xl p-10 text-center text-primary-foreground">
            <Phone className="mx-auto mb-4" size={32} />
            <h3 className="font-heading text-2xl font-extrabold mb-3">Still Have Questions?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Our advisors are ready to assist you with any connectivity-related questions.
            </p>
            <a href="tel:8886110830">
              <Button className="bg-foreground text-background rounded-full px-8 py-4 font-semibold hover:bg-foreground/90">
                (888) 611-0830
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FAQ;
