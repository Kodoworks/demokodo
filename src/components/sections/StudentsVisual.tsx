import { Award, Code2, Target, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { audiencePages } from "@/lib/data";

const benefits = audiencePages.students.benefits;

const iconFor = [Code2, Users, Award, Target];
const accents = [
  { bg: "bg-brand-500/10", text: "text-brand-500" },
  { bg: "bg-violet-500/10", text: "text-violet-600" },
  { bg: "bg-amber-500/15", text: "text-amber-600" },
  { bg: "bg-brand-500/10", text: "text-brand-500" },
];

/**
 * Right-side card for the For Students header — the four student-specific
 * benefits already written for this page (audiencePages.students.benefits),
 * rather than the company-wide stats reused from the Programs page card.
 */
export default function StudentsVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto">
      {/* Tinted backdrop panel */}
      <div className="absolute -inset-3 rounded-[32px] bg-brand-400/[0.08] sm:-inset-5" />

      <div className="relative overflow-hidden rounded-[26px] border border-navy-900/[0.06] bg-white p-5 card-shadow-lg sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Built for Students</p>

        <div className="mt-3 divide-y divide-navy-900/[0.06]">
          {benefits.map((benefit, i) => {
            const Icon = iconFor[i % iconFor.length];
            const accent = accents[i % accents.length];
            return (
              <div key={benefit.title} className="flex items-start gap-3 py-3.5 first:pt-2">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent.bg}`}>
                  <Icon className={`h-4 w-4 ${accent.text}`} strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-navy-950">{benefit.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-navy-500">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-2 flex items-center gap-2.5 border-t border-navy-900/[0.06] pt-5">
          <Button href="/programs" variant="primary" size="sm" className="flex-1">
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
        150+ Hiring Partners
      </div>
    </div>
  );
}
