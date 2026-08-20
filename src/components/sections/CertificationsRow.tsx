import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { certifications } from "@/lib/data";

const badgeColors = ["text-brand-500 bg-brand-500/10", "text-violet-600 bg-violet-500/10", "text-amber-600 bg-amber-500/15"];

export default function CertificationsRow() {
  const doubled = [...certifications, ...certifications];

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionTag label="Certification Marks" />
          <Reveal delay={60}>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
              Industry-recognised certifications within reach
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-[14.5px] leading-relaxed text-navy-500">
              Every KodoWorks curriculum is mapped to globally recognised certification
              exams. Fellows can pursue these credentials at their own cost, backed by
              exam-aligned training built into the program.
            </p>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={140}>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="animate-marquee flex w-max gap-4 px-4">
            {doubled.map((cert, i) => {
              const [ink, bg] = badgeColors[i % badgeColors.length].split(" ");
              return (
                <div
                  key={`${cert.issuer}-${cert.name}-${i}`}
                  className="flex w-[240px] shrink-0 items-center gap-3 rounded-2xl border border-navy-900/[0.07] bg-white px-4 py-3.5 card-shadow"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg}`}>
                    <Award className={`h-[18px] w-[18px] ${ink}`} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-bold text-navy-950">{cert.issuer}</p>
                    <p className="truncate text-[11.5px] text-navy-500">{cert.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
