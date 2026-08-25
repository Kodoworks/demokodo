import { ArrowRight, Check, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { studentPainPoints as defaultData } from "@/lib/data";

type PainSolutionData = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  rows: { pain: string; solution: string }[];
};

export default function PainSolutionRows({ data = defaultData }: { data?: PainSolutionData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={data.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">{data.title}</span>
          </h2>
        </Reveal>
        {data.subtitle && (
          <Reveal delay={100}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">{data.subtitle}</p>
          </Reveal>
        )}

        <div className="mt-10 flex flex-col gap-4">
          {data.rows.map((row, i) => (
            <Reveal key={row.pain} delay={i * 60}>
              <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-2xl border border-navy-900/[0.07] bg-white p-5">
                  <Quote className="h-4 w-4 text-navy-200" strokeWidth={2} fill="currentColor" />
                  <p className="mt-2 text-[14px] italic leading-relaxed text-navy-700">&ldquo;{row.pain}&rdquo;</p>
                </div>

                <div className="hidden items-center justify-center sm:flex">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-100">
                    <ArrowRight className="h-4 w-4 text-navy-400" strokeWidth={2} />
                  </span>
                </div>

                <div className="flex items-start gap-2.5 rounded-2xl border border-brand-500/20 bg-brand-500/[0.06] p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} />
                  <p className="text-[14px] font-medium leading-relaxed text-navy-800">{row.solution}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
