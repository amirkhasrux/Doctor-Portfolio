import servicesData from '@/data/services.json';
import { 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  Zap, 
  Cpu, 
  FileText, 
  Check, 
  Heart 
} from 'lucide-react';

const iconMap = {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  Cpu,
  FileText
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-red-600" />
            <span>Cardiovascular Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-montserrat)] text-slate-900 tracking-tight">
            Specialized Heart Care Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Evidence-based diagnosis, preventive management, and interventional cardiology consultations across Dhaka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Activity;

            return (
              <div
                key={service.id}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Highlight Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors border border-red-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.highlight && (
                      <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title & Bengali Subtitle */}
                  <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-red-600 font-medium mt-1 mb-3">
                    {service.bengaliTitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Procedures List */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {service.procedures.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link to booking */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#book-serial"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-red-600 transition-colors"
                  >
                    <span>Consult Dr. Masudur Rahman</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
