import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceBar from '@/components/ExperienceBar';
import ServicesGrid from '@/components/ServicesGrid';
import ChamberSection from '@/components/ChamberSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cardio-navy text-white selection:bg-cardio-red selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <ExperienceBar />
        <ServicesGrid />
        <ChamberSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick-Action Booking */}
      <FloatingWhatsApp />
    </div>
  );
}

