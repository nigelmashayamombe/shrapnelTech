import { Card } from '@/components/ui/card';

const stats = [
  { label: 'Clients Served', value: '100+' },
  { label: 'Team Members', value: '15+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Success Rate', value: '98%' },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
}