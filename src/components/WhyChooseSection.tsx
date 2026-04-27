import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import connectedDevices from "@/assets/connected-devices.jpg";

const points = [
  "Clear, helpful guidance for connectivity needs",
  "Experienced advisors ready to assist you",
  "Transparent service with no hidden obligations",
  "We facilitate understanding of available options",
];

const WhyChooseSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={connectedDevices} alt="Person using connected devices for internet" loading="lazy" className="w-full h-80 object-cover" width={800} height={600} />
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="absolute -bottom-6 -right-4 bg-card rounded-2xl shadow-xl border border-border p-5">
          <p className="text-3xl font-heading font-extrabold text-gradient-orange">2026</p>
          <p className="text-sm text-muted-foreground font-medium">Launched</p>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
          Why <span className="text-gradient-orange">Choose Us</span>
        </h2>

        <ul className="space-y-4 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-primary-foreground" />
              </span>
              <span className="text-foreground font-medium">{p}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground mb-8 italic">
          Kincaid Internet is a third-party assistance provider. We do not represent any service provider.
        </p>

        <a href="tel:8886110830">
          <Button className="gradient-orange text-primary-foreground rounded-full px-8 py-6 text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
            (888) 611-0830
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseSection;
