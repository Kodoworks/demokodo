"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { contactInfo } from "@/lib/data";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37s-1.03 1-1.03 2.45 1.06 2.85 1.2 3.05c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.68 0-3.24-.47-4.57-1.29l-.33-.19-3.01.79.8-2.93-.21-.34A8.1 8.1 0 0 1 3.9 12c0-4.48 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.48-3.64 8.1-8.11 8.1Z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappNumber = contactInfo.phones[0].replace(/[^\d]/g, "");

  return (
    <div
      className="fixed z-40 flex flex-col items-center gap-3"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
        right: "calc(1.25rem + env(safe-area-inset-right))",
      }}
    >
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-navy-950 text-white shadow-lg transition-all duration-300 hover:bg-navy-800 sm:h-11 sm:w-11 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" strokeWidth={2.25} />
      </button>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KodoWorks on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:h-12 sm:w-12"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
