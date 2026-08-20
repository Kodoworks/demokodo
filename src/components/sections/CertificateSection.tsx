import { Check, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import Logo from "@/components/ui/Logo";

const points = [
  "Verifiable credential with a unique certificate ID",
  "Industry-recognised across our hiring partners",
  "Shareable to LinkedIn in one click",
];

export default function CertificateSection() {
  return (
    <section className="py-4 sm:py-6">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 rounded-[28px] bg-navy-950 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <Reveal>
            <div>
              <SectionTag label="Certification" />
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                A certificate issued by a <span className="text-brand-400">technology company.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                Not a training academy. Every fellow earns a verifiable,
                industry-recognised credential backed by real project work, the kind
                hiring managers actually trust.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[14px] text-white/85">
                    <Check className="h-4 w-4 shrink-0 text-brand-400" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mx-auto w-full max-w-[400px] rotate-[1.5deg] rounded-2xl bg-white p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:p-7">
              <div className="flex items-center justify-between">
                <Logo />
                <span className="font-mono text-[10px] text-navy-300">ID · KW-AI-2026-0042</span>
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-wide text-brand-500">
                Certificate of Completion
              </p>
              <p className="mt-2 text-[13px] text-navy-400">This certifies that</p>
              <p className="font-display mt-1 text-[26px] font-semibold text-navy-950">Your Name Here</p>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-500">
                has successfully completed the{" "}
                <span className="font-semibold text-navy-800">AI Engineering &amp; Machine Learning</span>{" "}
                Fellowship, including 5 deployed production projects.
              </p>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <div className="h-px w-32 bg-navy-300" />
                  <p className="mt-1.5 text-[11px] text-navy-400">Director, KodoWorks Engineering</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400">
                  <Star className="h-5 w-5 fill-navy-950 text-navy-950" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
