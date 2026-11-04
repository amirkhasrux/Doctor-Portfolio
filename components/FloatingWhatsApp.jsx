'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const defaultPhone = "8801711000000";
  const defaultMessage = encodeURIComponent("Hello, I would like to book an appointment with Dr. Masudur Rahman.");
  const whatsappUrl = `https://wa.me/${defaultPhone}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Booking" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover for desktop */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-medium shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        WhatsApp Serial Booking
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book serial appointment via WhatsApp"
        className="w-14 h-14 rounded-full bg-whatsapp-emerald text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none ring-4 ring-whatsapp-emerald/30"
      >
        <MessageCircle className="w-8 h-8 fill-white text-whatsapp-emerald" />
      </a>
    </aside>
  );
}

