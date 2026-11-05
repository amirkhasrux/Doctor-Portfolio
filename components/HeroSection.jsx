'use client';

import { useState } from 'react';
import { Play, ShieldCheck, Star, Clock, Building, ArrowRight, RotateCcw } from 'lucide-react';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const hospitals = [
    { name: "NICVD Dhaka", role: "Professor of Cardiology" },
    { name: "National Heart Foundation", role: "Senior Consultant (Mirpur-2)" },
    { name: "Labaid Cardiac Hospital", role: "Senior Visiting Cardiologist (Dhanmondi)" },
    { name: "Popular Diagnostic Centre", role: "Cardiology Specialist (Shantinagar)" },
  ];

  return (
    <section id="overview" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-white overflow-hidden">
      {/* Background Subtle Warm Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Top Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 shadow-sm mb-6">
          <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
          <span className="font-semibold text-red-900">BMDC Reg: A-56789</span>
          <span className="text-red-300">•</span>
          <span className="text-red-700 font-medium">Prof. of Cardiology (NICVD, Dhaka)</span>
        </div>

        {/* Centered Outcome Headline (H1) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-montserrat)] text-slate-900 tracking-tight leading-[1.15] mb-6">
          Accurate Cardiac Diagnosis &{' '}
          <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">
            Evidence-Based Heart Care
          </span>{' '}
          For Your Long-Term Vitality
        </h1>

        {/* Short 2-line Subheadline */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Personalized clinical care for hypertension, chest pain, coronary artery blockages, and transparent second opinions on Angiogram & Stenting across Dhaka.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#book-serial"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Book Your Chamber Serial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 5-Star Patient Trust Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-slate-700 mb-8">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="font-semibold text-slate-700">
            Trusted by 45,000+ cardiac patients across Bangladesh
          </span>
        </div>

        {/* Video Prompt */}
        <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-4 animate-bounce">
          ↓ Watch this short 2-minute video before visiting the chamber ↓
        </p>

        {/* 16:9 Elevated VSL Video Container */}
        <div className="max-w-3xl mx-auto rounded-2xl border-4 border-white ring-1 ring-slate-200 shadow-2xl shadow-slate-900/10 overflow-hidden mb-12">
          {/* Inner Video Stage: Dark to make video content and red play button pop */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden flex items-center justify-center group">

            {!isPlaying ? (
              /* Custom Preview Poster State */
              <div
                className="absolute inset-0 cursor-pointer flex flex-col justify-between p-4 sm:p-6 select-none"
                onClick={() => setIsPlaying(true)}
              >
                {/* Visual Backdrop with subtle gradient & ECG pulse grid */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 opacity-90" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E63946_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* ECG Graphic Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                  <svg className="w-full h-24 text-red-500" viewBox="0 0 400 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0 50 L120 50 L135 15 L150 85 L165 10 L180 70 L195 50 L400 50" />
                  </svg>
                </div>

                {/* Top-Left Status Badge */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] sm:text-xs text-slate-200 font-medium backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>Doctor&apos;s Consultation Guide</span>
                  </div>

                  {/* Top-Right Badge */}
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-[11px] text-slate-300 font-medium">
                    <span>Prof. Dr. Masudur Rahman</span>
                  </div>
                </div>

                {/* Centered Pulsing Crimson Play Button */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-3">
                  <button
                    type="button"
                    aria-label="Play consultation video"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none ring-4 ring-red-600/30"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </button>
                  <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-md">
                    Click to Play Video Guide
                  </span>
                </div>

                {/* Bottom Duration Badge */}
                <div className="relative z-10 flex items-center justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] font-mono font-medium text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>2:15</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Active Video State */
              <div className="relative w-full h-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/mJCQkV1t0WU?autoplay=1&rel=0&modestbranding=1"
                  title="Cardiology Consultation Guide Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/80 hover:bg-black text-[11px] text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Close video preview"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Poster</span>
                </button>
              </div>
            )}

          </div>

          {/* Embedded Bottom CTA Bar Inside Video Card */}
          <div className="bg-slate-900 border-t border-slate-800 px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-white">
                Need an urgent consultation or report review?
              </p>
              <p className="text-xs text-slate-400">
                Direct assistant booking available across 3 chambers in Dhaka.
              </p>
            </div>
            <a
              href="#book-serial"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md group"
            >
              <span>Book Serial Now</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Institutional Hospital Affiliation Strip Directly Below Video */}
        <div className="pt-2 pb-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">
            Institutional Hospital Affiliations & Chamber Locations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {hospitals.map((hosp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60 transition-colors flex flex-col items-center justify-center text-center shadow-sm"
              >
                <Building className="w-4 h-4 text-red-600 mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {hosp.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                  {hosp.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
