import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trustPoints = ["Clear Assistance", "No Provider Affiliation", "Transparent Service Fees"];

const CTASection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="gradient-orange rounded-3xl p-10 md:p-16 text-center text-primary-foreground">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          Need Service Assistance?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Speak with one of our advisors for general guidance on internet, cable, and connectivity services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="tel:8886110830">
            <Button className="bg-foreground text-background rounded-full px-8 py-4 font-semibold hover:bg-foreground/90 transition-colors whitespace-nowrap">
              (888) 611-0830
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="ghost" className="rounded-full px-8 py-4 font-semibold bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 backdrop-blur-sm whitespace-nowrap">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {trustPoints.map((p) => (
            <span key={p} className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90">
              <Check size={16} /> {p}
            </span>
          ))}
        </div>

        <p className="text-primary-foreground/60 text-xs max-w-md mx-auto">
          Kincaid Internet is not affiliated with, authorized by, or endorsed by any internet or cable TV service provider.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
