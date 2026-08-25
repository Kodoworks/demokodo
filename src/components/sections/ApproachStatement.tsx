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

export default function ApproachStatement({ data = defaultData }: { data?: ApproachData }) {
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
          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-navy-900/[0.07] pt-8 sm:grid-cols-2 sm:gap-10">
            {data.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-navy-500">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
