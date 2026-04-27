import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  highlightWord: string;
  lastUpdated: string;
  disclosure: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, highlightWord, lastUpdated, disclosure, children }: LegalPageLayoutProps) => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero Banner */}
      <section className="pt-28 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <ShieldCheck size={14} /> Legal Information
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-3">
              {title.replace(highlightWord, "").trim()}{" "}
              <span className="text-gradient-orange">{highlightWord}</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-3xl">
          {/* Disclosure */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-10 text-sm text-foreground/80 text-center">
            <ShieldCheck size={16} className="inline mr-2 text-primary" />
            {disclosure}
          </div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="space-y-6">
            {children}
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
    <h2 className="font-heading font-bold text-lg mb-3 text-foreground flex items-center gap-2">
      <span className="w-1.5 h-6 rounded-full gradient-orange inline-block" />
      {title}
    </h2>
    <div className="text-foreground/80 leading-relaxed text-sm space-y-2">
      {children}
    </div>
  </div>
);

export default LegalPageLayout;
