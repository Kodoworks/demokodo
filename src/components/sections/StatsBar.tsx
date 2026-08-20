import { Grid2x2, LayoutGrid, TrendingUp, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const items = [
  { icon: Grid2x2, label: "Programs", value: "7", desc: "Fellowship Programs" },
  { icon: Users, label: "Ratio", value: "1:8", desc: "Mentor-to-Fellow Ratio" },
  { icon: LayoutGrid, label: "Network", value: "150+", desc: "Hiring Partners" },
  { icon: TrendingUp, label: "Outcome", value: "95%", desc: "Placement Rate" },
];

export default function StatsBar() {
  return (
    <section className="pb-4 sm:pb-6">
      <Container>
        <Reveal>
          {/* All four tiles share one treatment — dark cell, green icon/label,
              white figure — so the row reads as one consistent stat strip
              instead of one tile jumping out in a different color. */}
          <div className="grid grid-cols-2 gap-3 rounded-[24px] bg-navy-950 p-3 sm:grid-cols-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-brand-400" strokeWidth={2} />
                    <span className="text-[10.5px] font-semibold uppercase tracking-wide text-white/40">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-display mt-4 text-[2.4rem] font-bold leading-none text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[13px] text-white/50">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
