import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import wifiRouter from "@/assets/wifi-router.jpg";
import fiberOptic from "@/assets/fiber-optic.jpg";
import connectedDevices from "@/assets/connected-devices.jpg";

const posts = [
  { title: "Understanding Your Internet Service Options", tag: "Guide", date: "Mar 2026", image: wifiRouter },
  { title: "What to Consider When Choosing a Connectivity Plan", tag: "Tips", date: "Feb 2026", image: fiberOptic },
  { title: "Fiber vs Broadband: A General Overview", tag: "Information", date: "Jan 2026", image: connectedDevices },
];

const BlogSection = () => (
  <section className="section-light py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-14">
        Helpful <span className="text-gradient-orange">Tips & Guides</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-border">
            <div className="h-48 overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={600} />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold gradient-orange text-primary-foreground px-3 py-1 rounded-full">{p.tag}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
