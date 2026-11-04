import { Heart, ShieldCheck, AlertTriangle, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-cardio-navy-dark text-slate-400 border-t border-white/10 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Doctor Credentials & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cardio-red/20 text-cardio-red">
                <Heart className="w-5 h-5 fill-cardio-red text-cardio-red" />
              </span>
              <span className="text-xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight">
                DR. MASUDUR RAHMAN
              </span>
            </div>
            
            <p className="text-xs font-semibold text-vitality-amber uppercase tracking-wider">
              MBBS, FCPS (Medicine), MD (Cardiology) • Senior Cardiologist
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Professor of Cardiology at the National Institute of Cardiovascular Diseases (NICVD), Dhaka. Specializing in clinical, non-invasive, and interventional cardiovascular medicine with over 15 years of patient service.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cardio-navy-surface border border-emerald-500/30 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold text-white">BMDC Registration No: A-56789</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-[family-name:var(--font-montserrat)]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-vitality-amber transition-colors">Doctor Profile & Overview</a>
              </li>
              <li>
                <a href="#services" className="hover:text-vitality-amber transition-colors">Cardiovascular Care Services</a>
              </li>
              <li>
                <a href="#chambers" className="hover:text-vitality-amber transition-colors">Chamber Schedules & Serial Booking</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-vitality-amber transition-colors">Consultation Fees & Policies</a>
              </li>
              <li>
                <a href="tel:+8801711000000" className="text-cardio-red font-semibold hover:underline">Direct Assistant Helpline</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cardiac Emergency Advisory (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-5 rounded-2xl bg-cardio-red/10 border border-cardio-red/30">
              <div className="flex items-center gap-2 text-cardio-red font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Acute Emergency Advisory</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                If the patient is experiencing crushing chest pain radiating to left arm or jaw, severe shortness of breath, sudden collapse, or cold sweats, <strong>do not wait for an outpatient chamber serial</strong>.
              </p>
              <div className="mt-3 pt-3 border-t border-cardio-red/20 text-xs flex flex-col gap-1">
                <span className="text-white font-bold">NICVD Emergency (Dhaka): +880-2-9122560</span>
                <span className="text-slate-300">National Emergency Hotline: <strong>999</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2026 Dr. Masudur Rahman. All medical records are kept strictly confidential under BMDC guidelines.
          </p>
          <p className="text-slate-400">
            Dhaka, Bangladesh • Website developed for patient access and chamber assistance
          </p>
        </div>

      </div>
    </footer>
  );
}
