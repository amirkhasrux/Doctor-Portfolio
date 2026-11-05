'use client';

import { Heart, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
          {/* Doctor Info */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="p-2 rounded-xl bg-red-50 text-red-600 group-hover:scale-105 transition-transform flex items-center justify-center border border-red-100">
              <Heart className="w-5 h-5 fill-red-600 text-red-600" />
            </span>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg lg:text-xl font-extrabold font-[family-name:var(--font-montserrat)] tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                  DR. MASUDUR RAHMAN
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  BMDC Reg: A-56789
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="font-medium text-slate-600">MBBS, FCPS, MD (Cardiology)</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-red-600 font-medium hidden sm:inline">Prof. of Cardiology (NICVD)</span>
                <span className="inline-flex md:hidden text-[10px] text-slate-600 font-medium">
                  • BMDC: A-56789
                </span>
              </div>
            </div>
          </a>


        </div>
      </div>
    </header>
  );
}
