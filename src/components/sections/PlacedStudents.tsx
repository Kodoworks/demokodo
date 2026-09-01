import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { placementLogos } from "@/lib/data";

// Duplicated once so the strip can loop seamlessly: the track animates from
// 0 to -50%, which lands exactly back on the start of the (identical) second
// copy — same technique CertificationsRow uses for its marquee.
const doubled = [...placementLogos, ...placementLogos];

export default function PlacedStudents() {
  return (
    <section className="bg-slate-50 py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionTag label="Hiring Network" />
          <Reveal delay={60}>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
              Alumni In Action
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-[14.5px] leading-relaxed text-navy-500">
              KodoWorks fellows go on to build careers at companies of every
              size, from global enterprises to fast-growing partners.
            </p>
          </Reveal>
        </div>

        {/* White, rounded card framing the slider — `.marquee-pause-on-hover`
            (globals.css) pauses the scroll on hover (mouse on desktop, a
            tap-and-hold on touch devices); the mask fades the logos in/out
            at both edges instead of hard-cutting them. */}
        <Reveal delay={140}>
          <div className="marquee-pause-on-hover relative mt-10 overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white py-8 card-shadow [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="animate-marquee flex w-max items-center gap-4 px-4 sm:gap-6">
              {doubled.map((logo, i) => (
                <img
                  key={`${logo.name}-${i}`}
                  src={logo.src}
                  alt={logo.name}
                  width={363}
                  height={145}
                  className="h-14 w-auto shrink-0 sm:h-16 lg:h-20"
                  loading={i < placementLogos.length ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
