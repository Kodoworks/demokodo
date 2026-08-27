import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProfessionalsVisual from "@/components/sections/ProfessionalsVisual";
import ApproachStatement from "@/components/sections/ApproachStatement";
import CareerTransitionVisual from "@/components/sections/CareerTransitionVisual";
import ProfessionalSchedule from "@/components/sections/ProfessionalSchedule";
import PainSolutionRows from "@/components/sections/PainSolutionRows";
import ProfessionalReasons from "@/components/sections/ProfessionalReasons";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages, professionalApproach, professionalPainPoints, professionalFaqs } from "@/lib/data";

const content = audiencePages.professionals;

export const metadata: Metadata = {
  title: "For Working Professionals — KodoWorks",
  description: content.subtitle,
};

export default function ForProfessionalsPage() {
  return (
    <main>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        visual={<ProfessionalsVisual />}
      />
      <ApproachStatement
        data={professionalApproach}
        visual={<CareerTransitionVisual />}
        highlights={[
          "No resignation required — keep your day job throughout",
          "Live, evening and weekend sessions built around a working schedule",
          "Same 1:8 mentor ratio as full-time fellows",
          "Score-based path into a network of 150+ hiring partners",
        ]}
      />
      <ProfessionalSchedule benefits={content.benefits} />
      <PainSolutionRows data={professionalPainPoints} />
      <ProfessionalReasons />
      <FAQ
        eyebrow="Professional FAQ"
        title={
          <>
            <span className="text-navy-950">Frequently Asked</span>{" "}
            <span className="text-navy-300">Questions.</span>
          </>
        }
        subtitle="Still unsure about something? Talk to a mentor and we'll walk you through it."
        items={professionalFaqs}
      />
      <FinalCta />
    </main>
  );
}
