import { Award, Code2, Compass, Filter, Target, TrendingUp, Users, Workflow, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { campusOfferings as defaultData } from "@/lib/data";

const iconMap = {
  code: Code2,
  wrench: Wrench,
  users: Users,
  workflow: Workflow,
  compass: Compass,
  award: Award,
  filter: Filter,
  target: Target,
  trending: TrendingUp,
};

type OfferingIcon = keyof typeof iconMap;
type OfferingsData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { icon: OfferingIcon; title: string; description: string }[];
};

// Six swatches, not three repeated twice — a second, visibly deeper shade
// of each of the site's three accent hues (green/red/gold), so a 6-card
// grid never shows two chips that read as the same color. Getting there
// took a higher opacity jump than it looks like it should (10%→20% still
// read as "the same pale chip" at this size — needed 10%→40%+ before the
// second shade actually registers as a different color rather than a
// slightly-less-pale version of the first). Amber keeps text-amber-600 in
// both slots (the only amber shade that stays legible on a white chip —
// see ContactChannels, DifferentiatorLedger, etc.) and varies only depth.
const accents = [
  { bg: "bg-brand-500/12", text: "text-brand-500" },
  { bg: "bg-violet-500/12", text: "text-violet-600" },
  { bg: "bg-amber-500/18", text: "text-amber-600" },
  { bg: "bg-brand-700/40", text: "text-brand-700" },
  { bg: "bg-violet-600/45", text: "text-violet-600" },
  { bg: "bg-amber-600/50", text: "text-amber-600" },
];

export default function OfferingsGrid({ data = defaultData }: { data?: OfferingsData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={data.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {data.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">{data.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            const accent = accents[i % accents.length];
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-6 card-shadow transition-transform duration-300 hover:-translate-y-1">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.bg}`}>
                    <Icon className={`h-5 w-5 ${accent.text}`} strokeWidth={2} />
                  </span>
                  <h3 className="font-display mt-5 text-[16px] font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
