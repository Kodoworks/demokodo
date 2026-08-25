import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ApproachStatement from "@/components/sections/ApproachStatement";
import CareerGrowthGains from "@/components/sections/CareerGrowthGains";
import DifferentiatorLedger from "@/components/sections/DifferentiatorLedger";
import VersusComparison from "@/components/sections/VersusComparison";
import PlacementPathway from "@/components/sections/PlacementPathway";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Why KodoWorks — Engineering-Led, Not Classroom-Led",
  description:
    "KodoWorks is a practising technology company, not a training brand. See how our live client-modeled projects, working-engineer mentors and score-based placement pathway compare to typical training.",
};

export default function WhyKodoWorksPage() {
  return (
    <main>
      <PageIntro
        eyebrow="The KodoWorks Difference"
        title={
          <>
            <span className="text-navy-950">Why teams choose</span>{" "}
            <span className="text-navy-300">KodoWorks.</span>
          </>
        }
        subtitle="Most training providers teach technology. KodoWorks practices it, and that difference shows up in every project, every mentor and every hiring conversation."
      />
      <ApproachStatement />
      <CareerGrowthGains />
      <DifferentiatorLedger />
      <VersusComparison />
      <PlacementPathway />
      <FinalCta />
    </main>
  );
}
