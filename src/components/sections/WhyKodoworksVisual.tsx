import { Award, Check, Target, Users, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { comparisonRows } from "@/lib/data";

const featured = [
  { feature: "Mentors", icon: Users, accent: { bg: "bg-brand-500/10", text: "text-brand-500" } },
  { feature: "Placement pathway", icon: Target, accent: { bg: "bg-violet-500/10", text: "text-violet-600" } },
  { feature: "What you leave with", icon: Award, accent: { bg: "bg-amber-500/15", text: "text-amber-600" } },
];

const rows = featured.map((f) => ({
  ...comparisonRows.find((row) => row.feature === f.feature)!,
  icon: f.icon,
  accent: f.accent,
}));

/**
 * Right-side card for the Why KodoWorks header — a condensed, three-row
 * preview of the KodoWorks-vs-typical-training comparison already spelled
 * out in full further down the page (VersusComparison), so the header
 * makes the same case at a glance instead of just repeating the metric
 * strip that follows it.
 */
export default function WhyKodoworksVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto">
      {/* Tinted backdrop panel */}
      <div className="absolute -inset-3 rounded-[32px] bg-brand-400/[0.08] sm:-inset-5" />

      <div className="relative overflow-hidden rounded-[26px] border border-navy-900/[0.06] bg-white p-5 card-shadow-lg sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
            KodoWorks vs. Typical Training
          </p>
          <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[10px] font-bold text-white">VS</span>
        </div>

        <div className="mt-3 divide-y divide-navy-900/[0.06]">
          {rows.map((row) => (
            <div key={row.feature} className="py-3.5 first:pt-3">
              <div className="flex items-center gap-2.5">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${row.accent.bg}`}>
                  <row.icon className={`h-3.5 w-3.5 ${row.accent.text}`} strokeWidth={2.25} />
                </span>
                <p className="text-[11.5px] font-semibold text-navy-950">{row.feature}</p>
              </div>
              <div className="mt-2 flex items-start gap-2 pl-[38px]">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" strokeWidth={2.5} />
                <p className="text-[12.5px] leading-snug text-navy-700">{row.kodo}</p>
              </div>
              <div className="mt-1.5 flex items-start gap-2 pl-[38px]">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-300" strokeWidth={2.5} />
                <p className="text-[12.5px] leading-snug text-navy-400 line-through decoration-navy-300">
                  {row.typical}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-2 flex items-center gap-2.5 border-t border-navy-900/[0.06] pt-5">
          <Button href="#why-kodoworks" variant="primary" size="sm" className="flex-1">
            See the Difference
          </Button>
          <Button href="/contact" variant="secondary" size="sm" className="flex-1">
            Talk to Us
          </Button>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-navy-800 card-shadow-lg sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
        </span>
        Engineering-Led, Not Classroom-Led
      </div>
    </div>
  );
}
