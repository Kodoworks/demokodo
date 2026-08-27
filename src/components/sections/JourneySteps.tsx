import { Briefcase, Code2, Compass, FolderGit2, MessageSquare, BookOpen } from "lucide-react";
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

// One icon per step, in studentJourney's order.
const stepIcons = [Compass, BookOpen, Code2, MessageSquare, FolderGit2, Briefcase];

const accents = [
  { ring: "border-brand-500", bg: "bg-brand-500", text: "text-brand-600" },
  { ring: "border-violet-500", bg: "bg-violet-500", text: "text-violet-600" },
  { ring: "border-amber-500", bg: "bg-amber-500", text: "text-amber-600" },
];

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

        {/* Connected timeline on desktop — a through-line linking numbered
            icon nodes, each with its own accent color. */}
        <Reveal delay={100}>
          <div className="relative mt-14 hidden lg:block">
            <div className="absolute left-0 right-0 top-6 h-px bg-navy-200" />
            <div className="grid grid-cols-6 gap-5">
              {data.steps.map((step, i) => {
                const Icon = stepIcons[i % stepIcons.length];
                const accent = accents[i % accents.length];
                return (
                  <div key={step.step} className="flex flex-col">
                    <span
                      className={`relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white ${accent.ring}`}
                    >
                      <Icon className={`h-5 w-5 ${accent.text}`} strokeWidth={2} />
                    </span>
                    <div className="flex-1 rounded-2xl border border-navy-900/[0.07] bg-white p-4 card-shadow">
                      <span className={`text-[11px] font-bold uppercase tracking-wide ${accent.text}`}>
                        Step {step.step}
                      </span>
                      <h3 className="font-display mt-1.5 text-[14px] font-semibold leading-snug text-navy-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-relaxed text-navy-500">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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
