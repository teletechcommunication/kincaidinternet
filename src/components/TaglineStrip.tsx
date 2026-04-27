const items = ["Independent Assistance", "Service Guidance", "Connectivity Support", "Third-Party Advisors", "Transparent Help"];

const TaglineStrip = () => (
  <section className="section-dark py-6 overflow-hidden">
    <div className="animate-scroll-strip flex whitespace-nowrap">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 font-heading text-xl md:text-2xl font-bold text-surface-dark-foreground/40">
          {item} <span className="text-primary mx-4">•</span>
        </span>
      ))}
    </div>
  </section>
);

export default TaglineStrip;
