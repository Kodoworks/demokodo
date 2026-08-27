import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";

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
            <div className="relative mx-auto w-full max-w-[480px]">
              <Image
                src="/certificatekodo.png"
                alt="A framed KodoWorks certificate of completion"
                width={1448}
                height={1086}
                sizes="(min-width: 1024px) 480px, 90vw"
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
