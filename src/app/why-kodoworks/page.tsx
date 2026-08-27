import type { Metadata } from "next";
import { Grid2x2, LayoutGrid, TrendingUp, Users } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import MetricStrip from "@/components/sections/MetricStrip";
import WhyKodoworksVisual from "@/components/sections/WhyKodoworksVisual";
import ApproachStatement from "@/components/sections/ApproachStatement";
import ApproachVisual from "@/components/sections/ApproachVisual";
import CareerGrowthGains from "@/components/sections/CareerGrowthGains";
import DifferentiatorLedger from "@/components/sections/DifferentiatorLedger";
import VersusComparison from "@/components/sections/VersusComparison";
import DurationCompareChart from "@/components/sections/DurationCompareChart";
import PlacementPathway from "@/components/sections/PlacementPathway";
import FinalCta from "@/components/sections/FinalCta";
import { coreMetrics } from "@/lib/data";

const metrics = [
  { icon: Grid2x2, ...coreMetrics[0] },
  { icon: Users, ...coreMetrics[1] },
  { icon: LayoutGrid, ...coreMetrics[2] },
  { icon: TrendingUp, ...coreMetrics[3] },
];

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
        visual={<WhyKodoworksVisual />}
      />
      <MetricStrip metrics={metrics} />
      <ApproachStatement visual={<ApproachVisual />} align="center" />
      <CareerGrowthGains />
      <DifferentiatorLedger />
      <VersusComparison />
      <DurationCompareChart />
      <PlacementPathway />
      <FinalCta />
    </main>
  );
}
