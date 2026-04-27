import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhatWeDoNotSection from "@/components/WhatWeDoNotSection";
import ExperienceSection from "@/components/ExperienceSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import TaglineStrip from "@/components/TaglineStrip";
import BlogSection from "@/components/BlogSection";
import IndependentAssistanceSection from "@/components/IndependentAssistanceSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhatWeDoNotSection />
    <ExperienceSection />
    <WhyChooseSection />
    <TestimonialsSection />
    <CTASection />
    <TaglineStrip />
    <BlogSection />
    <IndependentAssistanceSection />
    <Footer />
  </div>
);

export default Index;
