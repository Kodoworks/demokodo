import Image from "next/image";
import { Cpu } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";

export default function PageIntroAbout() {
  return (
    <PageIntro
      eyebrow="About KodoWorks"
      title="Where academia meets industry."
      subtitle="KodoWorks is a technology-driven learning and workforce transformation company — not a training brand — built to prepare students, graduates and working professionals for real careers in today's digital economy."
      visual={
        <div className="relative mx-auto max-w-md lg:max-w-none">
          {/* offset backdrop panel */}
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[28px] bg-brand-500/10 sm:-right-6 sm:-top-6" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-navy-900/[0.08] bg-navy-100 card-shadow-lg">
            <Image
              src="/clgimage.webp"
              alt="KodoWorks team collaborating in the office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
            />
          </div>

          {/* floating tech badge */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-navy-900/[0.07] bg-white px-5 py-4 card-shadow-lg">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950">
              <Cpu className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold leading-none text-navy-950">
                Technology-First
              </p>
              <p className="mt-1 text-[11.5px] text-navy-400">Not just training</p>
            </div>
          </div>
        </div>
      }
    />
  );
}