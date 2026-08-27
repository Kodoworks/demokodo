"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { programs, type Program } from "@/lib/data";

function parseSalary(salary: string) {
  const match = salary.match(/₹(\d+)\s*to\s*₹(\d+)\s*LPA/);
  return match ? { min: Number(match[1]), max: Number(match[2]) } : { min: 0, max: 0 };
}

// Same category → color mapping ProgramExplorer uses, so a program's bar
// here is the same color as its badge there — cycling all three accent
// hues instead of every row reading as one flat green block.
const catBarColor: Record<Program["catColor"], string> = {
  ai: "bg-cat-ai",
  cloud: "bg-cat-cloud",
  dev: "bg-cat-dev",
  security: "bg-cat-security",
  data: "bg-cat-data",
  genai: "bg-cat-genai",
  enterprise: "bg-cat-enterprise",
};

const legend = [
  { label: "Software & AI", dot: "bg-cat-ai" },
  { label: "Data & Security", dot: "bg-cat-security" },
  { label: "Cloud & Platform", dot: "bg-cat-cloud" },
];

const rows = programs
  .map((p) => ({ name: p.shortName, catColor: p.catColor, ...parseSalary(p.salary) }))
  .sort((a, b) => b.max - a.max);

const topRow = rows[0];
const axisMax = Math.ceil(Math.max(...rows.map((r) => r.max)) / 5) * 5;
const ticks = Array.from({ length: axisMax / 10 + 1 }, (_, i) => i * 10);

export default function SalaryRangeChart() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Earning Potential" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Salary range,</span>{" "}
            <span className="text-navy-300">by program.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Entry-level to mid-career compensation reported across our hiring partner network, in ₹ LPA.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 rounded-[28px] border border-navy-900/[0.07] bg-white p-6 card-shadow-lg sm:p-9">
            {/* Callout + legend */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-[13px] font-bold text-brand-600">
                <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
                Top earners reach ₹{topRow.max} LPA in {topRow.name}
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {legend.map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5 text-[11.5px] font-medium text-navy-400">
                    <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              {rows.map((row) => {
                const isHovered = hovered === row.name;
                const leftPct = (row.min / axisMax) * 100;
                const widthPct = ((row.max - row.min) / axisMax) * 100;
                const barColor = catBarColor[row.catColor];
                return (
                  <div
                    key={row.name}
                    className={`group -mx-3 grid grid-cols-1 items-center gap-2 rounded-xl px-3 py-2.5 transition-colors sm:grid-cols-[180px_1fr_auto] sm:gap-4 ${
                      isHovered ? "bg-navy-50" : ""
                    }`}
                    onMouseEnter={() => setHovered(row.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span
                      className={`flex items-center gap-2 text-[13px] font-semibold transition-colors ${
                        isHovered ? "text-navy-950" : "text-navy-700"
                      }`}
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full ${barColor}`} />
                      {row.name}
                    </span>
                    <div className="relative h-3 rounded-full bg-navy-100">
                      {ticks.map((tick) => (
                        <span
                          key={tick}
                          className="absolute top-0 h-full w-px bg-navy-900/[0.06]"
                          style={{ left: `${(tick / axisMax) * 100}%` }}
                        />
                      ))}
                      <div
                        className={`absolute top-0 h-3 rounded-full transition-all ${barColor} ${
                          isHovered ? "brightness-90" : ""
                        }`}
                        style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                      >
                        <span
                          className={`absolute -right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full ${barColor} ring-[3px] ring-white transition-transform ${
                            isHovered ? "scale-110" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <span className="font-display shrink-0 text-[13px] font-bold text-navy-950 sm:text-right">
                      ₹{row.min}–₹{row.max} LPA
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Axis */}
            <div className="mt-4 hidden border-t border-navy-100 pt-2.5 sm:grid sm:grid-cols-[180px_1fr_auto]">
              <span />
              <div className="relative h-4">
                {ticks.map((tick) => (
                  <span
                    key={tick}
                    className="absolute -translate-x-1/2 text-[11px] font-medium text-navy-400"
                    style={{ left: `${(tick / axisMax) * 100}%` }}
                  >
                    ₹{tick}L
                  </span>
                ))}
              </div>
              <span />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
