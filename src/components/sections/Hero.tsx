import { Sparkles } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";
import Logo from "@/components/ui/Logo";

export default function Hero() {
  return (
    <section id="top" className="relative pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div>
          <SectionTag label="Engineering-Led. Not Classroom-Led." variant="pill" />

          <h1 className="font-display mt-6 text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-6xl lg:text-[4.6rem]">
            The Technology Career Path Built by an IT Company.
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-navy-500 sm:text-[19px]">
            KodoWorks is building the future of how talent meets industry, for
            individuals, institutions, and enterprises.
          </p>

        </div>

        {/* Right: poster card */}
        <div className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:ml-auto">
          <div className="gradient-black relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgba(20,21,26,0.5)]">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />

            {/* Real photo, edge to edge — the card had no photography at all before this */}
            <div className="relative h-[140px] w-full overflow-hidden sm:h-[160px]">
              <Image
                src="/images/hero/hero-poster-fellows.jpg"
                alt="Fellows working together at KodoWorks"
                fill
                sizes="440px"
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#14151a]" />
            </div>

            <div className="relative -mt-8 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 mx-5 mb-5 sm:mx-6 sm:mb-6">
              <div className="flex items-center gap-2">
                <Logo dark />
              </div>
              <p className="font-display mt-6 max-w-[72%] text-[22px] font-semibold leading-snug text-white">
                India&apos;s #1 Tech Career Fellowship
              </p>
              <p className="mt-2 max-w-[85%] text-[13px] leading-relaxed text-white/65">
                Engineering-led, industry-focused, outcome-driven. Backed by a
                practising technology company.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Real-World Projects", color: "text-violet-400" },
                  { label: "Mentorship from Industry", color: "text-amber-400" },
                  { label: "Certification & Recognition", color: "text-brand-400" },
                ].map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/80"
                  >
                    <Sparkles className={`h-3 w-3 ${f.color}`} strokeWidth={2} />
                    {f.label}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-4 border-t border-white/15 pt-4 text-[12px] text-white/55">
                <span>7 Programs</span>
                <span>500+ Hiring Partners</span>
              </div>
            </div>
          </div>

          {/* Floating chip: placements gauge */}
          <div className="absolute -right-5 -top-8 hidden w-[160px] rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl sm:block">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white">Placements</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold text-white">This year</span>
            </div>
            <div className="relative mx-auto mt-2 h-[64px] w-[100px] overflow-hidden">
              <svg viewBox="0 0 100 100" className="absolute left-0 top-0 h-[100px] w-[100px]">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#f03a2e"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  strokeDashoffset="27"
                  transform="rotate(180 50 50)"
                />
              </svg>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[22px] font-bold text-white">95%</span>
            </div>
            <p className="mt-1 text-center text-[10px] leading-tight text-white/60">placed across the network</p>
          </div>

          {/* Floating chip: mentor ratio */}
          <div className="absolute -right-2 bottom-4 hidden w-[168px] rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl sm:block">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white">Mentor ratio</span>
              <span className="h-2 w-2 rounded-full bg-amber-400" />
            </div>
            <p className="font-display mt-1 text-[26px] font-bold text-white">1:8</p>
            <div className="mt-2 flex items-end gap-1">
              {[
                { h: 40, color: "bg-violet-400" },
                { h: 55, color: "bg-amber-400" },
                { h: 45, color: "bg-white/25" },
                { h: 100, color: "bg-brand-400" },
                { h: 50, color: "bg-white/25" },
              ].map((bar, i) => (
                <span
                  key={i}
                  className={`w-full rounded-sm ${bar.color}`}
                  style={{ height: `${bar.h * 0.22}px` }}
                />
              ))}
            </div>
          </div>

          {/* Floating pill: live project */}
          <div className="absolute -bottom-5 left-6 hidden items-center gap-2 rounded-full bg-navy-100 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-navy-800 shadow-xl sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Live Project
          </div>
        </div>
      </Container>
    </section>
  );
}
