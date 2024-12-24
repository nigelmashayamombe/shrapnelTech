import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Code2Icon,
  BarChart3Icon,
  UsersIcon,
  DatabaseIcon,
  HeartHandshakeIcon,
  RocketIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold sm:text-6xl">
              Empowering Local Businesses with{' '}
              <span className="text-primary">Custom Software Solutions</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Affordable, personalized software development services tailored to your business needs.
              Start growing your business today with our expert solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose ShrapnelTech?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver high-quality software solutions that help your business thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Affordable Solutions',
                description:
                  'Cost-effective software solutions starting at just $19.99/month.',
                icon: HeartHandshakeIcon,
              },
              {
                title: 'Local Expertise',
                description:
                  'Deep understanding of local business needs and challenges.',
                icon: RocketIcon,
              },
              {
                title: 'Personalized Service',
                description:
                  'Tailored solutions and dedicated support for your business.',
                icon: UsersIcon,
              },
            ].map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <feature.icon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive software solutions for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Custom Software',
                description: 'Tailored solutions for your unique needs',
                icon: Code2Icon,
              },
              {
                title: 'CRM Solutions',
                description: 'Manage customer relationships effectively',
                icon: UsersIcon,
              },
              {
                title: 'Inventory Management',
                description: 'Track and optimize your inventory',
                icon: DatabaseIcon,
              },
              {
                title: 'Analytics',
                description: 'Data-driven insights for growth',
                icon: BarChart3Icon,
              },
            ].map((service) => (
              <Card key={service.title} className="p-6">
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mx-auto max-w-2xl text-lg mb-8">
              Get started with our affordable software solutions today and take your business to the next level.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}