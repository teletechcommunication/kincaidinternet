import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "Dallas, TX", text: "The independent advisors helped me understand my connectivity options clearly. Very helpful guidance!" },
  { name: "James K.", location: "Miami, FL", text: "I appreciated the transparent, no-pressure approach. They assisted me in navigating my service questions." },
  { name: "Linda W.", location: "Chicago, IL", text: "Great independent assistance platform. They guided me through understanding different service types." },
];

const TestimonialsSection = () => (
  <section className="section-dark py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-14">
        What Our <span className="text-gradient-orange">Users</span> Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-surface-dark border border-border/10 rounded-3xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-surface-dark-foreground/80 mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-heading font-bold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-surface-dark-foreground/40 text-xs mt-8 italic">
        These testimonials reflect individual user experiences with our independent assistance service.
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
