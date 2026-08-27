import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import CompanyProfile from "@/components/sections/CompanyProfile";
import DifferentiatorLedger from "@/components/sections/DifferentiatorLedger";
import Mentors from "@/components/sections/Mentors";
import PlacementPathway from "@/components/sections/PlacementPathway";
import FinalCta from "@/components/sections/FinalCta";
import PageIntroAbout from "@/components/sections/PageIntroAbout";

export const metadata: Metadata = {
  title: "About KodoWorks",
  description:
    "KodoWorks is a technology-driven learning and workforce transformation company bridging the gap between academia and industry with practical, project-based training.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntroAbout />
      <CompanyProfile />
      <DifferentiatorLedger />
      <Mentors />
      <PlacementPathway />
      <FinalCta />
    </main>
  );
}
