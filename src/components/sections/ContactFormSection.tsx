import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTag from "@/components/ui/SectionTag";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactFormSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-4 sm:py-6">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-navy-900/[0.07] bg-white card-shadow-lg lg:grid-cols-2">
            <div className="relative">
              {/* Real photo band, same construction as the Hero poster card */}
              <div className="relative h-[190px] w-full overflow-hidden sm:h-[210px]">
                <Image
                  src="/homepageimage1.avif"
                  alt="KodoWorks mentors and fellows talking in the office"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              </div>

              <div className="p-8 pt-0 sm:p-10 sm:pt-0">
                <SectionTag label="Not sure where you fit?" />
                <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
                  Talk to a KodoWorks mentor and map your career path.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-navy-500">
                  A working engineer will reach out, understand where you are, and
                  point you to the fellowship that fits, no obligation.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[13.5px] text-navy-500">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-100">
                    <CheckCircle2 className="h-3 w-3 text-navy-500" strokeWidth={2.5} />
                  </span>
                  Typical response within one business day
                </div>
              </div>
            </div>

            <div className="border-t border-navy-900/[0.06] bg-navy-50 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
