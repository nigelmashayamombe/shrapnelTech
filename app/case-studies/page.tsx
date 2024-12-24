import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    title: "Local Bakery's Digital Transformation",
    description: "How we helped Sweet Delights Bakery increase sales by 150% with our POS and inventory management solution.",
    industry: "Food & Beverage",
    impact: "150% increase in sales",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Streamlining Auto Repair Operations",
    description: "Quick Fix Auto Shop reduced administrative work by 75% using our service management platform.",
    industry: "Automotive",
    impact: "75% reduction in admin work",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Modernizing Local Retail",
    description: "How Main Street Boutique achieved omnichannel success with our retail management solution.",
    industry: "Retail",
    impact: "200% online sales growth",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="Real success stories from businesses like yours"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{study.industry}</p>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">{study.impact}</span>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}