import { PageHeader } from '@/components/page-header';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="How we handle and protect your data"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
            <p className="text-muted-foreground mb-4">
              We collect information to provide better services to our users. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Information you provide to us directly</li>
              <li>Usage data and analytics</li>
              <li>Technical information about your device and connection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="text-muted-foreground mb-4">
              We implement robust security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Strict access controls and authentication</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}