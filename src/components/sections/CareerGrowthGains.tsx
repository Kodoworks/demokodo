import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { careerGrowthStatement } from "@/lib/data";

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
          <div className="mt-9 rounded-[28px] border border-navy-900/[0.07] bg-white p-7 card-shadow-lg sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">You gain</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {careerGrowthStatement.gains.map((gain) => (
                <span
                  key={gain}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-[13.5px] font-semibold text-brand-700"
                >
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {gain}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
