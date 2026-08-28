import Image from "next/image";
import { Users2 } from "lucide-react";
import { mentorProfiles } from "@/lib/data";

const featured = mentorProfiles.slice(0, 4);
const domainCount = new Set(mentorProfiles.map((m) => m.domain)).size;

/**
 * Right-side visual for the "Our Approach" section — a mentor-forward card:
 * real faces (an overlapping avatar stack), not a cropped photo banner, so
 * it reads as "these are the engineers" rather than a generic office shot.
 * Sized to hold its own next to a two-paragraph text column instead of
 * floating as a small, disconnected poster.
 */
export default function ApproachVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">
      <div className="gradient-black relative overflow-hidden rounded-[24px] p-6 shadow-[0_20px_40px_-16px_rgba(20,21,26,0.5)] sm:p-7">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/70">
            <Users2 className="h-3 w-3 text-brand-400" strokeWidth={2.25} />
            Meet the Mentors
          </span>

          <div className="mt-6 flex items-center">
            {featured.map((m, i) => (
              <div
                key={m.name}
                className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-navy-900 shadow-lg first:ml-0"
                style={{ marginLeft: i === 0 ? 0 : "-14px", zIndex: featured.length - i }}
              >
                <Image src={m.photo} alt={m.name} fill sizes="56px" className="object-cover" />
              </div>
            ))}
            <span className="ml-3.5 text-[12px] leading-snug text-white/55">
              +{mentorProfiles.length - featured.length} more
              <br />
              engineers
            </span>
          </div>

          <p className="font-display mt-6 text-[20px] font-semibold leading-snug text-white">
            Practising engineers, not trainers.
          </p>
          <p className="mt-2.5 text-[13px] leading-relaxed text-white/65">
            {mentorProfiles.length} working engineers across {domainCount} technology domains — fellows learn from
            people who ship production code, not full-time instructors.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
            <div>
              <p className="font-display text-[24px] font-bold leading-none text-white">1:8</p>
              <p className="mt-1.5 text-[11px] text-white/50">Mentor Ratio</p>
            </div>
            <div>
              <p className="font-display text-[24px] font-bold leading-none text-white">{mentorProfiles.length}</p>
              <p className="mt-1.5 text-[11px] text-white/50">Working Engineers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
