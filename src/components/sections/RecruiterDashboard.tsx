import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { AudienceBenefit } from "@/lib/data";

const dotColors = ["bg-violet-500", "bg-amber-400", "bg-brand-500"];

export default function RecruiterDashboard({ benefits }: { benefits: AudienceBenefit[] }) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[24px] border border-navy-900/[0.08] bg-white card-shadow-lg">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-navy-900/[0.07] bg-navy-50 px-5 py-3">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              </span>
              <span className="ml-2 flex-1 truncate rounded-md border border-navy-900/[0.06] bg-white px-3 py-1 font-mono text-[11px] text-navy-400">
                app.kodoworks.in/hiring-partners
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((benefit, i) => (
                  <div key={benefit.title} className="rounded-2xl border border-navy-900/[0.07] bg-navy-50/50 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-bold uppercase tracking-wide text-navy-400">
                        Benefit 0{i + 1}
                      </span>
                      <span className={`h-2 w-2 rounded-full ${dotColors[i % dotColors.length]}`} />
                    </div>
                    <h3 className="font-display mt-3 text-[15.5px] font-semibold text-navy-950">{benefit.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-500">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
