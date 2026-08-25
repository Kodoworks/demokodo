import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { collegeChallenge as defaultData } from "@/lib/data";

type ChallengeData = { eyebrow: string; title: string; paragraphs: string[] };

export default function ChallengeStatement({ data = defaultData }: { data?: ChallengeData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionTag label={data.eyebrow} />
            <Reveal delay={60}>
              <h2 className="font-display mt-4 text-[1.7rem] font-semibold leading-[1.2] tracking-tight text-navy-950 sm:text-[2.4rem]">
                {data.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="flex flex-col gap-5 border-t border-navy-900/[0.07] pt-2 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              {data.paragraphs.map((p) => (
                <p key={p} className="text-[15px] leading-relaxed text-navy-500">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
