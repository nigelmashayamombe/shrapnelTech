import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, description, features, isPopular }: PricingCardProps) {
  return (
    <Card className={`p-6 ${isPopular ? 'border-primary shadow-lg' : ''}`}>
      {isPopular && (
        <span className="bg-primary text-primary-foreground px-3 py-1 text-sm rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-2 mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={isPopular ? 'default' : 'outline'}>
        Get Started
      </Button>
    </Card>
  );
}