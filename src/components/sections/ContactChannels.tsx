import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { contactInfo } from "@/lib/data";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37s-1.03 1-1.03 2.45 1.06 2.85 1.2 3.05c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.68 0-3.24-.47-4.57-1.29l-.33-.19-3.01.79.8-2.93-.21-.34A8.1 8.1 0 0 1 3.9 12c0-4.48 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.48-3.64 8.1-8.11 8.1Z" />
    </svg>
  );
}

export default function ContactChannels() {
  const whatsappNumber = contactInfo.phones[0].replace(/[^\d]/g, "");

  const channels = [
    {
      label: "Call Us",
      value: contactInfo.phones[0],
      href: `tel:${contactInfo.phones[0].replace(/\s/g, "")}`,
      icon: Phone,
    },
    {
      label: "WhatsApp",
      value: "Message us directly",
      href: `https://wa.me/${whatsappNumber}`,
      icon: WhatsAppIcon,
      external: true,
    },
    {
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
    {
      label: "Visit Us",
      value: contactInfo.address,
      href: undefined,
      icon: MapPin,
    },
  ];

  return (
    <section className="pb-10 sm:pb-14">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                  <Icon className="h-[18px] w-[18px] text-brand-500" strokeWidth={2} />
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                  {channel.label}
                </p>
                <p className="mt-1 text-[13.5px] font-medium leading-relaxed text-navy-800">{channel.value}</p>
              </>
            );
            return (
              <Reveal key={channel.label} delay={i * 60}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="block h-full rounded-2xl border border-navy-900/[0.07] bg-white p-5 card-shadow transition-transform duration-300 hover:-translate-y-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-5 card-shadow">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
