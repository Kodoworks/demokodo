"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    // Same px-5/sm:px-8/lg:px-10 scale as Container, so the header pill's
    // left/right edges line up with every section's content below it
    // instead of running wider.
    <div className="sticky top-0 z-50 px-5 pt-3 sm:px-8 sm:pt-4 lg:px-10">
      <header className="mx-auto max-w-7xl 3xl:max-w-[1640px] 4xl:max-w-[1960px] 5xl:max-w-[2240px]">
        <nav className="flex h-[60px] items-center justify-between rounded-[20px] border border-navy-900/[0.06] bg-white/75 pl-4 pr-2 backdrop-blur-lg card-shadow sm:pl-5 sm:pr-3">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <div className="hidden items-center xl:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors ${
                    isActive
                      ? "bg-brand-500/10 text-brand-600"
                      : "text-navy-700 hover:bg-navy-900/[0.05] hover:text-navy-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex">
            <Button href="/contact" size="sm" icon>
              Talk to KodoWorks
            </Button>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-900 hover:bg-navy-900/[0.05] xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out xl:hidden ${
            open ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 rounded-[20px] border border-navy-900/[0.06] bg-white/95 p-3 backdrop-blur-lg card-shadow-lg">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3.5 py-3 text-[15px] font-medium ${
                      isActive ? "bg-brand-500/10 text-brand-600" : "text-navy-800 hover:bg-navy-900/[0.04]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Talk to KodoWorks
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
