import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="py-4 sm:py-6">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-50" />

            {/* Right-side graphic: an animated growth chart, standing in for
                the "career trajectory" the copy is talking about. */}
            <div className="pointer-events-none absolute -right-6 top-1/2 hidden w-[300px] -translate-y-1/2 lg:block xl:w-[360px]">
              <svg viewBox="0 0 320 220" className="w-full overflow-visible" fill="none">
                <defs>
                  <linearGradient id="finalCtaGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#33de8f" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#33de8f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M20 180 L90 150 L160 100 L230 60 L300 25 L300 210 L20 210 Z" fill="url(#finalCtaGrowth)" />
                <path
                  d="M20 180 L90 150 L160 100 L230 60 L300 25"
                  stroke="#33de8f"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[
                  [20, 180],
                  [90, 150],
                  [160, 100],
                  [230, 60],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#1c1d22" stroke="#33de8f" strokeWidth="2" />
                ))}
              </svg>

              {/* Pulsing endpoint */}
              <span className="absolute" style={{ left: "93.75%", top: "11.4%" }}>
                <span className="relative flex h-3 w-3 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-400" />
                </span>
              </span>

              {/* Stat chip riding the peak of the line */}
              <div className="absolute -top-3 right-0 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl">
                <p className="text-[9.5px] font-semibold uppercase tracking-wide text-white/55">Placement Rate</p>
                <p className="font-display text-[19px] font-bold text-white">95%</p>
              </div>

              {/* Small vector accents in the site's own accent colors */}
              <span className="absolute -left-3 top-6 h-2 w-2 animate-pulse rounded-full bg-amber-300" />
              <span
                className="absolute left-16 bottom-8 h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400"
                style={{ animationDelay: "0.6s" }}
              />
              <span
                className="absolute right-14 bottom-2 h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300"
                style={{ animationDelay: "1.1s" }}
              />
            </div>

            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                August 2026 Batch, Limited Seats
              </span>

              <h2 className="font-display mt-6 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                The technology career path built by an{" "}
                <span className="text-amber-300">IT company.</span>
              </h2>

              <p className="mt-5 text-[15.5px] leading-relaxed text-white/75 sm:text-[16.5px]">
                Talk to a working engineer, find the fellowship that fits, and
                start building real experience, no obligation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-[14px] bg-white px-6 py-3.5 text-[15px] font-semibold text-brand-500 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Talk to KodoWorks
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
                <Button href="/programs" variant="outline-light" size="lg">
                  View all 7 programs
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
