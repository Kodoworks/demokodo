import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";

/**
 * Shared opening header for standalone inner pages (About, Programs,
 * Why KodoWorks, the audience pages, ...) so they read as one family
 * with the homepage's section headers instead of inventing new type
 * treatment per page. Renders the page's single h1.
 */
export default function PageIntro({
  eyebrow,
  title,
  subtitle,
  note,
  visual,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  /** Optional supporting line under the subtitle — a smaller, muted
   * paragraph for unpacking a phrase in the title without a whole new
   * section (e.g. what "one outcome-driven format" actually means). */
  note?: string;
  /** Optional right-side card/image. When present, the header switches to a
   * two-column layout (copy left, visual right) from lg upward; pages that
   * don't pass it keep the original single-column header untouched. */
  visual?: ReactNode;
}) {
  const copy = (
    <div>
      <SectionTag label={eyebrow} />
      <Reveal delay={60}>
        <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={100}>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-navy-500 sm:text-[17px]">
            {subtitle}
          </p>
        </Reveal>
      )}
      {note && (
        <Reveal delay={130}>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-navy-400">{note}</p>
        </Reveal>
      )}
    </div>
  );

  return (
    <section className="pb-4 pt-8 sm:pt-10 lg:pt-14">
      <Container>
        {visual ? (
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {copy}
            <Reveal delay={140} className="mt-2 lg:mt-0">
              {visual}
            </Reveal>
          </div>
        ) : (
          copy
        )}
      </Container>
    </section>
  );
}
