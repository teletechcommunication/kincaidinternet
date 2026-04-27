import { motion } from "framer-motion";
import { ShieldCheck, Wifi, ArrowRight, CheckCircle2, Users, Clock, Phone, Zap, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAdvisor from "@/assets/hero-advisor.jpg";

const HeroSection = () => (
  <section id="home" className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
    
    {/* Animated Background Shapes */}
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl"
      />
    </div>

    <div className="container mx-auto relative z-10">
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content - 7 columns */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6">
              <span className="block text-foreground">Your Trusted</span>
              <span className="block text-gradient-orange">Internet & Cable</span>
              <span className="block text-foreground/70 text-3xl md:text-4xl xl:text-5xl mt-2">Service Assistance</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
              Get expert guidance and informational support for internet, broadband, Wi-Fi, and cable TV services from a third-party assistance provider.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:8886110830" className="group">
                <Button className="w-full sm:w-auto gradient-orange text-primary-foreground rounded-2xl px-10 py-7 text-lg font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
                  <Phone size={22} className="mr-3" />
                  (888) 611-0830
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/how-it-works">
                <Button variant="outline" className="w-full sm:w-auto rounded-2xl px-10 py-7 text-lg font-semibold border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: CheckCircle2, text: "Clear Guidance" },
                { icon: HeadphonesIcon, text: "Expert Support" },
                { icon: Zap, text: "Quick Help" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2.5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <item.icon size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Compliance Micro Text */}
            <p className="text-xs text-muted-foreground mb-6">
              Not an ISP • No Provider Affiliation • Transparent Fees
            </p>
          </motion.div>
        </div>

        {/* Right Content - 5 columns */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card bg-card">
              <img 
                src={heroAdvisor} 
                alt="Service advisor helping with connectivity guidance" 
                className="w-full h-auto object-cover"
                width={800} 
                height={800} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-5 border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gradient-orange">24/7</p>
                      <p className="text-xs text-muted-foreground">Available</p>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gradient-orange">100%</p>
                      <p className="text-xs text-muted-foreground">Independent</p>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gradient-orange">2026</p>
                      <p className="text-xs text-muted-foreground">Launched</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 shadow-xl border-4 border-background"
            >
              <ShieldCheck className="text-primary-foreground" size={32} />
            </motion.div>

            {/* Floating Badge - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border-2 border-primary/20"
            >
              <Wifi className="text-primary" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Disclosure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck size={20} className="text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Important Disclosure</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Kincaid Internet is a third-party service assistance startup launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. Our role is limited to providing informational guidance and assistance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
