import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import Logo from "@/components/ui/Logo";
import { comparisonRows } from "@/lib/data";

export default function ComparisonTable() {
  return (
    <section id="why-kodoworks" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="The Difference" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Engineering-Led.</span>
            <br />
            <span className="text-navy-300">Not Classroom-Led.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Most training providers teach technology. KodoWorks practices it, and
            that difference shows up in every project, every mentor and every
            hiring conversation.
          </p>
        </Reveal>

        <p className="mt-8 text-[11.5px] font-semibold uppercase tracking-wide text-navy-400 sm:hidden">
          Swipe to compare →
        </p>
        <Reveal delay={140}>
          <div className="relative mt-3 sm:mt-10">
            <div className="overflow-x-auto rounded-2xl border border-navy-900/[0.07] bg-white card-shadow">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-[1.1fr_1fr_1fr] sm:grid-cols-[1.3fr_1fr_1fr]">
                  <div className="hidden sm:block" />
                  <div className="rounded-t-2xl bg-navy-950 px-4 py-5 sm:px-6">
                    <Logo dark />
                  </div>
                  <div className="px-4 py-5 text-[14px] font-semibold text-navy-400 sm:px-6">Typical Training</div>
                </div>

                {comparisonRows.map((row, i) => {
                  const isLast = i === comparisonRows.length - 1;
                  return (
                    <div
                      key={row.feature}
                      className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-navy-900/[0.06] sm:grid-cols-[1.3fr_1fr_1fr]"
                    >
                      <div className="flex items-center px-4 py-4 text-[13.5px] font-semibold text-navy-800 sm:px-6">
                        {row.feature}
                      </div>
                      <div
                        className={`flex items-start gap-2 bg-navy-950 px-4 py-4 sm:px-6 ${isLast ? "rounded-b-2xl" : ""}`}
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={2.5} />
                        <span className="text-[13.5px] leading-snug text-white">{row.kodo}</span>
                      </div>
                      <div className="flex items-start gap-2 px-4 py-4 sm:px-6">
                        <span className="mt-0.5 text-navy-300">–</span>
                        <span className="text-[13.5px] leading-snug text-navy-400">{row.typical}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Edge fade signals there's more to scroll on narrow viewports,
                since the clipped column otherwise reads as cut-off content
                rather than a swipeable table. A tinted shadow (not a solid
                from-white gradient) so it reads correctly over both the
                light cells and the dark KodoWorks column underneath it. */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-gradient-to-l from-black/15 via-black/0 to-transparent sm:hidden" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
