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
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-[14px] bg-white px-6 py-3.5 text-[15px] font-semibold text-brand-500 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Talk to KodoWorks
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
                <Button href="#programs" variant="outline-light" size="lg">
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
