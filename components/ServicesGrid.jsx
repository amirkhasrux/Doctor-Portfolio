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
    <section id="services" className="py-20 lg:py-28 bg-cardio-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardio-navy-surface border border-vitality-amber/30 text-vitality-amber text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-cardio-red" />
            <span>Clinical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight">
            HEART CARE SERVICES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Specialized diagnosis, medical interventions, and long-term care management for complex cardiovascular conditions in Bangladesh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Activity;

            return (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-cardio-navy-surface border border-white/5 hover:border-cardio-red/50 hover:bg-cardio-navy-light transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Highlight Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cardio-red/10 text-cardio-red flex items-center justify-center group-hover:bg-cardio-red group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.highlight && (
                      <span className="text-[11px] font-semibold text-vitality-amber bg-vitality-amber/10 px-3 py-1 rounded-full border border-vitality-amber/20">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title & Bengali Subtitle */}
                  <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] text-white group-hover:text-vitality-amber transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-vitality-amber font-medium mt-1 mb-3">
                    {service.bengaliTitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Procedures List */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {service.procedures.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cardio-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link to chambers */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href="#chambers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-cardio-red transition-colors"
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

