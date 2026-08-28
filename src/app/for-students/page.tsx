import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import StudentsVisual from "@/components/sections/StudentsVisual";
import FellowshipOverview from "@/components/sections/FellowshipOverview";
import JourneySteps from "@/components/sections/JourneySteps";
import PainSolutionRows from "@/components/sections/PainSolutionRows";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages, studentFaqs, testimonials } from "@/lib/data";

const content = audiencePages.students;

// Two fellows who joined as interns — the closest proof point to a student
// audience still deciding whether to commit.
const studentTestimonials = testimonials.filter((t) => ["Gayathri Anandh", "Dharani"].includes(t.name));

export const metadata: Metadata = {
  title: "For Students — KodoWorks",
  description: content.subtitle,
};

export default function ForStudentsPage() {
  return (
    <main>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        visual={<StudentsVisual />}
      />
      <FellowshipOverview />
      <JourneySteps />
      <PainSolutionRows />
      <Testimonials
        eyebrow="Student Outcomes"
        title={
          <>
            <span className="text-navy-950">Students who started</span>{" "}
            <span className="text-navy-300">exactly where you are.</span>
          </>
        }
        subtitle="Two fellows who joined while still studying — hear what the fellowship actually looked like."
        items={studentTestimonials}
        layout="zigzag"
      />
      <FAQ
        eyebrow="Student FAQ"
        title={
          <>
            <span className="text-navy-950">Questions students</span>{" "}
            <span className="text-navy-300">often ask.</span>
          </>
        }
        subtitle="Still unsure about something? Talk to a mentor and we'll walk you through it."
        items={studentFaqs}
      />
      <FinalCta
        title={
          <>
            Start building your <span className="text-brand-300">experience, before you graduate.</span>
          </>
        }
        subtitle="Talk to a mentor about which fellowship fits your course and timeline — no obligation."
        accent="brand"
      />
    </main>
  );
}
