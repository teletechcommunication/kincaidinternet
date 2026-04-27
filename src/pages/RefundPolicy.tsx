import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const RefundPolicy = () => (
  <LegalPageLayout
    title="Refund Policy"
    highlightWord="Policy"
    lastUpdated="April 2026"
    disclosure="Kincaid Internet is a third-party service assistance startup. This refund policy applies solely to Kincaid Internet's service fees, not to any charges from internet, cable, or streaming service providers."
  >
    <LegalSection title="Refund Window">
      <p>Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. We review each request on a case-by-case basis.</p>
    </LegalSection>

    <LegalSection title="Eligibility Criteria">
      <p>Refund eligibility depends on several factors, including:</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>The type of assistance service purchased</li>
        <li>Whether the assistance has already been partially or fully delivered</li>
        <li>The time elapsed since the original purchase</li>
      </ul>
    </LegalSection>

    <LegalSection title="How to Request a Refund">
      <p>To request a refund, please contact our support team at support@kincaidinternet.com or call (888) 611-0830 with your service details. We aim to respond to all refund inquiries within 3–5 business days.</p>
    </LegalSection>

    <LegalSection title="Important Notes">
      <p>Refunds apply only to Kincaid Internet's service assistance fees. We have no control over and cannot issue refunds for charges from any internet, cable, or streaming service provider. This refund policy does not constitute an unconditional refund guarantee.</p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>For refund-related inquiries, reach us at support@kincaidinternet.com or call (888) 611-0830.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default RefundPolicy;
