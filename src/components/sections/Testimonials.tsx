import { ReactNode } from "react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { testimonials as defaultTestimonials } from "@/lib/data";

type TestimonialItem = { name: string; role: string; quote: string };

// Same three-color rotation JourneySteps/PlacementPathway use for their
// connected-timeline nodes — reused here so the zigzag reads as the same
// visual language, not a one-off.
const accents = [
  { dot: "bg-brand-500", chip: "bg-brand-500/10", text: "text-brand-600" },
  { dot: "bg-violet-500", chip: "bg-violet-500/10", text: "text-violet-600" },
  { dot: "bg-amber-500", chip: "bg-amber-500/10", text: "text-amber-600" },
];

function initialsOf(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function Testimonials({
  eyebrow = "Student Outcomes",
  title = (
    <>
      <span className="text-navy-950">Careers,</span>{" "}
      <span className="text-navy-300">actually changed.</span>
    </>
  ),
  subtitle = "Real fellows, real roles, real project experience — in their own words.",
  items = defaultTestimonials,
  layout = "grid",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  items?: TestimonialItem[];
  /** "grid" is the original homepage layout (unchanged, still its default).
   *  "zigzag" is the alternating-spine layout used on the inner pages. */
  layout?: "grid" | "zigzag";
}) {
  // Fewer than 3 quotes (most inner pages show a focused pair) read as
  // sparse stretched across a 3-up grid, so cap the columns to the item
  // count and keep the row centered instead of hugging the left edge.
  const gridClass =
    items.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 max-w-2xl mx-auto";

  return (
    <section id="success" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">{subtitle}</p>
        </Reveal>

        {layout === "grid" ? (
          <div className={`mt-10 grid grid-cols-1 gap-4 ${gridClass}`}>
            {items.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/[0.07] bg-white p-6 card-shadow">
                  <Quote className="h-5 w-5 text-brand-300" strokeWidth={2} fill="currentColor" />
                  <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-navy-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-navy-900/[0.07] pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[12px] font-bold text-navy-600">
                      {initialsOf(t.name)}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-navy-950">{t.name}</p>
                      <p className="text-[12px] text-navy-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          // Zigzag, not a matched pair of boxes: quotes alternate sides of a
          // central spine on desktop, each pinned to it with a short stub and
          // a colored node — the same connected-timeline motif JourneySteps
          // and PlacementPathway use, just running down instead of across.
          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-navy-200 lg:block" />

            <div className="flex flex-col gap-8 lg:gap-10">
              {items.map((t, i) => {
                const accent = accents[i % accents.length];
                const fromLeft = i % 2 === 0;

                return (
                  <Reveal key={t.name} delay={i * 70}>
                    <div className={`relative flex ${fromLeft ? "lg:justify-start" : "lg:justify-end"}`}>
                      {/* Connector: node on the spine + a stub running to the card */}
                      <span
                        className={`absolute left-1/2 top-11 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white lg:block ${accent.dot}`}
                      />
                      <span
                        className={`absolute top-11 hidden h-px w-10 -translate-y-1/2 bg-navy-200 lg:block ${
                          fromLeft ? "right-1/2" : "left-1/2"
                        }`}
                      />

                      <div className="w-full rounded-2xl border border-navy-900/[0.07] bg-white p-6 card-shadow lg:w-[calc(50%-2.5rem)]">
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${accent.chip} ${accent.text}`}
                          >
                            {initialsOf(t.name)}
                          </span>
                          <div>
                            <p className="text-[13px] font-bold text-navy-950">{t.name}</p>
                            <p className="text-[12px] text-navy-400">{t.role}</p>
                          </div>
                          <Quote
                            className={`ml-auto h-5 w-5 shrink-0 opacity-40 ${accent.text}`}
                            strokeWidth={2}
                            fill="currentColor"
                          />
                        </div>
                        <p className="mt-4 text-[13.5px] leading-relaxed text-navy-700">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
