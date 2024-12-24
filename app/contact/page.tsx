import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help your business grow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Email',
              value: 'contact@shrapneltech.com',
              icon: Mail,
            },
            {
              title: 'Phone',
              value: '(555) 123-4567',
              icon: Phone,
            },
            {
              title: 'Address',
              value: '123 Business Ave, Tech City, TC 12345',
              icon: MapPin,
            },
          ].map((contact) => (
            <Card key={contact.title} className="p-6 text-center">
              <contact.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              <p className="text-muted-foreground">{contact.value}</p>
            </Card>
          ))}
        </div>
        
        <Card className="max-w-2xl mx-auto p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Send us a Message</h2>
          <ContactForm />
        </Card>
      </div>
    </>
  );
}