import { CheckSquare, Lock, MessageSquare, Star, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { placementPathway } from "@/lib/data";

const iconMap = { trendingUp: TrendingUp, checkSquare: CheckSquare, lock: Lock, messageSquare: MessageSquare, star: Star };

export default function PlacementPathway() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Placement Pathway" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">A defined path to hiring.</span>{" "}
            <span className="text-navy-300">Not a promise.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Placement isn&apos;t a vague assurance at the end, it&apos;s a
            transparent, score-based process built into the fellowship from day
            one. You always know exactly where you stand.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-navy-200 lg:left-0 lg:right-0 lg:top-6 lg:bottom-auto lg:h-px lg:w-auto" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-5">
            {placementPathway.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <Reveal key={step.title} delay={i * 70}>
                  <div className="relative flex gap-4 lg:flex-col lg:gap-0">
                    <div
                      className={`font-display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full lg:mb-5 ${
                        step.featured
                          ? "bg-amber-500 text-navy-950 shadow-[0_8px_20px_-4px_rgba(255,212,0,0.55)]"
                          : "border border-navy-200 bg-white text-navy-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div
                      className={`flex-1 rounded-2xl p-5 ${
                        step.featured ? "bg-navy-950" : "border border-navy-900/[0.07] bg-white"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wide ${
                          step.featured ? "text-amber-400" : "text-navy-400"
                        }`}
                      >
                        {step.phase}
                      </span>
                      <h3
                        className={`font-display mt-1.5 text-[15px] font-semibold ${
                          step.featured ? "text-white" : "text-navy-950"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2 text-[12.5px] leading-relaxed ${
                          step.featured ? "text-white/60" : "text-navy-500"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
