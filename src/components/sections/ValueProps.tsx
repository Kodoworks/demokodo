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

export default function ValueProps() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Real-World Learning" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Real-world learning.</span>{" "}
            <span className="text-navy-300">From day one.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Every fellow works on problems drawn directly from live technology
            projects, the same work our engineering teams handle for clients, not
            textbook exercises.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const accent = accents[i % accents.length];
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-6 card-shadow transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.bg}`}>
                      <Icon className={`h-5 w-5 ${accent.text}`} strokeWidth={2} />
                    </div>
                    <span className="text-[12px] font-medium text-navy-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-[16.5px] font-semibold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
