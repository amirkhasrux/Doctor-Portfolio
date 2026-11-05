import { Heart, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-slate-100 text-slate-700 border-t border-slate-200 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">

          {/* Col 1: Doctor Credentials & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100">
                <Heart className="w-5 h-5 fill-red-600 text-red-600" />
              </span>
              <span className="text-xl font-black font-[family-name:var(--font-montserrat)] text-slate-900 tracking-tight">
                DR. MASUDUR RAHMAN
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              MBBS, FCPS (Medicine), MD (Cardiology) • Senior Cardiologist
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Professor of Cardiology at the National Institute of Cardiovascular Diseases (NICVD), Dhaka. Specializing in clinical, non-invasive, and interventional cardiovascular medicine with over 15 years of dedicated patient service.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-900">BMDC Registration: A-56789</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-[family-name:var(--font-montserrat)]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-red-600 transition-colors">Video Consultation Guide</a>
              </li>
              <li>
                <a href="#book-serial" className="text-red-600 font-semibold hover:underline">Book Chamber Serial (60 Sec)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-600 transition-colors">Heart Care Services</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-red-600 transition-colors">Serial Booking Policies & Fees</a>
              </li>
              <li>
                <a href="tel:+8801711000000" className="text-slate-600 hover:text-slate-900">Direct Assistant Helpline</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cardiac Emergency Advisory (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-red-900 shadow-sm">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Acute Emergency Advisory</span>
              </div>
              <p className="text-xs text-red-800 leading-relaxed">
                If the patient is experiencing crushing chest pain, pain radiating to the left arm or jaw, severe shortness of breath, sudden collapse, or cold sweats, <strong>do not wait for an outpatient chamber serial</strong>.
              </p>
              <div className="mt-3 pt-3 border-t border-red-200 text-xs flex flex-col gap-1">
                <span className="text-red-950 font-bold">NICVD Emergency (Dhaka): +880-2-9122560</span>
                <span className="text-red-800">National Emergency Hotline: <strong>999</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Dr. Masudur Rahman. All medical consultations are conducted under BMDC ethical regulations.
          </p>
          <p className="text-slate-500">
            Dhaka, Bangladesh • Fast serial assistance portal for cardiac patients
          </p>
        </div>

      </div>
    </footer>
  );
}
