import * as React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import { contactContent } from '@/content/contact';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/shared/section-header';
import { PageHeader } from '@/components/layout/page-header';
import { FormSkeleton } from '@/components/shared/skeleton';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: contactContent.seo.title,
  description: contactContent.seo.description,
};

export default function ContactPage() {
  const { hero, info } = contactContent;

  return (
    <>
      <PageHeader
        label={hero.label}
        title={hero.title}
        description={hero.description}
      />

      {/* Form and Details Columns */}
      <Section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto w-full">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                {info.heading}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Mail className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                    Email Address
                  </h4>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-base text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
                  >
                    {info.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                    Location Office
                  </h4>
                  <p className="text-base text-muted-foreground">{info.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Clock className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                    Working Hours
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {info.officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <React.Suspense
              fallback={<FormSkeleton />}
            >
              <ContactForm />
            </React.Suspense>
          </div>
        </Container>
      </Section>
    </>
  );
}
