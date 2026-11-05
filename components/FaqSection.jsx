'use client';

import { useState } from 'react';
import { ChevronDown, PhoneCall, FileCheck, Stethoscope, AlertTriangle, Clock, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: PhoneCall,
      question: "How do I book a chamber serial and what are the assistant calling hours?",
      answer: "Serials are handled directly by the chamber assistants at each hospital. Call the designated assistant numbers listed in the booking section between 9:00 AM and 1:00 PM (for Mirpur) or 10:00 AM to 3:00 PM (for Dhanmondi). Provide the patient's full name, age, and contact number. You will receive an approximate serial number and advised arrival time slot."
    },
    {
      icon: FileCheck,
      question: "What medical documents and reports should I bring on the first visit?",
      answer: "Please bring all ongoing medicine strips/boxes, past ECG tracings, Echocardiogram and ETT reports, recent blood tests (Lipid Profile, HbA1c, Creatinine, Electrolytes), previous discharge summaries if hospitalized, and any Angiogram CDs if available. Arranging documents chronologically helps ensure a fast, accurate evaluation."
    },
    {
      icon: Clock,
      question: "What is the policy and timeline for showing test reports without a fee?",
      answer: "Diagnostic tests (blood tests, Echo, ECG, Holter) prescribed by Dr. Masudur Rahman can be shown free of charge within 10 to 14 days of the initial consultation at the same chamber. Please bring the original prescription slip along with the test reports."
    },
    {
      icon: Stethoscope,
      question: "Can I get a second opinion on Coronary Angiogram (CAG) and Stenting / Bypass?",
      answer: "Yes, Dr. Masudur Rahman regularly provides second opinions on coronary blockages. Please bring your Coronary Angiogram (CAG) video CD/disc along with the catheterization laboratory summary report. A detailed assessment will be conducted to discuss whether medical therapy, stenting (PCI), or bypass surgery (CABG) is optimal."
    },
    {
      icon: AlertTriangle,
      question: "What should I do if the patient experiences sudden severe chest pain?",
      answer: "In acute cardiac emergencies (crushing chest pain radiating to the left arm or jaw, severe breathlessness, profuse sweating, or fainting), do NOT wait for an outpatient chamber serial. Immediately take the patient to the nearest hospital emergency department or NICVD Emergency (Dhaka: +880-2-9122560) or dial 999 for ambulance transport."
    }
  ];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200 relative scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700 uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Patient Information & Chamber Rules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-montserrat)] text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear guidelines on serial bookings, visiting hours, report reviews, and urgent care protocols.
          </p>
        </div>

        {/* Single-Column Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="p-2 rounded-xl bg-red-50 text-red-600 border border-red-100 shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed pl-14 sm:pl-16">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct contact helpline callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-slate-900 block mb-0.5">Still have a question before your visit?</span>
            <span>Reach out to the chamber reception or call for assistant assistance.</span>
          </div>
          <a
            href="#book-serial"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors border border-slate-200"
          >
            <span>View Serial Numbers</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
