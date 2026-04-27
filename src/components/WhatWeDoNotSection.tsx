import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

const items = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any brand",
  "We are not affiliated, authorized, or endorsed by any telecom or cable company",
  "We do not sell internet or cable subscriptions",
  "We do not provide guaranteed technical fixes",
];

const WhatWeDoNotSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Visual side */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative">
          <div className="bg-destructive/5 border-2 border-destructive/20 rounded-3xl p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle size={40} className="text-destructive" />
              </div>
            </div>
            <h3 className="font-heading font-bold text-xl text-center mb-3 text-foreground">Important Notice</h3>
            <p className="text-center text-muted-foreground text-sm leading-relaxed">
              To maintain transparency and avoid any confusion, we clearly state what falls outside the scope of our independent assistance services.
            </p>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">
            What We <span className="text-gradient-orange">Do Not</span> Do
          </h2>
          <p className="text-muted-foreground text-sm mb-8">To avoid confusion, please note the following:</p>

          <div className="space-y-3">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-destructive/30 transition-colors">
                <XCircle size={18} className="text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-sm">{item}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6 italic">
            All mentions of providers, if any, are strictly for informational purposes only.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhatWeDoNotSection;
