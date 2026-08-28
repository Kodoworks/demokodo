import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function ContactHeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-300/10 to-violet-300/10">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-10 h-2 w-2 animate-pulse rounded-full bg-violet-400" />
        <span
          className="absolute right-[12%] top-16 h-2 w-2 animate-pulse rounded-full bg-amber-400"
          style={{ animationDelay: "0.5s" }}
        />
        <span
          className="absolute left-[18%] bottom-10 h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400"
          style={{ animationDelay: "1s" }}
        />
        <span
          className="absolute right-[20%] bottom-16 h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <Container className="relative py-14 text-center sm:py-16 md:py-20 lg:py-16 xl:py-20">
        <Reveal>
          <h1 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-navy-950">Ready To Join?</span>{" "}
            <span className="text-brand-500">Let&apos;s Connect</span>
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-navy-500">
            Our team of experts is ready to collaborate with you every step of the way, from initial
            consultation to admission.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
