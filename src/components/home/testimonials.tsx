import * as React from 'react';
import { Quote } from 'lucide-react';
import { homeContent } from '@/content/home';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/shared/section-header';
import { BaseCard } from '@/components/cards/base-card';

export function Testimonials() {
  const { testimonials } = homeContent;

  return (
    <Section className="bg-muted/10 border-t border-border/30">
      <Container>
        <SectionHeader
          label={testimonials.label}
          heading={testimonials.heading}
          description={testimonials.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.list.map((item, idx) => (
            <BaseCard key={idx} className="flex flex-col h-full relative" hoverLift>
              {/* Quote Mark */}
              <div className="text-primary/20 mb-6 shrink-0">
                <Quote className="h-10 w-10 fill-current shrink-0" />
              </div>
              
              {/* Review Statement */}
              <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed mb-6 flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>
              
              {/* User Bio */}
              <div className="pt-5 border-t border-border/40 mt-auto shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-snug">
                    {item.author}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-normal">
                    {item.role}
                  </p>
                </div>
              </div>
            </BaseCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
