import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import CollegesVisual from "@/components/sections/CollegesVisual";
import StatementBlock from "@/components/sections/StatementBlock";
import CertificateVisual from "@/components/sections/CertificateVisual";
import ChallengeStatement from "@/components/sections/ChallengeStatement";
import OfferingsGrid from "@/components/sections/OfferingsGrid";
import SplitChecklist from "@/components/sections/SplitChecklist";
import NumberedReasons from "@/components/sections/NumberedReasons";
import CollegePartnership from "@/components/sections/CollegePartnership";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { audiencePages, collegeFaqs, testimonials } from "@/lib/data";

const content = audiencePages.colleges;

// The outcome a placement cell cares about most: real fellows now in real
// mentored/AI-domain roles.
const collegeTestimonials = testimonials.filter((t) => ["Dineshraj N", "Gayathri Anandh"].includes(t.name));

export const metadata: Metadata = {
  title: "For Colleges & Institutions — KodoWorks",
  description: content.subtitle,
};

export default function ForCollegesPage() {
  return (
    <main>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        visual={<CollegesVisual />}
      />
      <StatementBlock visual={<CertificateVisual />} imageLeft />
      <ChallengeStatement />
      <OfferingsGrid />
      <SplitChecklist />
      <NumberedReasons />
      <CollegePartnership benefits={content.benefits} />
      <Testimonials
        eyebrow="Where Our Fellows Land"
        title={
          <>
            <span className="text-navy-950">The outcome</span>{" "}
            <span className="text-navy-300">a partnership like yours produces.</span>
          </>
        }
        subtitle="Real students, from real campuses, now working in the roles your placement cell is measured on."
        items={collegeTestimonials}
        layout="zigzag"
      />
      <FAQ
        eyebrow="Partnership FAQ"
        title={
          <>
            <span className="text-navy-950">Partnership</span> <span className="text-navy-300">FAQ.</span>
          </>
        }
        subtitle="Still have questions about a partnership? Talk to our team directly."
        items={collegeFaqs}
      />
      <FinalCta
        title={
          <>
            Bring this outcome <span className="text-brand-300">to your campus.</span>
          </>
        }
        subtitle="Talk to our partnerships team about campus training, structured internships and student counselling for your institution."
        accent="brand"
      />
    </main>
  );
}
