import { ArrowUpRight, Briefcase, Building2, Code2, Landmark, LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { audiences } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  students: Code2,
  professionals: Briefcase,
  colleges: Landmark,
  corporates: Building2,
};

const cardStyle: Record<string, string> = {
  students: "bg-violet-500 text-white",
  professionals: "bg-white text-navy-950 border border-navy-900/10",
  colleges: "bg-white text-navy-950 border border-navy-900/10",
  corporates: "bg-brand-500 text-white",
};

const labelStyle: Record<string, string> = {
  students: "text-white/60",
  professionals: "text-navy-400",
  colleges: "text-navy-400",
  corporates: "text-white/65",
};

const linkStyle: Record<string, string> = {
  students: "text-white",
  professionals: "text-brand-500",
  colleges: "text-brand-500",
  corporates: "text-white",
};

const descStyle: Record<string, string> = {
  students: "text-white/80",
  professionals: "text-navy-500",
  colleges: "text-navy-500",
  corporates: "text-white/80",
};

export default function Audiences() {
  return (
    <section id="audiences" className="pb-4 sm:pb-6">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, i) => {
            const Icon = iconMap[audience.key];
            return (
              <Reveal key={audience.key} delay={i * 60}>
                <div className={`flex h-full flex-col rounded-2xl p-6 ${cardStyle[audience.key]}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-semibold uppercase tracking-wide ${labelStyle[audience.key]}`}>
                      {audience.index} · {audience.title.split(" ")[0]}
                    </span>
                    <Icon className={`h-4 w-4 ${labelStyle[audience.key]}`} strokeWidth={2} />
                  </div>

                  <h3 className="font-display mt-8 text-[19px] font-semibold">{audience.title}</h3>
                  <p className={`mt-2 flex-1 text-[13.5px] leading-relaxed ${descStyle[audience.key]}`}>
                    {audience.description}
                  </p>

                  <a
                    href={audience.href}
                    className={`group mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold ${linkStyle[audience.key]}`}
                  >
                    {audience.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
