import Image from "next/image";
import { Users2 } from "lucide-react";
import { mentorProfiles } from "@/lib/data";

/**
 * Right-side visual for the "Our Approach" section — a single dark poster
 * card (photo up top, caption below) in the same treatment as the
 * homepage Hero poster, rather than a grid of separate photo tiles.
 * Self-contained (no chip floating outside its bounds) so it centers
 * cleanly against the paragraph column beside it.
 */
export default function ApproachVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:ml-auto">
      <div className="gradient-black relative overflow-hidden rounded-[22px] shadow-[0_20px_40px_-16px_rgba(20,21,26,0.5)]">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />

        <div className="relative h-[130px] w-full overflow-hidden">
          <Image
            src="/images/hero/hero-poster-fellows.jpg"
            alt="Fellows working together at KodoWorks"
            fill
            sizes="300px"
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#14151a]" />

          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-800">
            <Users2 className="h-3 w-3 text-brand-500" strokeWidth={2.25} />
            Meet the Mentors
          </span>
        </div>

        <div className="relative -mt-6 overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] p-4 mx-4 mb-4">
          <p className="font-display text-[15px] font-semibold leading-snug text-white">
            Practising engineers, not trainers.
          </p>
          <p className="mt-2 text-[11.5px] leading-relaxed text-white/65">
            Fellows work directly with engineers who ship production code.
          </p>

          <div className="mt-3.5 flex items-center gap-3 border-t border-white/15 pt-3 text-[10.5px] text-white/55">
            <span>1:8 Ratio</span>
            <span>{mentorProfiles.length} Engineers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
