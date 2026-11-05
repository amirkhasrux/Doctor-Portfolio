'use client';

import { useState } from 'react';
import chambersData from '@/data/chambers.json';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  AlertCircle
} from 'lucide-react';

export default function ChamberSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeChamber = chambersData[activeTab] || chambersData[0];

  const tabs = [
    { label: "Mirpur-2", sublabel: "National Heart Foundation", id: "nhf-mirpur" },
    { label: "Dhanmondi", sublabel: "Labaid Cardiac", id: "labaid-dhanmondi" },
    { label: "Shantinagar", sublabel: "Popular Diagnostic", id: "popular-shantinagar" },
  ];

  const getWhatsAppUrl = (chamber) => {
    const text = encodeURIComponent(
      `Hello, I would like to book a cardiology consultation serial for Dr. Masudur Rahman at ${chamber.facility} (${chamber.branch}).`
    );
    const phone = chamber.serialPhones[0].replace(/[^0-9]/g, '');
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <section id="book-serial" className="py-16 sm:py-24 bg-slate-50 relative scroll-mt-20 border-b border-slate-200">
      {/* Legacy Anchor support */}
      <div id="chambers" className="absolute -top-24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span>Fast Appointment Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-montserrat)] text-slate-900 tracking-tight">
            Book Your Consultation in 60 Seconds
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Select your preferred chamber branch below to view visiting hours, consultation fees, and connect directly with the chamber assistant.
          </p>
        </div>

        {/* Unified Booking Card Container */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
          
          {/* Top Branch Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200 bg-slate-100 p-2 gap-2">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col items-center justify-center py-3.5 px-4 rounded-xl text-center transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    {tab.label}
                  </span>
                  <span className={`text-[11px] mt-0.5 ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                    {tab.sublabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Split Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Chamber Details, Schedule, Fees */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Facility Title & Room */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{activeChamber.branch}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-900">
                  {activeChamber.facilityFull || activeChamber.facility}
                </h3>
                <div className="flex items-start gap-2 mt-2 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{activeChamber.address}</span>
                </div>
                <div className="mt-2 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 inline-block">
                  📍 {activeChamber.room}
                </div>
              </div>

              {/* Schedule Box */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-slate-900">Visiting Days:</span>
                  </div>
                  <span className="font-bold text-slate-800">{activeChamber.days}</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm border-t border-slate-200 pt-2.5">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-slate-900">Visiting Time:</span>
                  </div>
                  <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-0.5 rounded shadow-sm">
                    {activeChamber.time}
                  </span>
                </div>
              </div>

              {/* Consultation Fees Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Transparent Consultation Fee
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] text-slate-500 uppercase font-medium">New Patient</span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 block">
                      {activeChamber.consultationFee.newPatient}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] text-slate-500 uppercase font-medium">Follow-Up (30d)</span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 block">
                      {activeChamber.consultationFee.followUp}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="block text-[10px] text-emerald-700 uppercase font-medium">Report Show</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-800 mt-0.5 block">
                      {activeChamber.consultationFee.reportShowing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Calling Window Notice */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-950">Serial Desk Hours: </span>
                  <span>{activeChamber.serialBookingNote}</span>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Light Action Box */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Assistant Helpline Active
                  </span>
                </div>
                <h4 className="text-lg font-bold font-[family-name:var(--font-montserrat)] text-slate-900">
                  Direct Serial Hotline
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Tap to call the chamber assistant directly to reserve your serial number:
                </p>
              </div>

              {/* 1-Tap Phone Call Buttons */}
              <div className="space-y-3">
                {activeChamber.serialPhones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-black/10">
                        <PhoneCall className="w-4 h-4 text-white" />
                      </span>
                      <div className="text-left">
                        <span className="block text-[10px] text-red-100 uppercase tracking-wider font-semibold">
                          Chamber Assistant {idx + 1}
                        </span>
                        <span className="text-base tracking-wide font-mono">
                          {phone}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs bg-white text-red-600 px-2.5 py-1 rounded-md font-bold group-hover:bg-red-50">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>

              {/* WhatsApp & Google Maps Actions */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <a
                  href={getWhatsAppUrl(activeChamber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>Book Serial via WhatsApp</span>
                </a>

                <a
                  href={activeChamber.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>

              {/* Assurance footnote */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Serials are assigned first-come, first-served</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
