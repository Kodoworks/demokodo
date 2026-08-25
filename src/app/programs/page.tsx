import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProgramExplorer from "@/components/sections/ProgramExplorer";
import PlacementPathway from "@/components/sections/PlacementPathway";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Fellowship Programs — KodoWorks",
  description:
    "Seven engineering-led fellowship programs across AI, Cloud, Data, Cybersecurity and more, each with live mentorship, real project work and a score-based placement pathway.",
};

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
      />
      <ProgramExplorer />
      <PlacementPathway />
      <FinalCta />
    </main>
  );
}
