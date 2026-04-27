import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    highlightWord="Policy"
    lastUpdated="April 2026"
    disclosure="Kincaid Internet is a third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider."
  >
    <LegalSection title="Information We Collect">
      <p>We may collect personal information you voluntarily provide, such as your name, email address, phone number, and general service-related inquiries. We collect this information solely to facilitate our independent assistance services.</p>
    </LegalSection>

    <LegalSection title="How We Use Your Information">
      <p>Your information is used exclusively to provide independent guidance and informational support. We do not share your personal data with internet, cable, or streaming service providers. We do not sell or rent your personal information to third parties.</p>
    </LegalSection>

    <LegalSection title="Data Security">
      <p>We implement reasonable security measures to protect your information. Our website uses HTTPS encryption. We do not request or store provider account passwords or sensitive credentials.</p>
    </LegalSection>

    <LegalSection title="Cookies">
      <p>Our website may use cookies to enhance your browsing experience and analyze site traffic. You can manage cookie preferences through your browser settings.</p>
    </LegalSection>

    <LegalSection title="Your Rights">
      <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at support@kincaidinternet.com.</p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>For questions about this Privacy Policy, contact us at support@kincaidinternet.com or call (888) 611-0830.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default PrivacyPolicy;
