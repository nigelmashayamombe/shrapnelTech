import { PageHeader } from '@/components/page-header';
import { StatsGrid } from '@/components/about/stats-grid';
import { ValuesGrid } from '@/components/about/values-grid';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About ShrapnelTech"
        description="Empowering local businesses with innovative software solutions since 2023."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At ShrapnelTech, we believe every local business deserves access to powerful, affordable software solutions that can transform their operations and drive growth.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to bridge the technology gap for small businesses by providing enterprise-grade solutions at prices they can afford.
            </p>
          </div>
          <StatsGrid />
        </div>

        <ValuesGrid />
      </div>
    </>
  );
}