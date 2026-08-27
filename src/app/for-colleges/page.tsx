import type { Metadata } from "next";
import { Grid2x2, LayoutGrid, TrendingUp, Users } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import CollegesVisual from "@/components/sections/CollegesVisual";
import MetricStrip from "@/components/sections/MetricStrip";
import StatementBlock from "@/components/sections/StatementBlock";
import CertificateVisual from "@/components/sections/CertificateVisual";
import ChallengeStatement from "@/components/sections/ChallengeStatement";
import OfferingsGrid from "@/components/sections/OfferingsGrid";
import BenefitsPanel from "@/components/sections/BenefitsPanel";
import SplitChecklist from "@/components/sections/SplitChecklist";
import NumberedReasons from "@/components/sections/NumberedReasons";
import CollegePartnership from "@/components/sections/CollegePartnership";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages, collegeFaqs, coreMetrics } from "@/lib/data";

const content = audiencePages.colleges;
const metrics = [
  { icon: Grid2x2, ...coreMetrics[0] },
  { icon: Users, ...coreMetrics[1] },
  { icon: LayoutGrid, ...coreMetrics[2] },
  { icon: TrendingUp, ...coreMetrics[3] },
];

export const metadata: Metadata = {
  title: "For Colleges & Institutions — KodoWorks",
  description: content.subtitle,
};

export default function ForCollegesPage() {
  return (
    <main>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        visual={<CollegesVisual />}
      />
      <MetricStrip metrics={metrics} />
      <StatementBlock visual={<CertificateVisual />} />
      <ChallengeStatement />
      <OfferingsGrid />
     
      <SplitChecklist />
      <NumberedReasons />
      <CollegePartnership benefits={content.benefits} />
      <FAQ
        eyebrow="Partnership FAQ"
        title={
          <>
            <span className="text-navy-950">Partnership</span> <span className="text-navy-300">FAQ.</span>
          </>
        }
        subtitle="Still have questions about a partnership? Talk to our team directly."
        items={collegeFaqs}
      />
      <FinalCta />
    </main>
  );
}
