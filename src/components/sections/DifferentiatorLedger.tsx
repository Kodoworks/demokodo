import { ChevronRight, List, MonitorCheck, TrendingUp, User, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { valueProps } from "@/lib/data";

const iconMap = {
  rocket: ChevronRight,
  users: User,
  target: TrendingUp,
  usersRound: Users,
  folderGit: MonitorCheck,
  bookCheck: List,
};

const accents = [
  { bg: "bg-brand-500/10", text: "text-brand-500" },
  { bg: "bg-violet-500/10", text: "text-violet-600" },
  { bg: "bg-amber-500/15", text: "text-amber-600" },
];

export default function DifferentiatorLedger() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Six Reasons" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">What actually makes</span>{" "}
            <span className="text-navy-300">the difference.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Not a feature list — the six things that actually separate
            working in a real engineering practice from sitting in a
            classroom.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white card-shadow-lg">
            {valueProps.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const accent = accents[i % accents.length];
              return (
                <div
                  key={item.title}
                  className={`flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 ${
                    i !== 0 ? "border-t border-navy-900/[0.06]" : ""
                  } ${i % 2 === 1 ? "bg-navy-50/60" : ""}`}
                >
                  <div className="flex items-center gap-5 sm:w-[190px] sm:shrink-0">
                    <span className="font-display text-[2.1rem] font-bold leading-none text-navy-100 sm:text-[2.5rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.bg}`}>
                      <Icon className={`h-5 w-5 ${accent.text}`} strokeWidth={2} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[17.5px] font-semibold text-navy-950 sm:text-[19px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-navy-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
