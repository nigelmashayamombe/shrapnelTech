import { PageHeader } from '@/components/page-header';
import { PricingCard } from '@/components/services/pricing-card';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive software solutions tailored for your business needs"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$19.99"
            description="Perfect for small businesses just getting started"
            features={[
              'Basic CRM functionality',
              'Simple inventory tracking',
              'Email support',
              'Basic reporting',
              'Up to 500 records',
            ]}
          />
          <PricingCard
            title="Professional"
            price="$49.99"
            description="Ideal for growing businesses"
            features={[
              'Advanced CRM features',
              'Full inventory management',
              'Priority support',
              'Advanced analytics',
              'Up to 5,000 records',
              'Custom integrations',
            ]}
            isPopular
          />
          <PricingCard
            title="Enterprise"
            price="$99.99"
            description="For established businesses needing more"
            features={[
              'Full feature access',
              'Unlimited records',
              '24/7 priority support',
              'Custom development',
              'Dedicated account manager',
              'API access',
              'White-label options',
            ]}
          />
        </div>
      </div>
    </>
  );
}