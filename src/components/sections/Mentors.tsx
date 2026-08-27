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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mentorProfiles.map((mentor, i) => {
            const Icon = iconMap[mentor.icon];
            return (
              <Reveal key={mentor.name} delay={i * 60}>
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

                    {/* Photo — placeholder until a real headshot is supplied.
                        Plain <img>, not next/image: the placeholder is a local
                        SVG (which the Next image optimizer refuses without
                        extra config) and future links may be external, which
                        next/image would also reject without an allowlist. */}
                    <div className="relative h-[210px] w-full overflow-hidden bg-navy-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={mentor.photo}
                        alt={mentor.name}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: "center 15%" }}
                      />
                    </div>

                    <div className="flex flex-col items-center px-5 pb-5 pt-5">
                      <h3 className="font-display text-[16.5px] font-bold text-navy-950">{mentor.name}</h3>
                      <p className="mt-0.5 text-[12px] text-navy-500">{mentor.role}</p>

                      <div className="mt-4 flex w-full items-center justify-center gap-1.5 border-t border-dashed border-navy-200 pt-3">
                        <Icon className="h-3.5 w-3.5 shrink-0 text-brand-500" strokeWidth={2.2} />
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
      </Container>
    </section>
  );
}
