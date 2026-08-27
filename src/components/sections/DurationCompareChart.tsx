import { Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { comparisonRows } from "@/lib/data";

function parseMonths(text: string) {
  const match = text.match(/(\d+)[–-](\d+)/);
  return match ? { min: Number(match[1]), max: Number(match[2]) } : { min: 0, max: 0 };
}

const durationRow = comparisonRows.find((r) => r.feature === "Program duration");
const kodo = parseMonths(durationRow?.kodo ?? "");
const typical = parseMonths(durationRow?.typical ?? "");
const axisMax = Math.ceil(Math.max(kodo.max, typical.max) / 5) * 5;

// How much sooner a KodoWorks fellow is done, worst case to best case.
const soonerMax = typical.max - kodo.min;

const bars = [
  {
    label: "KodoWorks",
    ...kodo,
    barClass: "gradient-blue",
    glow: "shadow-[0_6px_18px_-4px_rgba(0,206,104,0.6)]",
    dot: "bg-brand-600",
    text: "text-brand-600",
  },
  {
    label: "Typical Training",
    ...typical,
    barClass: "bg-navy-300",
    glow: "",
    dot: "bg-navy-500",
    text: "text-navy-500",
  },
];

export default function DurationCompareChart() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Time to Career-Ready" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Get there faster,</span>{" "}
            <span className="text-navy-300">without cutting corners.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Project-driven programs move faster than lecture-driven ones — here&apos;s the actual spread, in months.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 rounded-[28px] border border-navy-900/[0.07] bg-white p-6 card-shadow-lg sm:p-9">
            {/* Callout */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-[13px] font-bold text-brand-600">
                <Zap className="h-4 w-4" strokeWidth={2.5} fill="currentColor" />
                Up to {soonerMax} months faster
              </span>
              <span className="text-[12px] text-navy-400">Program duration, in months</span>
            </div>

            <div className="flex flex-col gap-8">
              {bars.map((bar) => {
                const leftPct = (bar.min / axisMax) * 100;
                const widthPct = ((bar.max - bar.min) / axisMax) * 100;
                return (
                  <div key={bar.label}>
                    <div className="mb-2.5 flex items-baseline justify-between">
                      <span className="text-[13.5px] font-semibold text-navy-800">{bar.label}</span>
                      <span className={`font-display text-[16px] font-bold ${bar.text}`}>
                        {bar.min}–{bar.max} months
                      </span>
                    </div>
                    <div className="relative h-5 rounded-full bg-navy-50">
                      {/* Gridlines */}
                      {Array.from({ length: axisMax / 5 + 1 }, (_, i) => i * 5).map((tick) => (
                        <span
                          key={tick}
                          className="absolute top-0 h-full w-px bg-navy-900/[0.05]"
                          style={{ left: `${(tick / axisMax) * 100}%` }}
                        />
                      ))}
                      <div
                        className={`absolute top-0 h-5 rounded-full ${bar.barClass} ${bar.glow}`}
                        style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                      >
                        <span
                          className={`absolute -right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full ${bar.dot} ring-[3px] ring-white`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Axis */}
            <div className="relative mt-5 h-4 border-t border-navy-100 pt-2.5">
              {Array.from({ length: axisMax / 5 + 1 }, (_, i) => i * 5).map((tick) => (
                <span
                  key={tick}
                  className="absolute -translate-x-1/2 text-[11px] font-medium text-navy-400"
                  style={{ left: `${(tick / axisMax) * 100}%` }}
                >
                  {tick}mo
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
