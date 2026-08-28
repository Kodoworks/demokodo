import { ReactNode } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { approachStatement as defaultData } from "@/lib/data";

type ApproachData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
};

export default function ApproachStatement({
  data = defaultData,
  visual,
  align = "start",
  highlights,
  imageLeft = false,
}: {
  data?: ApproachData;
  /** Optional photo/collage placed beside the paragraphs on lg+. Pages that
   * don't pass it (e.g. For Professionals) keep the original text-only,
   * two-column paragraph layout untouched. */
  visual?: ReactNode;
  /** Row alignment for the paragraphs/visual grid. "start" (default) lines
   * both columns up from the same top edge — the right call whenever the
   * visual is noticeably taller than the paragraph block, so the shorter
   * column doesn't float in a lopsided gap. Use "center" only when the
   * visual is close to the same height as the text. */
  align?: "start" | "center";
  /** Optional checklist rendered under the paragraphs — gives the text
   * column more to say (and more height) when it's paired with a taller
   * visual, instead of leaving a lopsided gap below short paragraphs. */
  highlights?: string[];
  /** Mirror the layout: visual on the left, paragraphs on the right
   * (stacks with the visual on top on mobile). Default keeps text on the
   * left. Has no effect when `visual` isn't passed. */
  imageLeft?: boolean;
}) {
  const paragraphs = (
    <div>
      <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 ${visual ? "lg:grid-cols-1 lg:gap-6" : ""}`}>
        {data.paragraphs.map((p) => (
          <p key={p} className="text-[15px] leading-relaxed text-navy-500">
            {p}
          </p>
        ))}
      </div>
      {highlights && (
        <ul className="mt-6 flex flex-col gap-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-navy-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                <Check className="h-3 w-3 text-brand-600" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={data.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {data.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-3 text-[17px] font-medium text-brand-500 sm:text-[19px]">{data.subtitle}</p>
        </Reveal>

        <Reveal delay={140}>
          {visual ? (
            <div
              className={`mt-8 grid grid-cols-1 gap-10 border-t border-navy-900/[0.07] pt-8 lg:gap-14 ${
                align === "center" ? "items-center" : "items-start"
              } ${imageLeft ? "lg:grid-cols-[0.85fr_1fr]" : "lg:grid-cols-[1fr_0.85fr]"}`}
            >
              {imageLeft ? (
                <>
                  {visual}
                  {paragraphs}
                </>
              ) : (
                <>
                  {paragraphs}
                  {visual}
                </>
              )}
            </div>
          ) : (
            <div className="mt-8 border-t border-navy-900/[0.07] pt-8">{paragraphs}</div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
