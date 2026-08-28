import { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type Metric = { icon: LucideIcon; value: string; label: string };

const accentColors = ["text-brand-400", "text-violet-400", "text-amber-400", "text-brand-400"];

// Most pages pass all four core metrics; a couple drop one that isn't
// relevant to that audience. A 4-column grid with 3 items leaves a lopsided
// gap, so pick a column count that actually divides evenly.
const gridColsByCount: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

export default function MetricStrip({ metrics }: { metrics: Metric[] }) {
  const gridCols = gridColsByCount[metrics.length] ?? "grid-cols-2 sm:grid-cols-4";

  return (
    <section className="py-4 sm:py-6">
      <Container>
        <Reveal>
          <div className={`grid gap-3 rounded-[24px] bg-navy-950 p-3 ${gridCols}`}>
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-2xl p-5 sm:p-6">
                  <Icon className={`h-4 w-4 ${accentColors[i % accentColors.length]}`} strokeWidth={2} />
                  <p className="font-display mt-4 text-[2.2rem] font-bold leading-none text-white">{metric.value}</p>
                  <p className="mt-2 text-[13px] text-white/50">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
