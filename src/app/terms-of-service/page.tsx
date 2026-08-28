import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection, LegalList } from "@/components/ui/LegalLayout";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service — KodoWorks",
  description: "The terms that govern your use of the KodoWorks website and enrolment in our fellowship programs.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="August 28, 2026"
      intro="These terms govern your use of kodoworks.in and, once you enrol, your participation in a KodoWorks fellowship program. By using this site or enrolling in a program, you agree to them."
    >
      <LegalSection title="1. About KodoWorks">
        <p>
          KodoWorks is a technology company, not a training-only academy — our fellowship programs are built and
          taught by practising engineers. We run engineering-led fellowships across AI &amp; Machine Learning, Cloud
          Engineering &amp; DevOps, Full-Stack Development, Cybersecurity, Data Intelligence &amp; Engineering,
          Generative AI and ServiceNow, and we partner with colleges and companies on training and hiring.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>
          Our programs are open to students, graduates and working professionals who meet the requirements of the
          specific fellowship they&apos;re applying to, as discussed with our team during enrolment. Where a fellow
          is under 18, enrolment requires the involvement of a parent or guardian.
        </p>
      </LegalSection>

      <LegalSection title="3. Use of This Website">
        <p>You agree to use this website only for lawful purposes — to learn about our programs, submit a genuine enquiry, and engage with our team. You agree not to:</p>
        <LegalList
          items={[
            "Submit false or misleading information through our contact or enquiry forms.",
            "Attempt to access, probe or disrupt the site or its underlying systems.",
            "Use any content on this site to build a competing product or service.",
            "Scrape or harvest data from this site for unrelated commercial use.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Enrolment and Program Fees">
        <p>
          Enrolling in a fellowship is a separate step from browsing this website — it happens after you talk to
          our team, who&apos;ll walk you through the program structure, batch dates, and fees for the track you&apos;re
          interested in. Fees vary by program and duration, and any payment terms, schedules or cancellation
          conditions will be confirmed with you directly before you enrol, not assumed from this website.
        </p>
      </LegalSection>

      <LegalSection title="5. Certificates and Credentials">
        <p>
          Fellows who successfully complete a program receive a KodoWorks certificate carrying a verifiable,
          unique credential ID. This certificate reflects completion of our program and the standard you met within
          it — it is issued by KodoWorks as a technology company, not an accredited academic institution, and
          isn&apos;t a substitute for a university degree.
        </p>
      </LegalSection>

      <LegalSection title="6. Placement Support Is Not a Guarantee">
        <p>
          Our score-based placement pathway, mentor network and 150+ hiring partners are real, active support we
          provide toward your next opportunity — interview preparation, referrals, and access to our hiring
          network. They are not, and should not be read as, a guarantee of a job offer, a specific salary, or a
          placement timeline. Outcomes depend on your own performance, the readiness score you achieve, and hiring
          conditions outside our control.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          The content on this website — text, design, graphics, logos and course materials shared with fellows —
          belongs to KodoWorks or is used with permission. You may view and use it for your own learning; you may
          not republish, resell or distribute it without our written consent.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-Party Links and Services">
        <p>
          This site links to or embeds third-party services — including WhatsApp and Google Maps — that operate
          under their own terms. We aren&apos;t responsible for the content, availability or practices of services
          we don&apos;t operate ourselves.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimers and Limitation of Liability">
        <p>
          This website and the information on it are provided &quot;as is.&quot; We work to keep program details,
          salary ranges and outcome statistics accurate and current, but we don&apos;t guarantee they&apos;re free of
          error at every moment. To the extent permitted by law, KodoWorks isn&apos;t liable for indirect,
          incidental or consequential losses arising from your use of this website.
        </p>
      </LegalSection>

      <LegalSection title="10. Termination">
        <p>
          We may suspend or end a fellow&apos;s participation in a program for conduct that breaches these terms or
          the program&apos;s own code of conduct, communicated separately at enrolment. You&apos;re free to stop using
          this website at any time.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These terms are governed by the laws of India. Any dispute arising from them falls under the exclusive
          jurisdiction of the courts in Coimbatore, Tamil Nadu.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to These Terms">
        <p>
          We may update these terms as our programs and this website evolve. We&apos;ll update the &quot;Last
          updated&quot; date above whenever we do — continued use of the site after a change means you accept the
          updated terms.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Us">
        <p>Questions about these terms? Reach us at:</p>
        <div className="rounded-2xl border border-navy-900/[0.07] bg-navy-50 p-5">
          <p className="font-semibold text-navy-900">KodoWorks</p>
          <p className="mt-1">{contactInfo.address}</p>
          <p className="mt-1">{contactInfo.phones.join(" / ")}</p>
          <p className="mt-1">{contactInfo.email}</p>
        </div>
        <p>
          Or use our{" "}
          <Link href="/contact" className="font-medium text-brand-600 hover:underline">
            contact page
          </Link>{" "}
          and we&apos;ll route your message to the right team.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
