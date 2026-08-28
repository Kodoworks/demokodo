import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProgramExplorer from "@/components/sections/ProgramExplorer";
import SalaryRangeChart from "@/components/sections/SalaryRangeChart";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { programsFaqs, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fellowship Programs — KodoWorks",
  description:
    "Seven engineering-led fellowship programs across AI, Cloud, Data, Cybersecurity and more, each with live mentorship, real project work and a score-based placement pathway.",
};

// Two fellows from two different tracks — pairs naturally with the "seven
// programs, one format" framing this page already makes.
const programTestimonials = testimonials.filter((t) =>
  ["Dineshraj N", "Suriya Prabakaran"].includes(t.name)
);

export default function ProgramsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Fellowship Programs"
        title={
          <>
            <span className="text-navy-950">Seven programs.</span>{" "}
            <span className="text-navy-300">One outcome-driven format.</span>
          </>
        }
        subtitle="Live mentorship, real project work and a clear placement pathway, across the technology domains hiring the most right now."
        note="Every track runs through the same structure regardless of domain — build on live projects, earn a transparent readiness score, then move through interview prep into our network of 150+ hiring partners. The technology changes; the path to a job doesn't."
      />
      <ProgramExplorer />
      <SalaryRangeChart />
      <Testimonials
        eyebrow="Fellow Outcomes"
        title={
          <>
            <span className="text-navy-950">Different programs,</span>{" "}
            <span className="text-navy-300">the same result.</span>
          </>
        }
        subtitle="Two fellows, two different tracks — hear how the same live-project format worked for each of them."
        items={programTestimonials}
        layout="zigzag"
      />
      <FAQ
        eyebrow="Programs FAQ"
        title={
          <>
            <span className="text-navy-950">Choosing a program,</span>{" "}
            <span className="text-navy-300">answered.</span>
          </>
        }
        subtitle="Still deciding between tracks? Talk to a mentor and we'll help you choose."
        items={programsFaqs}
      />
      <FinalCta
        title={
          <>
            Pick a program. <span className="text-amber-300">We&apos;ll build the plan around it.</span>
          </>
        }
        subtitle="Talk to a working engineer about which of the seven programs fits your background, and we'll map the batch dates and next steps."
        secondaryCta={{ label: "See why KodoWorks works", href: "/why-kodoworks" }}
        accent="amber"
      />
    </main>
  );
}
