import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";

/**
 * Split "program overview" panel — description on the left, a photo with
 * the KodoWorks mark badged in the center on the right. Same shape as a
 * typical course-overview panel (text card + photo + logo badge), built
 * with our own copy and the KodoWorks icon instead of a borrowed one.
 */
export default function FellowshipOverview() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <SectionTag label="Program Overview" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
            What the fellowship actually covers.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="flex items-center rounded-[28px] border border-navy-900/[0.07] bg-white p-7 card-shadow-lg sm:p-9">
              <p className="text-[15.5px] leading-relaxed text-navy-600">
                KodoWorks&apos; fellowship for students is built around live,
                client-modeled project work, not textbook exercises or sample
                datasets. You&apos;ll work at a 1:8 mentor ratio with engineers
                who ship software professionally, getting close, personal
                code review throughout the program rather than generic
                feedback from a full-time instructor.
                <br />
                <br />
                By the time you graduate, you&apos;ll have deployed,
                demonstrable project work for your portfolio, not just a
                completion certificate, and a score-based, transparent path
                into our network of 150+ hiring partners.
              </p>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] card-shadow-lg sm:min-h-[360px]">
              <Image
                src="/images/hero/hero-poster-fellows.jpg"
                alt="A KodoWorks fellow working on a live project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-navy-950/10" />
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-[0_12px_28px_-8px_rgba(20,21,26,0.45)] sm:h-20 sm:w-20 sm:p-4">
                <Image
                  src="/kodoworks-icon.png"
                  alt="KodoWorks"
                  width={264}
                  height={264}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
