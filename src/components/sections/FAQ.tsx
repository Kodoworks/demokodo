"use client";

import { ReactNode, useState } from "react";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { faqs as defaultFaqs } from "@/lib/data";

type FAQItem = { question: string; answer: string };

export default function FAQ({
  eyebrow = "FAQ",
  title = (
    <>
      <span className="text-navy-950">Questions,</span> <span className="text-navy-300">answered.</span>
    </>
  ),
  subtitle = "Still unsure about something? Talk to a mentor and we'll walk you through it.",
  items = defaultFaqs,
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  items?: FAQItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <SectionTag label={eyebrow} />
            <Reveal delay={60}>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-navy-500">{subtitle}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6">
                <Button href="/contact" icon>
                  Talk to KodoWorks
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {items.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.question} delay={i * 40}>
                  <div className="overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-[18px] text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[14.5px] font-semibold text-navy-950">{faq.question}</span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-navy-500">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
