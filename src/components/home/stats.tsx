import * as React from 'react';
import { statsData } from '@/data/stats';
import { homeContent } from '@/content/home';
import { Container } from '@/components/layout/container';

export function Stats() {
  const { hero } = homeContent;

  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border/30">
      <Container>
        <h2 className="sr-only">{hero.statsHeading}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-semibold tracking-wider uppercase text-foreground mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
