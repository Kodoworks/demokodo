import type { Metadata } from "next";
import { LayoutGrid, TrendingUp, Users } from "lucide-react";
import MetricStrip from "@/components/sections/MetricStrip";
import StatementBlock from "@/components/sections/StatementBlock";
import ChallengeStatement from "@/components/sections/ChallengeStatement";
import OfferingsGrid from "@/components/sections/OfferingsGrid";
import JourneySteps from "@/components/sections/JourneySteps";
import BenefitsPanel from "@/components/sections/BenefitsPanel";
import SplitChecklist from "@/components/sections/SplitChecklist";
import RecruiterDashboard from "@/components/sections/RecruiterDashboard";
import Testimonials from "@/components/sections/Testimonials";
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
  testimonials,
} from "@/lib/data";

const content = audiencePages.corporates;

// The caliber of candidate a hiring manager would actually meet through
// this pipeline.
const companyTestimonials = testimonials.filter((t) => ["Ajith Kumar C", "Sunil Kumar A"].includes(t.name));
// Drops the "7 Fellowship Programs" stat — that's a student-facing number,
// not one a hiring manager evaluating KodoWorks as a talent source cares about.
const metrics = [
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
      <StatementBlock data={companyStatement} compact />
     
      <ChallengeStatement data={companyHiringChallenge} />
      <OfferingsGrid data={companyOfferings} />
      <JourneySteps data={companyHiringJourney} />
      <BenefitsPanel data={companyPartnerBenefits} />
      <SplitChecklist data={hiringManagerSupport} />
      <RecruiterDashboard benefits={content.benefits} />
      <Testimonials
        eyebrow="Who You'd Be Hiring"
        title={
          <>
            <span className="text-navy-950">The talent</span>{" "}
            <span className="text-navy-300">behind the pipeline.</span>
          </>
        }
        subtitle="Score-gated fellows who went on to real engineering roles — this is the bar candidates clear before you meet them."
        items={companyTestimonials}
        layout="zigzag"
      />
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
      <FinalCta
        title={
          <>
            Ready to see the <span className="text-amber-300">candidates?</span>
          </>
        }
        subtitle="Share your hiring requirements and we'll connect you with pre-vetted, project-ready talent."
        primaryCta={{ label: "Hire Talent", href: "/contact" }}
        accent="amber"
      />
    </main>
  );
}
