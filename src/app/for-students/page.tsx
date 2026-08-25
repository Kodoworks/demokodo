import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import StudentAchievements from "@/components/sections/StudentAchievements";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages } from "@/lib/data";

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
      <FinalCta />
    </main>
  );
}
