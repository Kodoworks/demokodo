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
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="pb-4 pt-8 sm:pt-10 lg:pt-14">
      <Container>
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
      </Container>
    </section>
  );
}
