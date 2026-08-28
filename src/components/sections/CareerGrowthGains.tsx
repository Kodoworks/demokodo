import { Award, Code2, Handshake, Layers, MessageSquare, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { careerGrowthStatement } from "@/lib/data";

// One icon per gain, in the order careerGrowthStatement.gains lists them.
const gainIcons = [Code2, Layers, Users, Award, MessageSquare, Handshake];

// Six swatches, not three repeated — same expanded trio-of-hues rotation as
// OfferingsGrid, so an 8-card grid doesn't put two identically-colored
// chips in the same row (only the 7th/8th cards loop back to the 1st/2nd
// color, and by then they're a full row apart).
const accents = [
  { bg: "bg-brand-500/12", text: "text-brand-500" },
  { bg: "bg-violet-500/12", text: "text-violet-600" },
  { bg: "bg-amber-500/18", text: "text-amber-600" },
  { bg: "bg-brand-700/40", text: "text-brand-700" },
  { bg: "bg-violet-600/45", text: "text-violet-600" },
  { bg: "bg-amber-600/50", text: "text-amber-600" },
];

export default function CareerGrowthGains() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={careerGrowthStatement.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {careerGrowthStatement.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-3 text-[17px] font-medium text-brand-500 sm:text-[19px]">
            {careerGrowthStatement.subtitle}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            {careerGrowthStatement.intro}
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerGrowthStatement.gains.map((gain, i) => {
            const Icon = gainIcons[i % gainIcons.length];
            const accent = accents[i % accents.length];
            return (
              <Reveal key={gain.title} delay={180 + i * 40}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy-900/[0.07] bg-white p-5 card-shadow transition-transform duration-300 hover:-translate-y-1">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent.bg}`}>
                    <Icon className={`h-[18px] w-[18px] ${accent.text}`} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[14.5px] font-semibold leading-snug text-navy-950">{gain.title}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-500">{gain.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
