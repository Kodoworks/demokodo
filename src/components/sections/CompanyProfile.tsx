import { Layers, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { deliveryModes, engagementModels } from "@/lib/data";

const stats = [
  { value: "7", desc: "Fellowship Programs" },
  { value: "1:8", desc: "Mentor-to-Fellow Ratio" },
  { value: "150+", desc: "Hiring Partners" },
];

const PLACEMENT_RATE = 95;

const rowAccents = ["border-brand-500", "border-violet-500", "border-amber-500"];

export default function CompanyProfile() {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (PLACEMENT_RATE / 100) * circumference;

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Company Profile" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">The numbers</span>{" "}
            <span className="text-navy-300">behind the outcomes.</span>
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4">
          {/* Hero stat — placement rate with a real gauge ring */}
          <Reveal delay={100}>
            <div className="flex flex-col items-start gap-6 rounded-[28px] border border-navy-900/[0.07] bg-navy-950 p-7 card-shadow-lg sm:flex-row sm:items-center sm:p-9">
              <div className="relative h-24 w-24 shrink-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    className="text-brand-500"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[20px] font-bold text-white">{PLACEMENT_RATE}%</span>
                </div>
              </div>
              <div>
                <p className="font-display text-[15px] font-semibold text-white">Placement Rate</p>
                <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-white/50">
                  Fellows placed into paid roles within six months of completing the program.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Remaining stats */}
          <Reveal delay={130}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.desc}
                  className="rounded-[28px] border border-navy-900/[0.07] bg-white p-7 transition-transform hover:-translate-y-0.5 card-shadow-lg sm:p-8"
                >
                  <p className="font-display text-[2.1rem] font-bold leading-none text-navy-950">{s.value}</p>
                  <p className="mt-2.5 text-[13px] leading-snug text-navy-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Delivery + engagement panels */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal delay={160}>
            <div className="h-full rounded-[28px] border border-navy-900/[0.07] bg-white p-7 card-shadow-lg sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10">
                  <Layers className="h-4 w-4 text-brand-600" strokeWidth={2.25} />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">
                  Delivery Modes
                </p>
              </div>
              <div className="mt-5 flex flex-col divide-y divide-navy-900/[0.06]">
                {deliveryModes.map((mode, i) => (
                  <div
                    key={mode.title}
                    className={`border-l-2 py-3.5 pl-4 first:pt-0 last:pb-0 ${rowAccents[i % rowAccents.length]}`}
                  >
                    <p className="text-[14px] font-semibold text-navy-950">{mode.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-navy-500">{mode.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={190}>
            <div className="h-full rounded-[28px] border border-navy-900/[0.07] bg-white p-7 card-shadow-lg sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                  <Handshake className="h-4 w-4 text-violet-600" strokeWidth={2.25} />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">
                  Engagement Models
                </p>
              </div>
              <div className="mt-5 flex flex-col divide-y divide-navy-900/[0.06]">
                {engagementModels.map((model, i) => (
                  <div
                    key={model.title}
                    className={`border-l-2 py-3.5 pl-4 first:pt-0 last:pb-0 ${rowAccents[i % rowAccents.length]}`}
                  >
                    <p className="text-[14px] font-semibold text-navy-950">{model.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-navy-500">{model.description}</p>
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