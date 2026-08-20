import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="success" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Student Outcomes" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Careers,</span>{" "}
            <span className="text-navy-300">actually changed.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Real fellows, real roles, real project experience — in their own
            words.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-navy-900/[0.07] bg-white p-6 card-shadow">
                <Quote className="h-5 w-5 text-brand-300" strokeWidth={2} fill="currentColor" />
                <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-navy-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-navy-900/[0.07] pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[12px] font-bold text-navy-600">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
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
      </Container>
    </section>
  );
}
