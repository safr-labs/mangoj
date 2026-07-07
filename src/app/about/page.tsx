import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Smile,
  Heart,
  Compass,
  TrendingUp,
  Clock,
  Globe,
  Video,
  Camera,
  Users,
} from 'lucide-react';
import { aboutContent } from '@/content/about';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/shared/heading';
import { SectionHeader } from '@/components/shared/section-header';
import { PageHeader } from '@/components/layout/page-header';
import { BaseCard } from '@/components/cards/base-card';

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  const {
    hero,
    journey,
    missionVision,
    timeline,
    differentiation,
    stats,
    platforms,
    gallery,
    cta,
  } = aboutContent;

  // Icon map for differentiation features
  const diffIconMap = [Smile, Heart, Compass, TrendingUp, Clock, Globe];

  // Social brand logo map
  const socialIconMap: Record<string, React.ComponentType<any>> = {
    YouTube: Video,
    Instagram: Camera,
    Facebook: Users,
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHeader
        label={hero.label}
        title={hero.title}
        description={hero.description}
      />

      {/* 2. Our Story */}
      <Section className="border-b border-border/30">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with decoration */}
          <div className="lg:col-span-5 relative w-full aspect-4/3 sm:aspect-video lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl rotate-3 scale-102" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border border-border/40">
              <Image
                src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80"
                alt="Dubai Desert Safari experience representing story origins"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <SectionHeader
              label={journey.label}
              heading={journey.heading}
              align="left"
              className="mb-0"
            />
            {journey.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Mission & Vision */}
      <Section className="bg-muted/10 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {/* Mission Card */}
            <BaseCard className="flex flex-col h-full" hoverLift>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shrink-0">
                <Target className="h-6 w-6 shrink-0" />
              </div>
              <Heading as="h3" variant="h3" className="mb-4">
                {missionVision.mission.title}
              </Heading>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {missionVision.mission.description}
              </p>
            </BaseCard>

            {/* Vision Card */}
            <BaseCard className="flex flex-col h-full" hoverLift>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shrink-0">
                <Eye className="h-6 w-6 shrink-0" />
              </div>
              <Heading as="h3" variant="h3" className="mb-4">
                {missionVision.vision.title}
              </Heading>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {missionVision.vision.description}
              </p>
            </BaseCard>
          </div>
        </Container>
      </Section>

      {/* 4. Journey / Timeline */}
      <Section className="border-b border-border/30">
        <Container className="max-w-3xl">
          <SectionHeader
            label={timeline.label}
            heading={timeline.heading}
          />

          {/* Vertical Timeline wrapper */}
          <div className="relative border-l border-border/80 pl-8 ml-4 space-y-12 py-4">
            {timeline.list.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                {/* Date tag */}
                <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-sm mb-2">
                  {item.year}
                </span>
                {/* Timeline description */}
                <Heading as="h3" variant="h4" className="mb-2">
                  {item.title}
                </Heading>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. What Makes Us Different */}
      <Section className="bg-muted/10 border-b border-border/30">
        <Container>
          <SectionHeader
            label={differentiation.label}
            heading={differentiation.heading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
            {differentiation.list.map((item, idx) => {
              const IconComp = diffIconMap[idx] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 flex gap-5 hover-lift transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <IconComp className="h-6 w-6 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. Statistics */}
      <Section className="py-12 md:py-16 border-b border-border/30">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
            {stats.list.map((stat, idx) => (
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
      </Section>

      {/* 7. Platforms */}
      <Section className="bg-muted/10 border-b border-border/30">
        <Container>
          <SectionHeader
            label={platforms.label}
            heading={platforms.heading}
            description={platforms.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
            {platforms.list.map((p, idx) => {
              const SocialIcon = socialIconMap[p.name] || Video;
              return (
                <BaseCard key={idx} className="flex flex-col h-full" hoverLift>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shrink-0">
                    <SocialIcon className="h-6 w-6 shrink-0" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {p.handle}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-6">
                    {p.followers}
                  </p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-full h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-xs md:text-sm font-semibold text-foreground transition hover:scale-[1.02] hover:bg-muted/40 active:scale-[0.98]"
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                </BaseCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 8. Photo Gallery */}
      <Section className="border-b border-border/30">
        <Container>
          <SectionHeader
            label={gallery.label}
            heading={gallery.heading}
            description={gallery.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {gallery.images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-border/60 bg-muted group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-xs font-semibold text-white leading-normal">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. Call to Action */}
      <Section className="bg-primary text-primary-foreground">
        <Container className="max-w-4xl text-center flex flex-col items-center py-6">
          <Heading as="h2" variant="h2" className="mb-4 text-primary-foreground font-bold">
            {cta.heading}
          </Heading>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
            {cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={cta.primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-background px-6 font-semibold text-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98]"
            >
              {cta.primaryCta.text}
            </Link>
            <Link
              href={cta.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-primary-foreground/35 bg-primary px-6 font-semibold text-primary-foreground shadow-xs transition hover:scale-[1.02] hover:bg-primary-foreground/10 active:scale-[0.98]"
            >
              {cta.secondaryCta.text}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
