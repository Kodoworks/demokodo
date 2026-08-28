import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection, LegalList } from "@/components/ui/LegalLayout";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — KodoWorks",
  description: "How KodoWorks collects, uses and protects your information across our website and fellowship programs.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="August 28, 2026"
      intro="This policy explains what information KodoWorks collects when you use this website or enquire about a fellowship program, and how we use, share and protect it."
    >
      <LegalSection title="1. Who We Are">
        <p>
          KodoWorks (&quot;KodoWorks&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a technology company
          based in Coimbatore, India, offering engineering-led fellowship programs across AI &amp; Machine
          Learning, Cloud Engineering &amp; DevOps, Full-Stack Development, Cybersecurity, Data Intelligence &amp;
          Engineering, Generative AI, and ServiceNow, along with partnership programs for colleges and companies.
        </p>
        <p>This policy applies to kodoworks.in and every page and form on it.</p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We collect information you choose to give us — we don&apos;t collect more than a form asks for. Depending on which form you use, that can include:</p>
        <LegalList
          items={[
            "Contact details — full name, email address, phone number, and city.",
            "Enrolment context — the program or area of interest you select, and any message you send us.",
            "Institutional or company details — for college and corporate enquiries: institution or company name, designation or job title, and the reason for reaching out.",
            "Career details — for job-seeker enquiries: area of interest and a link to your resume, portfolio, LinkedIn or GitHub profile, if you choose to share one.",
          ]}
        />
        <p>
          We also automatically receive standard technical information when you visit the site — such as browser
          type, device type and pages viewed — through normal web server and hosting logs. We don&apos;t use this to
          identify you personally.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information you share to:</p>
        <LegalList
          items={[
            "Respond to your enquiry and route it to the right team (fellowship programs, college partnerships, corporate hiring, or careers).",
            "Match you with the fellowship, partnership or opportunity that fits what you asked about.",
            "Share relevant updates about programs, batch dates or partnership opportunities you've expressed interest in.",
            "Improve this website and how we communicate with prospective fellows, institutions and companies.",
          ]}
        />
        <p>We do not use your information for automated decision-making that produces legal or similarly significant effects on you.</p>
      </LegalSection>

      <LegalSection title="4. How We Share Your Information">
        <p>We do not sell your personal information. We share it only in these situations:</p>
        <LegalList
          items={[
            <>
              <strong className="font-semibold text-navy-800">With your consent</strong> — for example, sharing your
              profile with a hiring partner once you&apos;ve engaged with our placement pathway.
            </>,
            <>
              <strong className="font-semibold text-navy-800">Service providers</strong> — vendors who help us run
              this site and communicate with you (hosting, email, and messaging tools such as WhatsApp Business,
              which you reach directly when you use the WhatsApp button on this site).
            </>,
            <>
              <strong className="font-semibold text-navy-800">Legal reasons</strong> — if required by law, regulation
              or a valid legal process.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Third-Party Services on This Site">
        <p>
          A few pages embed or link to third-party services with their own privacy practices, including WhatsApp
          (for the floating chat button) and Google Maps (for the location embed on our Contact page). We encourage
          you to review those providers&apos; own privacy policies before using those features.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies and Similar Technologies">
        <p>
          This site may use cookies or similar local storage to keep it running smoothly — for example, remembering
          your preferences during a visit. We don&apos;t use cookies to build advertising profiles.
        </p>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>
          We keep enquiry information for as long as it&apos;s useful for the purpose you shared it — generally,
          for the duration of your engagement with us (as a prospective or current fellow, partner institution or
          hiring company) and a reasonable period after, for record-keeping. You can ask us to delete it sooner at
          any time.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>
          We take reasonable technical and organisational measures to protect the information you share with us
          against unauthorised access, loss or misuse. No method of transmission over the internet is completely
          secure, and we can&apos;t guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="9. Your Rights and Choices">
        <p>You can ask us, at any time, to:</p>
        <LegalList
          items={[
            "Tell you what personal information we hold about you.",
            "Correct information that's inaccurate or out of date.",
            "Delete your information from our records.",
            "Stop contacting you about programs or partnerships.",
          ]}
        />
        <p>
          To do any of this, email us at{" "}
          <a href={`mailto:${contactInfo.email}`} className="font-medium text-brand-600 hover:underline">
            {contactInfo.email}
          </a>{" "}
          and we&apos;ll act on it promptly.
        </p>
      </LegalSection>

      <LegalSection title="10. Children's Privacy">
        <p>
          Some of our programs are designed for students who may be under 18. Where that applies, we expect
          enrolment to involve a parent or guardian, consistent with applicable law. We do not knowingly collect
          personal information from young children outside that context.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>This policy is governed by the laws of India. Any dispute relating to it falls under the jurisdiction of the courts in Coimbatore, Tamil Nadu.</p>
      </LegalSection>

      <LegalSection title="12. Changes to This Policy">
        <p>
          We may update this policy as our programs and this website evolve. We&apos;ll update the &quot;Last
          updated&quot; date above whenever we do — please check back occasionally.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Us">
        <p>Questions about this policy or your information? Reach us at:</p>
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
