import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import { whyPartnerReasons } from "@/lib/data";

export default function NumberedReasons() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionTag label={whyPartnerReasons.eyebrow} />
        <Reveal delay={60}>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {whyPartnerReasons.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-3 text-[17px] font-medium text-brand-500 sm:text-[19px]">
            {whyPartnerReasons.subtitle}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy-500">{whyPartnerReasons.intro}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 overflow-hidden rounded-[28px] border border-navy-900/[0.07] bg-white card-shadow-lg">
            {whyPartnerReasons.items.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline sm:gap-8 sm:p-7 ${
                  i !== 0 ? "border-t border-navy-900/[0.06]" : ""
                } ${i % 2 === 1 ? "bg-navy-50/60" : ""}`}
              >
                <span className="font-display shrink-0 text-[1.5rem] font-bold leading-none text-navy-100 sm:w-[70px] sm:text-[1.8rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[16px] font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-navy-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
