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

const accentColors = [
  { bg: "bg-brand-500", ring: "ring-brand-500/25" },
  { bg: "bg-violet-500", ring: "ring-violet-500/25" },
  { bg: "bg-amber-500", ring: "ring-amber-500/25" },
];

export default function BenefitsPanel({ data = defaultData }: { data?: BenefitsData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionTag label={data.eyebrow} />
              <Reveal delay={60}>
                <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {data.title}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-navy-500">
                  {data.subtitle}
                </p>
              </Reveal>

              {data.paragraphs && (
                <Reveal delay={120}>
                  <div className="mt-5 flex flex-col gap-3">
                    {data.paragraphs.map((p) => (
                      <p key={p} className="max-w-md text-[14.5px] leading-relaxed text-navy-500">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          {/* Right: divided list, dossier-style */}
          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="flex overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white card-shadow-lg">
                {/* rotated tab, desktop only */}
                <div className="hidden w-12 shrink-0 items-center justify-center bg-navy-900 sm:flex">
                  <span className="-rotate-90 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                    {data.intro}
                  </span>
                </div>

                <div className="flex-1 p-6 sm:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400 sm:hidden">
                    {data.intro}
                  </p>

                  <ul className="mt-1 divide-y divide-navy-900/[0.06] sm:mt-0">
                    {data.items.map((item, i) => {
                      const color = accentColors[i % accentColors.length];
                      return (
                        <li key={item}>
                          <div className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-navy-50/70">
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color.bg} ring-0 transition-shadow group-hover:ring-4 ${color.ring}`}
                            >
                              <Check className="h-4 w-4 text-white" strokeWidth={2.75} />
                            </span>
                            <span className="text-[15px] font-semibold text-navy-800">{item}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}