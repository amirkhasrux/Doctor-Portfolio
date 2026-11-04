'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, FileCheck, PhoneCall, DollarSign, Clock } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: PhoneCall,
      question: "How do I take a chamber serial for Dr. Masudur Rahman?",
      answer: "Serials are handled directly by the chamber assistants at each respective hospital. Call the designated assistant numbers listed in the chamber section between 9:00 AM and 2:00 PM on working days. Provide the patient's full name, age, and contact number. You will receive an approximate serial number and arrival time slot."
    },
    {
      icon: DollarSign,
      question: "What is the consultation fee structure?",
      answer: "At National Heart Foundation and Popular Diagnostic Centre, the new patient consultation fee is ৳1,500 and follow-up is ৳1,000. At Labaid Cardiac Hospital, the new patient fee is ৳2,000 and follow-up is ৳1,200. Follow-up rates apply if you return within 30 days of your previous consultation."
    },
    {
      icon: FileCheck,
      question: "What is the policy for showing test reports?",
      answer: "Test reports (ECG, Echocardiogram, Blood tests, Angiogram CDs) prescribed by Dr. Masudur Rahman can be shown free of charge within 10 to 14 days of the initial consultation at the same chamber. Please bring the original prescription and all previous cardiac reports in chronological order."
    },
    {
      icon: Clock,
      question: "Can I get a serial on the same day if I arrive directly?",
      answer: "While we recommend booking via phone in advance, a limited number of emergency or walk-in serials are reserved at the counter depending on doctor availability. Please arrive early at the hospital chamber desk (at least 30 minutes before visiting hours begin)."
    },
    {
      icon: HelpCircle,
      question: "What should I bring to my first cardiac consultation?",
      answer: "Please bring your previous prescriptions, all ongoing medicine strips/boxes, past ECG tracings, Echo/ETT reports, blood test results (Lipid profile, HbA1c, Creatinine), and any hospital discharge certificates if previously admitted for chest pain or stenting."
    }
  ];

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-cardio-navy-dark text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardio-navy-surface border border-vitality-amber/30 text-vitality-amber text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cardio-red" />
            <span>Consultation Policies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about booking serials, visiting hours, report reviews, and consultation fees.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-cardio-navy-surface border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="p-2 rounded-xl bg-cardio-navy text-vitality-amber shrink-0">
                      <Icon className="w-5 h-5 text-cardio-red" />
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-vitality-amber' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 border-t border-white/5 leading-relaxed pl-16">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

