import Image from "next/image";
import { TrendingUp } from "lucide-react";

const fellowAvatars = [1, 2, 3, 4].map((n) => `/images/hero/avatar-fellow-${n}.jpg`);

/**
 * Right-side visual for the For Professionals header — a photo card with
 * a floating avatar + stat chip overlapping its bottom edge (same shape
 * as a typical course-hero photo with a "join N learners / rating" bar),
 * built from real KodoWorks figures instead of a borrowed rating.
 */
export default function ProfessionalsVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] pb-8 lg:mx-0 lg:ml-auto">
      <div className="relative overflow-hidden rounded-[28px] card-shadow-lg">
        <div className="relative h-[300px] w-full sm:h-[360px]">
          <Image
            src="/forprofessionals.jpg"
            alt="Working professionals upskilling with KodoWorks"
            fill
            sizes="440px"
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-navy-950/10" />
        </div>

        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-navy-800">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Upskill Without Pausing
        </span>
      </div>

      {/* Floating avatar + stat chip, overlapping the photo's bottom edge */}
      <div className="absolute -bottom-2 left-1/2 flex w-[92%] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 card-shadow-lg sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {fellowAvatars.map((src, i) => (
              <div
                key={src}
                className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                style={{ zIndex: fellowAvatars.length - i }}
              >
                <Image src={src} alt="" fill sizes="32px" className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-[12.5px] font-bold leading-tight text-navy-950">150+ Hiring Partners</p>
            <p className="text-[10.5px] leading-tight text-navy-400">Actively hiring KodoWorks fellows</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-full bg-brand-500/10 px-2.5 py-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-brand-600" strokeWidth={2.5} />
          <span className="text-[12.5px] font-bold text-brand-600">95%</span>
        </div>
      </div>
    </div>
  );
}
