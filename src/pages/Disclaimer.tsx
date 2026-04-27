import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Disclaimer = () => (
  <LegalPageLayout
    title="Disclaimer"
    highlightWord="Disclaimer"
    lastUpdated="April 2026"
    disclosure="Kincaid Internet is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only."
  >
    <LegalSection title="Independent Service">
      <p>Kincaid Internet operates as a startup launched in 2026. We provide general guidance and informational support to help users understand their connectivity service options. We do not sell, provision, or directly provide any internet, cable, or streaming services.</p>
    </LegalSection>

    <LegalSection title="No Provider Representation">
      <p>Our team does not represent, act on behalf of, or serve as agents for any internet service provider, cable TV company, streaming service, or telecommunications provider. Any assistance we provide is informational guidance only.</p>
    </LegalSection>

    <LegalSection title="Trademarks">
      <p>All trademarks, service marks, trade names, and logos referenced on this website belong to their respective owners. Their use on this website is for informational purposes only and does not imply endorsement, sponsorship, or affiliation.</p>
    </LegalSection>

    <LegalSection title="Service Fee Transparency">
      <p>Kincaid Internet charges its own separate service fees for the assistance we provide. These fees are entirely separate from any charges by your internet, cable, or streaming service provider.</p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>If you have questions about this disclaimer, contact us at support@kincaidinternet.com or call (888) 611-0830.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Disclaimer;
