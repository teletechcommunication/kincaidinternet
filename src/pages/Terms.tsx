import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Terms = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    highlightWord="Conditions"
    lastUpdated="April 2026"
    disclosure="Kincaid Internet is a third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider."
  >
    <LegalSection title="Nature of Services">
      <p>Kincaid Internet provides third-party informational guidance and assistance related to internet, broadband, Wi-Fi, and cable TV services. We do not sell, provision, or directly provide any internet, cable, or streaming services. Our assistance is general in nature and should not be considered as official support from any service provider.</p>
    </LegalSection>

    <LegalSection title="Service Fees">
      <p>Our service fees are separate from and different from any charges from your internet, cable, or streaming service provider. By using our services, you acknowledge that our fees cover the guidance and assistance provided by Kincaid Internet only.</p>
    </LegalSection>

    <LegalSection title="No Provider Affiliation">
      <p>Kincaid Internet is not affiliated with, authorized by, endorsed by, or sponsored by any internet service provider, cable TV company, streaming service, or telecommunications provider. Any references to third-party providers or their trademarks are used solely for informational purposes.</p>
    </LegalSection>

    <LegalSection title="Limitation of Liability">
      <p>Kincaid Internet provides informational guidance only. We do not guarantee specific outcomes, technical fixes, or service improvements. Users are responsible for their own decisions regarding service providers and plans.</p>
    </LegalSection>

    <LegalSection title="User Responsibilities">
      <p>Users agree to provide accurate information when requesting assistance. Users understand that Kincaid Internet's guidance is informational in nature.</p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>For questions about these Terms, contact us at support@kincaidinternet.com or call (888) 611-0830.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Terms;
