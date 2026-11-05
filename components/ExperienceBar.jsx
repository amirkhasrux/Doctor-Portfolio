import { Clock, Users, Activity, Building2 } from 'lucide-react';

export default function ExperienceBar() {
  const stats = [
    {
      icon: Clock,
      value: "15+",
      label: "Years Experience",
      subtext: "Senior Cardiologist"
    },
    {
      icon: Users,
      value: "45,000+",
      label: "Patients Treated",
      subtext: "Cardiac Outpatients"
    },
    {
      icon: Activity,
      value: "8,500+",
      label: "Angiograms & Interventions",
      subtext: "CAG, Stents & Devices"
    },
    {
      icon: Building2,
      value: "3",
      label: "Dhaka Chambers",
      subtext: "Mirpur, Dhanmondi, Shantinagar"
    }
  ];

  return (
    <section className="relative z-20 w-full bg-slate-50 border-y border-slate-200 py-8 sm:py-10 mb-12 sm:mb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-start ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <IconComponent className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-montserrat)] text-slate-900">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-600 mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
