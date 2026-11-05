import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceBar from '@/components/ExperienceBar';
import ChamberSection from '@/components/ChamberSection';
import ServicesGrid from '@/components/ServicesGrid';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      {/* 1. Distraction-Free Sticky Navigation */}
      <Navbar />

      {/* Main Single-Column VSL Funnel Flow */}
      <main className="flex-1">
        {/* 2. Centered VSL Hero + 16:9 Video Box & Affiliation Strip */}
        <HeroSection />

        {/* 3. 4-Metric Authority Counter Bar */}
        <ExperienceBar />

        {/* 4. Interactive Call & WhatsApp Serial Booking Widget */}
        <ChamberSection />

        {/* 5. Cardiovascular Specialty & Outcomes Grid */}
        <ServicesGrid />

        {/* 6. Single-Column Centered FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 7. Comprehensive Clinical Footer & Emergency Hotlines */}
      <Footer />

      {/* 8. Sticky Bottom-Right WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
