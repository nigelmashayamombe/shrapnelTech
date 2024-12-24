import { PageHeader } from '@/components/page-header';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our services"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Terms of Use</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using ShrapnelTech services, you accept and agree to be bound by the terms and conditions contained herein.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              ShrapnelTech provides software solutions and services for local businesses. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Custom software development</li>
              <li>CRM solutions</li>
              <li>Inventory management systems</li>
              <li>Analytics and reporting tools</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              Users of our services agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account credentials</li>
              <li>Use the services in compliance with applicable laws</li>
              <li>Not misuse or attempt to exploit our services</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}