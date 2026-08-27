import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/data";

export default function Programs() {
  const [featured, ...rest] = programs;

  return (
    <section id="programs" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionTag label="Fellowship Programs" />
            <Reveal delay={60}>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                <span className="text-navy-950">Engineered for</span>{" "}
                <span className="text-navy-300">tomorrow&apos;s careers.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
                Live mentorship, real project work and a clear placement pathway,
                across the technology domains hiring the most right now.
              </p>
            </Reveal>
          </div>
          <Button href="/programs" variant="outline-dark" className="shrink-0" icon>
            View all 7 programs
          </Button>
        </div>

        {/* Featured program */}
        <Reveal delay={140}>
          <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-[24px] border border-navy-900/[0.07] card-shadow-lg lg:grid-cols-2">
            <div className="bg-white p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-navy-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-600">
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-navy-950 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                  Most Popular
                </span>
              </div>

              <h3 className="font-display mt-5 text-[1.9rem] font-semibold leading-tight text-navy-950">
                {featured.name}
              </h3>
              <p className="mt-2 text-[15px] text-navy-500">{featured.tagline}</p>
              <p className="mt-1 text-[13px] text-navy-400">Ideal for: {featured.idealFor}</p>

              <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Salary Range</p>
                  <p className="font-display mt-1 text-[20px] font-bold text-brand-500">{featured.salary}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Duration</p>
                  <p className="font-display mt-1 text-[20px] font-bold text-navy-950">{featured.duration}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Mentor Ratio</p>
                  <p className="font-display mt-1 text-[20px] font-bold text-navy-950">1:8</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.roleTags.map((r) => (
                  <span key={r} className="rounded-full bg-navy-50 px-3 py-1.5 text-[12px] font-medium text-navy-600">
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={`/courses/${featured.slug}`} icon>
                  View Program
                </Button>
                <Button href="/contact" variant="outline-dark">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative bg-navy-950">
              {/* Real photo band, same construction as the Hero poster card */}
              <div className="relative h-[150px] w-full overflow-hidden sm:h-[170px]">
                <Image
                  src="/images/hero/hero-poster-fellows.jpg"
                  alt="KodoWorks fellows working on a live project"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent" />
              </div>

              <div className="p-7 pt-6 sm:p-9 sm:pt-7">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                  Curriculum Highlights
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/85">
                      <span className="mt-0.5 text-brand-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Remaining programs — same white/border/shadow card used by
            ValueProps, Mentors and Testimonials, so this grid reads as one
            family with the rest of the site instead of a per-card rainbow. */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 3) * 60}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white card-shadow transition-transform duration-300 hover:-translate-y-1">
                {/* One quiet red hairline ties the six cards together as a
                    set — the loud accent lives only in the CTA below, so
                    the card isn't fighting itself with three black chips. */}
                <div className="h-[3px] bg-violet-500" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-violet-500">
                      {program.category}
                    </span>
                    <span className="text-[11px] font-medium text-navy-400">{program.durationShort}</span>
                  </div>

                  <h3 className="font-display mt-3 text-[18px] font-semibold leading-snug text-navy-950">
                    {program.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-navy-500">{program.tagline}</p>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                    Salary Range
                  </p>
                  <p className="font-display mt-1 text-[19px] font-bold text-brand-500">{program.salary}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {program.roleTags.map((r) => (
                      <span key={r} className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-600">
                        {r}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-1 items-center justify-between border-t border-navy-900/[0.07] pt-4">
                    <Link
                      href={`/courses/${program.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-200 group-hover:bg-violet-500"
                    >
                      View Program
                      <ArrowUpRight className="h-3.5 w-3.5 text-amber-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <a href="/contact" className="text-[13px] font-medium text-navy-400 hover:text-navy-700">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
