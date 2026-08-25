import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { AudienceBenefit } from "@/lib/data";

export default function CollegePartnership({ benefits }: { benefits: AudienceBenefit[] }) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-navy-900/[0.08] bg-white card-shadow-lg">
            <div className="bg-navy-950 px-7 py-6 sm:px-10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/40">
                Partnership Scope of Work
              </p>
              <p className="font-display mt-1 text-[19px] font-bold text-white">KodoWorks × Your Institution</p>
            </div>

            <div className="p-7 sm:p-10">
              <div className="flex flex-col divide-y divide-navy-900/[0.07]">
                {benefits.map((benefit, i) => (
                  <div key={benefit.title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                    <span className="font-mono shrink-0 text-[12.5px] font-bold text-brand-500">
                      ART. {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[16px] font-semibold text-navy-950">{benefit.title}</h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-500">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-dashed border-navy-200 pt-7 sm:grid-cols-2">
                <div>
                  <div className="h-px w-full bg-navy-300" />
                  <p className="mt-2 text-[11px] text-navy-400">Authorized Signatory — Institution</p>
                </div>
                <div>
                  <div className="h-px w-full bg-navy-300" />
                  <p className="mt-2 text-[11px] text-navy-400">Date</p>
                </div>
              </div>

              <div className="mt-7">
                <Button href="/contact" icon>
                  Start a Partnership Conversation
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
