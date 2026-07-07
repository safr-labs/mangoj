'use client';

import * as React from 'react';
import { faqData } from '@/data/faq';
import { homeContent } from '@/content/home';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/shared/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  const { faq } = homeContent;

  return (
    <Section background="muted" id="faq">
      <Container>
        <SectionHeader
          label={faq.label}
          heading={faq.heading}
          description={faq.description}
        />

        <div className="max-w-3xl mx-auto w-full">
          <Accordion className="w-full space-y-4">
            {faqData.map((item, idx) => {
              const valueString = `faq-${idx}`;
              return (
                <AccordionItem
                  key={idx}
                  value={valueString}
                  className="bg-card border border-border/60 rounded-2xl px-6 py-1 overflow-hidden"
                >
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline hover:text-primary transition-colors cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 pt-1">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
