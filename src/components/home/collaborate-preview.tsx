import * as React from 'react';
import Link from 'next/link';
import { Video, Utensils, Home, Award, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/services';
import { homeContent } from '@/content/home';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/shared/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function CollaboratePreview() {
  const { collaboratePreview } = homeContent;

  const iconMap = {
    video: Video,
    utensils: Utensils,
    home: Home,
    award: Award,
  };

  return (
    <Section>
      <Container>
        <SectionHeader
          label={collaboratePreview.label}
          heading={collaboratePreview.heading}
          description={collaboratePreview.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                className="hover-lift border border-border/60 flex flex-col h-full bg-card"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 shrink-0">
                    {IconComponent && <IconComponent className="h-6 w-6 shrink-0" />}
                  </div>
                  <CardTitle className="font-heading text-lg font-bold tracking-tight mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0 mt-auto">
                  {service.priceRange && (
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Starting {service.priceRange}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/collaborate"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>{collaboratePreview.ctaText}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
