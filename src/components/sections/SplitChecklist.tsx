import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { placementTeamSupport as defaultData } from "@/lib/data";

type SplitChecklistData = {
  eyebrow: string;
  title: string;
  intro: string;
  listIntro: string;
  items: string[];
  closing: string;
  image?: {
    src: string;
    alt: string;
  };
};

const DEFAULT_IMAGE = {
  src: "/placementsimg.jpg",
  alt: "Akash Institutions placement team",
};

const checkColors = [
  { bg: "bg-brand-500", ring: "ring-brand-500/20" },
  { bg: "bg-violet-500", ring: "ring-violet-500/20" },
  { bg: "bg-amber-500", ring: "ring-amber-500/20" },
];

export default function SplitChecklist({
  data = defaultData,
  showImage = true,
}: {
  data?: SplitChecklistData;
  showImage?: boolean;
}) {
  const image = data.image ?? DEFAULT_IMAGE;

  if (!showImage) {
    return <ChecklistCardGrid data={data} />;
  }

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left: image */}
          <Reveal delay={60}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[32px] bg-navy-900/[0.06] sm:-left-6 sm:-top-6" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-navy-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-500 card-shadow-lg sm:-right-6">
                <Check className="h-8 w-8 text-white" strokeWidth={2.75} />
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <SectionTag label={data.eyebrow} />
            <Reveal delay={100}>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
                {data.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-500">{data.intro}</p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">
                {data.listIntro}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ol className="relative mt-4">
                {data.items.map((item, i) => {
                  const color = checkColors[i % checkColors.length];
                  const isLast = i === data.items.length - 1;
                  return (
                    <li key={item} className="relative pb-6 last:pb-0">
                      {!isLast && (
                        <span className="absolute left-[15px] top-8 bottom-0 w-px bg-navy-900/[0.08]" />
                      )}
                      <div className="group relative z-10 -mx-2 flex gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-navy-50/60">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${color.bg} transition-shadow group-hover:ring-4 ${color.ring}`}
                        >
                          <Check className="h-4 w-4 text-white" strokeWidth={2.75} />
                        </span>
                        <p className="pt-0.5 text-[14.5px] font-medium leading-relaxed text-navy-800">
                          {item}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 text-[15px] leading-relaxed text-navy-500">{data.closing}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

// No-image variant: a centered header over a bordered "focus areas" card,
// items laid out as an icon grid instead of a lone vertical checklist
// floating in the extra width the photo used to fill.
function ChecklistCardGrid({ data }: { data: SplitChecklistData }) {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTag label={data.eyebrow} />
          <Reveal delay={60}>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
              {data.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-navy-500">{data.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white card-shadow-lg">
            <p className="border-b border-navy-900/[0.06] bg-navy-50/60 px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400 sm:px-8">
              {data.listIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {data.items.map((item, i) => {
                const color = checkColors[i % checkColors.length];
                const row = Math.floor(i / 2);
                const isRightColumn = i % 2 === 1;
                // A trailing odd item-out (last row has only one item) spans
                // both columns and centers itself instead of sitting flush
                // left with empty space beside it.
                const isLoneTrailingItem = i === data.items.length - 1 && !isRightColumn && data.items.length % 2 === 1;
                return (
                  <div
                    key={item}
                    className={`group flex items-center gap-4 p-6 transition-colors hover:bg-navy-50/50 sm:p-7 ${
                      row > 0 ? "border-t border-navy-900/[0.06]" : ""
                    } ${isRightColumn ? "sm:border-l sm:border-navy-900/[0.06]" : ""} ${
                      isLoneTrailingItem ? "sm:col-span-2 sm:justify-center" : ""
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color.bg} transition-shadow group-hover:ring-4 ${color.ring}`}
                    >
                      <Check className="h-[18px] w-[18px] text-white" strokeWidth={2.75} />
                    </span>
                    <p className="text-[14.5px] font-medium leading-relaxed text-navy-800">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-center text-[15px] leading-relaxed text-navy-500">
            {data.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
