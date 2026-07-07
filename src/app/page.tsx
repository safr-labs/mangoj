import * as React from 'react';
import { Hero } from '@/components/home/hero';
import { TrustBar } from '@/components/home/trust-bar';
import { Stats } from '@/components/home/stats';
import { AboutPreview } from '@/components/home/about-preview';
import { Categories } from '@/components/home/categories';
import { FeaturedVideos } from '@/components/home/featured-videos';
import { CollaboratePreview } from '@/components/home/collaborate-preview';
import { Testimonials } from '@/components/home/testimonials';
import { Faq } from '@/components/home/faq';
import { Cta } from '@/components/home/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <AboutPreview />
      <Categories />
      <FeaturedVideos />
      <CollaboratePreview />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
