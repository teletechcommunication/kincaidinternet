import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndependentAssistanceSection = () => (
  <section className="section-light py-20 lg:py-28 overflow-hidden relative">
    {/* Background accents */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
    </div>

    <div className="container mx-auto relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-5 py-2 text-sm font-semibold mb-6">
            <Shield size={16} />
            Third-Party Service Platform
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
            Need <span className="text-gradient-orange">Service Assistance</span>?
          </h2>
          
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
            Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from our third-party assistance team.
          </p>
          
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We provide practical assistance to help you understand service options, navigate common connectivity concerns, and make informed decisions about your connectivity needs.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {/* Call Option */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/40 transition-all group">
            <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center mb-5 shadow-lg">
              <Phone size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Talk to an Advisor</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Speak with our third-party service advisors for personalized guidance on connectivity matters.
            </p>
            <a href="tel:8886110830">
              <Button className="w-full gradient-orange text-primary-foreground rounded-xl py-6 font-bold group-hover:shadow-lg transition-all">
                (888) 611-0830
                <Phone size={18} className="ml-2" />
              </Button>
            </a>
          </div>

          {/* Message Option */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/40 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 border-2 border-primary/20">
              <MessageCircle size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Request Support</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Submit your questions and get informational assistance from our support team.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="w-full rounded-xl py-6 font-bold border-2 hover:bg-primary/5 transition-all">
                Contact Us
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-muted/50 border border-border rounded-xl p-6 text-center"
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-semibold">Disclaimer:</strong> Kincaid Internet is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IndependentAssistanceSection;
