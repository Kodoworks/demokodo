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
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-6 card-shadow transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                    <Icon className="h-5 w-5 text-brand-500" strokeWidth={2} />
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
