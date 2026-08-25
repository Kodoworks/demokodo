import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { comparisonRows } from "@/lib/data";

export default function VersusComparison() {
  return (
    <section id="why-kodoworks" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Head to Head" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">KodoWorks vs.</span>{" "}
            <span className="text-navy-300">typical training.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Eight questions worth asking any program before you commit to it.
            Here&apos;s how the answer actually differs.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {comparisonRows.map((row, i) => (
            <Reveal key={row.feature} delay={(i % 4) * 50}>
              <div>
                <p className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy-400">
                  {row.feature}
                </p>
                <div className="grid grid-cols-1 items-stretch gap-2.5 sm:grid-cols-[1fr_auto_1fr] sm:gap-3">
                  <div className="rounded-2xl border border-navy-900/[0.06] bg-navy-50/70 p-4 sm:p-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-navy-400">
                      Typical Training
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-400">{row.typical}</p>
                  </div>

                  <div className="hidden items-center justify-center sm:flex">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[10px] font-bold text-white">
                      VS
                    </span>
                  </div>

                  <div className="rounded-2xl bg-navy-950 p-4 sm:p-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-400">
                      KodoWorks
                    </p>
                    <p className="mt-1.5 flex items-start gap-2 text-[13.5px] leading-relaxed text-white">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={2.5} />
                      {row.kodo}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
