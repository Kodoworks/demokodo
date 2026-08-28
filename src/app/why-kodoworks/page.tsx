import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import WhyKodoworksVisual from "@/components/sections/WhyKodoworksVisual";
import CareerGrowthGains from "@/components/sections/CareerGrowthGains";
import StatementBlock from "@/components/sections/StatementBlock";
import VersusComparison from "@/components/sections/VersusComparison";
import DurationCompareChart from "@/components/sections/DurationCompareChart";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { whyKodoworksFaqs, whyKodoworksStatement, testimonials } from "@/lib/data";

// Pairs a full-time-track and a career-switch quote — the two comparisons
// this page itself makes (Versus, duration).
const whyKodoworksTestimonials = testimonials.filter((t) => ["Dineshraj N", "Sunil Kumar A"].includes(t.name));

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
      <CareerGrowthGains />
      <StatementBlock data={whyKodoworksStatement} compact />
      <VersusComparison />
      <DurationCompareChart />
      <Testimonials
        eyebrow="The Difference, in Practice"
        title={
          <>
            <span className="text-navy-950">What engineering-led</span>{" "}
            <span className="text-navy-300">training actually produces.</span>
          </>
        }
        subtitle="The comparisons above are ours to make. These outcomes are fellows' own words."
        items={whyKodoworksTestimonials}
        layout="zigzag"
      />
      <FAQ
        eyebrow="Still Comparing?"
        title={
          <>
            <span className="text-navy-950">The difference,</span> <span className="text-navy-300">answered.</span>
          </>
        }
        subtitle="Still weighing KodoWorks against another option? Talk to a mentor and we'll help you compare."
        items={whyKodoworksFaqs}
      />
      <FinalCta
        title={
          <>
            See the difference <span className="text-violet-300">for yourself.</span>
          </>
        }
        subtitle="Talk to a working engineer and compare KodoWorks against whatever else you're considering."
        accent="violet"
      />
    </main>
  );
}
