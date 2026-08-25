import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { contactInfo } from "@/lib/data";

const steps = [
  "You share where you are and where you want to go",
  "A working engineer reviews it and calls you back",
  "We map the right program, no obligation",
];

export default function ContactHub() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-navy-900/[0.08] bg-white card-shadow-lg lg:grid-cols-[1fr_1.15fr]">
            {/* Details panel */}
            <div className="bg-navy-950 p-8 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Typical response within one business day
              </span>

              <h2 className="font-display mt-6 text-[1.7rem] font-semibold leading-tight text-white sm:text-[2rem]">
                Reach us directly
              </h2>

              <div className="mt-7 flex flex-col gap-4">
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="flex items-start gap-3.5 text-white/85 transition-colors hover:text-brand-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="pt-1.5 text-[14px]">{contactInfo.phones.join(" · ")}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3.5 text-white/85 transition-colors hover:text-brand-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="pt-1.5 text-[14px]">{contactInfo.email}</span>
                </a>
                <div className="flex items-start gap-3.5 text-white/85">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="pt-1.5 text-[14px] leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>

              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40">What happens next</p>
                <div className="mt-4 flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/70">
                        {i + 1}
                      </span>
                      <p className="text-[13px] leading-relaxed text-white/70">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="bg-navy-50 p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Send a message</p>
              <h3 className="font-display mt-2 text-[1.4rem] font-semibold text-navy-950">
                Tell us a bit about you
              </h3>
              <div className="mt-6 flex items-center gap-2 text-[13px] text-navy-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                  <CheckCircle2 className="h-3 w-3 text-brand-500" strokeWidth={2.5} />
                </span>
                No obligation, no spam
              </div>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
