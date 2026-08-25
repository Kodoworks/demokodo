import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import CollegePartnership from "@/components/sections/CollegePartnership";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages } from "@/lib/data";

const content = audiencePages.colleges;

export const metadata: Metadata = {
  title: "For Colleges & Institutions — KodoWorks",
  description: content.subtitle,
};

export default function ForCollegesPage() {
  return (
    <main>
      <PageIntro eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <CollegePartnership benefits={content.benefits} />
      <FinalCta />
    </main>
  );
}
