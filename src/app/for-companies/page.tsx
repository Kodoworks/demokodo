import type { Metadata } from "next";
import { Grid2x2, LayoutGrid, TrendingUp, Users } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import MetricStrip from "@/components/sections/MetricStrip";
import StatementBlock from "@/components/sections/StatementBlock";
import ChallengeStatement from "@/components/sections/ChallengeStatement";
import OfferingsGrid from "@/components/sections/OfferingsGrid";
import JourneySteps from "@/components/sections/JourneySteps";
import BenefitsPanel from "@/components/sections/BenefitsPanel";
import SplitChecklist from "@/components/sections/SplitChecklist";
import RecruiterDashboard from "@/components/sections/RecruiterDashboard";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import {
  audiencePages,
  companyStatement,
  companyHiringChallenge,
  companyOfferings,
  companyHiringJourney,
  companyPartnerBenefits,
  hiringManagerSupport,
  companyFaqs,
  coreMetrics,
} from "@/lib/data";

const content = audiencePages.corporates;
const metrics = [
  { icon: Grid2x2, ...coreMetrics[0] },
  { icon: Users, ...coreMetrics[1] },
  { icon: LayoutGrid, ...coreMetrics[2] },
  { icon: TrendingUp, ...coreMetrics[3] },
];

export const metadata: Metadata = {
  title: "For Companies & Recruiters — KodoWorks",
  description: content.subtitle,
};

export default function ForCompaniesPage() {
  return (
    <main>
    
     
      <StatementBlock data={companyStatement} />
       <MetricStrip metrics={metrics} />
      <ChallengeStatement data={companyHiringChallenge} />
      <OfferingsGrid data={companyOfferings} />
      <JourneySteps data={companyHiringJourney} />
      <BenefitsPanel data={companyPartnerBenefits} />
      <SplitChecklist data={hiringManagerSupport} />
      <RecruiterDashboard benefits={content.benefits} />
      <FAQ
        eyebrow="Company Partnership FAQ"
        title={
          <>
            <span className="text-navy-950">Company Partnership</span> <span className="text-navy-300">FAQ.</span>
          </>
        }
        subtitle="Still have questions about a partnership? Talk to our team directly."
        items={companyFaqs}
      />
      <FinalCta />
    </main>
  );
}
