import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProfessionalSchedule from "@/components/sections/ProfessionalSchedule";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages } from "@/lib/data";

const content = audiencePages.professionals;

export const metadata: Metadata = {
  title: "For Working Professionals — KodoWorks",
  description: content.subtitle,
};

export default function ForProfessionalsPage() {
  return (
    <main>
      <PageIntro eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <ProfessionalSchedule benefits={content.benefits} />
      <FinalCta />
    </main>
  );
}
