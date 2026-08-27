import { Briefcase, Rocket } from "lucide-react";

/**
 * Right-side visual for the For Professionals "Our Approach" section — a
 * before/after transition card (current role → new domain) with a "0 days
 * career gap" callout, instead of a chart. Distinct mechanism from the
 * photo-poster and bar-chart treatments tried earlier for this slot.
 */
export default function CareerTransitionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:ml-auto">
      <div className="rounded-[24px] border border-navy-900/[0.07] bg-white p-5 card-shadow-lg sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">The Transition</p>

        <div className="relative mt-5">
          {/* Current role */}
          <div className="flex items-center gap-3 rounded-2xl bg-navy-50 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-100">
              <Briefcase className="h-[18px] w-[18px] text-navy-500" strokeWidth={2.25} />
            </span>
            <div>
              <p className="text-[13px] font-bold text-navy-900">Your current role</p>
              <p className="text-[11px] text-navy-400">Full-time, unchanged</p>
            </div>
          </div>

          {/* Connector */}
          <div className="relative flex justify-center py-2.5">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-navy-200" />
            <span className="relative z-10 rounded-full border border-navy-900/10 bg-white px-3 py-1 text-[10px] font-semibold text-navy-500 card-shadow">
              Evenings · 6–7 months
            </span>
          </div>

          {/* New domain */}
          <div className="flex items-center gap-3 rounded-2xl bg-navy-950 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20">
              <Rocket className="h-[18px] w-[18px] text-brand-400" strokeWidth={2.25} />
            </span>
            <div>
              <p className="text-[13px] font-bold text-white">AI, Cloud, Data or Security</p>
              <p className="text-[11px] text-white/50">Same paycheck, new domain</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-navy-900/[0.07] pt-4">
          <span className="text-[12px] font-medium text-navy-500">Career gap required</span>
          <span className="font-display text-xl font-bold text-brand-600">0 Days</span>
        </div>
      </div>
    </div>
  );
}
