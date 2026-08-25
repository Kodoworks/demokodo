import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { institutionBenefits as defaultData } from "@/lib/data";

type BenefitsData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs?: string[];
  intro: string;
  items: string[];
};

export default function BenefitsPanel({ data = defaultData }: { data?: BenefitsData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={data.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {data.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">{data.subtitle}</p>
        </Reveal>

        {data.paragraphs && (
          <Reveal delay={120}>
            <div className="mt-5 flex flex-col gap-3">
              {data.paragraphs.map((p) => (
                <p key={p} className="max-w-2xl text-[14.5px] leading-relaxed text-navy-500">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={140}>
          <div className="mt-9 rounded-[28px] border border-navy-900/[0.07] bg-white p-7 card-shadow-lg sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">{data.intro}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {data.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-[13.5px] font-semibold text-brand-700"
                >
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
