import * as React from 'react';
import Link from 'next/link';
import { Mail, FileText } from 'lucide-react';
import { homeContent } from '@/content/home';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/shared/heading';

export function Cta() {
  const { cta } = homeContent;

  return (
    <Section className="relative overflow-hidden bg-gradient-to-tr from-amber-500/10 via-primary/5 to-transparent border-t border-border/30">
      <Container className="flex flex-col items-center text-center py-6 md:py-10">
        <Heading as="h2" variant="h2" className="max-w-2xl font-bold tracking-tight mb-4 leading-tight">
          {cta.title}
        </Heading>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
          {cta.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={cta.primaryCta.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>{cta.primaryCta.text}</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
