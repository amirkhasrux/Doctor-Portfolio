import { ArrowUpRight, MessageCircle, Heart, Activity, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/8801711000000?text=Hello%20Dr.%20Masudur%20Rahman,%20I%20would%20like%20to%20book%20a%20cardiology%20consultation%20serial.";

  return (
    <section id="overview" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cardio-red/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cardio-navy-light/60 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Grid (55% - col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            
            {/* Top Credential Ribbon */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-cardio-navy-surface border border-vitality-amber/40 text-xs text-slate-200">
              <ShieldCheck className="w-4 h-4 text-vitality-amber" />
              <span className="font-semibold text-white">BMDC Reg No: A-56789</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Prof. of Cardiology (NICVD Dhaka)</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1 font-[family-name:var(--font-montserrat)] font-black tracking-tight leading-[0.93] select-none">
              <div className="text-5xl sm:text-7xl lg:text-8xl text-white">
                HEAL THE
              </div>
              <div className="text-5xl sm:text-7xl lg:text-8xl flex items-center gap-x-3 sm:gap-x-5">
                <span className="text-cardio-red heart-text-glow">
                  HEART
                </span>
                <span className="text-vitality-amber font-light select-none">/</span>
              </div>
              <div className="text-5xl sm:text-7xl lg:text-8xl flex items-center gap-x-3 sm:gap-x-5 text-white">
                <span>LIFE</span>
                <span className="text-vitality-amber font-light select-none">/</span>
                <span>FIRST</span>
              </div>
            </div>

            {/* Doctor Subheading & Clinical Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Specialized cardiovascular care for hypertension, coronary artery blockages, heart failure, and rhythm disorders. Serving patients across Bangladesh with compassionate, evidence-based cardiology.
            </p>

            {/* Key Assurance Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cardio-red shrink-0" />
                <span>Interventional Cardiology (NICVD & NHF)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cardio-red shrink-0" />
                <span>Direct Assistant Chamber Booking</span>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#chambers"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-cardio-navy font-bold text-base transition-all shadow-xl hover:shadow-2xl"
              >
                <span>BOOK CHAMBER</span>
                <span className="w-7 h-7 rounded-full bg-cardio-red text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-cardio-navy-surface hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 text-white font-medium text-base transition-all"
              >
                <span className="p-1 rounded-full bg-whatsapp-emerald/20 text-whatsapp-emerald">
                  <MessageCircle className="w-5 h-5 fill-whatsapp-emerald text-whatsapp-emerald" />
                </span>
                <span>WhatsApp Serial</span>
              </a>
            </div>

            {/* Notice for acute emergency */}
            <p className="text-xs text-slate-400">
              ⚡ In acute cardiac emergencies (severe chest pain, breathing collapse), visit the nearest emergency hospital immediately.
            </p>
          </div>

          {/* Right Grid (45% - col-span-5): Anatomical Heart & Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-square sm:aspect-[4/5] rounded-3xl p-6 cardio-glass overflow-hidden shadow-2xl flex flex-col justify-between border border-white/10">
              
              {/* Background ECG Wave Grid Motif */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E63946_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cardio-navy-dark/90 border border-white/10 text-xs font-semibold text-slate-200">
                  <Activity className="w-3.5 h-3.5 text-cardio-red animate-pulse" />
                  <span>Cardiology Chamber</span>
                </div>
                <span className="text-[11px] font-mono uppercase text-vitality-amber tracking-wider">Dhaka, Bangladesh</span>
              </div>

              {/* Heart Graphic Motif Placeholder with Delicate Arterial Glow & ECG Pulse Lines */}
              <div className="relative z-10 my-auto flex flex-col items-center text-center py-6">
                <div className="relative mb-6">
                  {/* Glowing pulses and arterial rings */}
                  <div className="absolute inset-0 rounded-full bg-cardio-red/35 blur-2xl pulse-cardio" />
                  <div className="absolute -inset-3 rounded-full border border-cardio-red/20 animate-ping opacity-25" />
                  <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-cardio-red via-red-500 to-rose-400 p-1 flex items-center justify-center shadow-inner">
                    <div className="w-full h-full rounded-full bg-cardio-navy-dark flex items-center justify-center relative overflow-hidden">
                      {/* ECG Wave vector overlay */}
                      <svg className="absolute inset-x-0 h-10 w-full opacity-30 text-cardio-red" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M0 10 L30 10 L35 3 L40 18 L45 2 L50 14 L55 10 L100 10" />
                      </svg>
                      <Heart className="w-20 h-20 text-cardio-red fill-cardio-red/20 pulse-cardio relative z-10" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] text-white">
                  Dr. Masudur Rahman
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">
                  MBBS, FCPS (Medicine), MD (Cardiology)
                </p>
                <p className="text-xs text-vitality-amber font-semibold mt-0.5">
                  Senior Interventional Cardiologist • NICVD
                </p>
              </div>

              {/* Floating Stat Badge */}
              <div className="relative z-10 p-3.5 rounded-2xl bg-cardio-navy-dark/95 border border-vitality-amber/30 amber-badge-glow flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-vitality-amber/20 text-vitality-amber">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-[family-name:var(--font-montserrat)]">
                    Serving with 15+ Years of Heart Care
                  </div>
                  <div className="text-xs text-slate-300">
                    Dedicated Clinical Excellence & Interventional Care
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

