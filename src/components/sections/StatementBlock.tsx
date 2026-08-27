import { ReactNode } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { collegeStatement as defaultData } from "@/lib/data";

type StatementData = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  ctas: { label: string; href: string; variant: "primary" | "outline-dark" }[];
  image?: {
    src: string;
    alt: string;
    tag?: string;
  };
};

const DEFAULT_IMAGE = {
  src: "/clgimage.webp",
  alt: "Students collaborating at a partner college",
  tag: "On Campus",
};

export default function StatementBlock({
  data = defaultData,
  visual,
}: {
  data?: StatementData;
  /** Optional custom node, takes priority over data.image if both are passed.
   * Pages that pass neither still get the default image below. */
  visual?: ReactNode;
}) {
  const image = visual ? null : data.image ?? DEFAULT_IMAGE;

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div className="relative">
            <Quote
              className="absolute -left-2 -top-6 h-16 w-16 text-brand-500/10 sm:h-20 sm:w-20"
              strokeWidth={1.5}
              fill="currentColor"
            />

            <div className="relative">
              <SectionTag label={data.eyebrow} />
              <Reveal delay={60}>
                <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl">
                  {data.title}
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-7 border-l-2 border-brand-500/30 pl-5">
                  <div className="flex flex-col gap-4">
                    {data.paragraphs.map((p) => (
                      <p key={p} className="text-[15px] leading-relaxed text-navy-500">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap gap-3 border-t border-navy-900/[0.07] pt-7">
                  {data.ctas.map((cta) => (
                    <Button
                      key={cta.label}
                      href={cta.href}
                      variant={cta.variant}
                      icon={cta.variant === "primary"}
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Visual */}
          {visual ? (
            <Reveal delay={100}>{visual}</Reveal>
          ) : (
            image && (
              <Reveal delay={100}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-navy-900/[0.08] bg-navy-100 card-shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />

                    {image.tag && (
                      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-800 backdrop-blur">
                        {image.tag}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
}