import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { contactInfo } from "@/lib/data";

const cards = [
  { label: "Location", value: "Bushido Towers, Coimbatore", icon: MapPin, href: undefined },
  {
    label: "Contact",
    value: contactInfo.phones.join(" / "),
    icon: Phone,
    href: `tel:${contactInfo.phones[0].replace(/\s/g, "")}`,
  },
  { label: "Email", value: contactInfo.email, icon: Mail, href: `mailto:${contactInfo.email}` },
  { label: "Website", value: "www.kodoworks.in", icon: Globe, href: "https://www.kodoworks.in" },
];

export default function ContactDetails() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-navy-50 p-5 sm:p-8 lg:p-10">
            <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-3xl">
              Contact Details
            </h2>

            <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Map */}
              <div className="h-[280px] overflow-hidden rounded-3xl border border-navy-900/[0.07] card-shadow sm:h-[340px] lg:h-auto lg:min-h-[400px]">
                <iframe
                  title="KodoWorks location"
                  src="https://www.google.com/maps?q=Bushido+Towers,+Coimbatore&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:content-center">
                {cards.map((card, i) => {
                  const Icon = card.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="h-[18px] w-[18px] text-navy-600" strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block text-[13.5px] font-semibold text-navy-950">{card.label}</span>
                        <span className="mt-0.5 block text-[13px] leading-relaxed text-navy-500">{card.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <Reveal key={card.label} delay={i * 50}>
                      {card.href ? (
                        <a
                          href={card.href}
                          target={card.href.startsWith("http") ? "_blank" : undefined}
                          rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex h-full items-center gap-3 rounded-2xl bg-white p-4 card-shadow transition-transform duration-300 hover:-translate-y-1 sm:p-5"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex h-full items-center gap-3 rounded-2xl bg-white p-4 card-shadow sm:p-5">
                          {content}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
