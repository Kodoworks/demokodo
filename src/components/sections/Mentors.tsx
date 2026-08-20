import { Brain, Cloud, Code2, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { mentorProfiles } from "@/lib/data";

const iconMap = { code: Code2, brain: Brain, cloud: Cloud, shield: ShieldCheck };
const bgMap = ["bg-brand-500", "bg-navy-800", "bg-violet-600", "bg-navy-950"];

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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mentorProfiles.map((mentor, i) => {
            const Icon = iconMap[mentor.icon as keyof typeof iconMap];
            return (
              <Reveal key={mentor.role} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white card-shadow">
                  <div className={`flex h-32 items-center justify-center ${bgMap[i % bgMap.length]}`}>
                    <Icon className="h-10 w-10 text-white/85" strokeWidth={1.5} />
                  </div>
                  <div className="p-5">
                    <span className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-500">
                      Mentor
                    </span>
                    <h3 className="font-display mt-1 text-[15.5px] font-semibold text-navy-950">
                      {mentor.role}
                    </h3>
                    <p className="text-[12px] text-navy-400">{mentor.focus}</p>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-navy-500">
                      {mentor.description}
                    </p>
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
