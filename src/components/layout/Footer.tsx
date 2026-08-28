import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { contactInfo, footerLinks } from "@/lib/data";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.93c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V20H9.46V8.5h3.23v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const linkColumns = [
  { title: "Company", links: footerLinks.company },
  { title: "For You", links: footerLinks.audiences },
  { title: "Programs", links: footerLinks.programs },
  { title: "Legal", links: footerLinks.legal },
];

export default function Footer() {
  return (
    <footer className="mt-4 bg-navy-950 pt-14 text-white sm:mt-6">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-10 lg:grid-cols-[1.2fr_2.4fr] lg:gap-8">
          <div>
            <Logo dark height={30} />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/70">
              KodoWorks is a technology company connecting engineering practice
              with structured hiring outcomes across today&apos;s most in-demand
              domains.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-[13px] text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" strokeWidth={2} />
                {contactInfo.address}
              </div>
              <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-brand-400">
                <Phone className="h-4 w-4 shrink-0 text-white/50" strokeWidth={2} />
                {contactInfo.phones.join(" · ")}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2.5 hover:text-brand-400">
                <Mail className="h-4 w-4 shrink-0 text-white/50" strokeWidth={2} />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-white/50" strokeWidth={2} />
                www.kodoworks.in
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-white/45">
                  {col.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] leading-snug text-white/75 transition-colors hover:text-brand-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* pb includes clearance for the fixed scroll-top/WhatsApp buttons
            stacked in this same corner, so they never sit on top of the
            social links at the bottom of the scroll. */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 pb-24 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p className="text-[12.5px] text-white/60">
            Copyright © 2026 KodoWorks. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com"
              aria-label="KodoWorks on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors hover:bg-brand-500 hover:text-white"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://instagram.com"
              aria-label="KodoWorks on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors hover:bg-brand-500 hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
