import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProfessionalsVisual from "@/components/sections/ProfessionalsVisual";
import ApproachStatement from "@/components/sections/ApproachStatement";
import CareerTransitionVisual from "@/components/sections/CareerTransitionVisual";
import ProfessionalSchedule from "@/components/sections/ProfessionalSchedule";
import PainSolutionRows from "@/components/sections/PainSolutionRows";
import ProfessionalReasons from "@/components/sections/ProfessionalReasons";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import {
  audiencePages,
  professionalApproach,
  professionalPainPoints,
  professionalFaqs,
  testimonials,
} from "@/lib/data";

// Two fellows whose quotes read as career transformation, not a first job —
// the framing a working-professional audience is looking for.
const professionalTestimonials = testimonials.filter((t) => ["Sunil Kumar A", "Ajith Kumar C"].includes(t.name));

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
      <Testimonials
        eyebrow="Career Changers"
        title={
          <>
            <span className="text-navy-950">Proof you can move,</span>{" "}
            <span className="text-navy-300">without pausing your career.</span>
          </>
        }
        subtitle="Two fellows who built new technical skills alongside their existing work — see where it took them."
        items={professionalTestimonials}
        layout="zigzag"
      />
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
      <FinalCta
        title={
          <>
            Keep your job. <span className="text-violet-300">Build the skills for your next one.</span>
          </>
        }
        subtitle="Talk to a working engineer about moving into AI, Cloud, Data or Cybersecurity on a schedule that fits your current role."
        accent="violet"
      />
    </main>
  );
}
