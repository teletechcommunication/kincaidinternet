import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Lightbulb, ThumbsUp, ShieldCheck, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAdvisor from "@/assets/hero-advisor.jpg";
import connectedDevices from "@/assets/connected-devices.jpg";

const steps = [
  {
    icon: Phone,
    title: "Reach Out to Us",
    desc: "Contact our team via phone, email, or the contact form. Let us know what connectivity-related guidance you need.",
  },
  {
    icon: MessageSquare,
    title: "Share Your Questions",
    desc: "Describe your internet, cable, or connectivity concerns. Our advisors will listen and understand your situation without any pressure.",
  },
  {
    icon: Lightbulb,
    title: "Receive Guidance",
    desc: "Our advisors provide general informational support to help you understand your service options. We do not make decisions for you.",
  },
  {
    icon: ThumbsUp,
    title: "Make an Informed Choice",
    desc: "With the information we provide, you are empowered to make your own informed decisions about your connectivity services.",
  },
];

const benefits = [
  "No pressure sales tactics — ever",
  "Clear, helpful guidance",
  "Transparent service fees",
  "No provider passwords requested",
  "Available nationwide",
  "Experienced advisors",
];

const faqs = [
  { q: "How long does a typical guidance session take?", a: "Most sessions range from 15 to 30 minutes, depending on the complexity of your questions." },
  { q: "Do I need to prepare anything before contacting you?", a: "No preparation is needed. Simply reach out and our advisors will guide you through the process." },
  { q: "Is there any obligation after receiving guidance?", a: "Absolutely not. Our guidance is informational only, with no obligations or commitments required." },
];

const HowItWorks = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero Banner */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <HelpCircle size={14} /> Simple & Transparent Process
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              How It <span className="text-gradient-orange">Works</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our assistance process is simple, transparent, and pressure-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="pb-10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 text-sm text-foreground/80 text-center">
            <ShieldCheck size={16} className="inline mr-2 text-primary" />
            Kincaid Internet is a third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center shadow-lg shadow-primary/25">
                      <step.icon size={24} className="text-primary-foreground" />
                    </div>
                    {i < steps.length - 1 && <div className="w-0.5 h-10 bg-border mt-2" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">
                      <span className="text-gradient-orange mr-2">Step {i + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="sticky top-28">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={heroAdvisor} alt="Advisor providing connectivity guidance" loading="lazy" className="w-full h-auto object-cover" width={1024} height={1024} />
              </div>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-dark rounded-3xl p-10 md:p-14 mb-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">
                  Why Users <span className="text-gradient-orange">Trust Us</span>
                </h2>
                <p className="text-surface-dark-foreground/70 leading-relaxed">
                  We maintain the highest standards of transparency and honesty in every interaction with our users.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-surface-dark-foreground/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mini FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-20">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-10">
              Common <span className="text-gradient-orange">Questions</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-heading font-bold text-sm mb-3">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/faq" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View all FAQs <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <a href="tel:8886110830">
              <Button className="gradient-orange text-primary-foreground rounded-full px-10 py-6 text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                (888) 611-0830
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Our service fees are separate from any provider charges. We do not sell internet or cable services.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
