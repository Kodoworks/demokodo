"use client";

import { useRef } from "react";
import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Code2,
  FolderGit2,
  MessageSquare,
  Play,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { valueProps } from "@/lib/data";

const accents = [
  { bg: "bg-brand-500/10", text: "text-brand-600", dot: "bg-brand-500", chip: "bg-brand-500/15" },
  { bg: "bg-violet-500/10", text: "text-violet-600", dot: "bg-violet-500", chip: "bg-violet-500/15" },
  { bg: "bg-amber-500/15", text: "text-amber-600", dot: "bg-amber-500", chip: "bg-amber-500/20" },
];

/** Live project preview — a dark "app window" with a deploy pill and three
 * thumbnail tiles standing in for real client work. */
function MockLiveProject() {
  return (
    <div className="flex h-[176px] flex-col bg-navy-950 p-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-brand-400" />
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white/70">Deploy</span>
      </div>
      <p className="mt-2.5 text-[9.5px] font-semibold uppercase tracking-wide text-white/40">Live Projects</p>
      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-violet-500/20">
          <Play className="h-4 w-4 text-white/70" strokeWidth={2} />
        </div>
        <div className="relative overflow-hidden rounded-lg bg-brand-500/20">
          <span className="absolute right-1 top-1 rounded-full bg-white px-1.5 text-[9px] font-bold text-navy-900">8</span>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-amber-500/20">
          <span className="absolute bottom-1 left-1 flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[8px] font-bold text-navy-900">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
}

/** Code review preview — syntax-colored bars, a mentor chip and inline
 * review comments. */
function MockMentorship() {
  return (
    <div className="flex h-[176px] flex-col bg-navy-950 p-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-violet-500" />
          <span className="font-mono text-[9.5px] text-white/50">review · pull/42</span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white/70">
          <Users className="h-2.5 w-2.5" strokeWidth={2.5} />
          Mentor
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        <span className="h-1.5 w-3/5 rounded-full bg-violet-400/50" />
        <span className="h-1.5 w-2/5 rounded-full bg-amber-400/50" />
        <span className="h-1.5 w-4/5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1/2 rounded-full bg-brand-400/50" />
      </div>
      <div className="mt-auto flex flex-col gap-1.5">
        <span className="self-start rounded-lg rounded-bl-sm bg-brand-500/20 px-2 py-1 text-[9px] font-medium text-brand-300">
          Great logic! 🔥
        </span>
        <span className="self-start rounded-lg rounded-bl-sm bg-white/10 px-2 py-1 text-[9px] font-medium text-white/60">
          Consider optimizing
        </span>
      </div>
    </div>
  );
}

/** Placement pathway preview — Learn → Build → Assess → Interview → Offer,
 * mirroring the phases in the Placement Pathway section further down. */
function MockPlacement() {
  const steps = [
    { icon: BookOpen, label: "Learn" },
    { icon: Code2, label: "Build" },
    { icon: ClipboardCheck, label: "Assess" },
    { icon: MessageSquare, label: "Interview" },
    { icon: Award, label: "Offer" },
  ];
  return (
    <div className="flex h-[176px] flex-col items-center justify-center bg-navy-950 px-3">
      <div className="flex w-full items-start justify-between">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              <span
                className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  i === steps.length - 1 ? "bg-brand-500/25" : "bg-white/10"
                }`}
              >
                <step.icon className={`h-3.5 w-3.5 ${i === steps.length - 1 ? "text-brand-400" : "text-white/70"}`} strokeWidth={2} />
                {i === steps.length - 1 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-brand-500 text-[7px] text-navy-950">
                    ✓
                  </span>
                )}
              </span>
              {i < steps.length - 1 && (
                <span className="mx-0.5 h-px flex-1 border-t border-dashed border-white/20" />
              )}
            </div>
            <span className="mt-2 text-[8px] font-medium text-white/50">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mentor ratio preview — one mentor node fanning out to eight fellow
 * dots, with the 1:8 badge called out. */
function MockRatio() {
  return (
    <div className="flex h-[176px] flex-col items-center justify-center gap-4 bg-navy-950 p-3.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/20">
        <Users className="h-4 w-4 text-brand-400" strokeWidth={2.25} />
      </span>
      <div className="flex flex-wrap justify-center gap-1.5" style={{ maxWidth: "150px" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/25" />
        ))}
      </div>
      <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white">1 : 8</span>
    </div>
  );
}

/** Portfolio preview — a deployed-app browser bar over a small dashboard
 * mock, standing in for demonstrable, shippable work. */
function MockPortfolio() {
  return (
    <div className="flex h-[176px] flex-col bg-navy-950 p-3.5">
      <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
        <span className="font-mono text-[9px] text-white/60">yourproject.app</span>
      </div>
      <div className="mt-2.5 grid flex-1 grid-cols-2 gap-1.5">
        <div className="rounded-lg bg-white/[0.06] p-2">
          <span className="block h-1.5 w-3/4 rounded-full bg-violet-400/50" />
          <span className="mt-1.5 block h-6 w-full rounded-md bg-violet-500/15" />
        </div>
        <div className="rounded-lg bg-white/[0.06] p-2">
          <span className="block h-1.5 w-1/2 rounded-full bg-amber-400/50" />
          <span className="mt-1.5 block h-6 w-full rounded-md bg-amber-500/15" />
        </div>
      </div>
      <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-brand-500/20 px-2 py-0.5 text-[8.5px] font-bold text-brand-300">
        <FolderGit2 className="h-2.5 w-2.5" strokeWidth={2.5} />
        Deployed
      </span>
    </div>
  );
}

/** Curriculum preview — a syllabus checklist with a "revised weekly" tag. */
function MockCurriculum() {
  const items = ["Fundamentals", "Live Project Work", "System Design", "Production Deploy"];
  return (
    <div className="flex h-[176px] flex-col bg-navy-950 p-3.5">
      <div className="flex items-center justify-between">
        <span className="text-[9.5px] font-semibold uppercase tracking-wide text-white/40">Curriculum</span>
        <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[8px] font-bold text-amber-300">Updated weekly</span>
      </div>
      <div className="mt-2.5 flex flex-1 flex-col justify-center gap-2">
        {items.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-[7px] ${
                i < 2 ? "bg-brand-500 text-navy-950" : "bg-white/10 text-white/40"
              }`}
            >
              ✓
            </span>
            <span className="text-[9.5px] text-white/70">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const illustrations = {
  rocket: MockLiveProject,
  users: MockMentorship,
  target: MockPlacement,
  usersRound: MockRatio,
  folderGit: MockPortfolio,
  bookCheck: MockCurriculum,
} satisfies Record<string, () => React.JSX.Element>;

export default function DifferentiatorLedger() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = (card?.offsetWidth ?? el.clientWidth) + 20;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
          <div className="relative mt-10">
            <div
              ref={trackRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
            >
              {valueProps.map((item, i) => {
                const accent = accents[i % accents.length];
                const Illustration = illustrations[item.icon as keyof typeof illustrations];
                return (
                  <div
                    key={item.title}
                    className={`w-[78%] shrink-0 snap-start rounded-[26px] ${accent.bg} p-4 sm:w-[46%] sm:p-5 lg:w-[31.5%]`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-navy-900/[0.06] card-shadow">
                      <Illustration />
                    </div>
                    <h3 className={`font-display mt-5 text-center text-[18px] font-bold leading-snug ${accent.text}`}>
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-center text-[13px] leading-relaxed text-navy-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="absolute left-0 top-[35%] hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-700 card-shadow-lg transition hover:bg-navy-50 sm:flex"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next"
              className="absolute right-0 top-[35%] hidden h-10 w-10 translate-x-1/2 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-700 card-shadow-lg transition hover:bg-navy-50 sm:flex"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-4 flex justify-center">
            <Button href="/programs" icon>
              Explore Programs
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
