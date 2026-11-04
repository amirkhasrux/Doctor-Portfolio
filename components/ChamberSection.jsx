import chambersData from '@/data/chambers.json';
import ChamberCard from './ChamberCard';
import { Calendar, PhoneCall, HelpCircle } from 'lucide-react';

export default function ChamberSection() {
  return (
    <section id="chambers" className="py-20 lg:py-28 bg-[#F0F4F8] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-cardio-red text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] text-cardio-navy tracking-tight">
            CHAMBER LOCATIONS & SERIAL
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dr. Masudur Rahman conducts physical consultations across 3 prime medical centers in Dhaka. Tap the serial numbers below to reserve your appointment slot.
          </p>
        </div>

        {/* Chambers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {chambersData.map((chamber) => (
            <ChamberCard key={chamber.id} chamber={chamber} />
          ))}
        </div>

        {/* Serial Booking Advice Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-2xl bg-cardio-navy text-vitality-amber shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div className="flex-1 text-sm">
            <h4 className="font-bold text-cardio-navy">
              Serial Booking Advice for Patients
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Serial numbers are assigned on a first-come, first-served basis by the chamber assistants. For emergency admissions or ICU transfer, please reach the hospital emergency department directly.
            </p>
          </div>
          <a
            href="#faqs"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-cardio-red" />
            <span>Policy FAQs</span>
          </a>
        </div>

      </div>
    </section>
  );
}

