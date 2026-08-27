import { Award, Code2, Layers, Lightbulb, MessageSquare, Rocket, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { careerGrowthStatement } from "@/lib/data";

// One icon per gain, in the order careerGrowthStatement.gains lists them.
const gainIcons = [Code2, Layers, Users, Award, Lightbulb, MessageSquare, Rocket];

const accents = [
  { bg: "bg-brand-500/10", text: "text-brand-600" },
  { bg: "bg-violet-500/10", text: "text-violet-600" },
  { bg: "bg-amber-500/15", text: "text-amber-600" },
];

export default function CareerGrowthGains() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={careerGrowthStatement.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {careerGrowthStatement.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-3 text-[17px] font-medium text-brand-500 sm:text-[19px]">
            {careerGrowthStatement.subtitle}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            {careerGrowthStatement.intro}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
            {careerGrowthStatement.gains.map((gain, i) => {
              const Icon = gainIcons[i % gainIcons.length];
              const accent = accents[i % accents.length];
              return (
                <div
                  key={gain}
                  className="flex flex-col gap-3.5 rounded-2xl border border-navy-900/[0.07] bg-white p-4 card-shadow transition-transform duration-300 hover:-translate-y-1 sm:p-5"
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.bg}`}>
                    <Icon className={`h-4 w-4 ${accent.text}`} strokeWidth={2} />
                  </span>
                  <p className="text-[13.5px] font-semibold leading-snug text-navy-900">{gain}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
