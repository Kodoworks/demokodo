import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { studentJourney } from "@/lib/data";

type Step = { step: string; title: string; description: string };
type JourneyData = { eyebrow: string; title: string; subtitle?: string; steps: Step[] };

const defaultData: JourneyData = {
  eyebrow: "Your Journey",
  title: "From learning to career-ready.",
  steps: studentJourney,
};

export default function JourneySteps({ data = defaultData }: { data?: JourneyData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={data.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {data.title}
          </h2>
        </Reveal>
        {data.subtitle && (
          <Reveal delay={100}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">{data.subtitle}</p>
          </Reveal>
        )}

        {/* Ascending staircase on desktop — each step sits a little higher
            than the last, reading as visible progress left to right. */}
        <Reveal delay={100}>
          <div className="mt-12 hidden items-end gap-4 lg:flex">
            {data.steps.map((step, i) => (
              <div key={step.step} className="flex-1" style={{ marginBottom: i * 18 }}>
                <div className="rounded-2xl border border-navy-900/[0.07] bg-white p-5 card-shadow">
                  <div className="h-1 w-8 rounded-full bg-brand-500" />
                  <span className="font-display mt-4 block text-[1.6rem] font-bold leading-none text-navy-100">
                    {step.step}
                  </span>
                  <h3 className="font-display mt-3 text-[14.5px] font-semibold leading-snug text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-navy-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Vertical connected list on mobile/tablet */}
        <div className="mt-10 flex flex-col lg:hidden">
          {data.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 50}>
              <div className="relative flex gap-5 pb-8 last:pb-0">
                {i !== data.steps.length - 1 && (
                  <span className="absolute left-[19px] top-10 h-full w-px bg-navy-200" />
                )}
                <span className="font-display relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[13px] font-bold text-white">
                  {step.step}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-[15.5px] font-semibold text-navy-950">{step.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-500">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
