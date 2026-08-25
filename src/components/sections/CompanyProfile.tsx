import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { deliveryModes, engagementModels } from "@/lib/data";

const stats = [
  { value: "7", desc: "Fellowship Programs" },
  { value: "1:8", desc: "Mentor-to-Fellow Ratio" },
  { value: "150+", desc: "Hiring Partners" },
  { value: "95%", desc: "Placement Rate" },
];

export default function CompanyProfile() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Company Profile" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">The facts,</span>{" "}
            <span className="text-navy-300">on one page.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-[28px] border-2 border-dashed border-navy-200 bg-white p-7 card-shadow-lg sm:p-10">
            {/* Masthead */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/[0.08] pb-6">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-navy-400">
                  Company Profile — Rev. 2026
                </p>
                <p className="font-display mt-1 text-[19px] font-bold text-navy-950">KodoWorks Technology</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Active
              </span>
            </div>

            {/* Stats row */}
            <div className="mt-7 grid grid-cols-2 gap-6 border-b border-navy-900/[0.08] pb-7 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.desc}>
                  <p className="font-display text-[1.9rem] font-bold leading-none text-navy-950">{s.value}</p>
                  <p className="mt-2 text-[11.5px] leading-snug text-navy-500">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Delivery + engagement clauses */}
            <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">
                  §1 — Delivery Modes
                </p>
                <div className="mt-3.5 flex flex-col gap-3">
                  {deliveryModes.map((mode, i) => (
                    <div key={mode.title} className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[11px] text-navy-300">1.{i + 1}</span>
                      <p className="text-[13.5px] leading-relaxed">
                        <span className="font-semibold text-navy-950">{mode.title}</span>{" "}
                        <span className="text-navy-500">— {mode.description}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">
                  §2 — Engagement Models
                </p>
                <div className="mt-3.5 flex flex-col gap-3">
                  {engagementModels.map((model, i) => (
                    <div key={model.title} className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[11px] text-navy-300">2.{i + 1}</span>
                      <p className="text-[13.5px] leading-relaxed">
                        <span className="font-semibold text-navy-950">{model.title}</span>{" "}
                        <span className="text-navy-500">— {model.description}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
