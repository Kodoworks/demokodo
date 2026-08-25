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
  work: { label: "Your day job", cls: "bg-navy-50 text-navy-400 border border-navy-900/[0.06]" },
  live: { label: "Live class, evening", cls: "bg-brand-500 text-white" },
  free: { label: "Free", cls: "border border-dashed border-navy-200 text-navy-400" },
};

export default function ProfessionalSchedule({ benefits }: { benefits: AudienceBenefit[] }) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
          {/* Illustrative weekly rhythm */}
          <Reveal>
            <div className="rounded-[24px] border border-navy-900/[0.07] bg-white p-6 card-shadow-lg">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                A week that fits around your job
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {week.map((d) => {
                  const s = slotStyle[d.slot];
                  return (
                    <div key={d.day} className="flex items-center justify-between gap-3">
                      <span className="w-[76px] shrink-0 text-[12.5px] font-medium text-navy-700">{d.day}</span>
                      <span className={`flex-1 rounded-lg px-3 py-1.5 text-[11.5px] font-semibold ${s.cls}`}>
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
            <div className="flex flex-col divide-y divide-navy-900/[0.07] overflow-hidden rounded-[24px] border border-navy-900/[0.07] bg-white card-shadow-lg">
              {benefits.map((benefit, i) => (
                <div key={benefit.title} className="flex gap-5 p-6 sm:p-7">
                  <span className="font-display shrink-0 text-[1.6rem] font-bold leading-none text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold text-navy-950">{benefit.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
