import { MapPin, Calendar, Clock, Phone, Navigation, AlertCircle, CheckCircle } from 'lucide-react';

export default function ChamberCard({ chamber }) {
  if (!chamber) return null;

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      
      {/* Primary Flag Badge */}
      {chamber.isPrimary && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-xl tracking-wider uppercase">
          Primary Chamber
        </div>
      )}

      <div>
        {/* Facility Header */}
        <div className="mb-4">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
            {chamber.branch}
          </div>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-900 leading-snug">
            {chamber.facility}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {chamber.room}
          </p>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2.5 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{chamber.address}</span>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-3 mb-6 border-y border-slate-200 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-100">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Visiting Days</div>
              <div className="text-sm font-bold text-slate-900">{chamber.days}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Visiting Time</div>
              <div className="text-sm font-bold text-slate-900">{chamber.time}</div>
            </div>
          </div>
        </div>

        {/* Fees Breakdown */}
        {chamber.consultationFee && (
          <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Consultation Fees</span>
              <span className="text-[10px] text-slate-500 font-normal">Official Rate</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">New Patient:</span>
                <span className="font-bold text-slate-900 text-sm">{chamber.consultationFee.newPatient}</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Follow-Up:</span>
                <span className="font-bold text-slate-900 text-sm">{chamber.consultationFee.followUp}</span>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-emerald-700 flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Report Showing: {chamber.consultationFee.reportShowing}</span>
            </div>
          </div>
        )}

        {/* Serial Booking Note */}
        {chamber.serialBookingNote && (
          <div className="flex items-center gap-2 text-xs text-amber-900 bg-amber-50 p-3 rounded-xl mb-6 border border-amber-200">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
            <span>{chamber.serialBookingNote}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-semibold text-slate-600 mb-1">
          Direct Serial Call Lines (সিরিয়াল বুকিং):
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {chamber.serialPhones.map((phone, idx) => (
            <a
              key={idx}
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phone}</span>
            </a>
          ))}
        </div>

        {/* Google Maps Link */}
        <a
          href={chamber.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-red-600" />
          <span>Get Chamber Directions (Google Maps)</span>
        </a>
      </div>

    </div>
  );
}
