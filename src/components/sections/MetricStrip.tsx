import { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type Metric = { icon: LucideIcon; value: string; label: string };

const accentColors = ["text-brand-400", "text-violet-400", "text-amber-400", "text-brand-400"];

export default function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="py-4 sm:py-6">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-3 rounded-[24px] bg-navy-950 p-3 sm:grid-cols-4">
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
