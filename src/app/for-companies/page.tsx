import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import RecruiterDashboard from "@/components/sections/RecruiterDashboard";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages } from "@/lib/data";

const content = audiencePages.corporates;

export const metadata: Metadata = {
  title: "For Companies & Recruiters — KodoWorks",
  description: content.subtitle,
};

export default function ForCompaniesPage() {
  return (
    <main>
      <PageIntro eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <RecruiterDashboard benefits={content.benefits} />
      <FinalCta />
    </main>
  );
}
