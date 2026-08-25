import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { placedStudents } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function PlacedStudents() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label="Students Placed" />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Placed.</span>{" "}
            <span className="text-navy-300">Not just certified.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            A few of the fellows who have gone on to build real careers with
            our hiring partners.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placedStudents.map((student, i) => (
            <Reveal key={student.name} delay={i * 60}>
              <div className="flex flex-col items-center rounded-2xl border border-navy-900/[0.07] bg-white p-7 text-center card-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-[15px] font-bold text-white">
                  {initials(student.name)}
                </div>
                <h3 className="font-display mt-4 text-[16px] font-semibold text-navy-950">
                  {student.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                  Placed at
                </p>
                <div className="mt-3 flex h-12 w-full items-center justify-center rounded-xl border border-navy-900/10 bg-navy-50 px-5">
                  {/* Plain <img>, not next/image: one logo is a locally
                      served SVG, and the Next image optimizer refuses to
                      process local SVGs without extra config. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={student.logo} alt={student.company} className="h-[26px] w-auto object-contain" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
