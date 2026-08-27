import Image from "next/image";
import { Users, LayoutGrid, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import { coreMetrics } from "@/lib/data";

const fellowAvatars = [1, 2, 3, 4].map((n) => `/images/hero/avatar-fellow-${n}.jpg`);

/**
 * Right-side stat card for the Programs page header — a light, floating
 * "product card" in the spirit of the reference (stacked stat rows +
 * a highlighted metric + a pair of pill actions), built from the same
 * coreMetrics already shown in MetricStrip so the numbers stay in sync.
 */
export default function ProgramsVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto">
      {/* Tinted backdrop panel */}
      <div className="absolute -inset-3 rounded-[32px] bg-brand-400/[0.08] sm:-inset-5" />

      <div className="relative overflow-hidden rounded-[26px] border border-navy-900/[0.06] bg-white p-5 card-shadow-lg sm:p-6">
        {/* Programs count + fellow avatars */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
              {coreMetrics[0].label}
            </p>
            <p className="font-display mt-1.5 text-[2.4rem] font-bold leading-none text-navy-950">
              {coreMetrics[0].value}
            </p>
          </div>
          <div className="flex -space-x-3">
            {fellowAvatars.map((src, i) => (
              <div
                key={src}
                className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white"
                style={{ zIndex: fellowAvatars.length - i }}
              >
                <Image src={src} alt="" fill sizes="36px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Mentor ratio + hiring partners */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-navy-50 p-4">
            <Users className="h-4 w-4 text-violet-500" strokeWidth={2} />
            <p className="font-display mt-2 text-xl font-bold text-navy-950">{coreMetrics[1].value}</p>
            <p className="mt-0.5 text-[11.5px] leading-snug text-navy-500">{coreMetrics[1].label}</p>
          </div>
          <div className="rounded-2xl bg-navy-50 p-4">
            <LayoutGrid className="h-4 w-4 text-amber-500" strokeWidth={2} />
            <p className="font-display mt-2 text-xl font-bold text-navy-950">{coreMetrics[2].value}</p>
            <p className="mt-0.5 text-[11.5px] leading-snug text-navy-500">{coreMetrics[2].label}</p>
          </div>
        </div>

        {/* Placement rate, highlighted */}
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-navy-950 px-4 py-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15">
              <TrendingUp className="h-4 w-4 text-brand-400" strokeWidth={2.25} />
            </span>
            <span className="text-[12.5px] font-medium text-white/70">{coreMetrics[3].label}</span>
          </div>
          <span className="font-display text-xl font-bold text-brand-400">{coreMetrics[3].value}</span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2.5 border-t border-navy-900/[0.06] pt-5">
          <Button href="#programs" variant="primary" size="sm" className="flex-1">
            Explore Programs
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
        August 2026 Batch Open
      </div>
    </div>
  );
}
