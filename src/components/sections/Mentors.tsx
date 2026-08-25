import { BarChart3, Brain, Code2, ShieldCheck, Workflow } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { mentorProfiles } from "@/lib/data";

const iconMap = { code: Code2, brain: Brain, workflow: Workflow, chart: BarChart3, shield: ShieldCheck };

export default function Mentors() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Mentors" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Learn from engineers who</span>{" "}
            <span className="text-navy-300">actually build.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Your mentors aren&apos;t career trainers reading from a curriculum.
            They&apos;re people who build, ship and solve technology problems.
          </p>
        </Reveal>

        <p className="mt-8 text-[11.5px] font-semibold uppercase tracking-wide text-navy-400 lg:hidden">
          Swipe to see all mentors →
        </p>

        <div className="relative mt-3 lg:mt-10">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {mentorProfiles.map((mentor, i) => {
              const Icon = iconMap[mentor.icon];
              return (
                <Reveal key={mentor.name} delay={i * 60} className="w-[250px] shrink-0 snap-start sm:w-[260px]">
                  <div className="relative pt-2 transition-transform duration-300 hover:-translate-y-1">
                    {/* Lanyard punch hole */}
                    <span className="absolute left-1/2 top-0 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-navy-200 bg-[#f4f3ef]" />

                    <div className="overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white card-shadow">
                      {/* Stripe header */}
                      <div className="flex items-center justify-between bg-brand-500 px-4 pb-2.5 pt-4">
                        <span className="text-[9.5px] font-bold uppercase tracking-[0.13em] text-white/90">
                          KodoWorks Mentor
                        </span>
                        <span className="font-mono text-[10px] text-white/65">
                          KW-{String(i + 1).padStart(3, "0")}
                        </span>
                      </div>

                      <div className="flex flex-col items-center px-5 pb-5 pt-7">
                        {/* Seal / medallion, standing in for a photo */}
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-navy-200 bg-white">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950">
                              <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                            </span>
                          </div>
                          <div className="absolute left-1/2 top-[54px] flex -translate-x-1/2 gap-1">
                            <span
                              className="h-3.5 w-2.5 bg-brand-500"
                              style={{ clipPath: "polygon(0 0,100% 0,100% 100%,50% 68%,0 100%)" }}
                            />
                            <span
                              className="h-3.5 w-2.5 bg-brand-500"
                              style={{ clipPath: "polygon(0 0,100% 0,100% 100%,50% 68%,0 100%)" }}
                            />
                          </div>
                        </div>

                        <h3 className="font-display mt-6 text-[16.5px] font-bold text-navy-950">{mentor.name}</h3>
                        <p className="mt-0.5 text-[12px] text-navy-500">{mentor.role}</p>

                        <div className="mt-4 w-full border-t border-dashed border-navy-200 pt-3">
                          <p className="text-center text-[10.5px] font-semibold uppercase tracking-wide text-navy-400">
                            {mentor.domain}
                          </p>
                        </div>

                        <div
                          className="mt-4 h-5 w-full rounded-sm"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(90deg, #26272d 0px, #26272d 1.5px, transparent 1.5px, transparent 4px)",
                            opacity: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {/* Edge fade signals there's more to scroll, same treatment as
              the comparison table's swipeable card above it on the page. */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f4f3ef] to-transparent" />
        </div>
      </Container>
    </section>
  );
}
