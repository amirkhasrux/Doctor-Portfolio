'use client';

import { useState } from 'react';
import { Phone, Calendar, Menu, X, Heart, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-cardio-navy/90 border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Doctor Branding & BMDC Badge */}
          <div className="flex flex-col">
            <a href="#" className="group flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cardio-red/20 text-cardio-red group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 fill-cardio-red text-cardio-red" />
              </span>
              <div>
                <span className="text-xl sm:text-2xl font-black font-[family-name:var(--font-montserrat)] tracking-tight text-white group-hover:text-cardio-red transition-colors">
                  DR. MASUDUR RAHMAN
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <span>MBBS, MD (Cardiology)</span>
                  <span className="text-vitality-amber">•</span>
                  <span className="text-vitality-amber font-semibold uppercase">Senior Cardiologist</span>
                </div>
              </div>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 mt-0.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>BMDC Reg: A-56789</span>
              <span className="text-slate-600">|</span>
              <span>Prof. of Cardiology (NICVD)</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-200">
            <a href="#overview" className="hover:text-vitality-amber transition-colors">Overview</a>
            <a href="#services" className="hover:text-vitality-amber transition-colors">Services</a>
            <a href="#chambers" className="hover:text-vitality-amber transition-colors">Chambers</a>
            <a href="#faqs" className="hover:text-vitality-amber transition-colors">Patient Info</a>
            <a href="#about" className="hover:text-vitality-amber transition-colors">About</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+8801711000000"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 hover:border-vitality-amber text-xs font-bold text-slate-200 hover:text-white transition-all bg-cardio-navy-surface/50 tracking-wide uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-vitality-amber" />
              <span>CALL FOR SERIAL</span>
            </a>
            <a
              href="#chambers"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cardio-red hover:bg-cardio-red-hover text-xs font-bold text-white transition-all shadow-lg shadow-cardio-red/25 hover:shadow-cardio-red/40 tracking-wide uppercase"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK APPOINTMENT</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3 bg-cardio-navy/95">
            <div className="px-2 pb-2 text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>BMDC Reg: A-56789 | NICVD</span>
            </div>
            <a
              href="#overview"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Overview
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Heart Care Services
            </a>
            <a
              href="#chambers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Chamber Schedules & Serial
            </a>
            <a
              href="#faqs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Consultation Policies & Fees
            </a>
            <div className="pt-2 flex flex-col gap-2 px-3">
              <a
                href="#chambers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-cardio-red text-white text-sm font-bold shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Serial Appointment
              </a>
              <a
                href="tel:+8801711000000"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-slate-700 bg-slate-900 text-white text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-vitality-amber" />
                Direct Serial Call: 01711-000000
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

