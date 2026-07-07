import * as React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, Video } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/shared/heading';
import { CardSkeleton } from '@/components/shared/skeleton';
import { Reveal } from '@/components/shared/reveal';
import { VideosGridClient } from './videos-grid-client';

export const metadata: Metadata = {
  title: 'Watch YouTube Videos — Mango J (Manganikka)',
  description:
    'Explore the full video library of Mango J (Manganikka). Filter through family vlogs, restaurant food reviews, jewelry reviews, and Dubai real estate tours.',
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function VideosPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const initialCategory =
    typeof resolvedParams.category === 'string' ? resolvedParams.category : 'all';

  return (
    <>
      {/* 1. Page Hero (Centered, Brand Background, Height 50vh, Subscribe Button) */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 md:py-24 min-h-[40vh] md:min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent)]" />
        <Container className="max-w-4xl text-center flex flex-col items-center relative z-10">
          <Reveal delay={0.1}>
            <span className="text-xs md:text-sm font-bold tracking-widest text-primary-foreground/90 uppercase mb-4 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              EXPLORE RELEASES
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <Heading as="h1" variant="h1" className="text-primary-foreground mb-6">
              Manganikka Video Library
            </Heading>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mb-8">
              Explore lifestyle vlogs, property tours, food walks, and gold guides direct from Dubai. Curated content crafted for the global Tamil diaspora.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="https://youtube.com/@manganikka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-background px-6 font-semibold text-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Video className="h-5 w-5 text-primary shrink-0" />
              <span>Subscribe on YouTube</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Grid Content */}
      <Section>
        <Container>
          <React.Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            }
          >
            <VideosGridClient initialCategory={initialCategory} />
          </React.Suspense>
        </Container>
      </Section>
    </>
  );
}
