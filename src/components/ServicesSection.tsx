import { motion } from "framer-motion";
import { HelpCircle, BookOpen, Headphones, Monitor } from "lucide-react";
import wifiRouter from "@/assets/wifi-router.jpg";
import familyWatching from "@/assets/family-watching.jpg";
import connectedDevices from "@/assets/connected-devices.jpg";
import fiberOptic from "@/assets/fiber-optic.jpg";

const services = [
  { title: "Internet & Broadband Guidance", desc: "Understand internet and broadband service options with general informational support.", icon: HelpCircle, image: wifiRouter },
  { title: "Connectivity Assistance", desc: "Get practical guidance on common connectivity issues and Wi-Fi concerns.", icon: Monitor, image: connectedDevices },
  { title: "Service Provider Navigation", desc: "Learn how to navigate service provider processes with clear assistance.", icon: BookOpen, image: fiberOptic },
  { title: "Cable TV Information", desc: "Receive general informational support related to cable TV services and options.", icon: Headphones, image: familyWatching },
];

const ServicesSection = () => (
  <section id="services" className="section-dark py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-4">
        How We <span className="text-gradient-orange">Assist You</span>
      </motion.h2>
      <p className="text-center text-surface-dark-foreground/60 text-sm mb-4 max-w-2xl mx-auto">
        At Kincaid Internet, we help users understand internet and broadband service options, get practical guidance on common connectivity issues, learn how to navigate service provider processes, and receive general informational support related to cable TV services.
      </p>
      <p className="text-center text-surface-dark-foreground/40 text-xs mb-14 max-w-xl mx-auto italic">
        Our role is limited to guidance and assistance only. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-surface-dark border border-border/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all group">
            <div className="h-44 overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={600} />
            </div>
            <div className="p-6">
              <div className="w-11 h-11 rounded-xl gradient-orange flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg">
                <s.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-surface-dark-foreground/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
