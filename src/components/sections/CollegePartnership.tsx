import {
  Handshake,
  BadgeCheck,
  PenLine,
  CalendarDays,
  GraduationCap,
  Users,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { AudienceBenefit } from "@/lib/data";

const benefitIcons = [Handshake, GraduationCap, Users, Rocket, ShieldCheck];

const benefitAccents = [
  { bg: "bg-brand-500" },
  { bg: "bg-violet-500" },
  { bg: "bg-amber-500" },
];

export default function CollegePartnership({ benefits }: { benefits: AudienceBenefit[] }) {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      {/* ambient background graphics */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-navy-900/[0.08] bg-white card-shadow-lg">
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-brand-700 px-7 py-8 sm:px-10 sm:py-9">
              {/* dot-grid texture */}
              <svg className="absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden="true">
                <defs>
                  <pattern id="cp-dots" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cp-dots)" />
              </svg>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <Handshake className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <p className="font-mono mt-4 text-[10.5px] uppercase tracking-[0.14em] text-white/50">
                    Partnership Scope of Work
                  </p>
                  <p className="font-display mt-1 text-[20px] font-bold text-white">
                    KodoWorks × Your Institution
                  </p>
                </div>

                {/* seal badge */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur">
                  <BadgeCheck className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-7 sm:p-10">
              <div className="relative flex flex-col">
                {benefits.map((benefit, i) => {
                  const Icon = benefitIcons[i % benefitIcons.length];
                  const accent = benefitAccents[i % benefitAccents.length];
                  const isLast = i === benefits.length - 1;
                  return (
                    <div key={benefit.title} className="relative flex gap-5 pb-7 last:pb-0">
                      {!isLast && (
                        <span className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-navy-900/[0.12] to-transparent" />
                      )}
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accent.bg} ring-4 ring-white`}
                      >
                        <Icon className="h-4 w-4 text-white" strokeWidth={2.25} />
                      </span>
                      <div className="pt-1">
                        <h3 className="font-display text-[16px] font-semibold text-navy-950">
                          {benefit.title}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-500">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Signature strip */}
              <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl bg-navy-50/70 p-5 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-navy-900/[0.08]">
                    <PenLine className="h-3.5 w-3.5 text-navy-400" strokeWidth={2} />
                  </span>
                  <p className="text-[11.5px] text-navy-400">Authorized Signatory — Institution</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-navy-900/[0.08]">
                    <CalendarDays className="h-3.5 w-3.5 text-navy-400" strokeWidth={2} />
                  </span>
                  <p className="text-[11.5px] text-navy-400">Date</p>
                </div>
              </div>

              <div className="mt-7">
                <Button href="/contact" icon>
                  Start a Partnership Conversation
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}