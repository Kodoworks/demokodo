import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { AudienceBenefit } from "@/lib/data";

export default function StudentAchievements({ benefits }: { benefits: AudienceBenefit[] }) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="mb-8 flex items-center gap-4 rounded-2xl border border-navy-900/[0.07] bg-navy-50 px-5 py-4">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-navy-200">
              <div className="h-full w-full rounded-full bg-brand-500" />
            </div>
            <span className="shrink-0 text-[12px] font-bold text-navy-700">
              {benefits.length}/{benefits.length} Unlocked
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 60}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-navy-900/[0.07] bg-white p-6 text-center card-shadow">
                <div className="relative">
                  <div
                    className="flex h-16 w-16 items-center justify-center bg-brand-500"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-950 px-2.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wide text-white">
                    Unlocked
                  </span>
                </div>
                <h3 className="font-display mt-6 text-[15.5px] font-semibold text-navy-950">{benefit.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-navy-500">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
