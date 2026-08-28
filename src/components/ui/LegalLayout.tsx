import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import SectionTag from "@/components/ui/SectionTag";

export function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="pb-4 pt-8 sm:pt-10 lg:pt-14">
        <Container>
          <SectionTag label={eyebrow} />
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-[13px] font-medium text-navy-400">Last updated: {lastUpdated}</p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-navy-500">{intro}</p>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl border-t border-navy-900/[0.07] pt-10">
            <div className="flex flex-col gap-9">{children}</div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-[19px] font-semibold text-navy-950 sm:text-[21px]">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-[14.5px] leading-relaxed text-navy-500">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-5 text-[14.5px] leading-relaxed text-navy-500 marker:text-navy-300" style={{ listStyleType: "disc" }}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
