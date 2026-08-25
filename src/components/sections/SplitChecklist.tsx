import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { placementTeamSupport as defaultData } from "@/lib/data";

type SplitChecklistData = {
  eyebrow: string;
  title: string;
  intro: string;
  listIntro: string;
  items: string[];
  closing: string;
};

export default function SplitChecklist({ data = defaultData }: { data?: SplitChecklistData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <SectionTag label={data.eyebrow} />
            <Reveal delay={60}>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
                {data.title}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-500">{data.intro}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-500">{data.closing}</p>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="rounded-[28px] border border-navy-900/[0.07] bg-white p-7 card-shadow-lg sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">{data.listIntro}</p>
              <div className="mt-4 flex flex-col divide-y divide-navy-900/[0.06]">
                {data.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                      <Check className="h-3.5 w-3.5 text-brand-600" strokeWidth={2.5} />
                    </span>
                    <p className="text-[14px] font-medium text-navy-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
