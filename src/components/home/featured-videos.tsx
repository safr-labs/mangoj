import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { videosData } from '@/data/videos';
import { homeContent } from '@/content/home';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/shared/section-header';
import { VideoCard } from '@/components/cards/video-card';

export function FeaturedVideos() {
  const { featuredVideos } = homeContent;
  
  // Show only top 3 videos on the homepage
  const featuredList = videosData.slice(0, 3);

  return (
    <Section>
      <Container>
        <SectionHeader
          label={featuredVideos.label}
          heading={featuredVideos.heading}
          description={featuredVideos.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {featuredList.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/videos"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 font-semibold text-foreground shadow-xs transition hover:bg-muted/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>{featuredVideos.ctaText}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
