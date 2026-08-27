import { Building2, Clock, Coffee, FolderGit2, RefreshCw, Users2, Video } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { AudienceBenefit } from "@/lib/data";

const week = [
  { day: "Monday", slot: "work" as const },
  { day: "Tuesday", slot: "live" as const },
  { day: "Wednesday", slot: "work" as const },
  { day: "Thursday", slot: "live" as const },
  { day: "Friday", slot: "work" as const },
  { day: "Saturday", slot: "live" as const },
  { day: "Sunday", slot: "free" as const },
];

const slotStyle = {
  work: { icon: Building2, label: "Your day job", cls: "bg-navy-50 text-navy-400 border border-navy-900/[0.06]" },
  live: { icon: Video, label: "Live class, evening", cls: "bg-brand-500 text-white" },
  free: { icon: Coffee, label: "Free", cls: "border border-dashed border-navy-200 text-navy-400" },
};

// One icon + accent color per benefit, in the order benefits are given.
const benefitIcons = [Clock, RefreshCw, FolderGit2, Users2];
const accents = [
  { bg: "bg-brand-500/10", text: "text-brand-600" },
  { bg: "bg-violet-500/10", text: "text-violet-600" },
  { bg: "bg-amber-500/15", text: "text-amber-600" },
  { bg: "bg-brand-500/10", text: "text-brand-600" },
];

export default function ProfessionalSchedule({ benefits }: { benefits: AudienceBenefit[] }) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
          {/* Illustrative weekly rhythm */}
          <Reveal>
            <div className="h-full rounded-[24px] border border-navy-900/[0.07] bg-white p-6 card-shadow-lg">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                A week that fits around your job
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {week.map((d) => {
                  const s = slotStyle[d.slot];
                  return (
                    <div key={d.day} className="flex items-center gap-3">
                      <span className="w-[76px] shrink-0 text-[12.5px] font-medium text-navy-700">{d.day}</span>
                      <span
                        className={`flex flex-1 items-center gap-2 rounded-lg px-3 py-1.5 text-[11.5px] font-semibold ${s.cls}`}
                      >
                        <s.icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} />
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-navy-400">
                Sample weekly rhythm — actual live class days vary by program.
              </p>
            </div>
          </Reveal>

          {/* Benefits brief */}
          <Reveal delay={80}>
            <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                const accent = accents[i % accents.length];
                return (
                  <div
                    key={benefit.title}
                    className="flex flex-col gap-3 rounded-[20px] border border-navy-900/[0.07] bg-white p-5 card-shadow transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${accent.bg}`}>
                      <Icon className={`h-[18px] w-[18px] ${accent.text}`} strokeWidth={2.25} />
                    </span>
                    <div>
                      <h3 className="font-display text-[15.5px] font-semibold leading-snug text-navy-950">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-navy-500">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
