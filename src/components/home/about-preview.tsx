import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { aboutContent } from '@/content/about';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/shared/heading';

export function AboutPreview() {
  const { hero, journey, differentiation } = aboutContent;

  return (
    <Section background="muted">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Showcase */}
        <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-square order-last lg:order-first">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl rotate-2 scale-102" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border border-border/40">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
              alt="Mango J reviewing food at a restaurant representing her food vlogs"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {hero.label}
          </span>
          <Heading as="h2" variant="h2" className="mb-6">
            Connecting Dubai to the Global Tamil Community
          </Heading>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {journey.paragraphs[0]}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
            {journey.paragraphs[1]}
          </p>

          {/* Quick Values List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
            {differentiation.list.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>Read Full Biography</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
