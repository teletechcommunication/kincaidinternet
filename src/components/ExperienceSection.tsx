import { motion } from "framer-motion";
import { ShieldCheck, Users, Eye, Rocket } from "lucide-react";
import teamOffice from "@/assets/team-office.jpg";

const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "We clearly disclose our independent status on every page of our website." },
  { icon: Users, title: "User-Focused", desc: "Our guidance is tailored to help you understand your connectivity options." },
  { icon: Eye, title: "Clarity", desc: "No confusing claims, no misleading language — clear, honest communication." },
  { icon: Rocket, title: "Founded 2026", desc: "A startup dedicated to helping users navigate connectivity services independently." },
];

const ExperienceSection = () => (
  <section className="section-light py-20 lg:py-28">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image & Stats */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src={teamOffice} alt="Kincaid Internet service advisory team" loading="lazy" className="w-full h-80 object-cover" width={1024} height={600} />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-4 lg:right-4 bg-card rounded-2xl shadow-xl p-5 border border-border">
            <p className="text-3xl font-heading font-extrabold text-gradient-orange">2026</p>
            <p className="text-sm text-muted-foreground font-medium">Year Launched</p>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
            About <span className="text-gradient-orange">Kincaid Internet</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Kincaid Internet is a third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-4">
                <v.icon className="text-primary mb-2" size={22} />
                <h4 className="font-heading font-bold text-sm mb-1">{v.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
