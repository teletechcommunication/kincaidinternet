import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Eye, Rocket, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamOffice from "@/assets/team-office.jpg";
import networkGlobe from "@/assets/network-globe.jpg";

const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "Clear disclosure of our independent status on every page." },
  { icon: Users, title: "User-Focused", desc: "Guidance tailored to help you understand your options." },
  { icon: Eye, title: "Clarity", desc: "No confusing claims or misleading language — ever." },
  { icon: Heart, title: "Integrity", desc: "We never impersonate or misrepresent any service provider." },
  { icon: Target, title: "Responsibility", desc: "Honest, ethical assistance with no pressure tactics." },
  { icon: Rocket, title: "Innovation", desc: "A modern approach to independent connectivity guidance." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero Banner */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <ShieldCheck size={14} /> Third-Party Service Platform
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              About <span className="text-gradient-orange">Kincaid Internet</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A third-party service assistance startup, launched in 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclosure Banner */}
      <section className="pb-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 text-sm text-foreground/80 text-center">
            <ShieldCheck size={16} className="inline mr-2 text-primary" />
            Kincaid Internet is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={teamOffice} alt="Kincaid Internet service advisory team" loading="lazy" className="w-full h-72 object-cover" width={1024} height={600} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">
                Our <span className="text-gradient-orange">Story</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Kincaid Internet was founded in 2026 with a clear mission: to help everyday users navigate the often complex landscape of internet, broadband, and cable TV services — transparently and independently.
                </p>
                <p>
                  We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns. Our advisors provide clear, helpful information.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mission Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">
                Our <span className="text-gradient-orange">Mission</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  We believe that understanding your connectivity options shouldn't be confusing or overwhelming. Our mission is to provide clear guidance that empowers users to make informed decisions.
                </p>
                <p>
                  We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={networkGlobe} alt="Global connectivity network" loading="lazy" className="w-full h-72 object-cover" width={800} height={600} />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-10">
              Our <span className="text-gradient-orange">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-6 text-center hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl gradient-orange flex items-center justify-center mx-auto mb-4">
                    <v.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
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

export default About;
