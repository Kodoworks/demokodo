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
};

export default function StatementBlock({ data = defaultData }: { data?: StatementData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={data.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {data.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
            {data.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-navy-500">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant} icon={cta.variant === "primary"}>
                {cta.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
