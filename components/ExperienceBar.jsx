import { Clock, Users, Activity, Building2 } from 'lucide-react';

export default function ExperienceBar() {
  const stats = [
    {
      icon: Clock,
      value: "15+",
      label: "Years of Experience",
      subtext: "Senior Cardiologist & Academician"
    },
    {
      icon: Users,
      value: "45,000+",
      label: "Patients Treated",
      subtext: "Cardiac Outpatients across BD"
    },
    {
      icon: Activity,
      value: "8,500+",
      label: "Angiograms & Interventions",
      subtext: "CAG, Stenting & Pacemakers"
    },
    {
      icon: Building2,
      value: "3",
      label: "Chamber Centers",
      subtext: "Mirpur, Dhanmondi & Shantinagar"
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-cardio-navy-surface border border-white/10 shadow-2xl p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-start ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2 text-vitality-amber">
                  <IconComponent className="w-5 h-5 text-cardio-red" />
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-[family-name:var(--font-montserrat)] text-white">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-100">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
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

