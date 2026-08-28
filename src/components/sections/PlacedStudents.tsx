"use client";

/**
 * Drop the image at /public/studentsplacement/alumni-working.png
 * (the file I generated for you is named alumni-working.png —
 * rename or update the src below to match whatever you save it as).
 */
export default function PlacedStudents() {
  return (
    <section className="w-full bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <img
          src="/studentsplacement/alumni-working.png"
          alt="Alumni are working at IBM, ExpertsPro, Deloitte, Lumen, Bb, VXI, Orion, EY, DMAIC Academy & Consultancy, Western Ghats Solutions and Services, Zytus, and Solar Sys"
          className="h-auto w-full rounded-none sm:rounded-[28px]"
        />
      </div>
    </section>
  );
}
