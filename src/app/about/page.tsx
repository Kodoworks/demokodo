import type { Metadata } from "next";
import CompanyProfile from "@/components/sections/CompanyProfile";
import DifferentiatorLedger from "@/components/sections/DifferentiatorLedger";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import PageIntroAbout from "@/components/sections/PageIntroAbout";
import { aboutFaqs, testimonials } from "@/lib/data";

// A mixed pair — not tied to one program or audience — for a page that's
// making the case for the company as a whole.
const aboutTestimonials = testimonials.filter((t) => ["Ajith Kumar C", "Dharani"].includes(t.name));

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
      <Testimonials
        eyebrow="In Their Words"
        title={
          <>
            <span className="text-navy-950">What working with us</span>{" "}
            <span className="text-navy-300">actually looks like.</span>
          </>
        }
        subtitle="Not our words — fellows who've experienced KodoWorks first-hand."
        items={aboutTestimonials}
        layout="zigzag"
      />
      <FAQ
        eyebrow="About KodoWorks"
        title={
          <>
            <span className="text-navy-950">The company,</span> <span className="text-navy-300">not just the pitch.</span>
          </>
        }
        subtitle="Still have questions about who we are or how we work? Talk to us directly."
        items={aboutFaqs}
      />
      <FinalCta
        title={
          <>
            Still deciding if we&apos;re <span className="text-violet-300">the right fit?</span>
          </>
        }
        subtitle="Talk to a working engineer — no sales pitch, just an honest read on whether KodoWorks matches what you're looking for."
        accent="violet"
      />
    </main>
  );
}
