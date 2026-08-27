"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BarChart3, Brain, Check, Cloud, Code2, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { programs, type Program } from "@/lib/data";

const iconMap = {
  brain: Brain,
  cloud: Cloud,
  code: Code2,
  shield: ShieldCheck,
  chart: BarChart3,
  sparkles: Sparkles,
  workflow: Workflow,
};

// Tailwind scans source for literal class names — a template-built
// `bg-cat-${catColor}` string would never be picked up, so every variant
// is spelled out here instead.
const catStyles: Record<Program["catColor"], { bg: string; bgLight: string; text: string }> = {
  ai: { bg: "bg-cat-ai", bgLight: "bg-cat-ai-light", text: "text-cat-ai" },
  cloud: { bg: "bg-cat-cloud", bgLight: "bg-cat-cloud-light", text: "text-cat-cloud" },
  dev: { bg: "bg-cat-dev", bgLight: "bg-cat-dev-light", text: "text-cat-dev" },
  security: { bg: "bg-cat-security", bgLight: "bg-cat-security-light", text: "text-cat-security" },
  data: { bg: "bg-cat-data", bgLight: "bg-cat-data-light", text: "text-cat-data" },
  genai: { bg: "bg-cat-genai", bgLight: "bg-cat-genai-light", text: "text-cat-genai" },
  enterprise: { bg: "bg-cat-enterprise", bgLight: "bg-cat-enterprise-light", text: "text-cat-enterprise" },
};

export default function ProgramExplorer() {
  const [active, setActive] = useState(0);
  const [bannerPhotoFailed, setBannerPhotoFailed] = useState(false);
  const bannerImgRef = useRef<HTMLImageElement>(null);
  const program = programs[active];
  const style = catStyles[program.catColor];
  const ActiveIcon = iconMap[program.icon];

  // Reset the "no photo yet" fallback whenever the tab changes, so each
  // program tries its own photo instead of inheriting the previous tab's
  // load failure.
  useEffect(() => {
    setBannerPhotoFailed(false);
  }, [program.slug]);

  // Local dev/SSR can resolve a missing static file fast enough that the
  // native <img> "error" event fires before React finishes hydrating and
  // attaches the onError listener — the event is lost and onError never
  // runs. This runs after every render and catches that already-failed
  // state via `complete`/`naturalWidth`, as a backstop alongside onError.
  useEffect(() => {
    const img = bannerImgRef.current;
    if (img && img.complete && img.naturalWidth === 0 && !bannerPhotoFailed) {
      setBannerPhotoFailed(true);
    }
  });

  return (
    <section id="programs" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[300px_1fr] lg:gap-8">
            {/* Program rail */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {programs.map((p, i) => {
                const PIcon = iconMap[p.icon];
                const isActive = i === active;
                const s = catStyles[p.catColor];
                return (
                  <button
                    key={p.slug}
                    onClick={() => setActive(i)}
                    className={`group flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 lg:w-full ${
                      isActive
                        ? "border-navy-950 bg-navy-950"
                        : "border-navy-900/[0.08] bg-white hover:border-navy-900/20 hover:-translate-y-0.5"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isActive ? "bg-white/10" : s.bgLight
                      }`}
                    >
                      <PIcon className={`h-4 w-4 ${isActive ? "text-white" : s.text}`} strokeWidth={2} />
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-[13.5px] font-semibold ${isActive ? "text-white" : "text-navy-900"}`}>
                        {p.shortName}
                      </span>
                      <span className={`block text-[11px] ${isActive ? "text-white/45" : "text-navy-400"}`}>
                        {p.durationShort}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white card-shadow-lg">
              {/* Course banner — tries a real photo per program first
                  (public/images/programs/<slug>.jpg); if that file is
                  missing it falls back to a color + icon watermark built
                  from the program's own data, so nothing breaks either
                  way. Uses next/image so these (large, uncompressed
                  source) photos get resized/compressed instead of
                  shipping the raw multi-MB files to the browser. */}
              <div className={`relative h-[160px] overflow-hidden sm:h-[200px] ${style.bg}`}>
                {!bannerPhotoFailed ? (
                  <Image
                    ref={bannerImgRef}
                    src={`/images/programs/${program.slug}.jpg`}
                    alt=""
                    fill
                    priority={active === 0}
                    sizes="(min-width: 1024px) 900px, 100vw"
                    onError={() => setBannerPhotoFailed(true)}
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-dots opacity-25" />
                    <ActiveIcon
                      className="absolute -right-8 -top-8 h-[220px] w-[220px] text-white/10 sm:h-[260px] sm:w-[260px]"
                      strokeWidth={1}
                    />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-navy-950/0" />
                <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                  <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                    {program.category}
                  </span>
                  <h2 className="font-display mt-3 text-[1.7rem] font-semibold leading-tight text-white sm:text-[2.2rem]">
                    {program.name}
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-9 lg:p-10">
                <p className="max-w-xl text-[15px] leading-relaxed text-navy-500">{program.tagline}</p>
                <p className="mt-1 text-[13px] text-navy-400">Ideal for: {program.idealFor}</p>

                <div className="mt-7 flex flex-wrap gap-x-9 gap-y-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Salary Range</p>
                    <p className="font-display mt-1 text-[19px] font-bold text-brand-500">{program.salary}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Duration</p>
                    <p className="font-display mt-1 text-[19px] font-bold text-navy-950">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Mentor Ratio</p>
                    <p className="font-display mt-1 text-[19px] font-bold text-navy-950">1:8</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {program.roleTags.map((r) => (
                    <span key={r} className="rounded-full bg-navy-50 px-3 py-1.5 text-[12px] font-medium text-navy-600">
                      {r}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-navy-900/[0.07] pt-7 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                      Curriculum Highlights
                    </p>
                    <ul className="mt-3 flex flex-col gap-2.5">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13px] leading-relaxed text-navy-600">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Core Skills</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {program.skills.map((s) => (
                        <span
                          key={s}
                          className={`rounded-md ${style.bgLight} px-2.5 py-1 text-[11.5px] font-semibold ${style.text}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`/courses/${program.slug}`} icon>
                    View Program
                  </Button>
                  <Button href="/contact" variant="outline-dark">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
