import { Card } from '@/components/ui/card';
import { UsersIcon, AwardIcon, HeartIcon } from 'lucide-react';

const values = [
  {
    title: 'Customer First',
    description: 'Your success is our success. We are committed to providing solutions that make a real difference.',
    icon: UsersIcon,
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    icon: AwardIcon,
  },
  {
    title: 'Community',
    description: 'We are proud to be part of the local business community and contribute to its growth.',
    icon: HeartIcon,
  },
];

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value) => (
        <Card key={value.title} className="p-6">
          <value.icon className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
          <p className="text-muted-foreground">{value.description}</p>
        </Card>
      ))}
    </div>
  );
}