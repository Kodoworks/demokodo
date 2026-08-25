import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import StudentAchievements from "@/components/sections/StudentAchievements";
import JourneySteps from "@/components/sections/JourneySteps";
import PainSolutionRows from "@/components/sections/PainSolutionRows";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages, studentFaqs } from "@/lib/data";

const content = audiencePages.students;

export const metadata: Metadata = {
  title: "For Students — KodoWorks",
  description: content.subtitle,
};

export default function ForStudentsPage() {
  return (
    <main>
      <PageIntro eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <StudentAchievements benefits={content.benefits} />
      <JourneySteps />
      <PainSolutionRows />
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
      <FinalCta />
    </main>
  );
}
