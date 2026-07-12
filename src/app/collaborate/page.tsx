import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Utensils,
  Home,
  Award,
  Globe,
  MapPin,
  Heart,
  Clock,
  TrendingUp,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { collaborateContent } from '@/content/collaborate';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/shared/heading';
import { SectionHeader } from '@/components/shared/section-header';
import { BaseCard } from '@/components/cards/base-card';
import { Reveal } from '@/components/shared/reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Collaborate with Mango J — Sponsor & Branding in Dubai',
  description:
    'Partner with Dubai’s premier Tamil creator for food reviews, sponsored integrations, gold guide videos, and property walkthroughs. Request our media kit.',
};

export default function CollaboratePage() {
  const { hero, whyPartner, whoWeWorkWith, process, faq, cta, demographics } = collaborateContent;

  // Icon mapping for services
  const serviceIconMap: Record<string, React.ComponentType<any>> = {
    video: Video,
    utensils: Utensils,
    home: Home,
    award: Award,
  };

  // Icon mapping for 'Why Partner' section
  const whyPartnerIcons = [Globe, MapPin, Heart, Clock, TrendingUp];

  return (
    <>
      {/* 1. Page Hero (Centered, Dark Surface, 55vh Desktop, 45vh Mobile) */}
      <section className="relative overflow-hidden bg-neutral-950 text-neutral-100 py-20 md:py-28 min-h-[45vh] md:min-h-[55vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,166,35,0.08),transparent)]" />
        <Container className="max-w-4xl text-center flex flex-col items-center relative z-10">
          <Reveal delay={0.1}>
            <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-4 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {hero.label}
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <Heading as="h1" variant="h1" className="text-white mb-6 leading-tight">
              {hero.title}
            </Heading>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-8">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 font-semibold text-neutral-200 transition hover:scale-[1.02] hover:bg-neutral-900 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
              >
                {hero.secondaryCta.text}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Why Partner With Me (5 Cards desktop, 3+2 tablet, 1 column mobile) */}
      <Section className="border-b border-border/30">
        <Container>
          <SectionHeader
            label={whyPartner.label}
            heading={whyPartner.heading}
            description={whyPartner.description}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyPartner.cards.map((card, idx) => {
              const IconComponent = whyPartnerIcons[idx] || Globe;
              return (
                <BaseCard key={idx} className="flex flex-col text-center items-center h-full p-6" hoverLift>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 shrink-0">
                    <IconComponent className="h-6 w-6 shrink-0" />
                  </div>
                  <span className="font-heading text-xl font-bold text-primary mb-1">
                    {card.value}
                  </span>
                  <h4 className="font-semibold text-foreground text-sm mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </BaseCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Viewer Demographics Section */}
      {demographics && (
        <Section className="bg-muted/10 border-b border-border/30">
          <Container>
            <SectionHeader
              label={demographics.label}
              heading={demographics.heading}
              description={demographics.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-5xl mx-auto w-full items-stretch">
              {/* Left Column: Top Locations */}
              <div className="md:col-span-6 bg-card border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
                <h3 className="font-heading text-lg font-bold text-foreground mb-6">
                  Top Viewer Locations
                </h3>
                <div className="space-y-5">
                  {demographics.locations.map((loc, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-foreground">{loc.country}</span>
                        <span className="text-primary font-bold">{loc.percentage}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: loc.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Splits & Language */}
              <div className="md:col-span-6 bg-card border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
                <h3 className="font-heading text-lg font-bold text-foreground mb-6">
                  Viewer Splits & Engagement
                </h3>
                <div className="divide-y divide-border/40">
                  {demographics.splits.map((split, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        {split.label}
                      </span>
                      <span className="text-sm font-bold text-foreground text-right">
                        {split.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 3. Who I Work With (5 Columns desktop, 3 tablet, 2 mobile) */}
      <Section className="bg-muted/10 border-b border-border/30">
        <Container>
          <SectionHeader
            label={whoWeWorkWith.label}
            heading={whoWeWorkWith.heading}
            description={whoWeWorkWith.description}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whoWeWorkWith.partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/60 rounded-2xl p-6 text-center hover-lift transition-all duration-200 flex flex-col items-center"
              >
                <div className="text-3xl mb-4 select-none shrink-0">
                  {partner.emoji}
                </div>
                <h4 className="font-heading text-sm font-bold text-foreground mb-1 leading-snug">
                  {partner.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Collaboration Services (2 Columns, left border primary) */}
      <Section id="packages" className="border-b border-border/30">
        <Container>
          <SectionHeader
            label="SPONSORSHIP OFFERS"
            heading="Collaboration Packages & Services"
            description="High-production content tailored to showcase your locations, designs, or products beautifully."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
            {servicesData.map((svc) => {
              const Icon = serviceIconMap[svc.iconName] || Video;
              return (
                <div
                  key={svc.id}
                  className="bg-card border-l-4 border-l-primary border border-border/60 rounded-r-2xl rounded-l-none p-6 md:p-8 flex flex-col justify-between hover-lift shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                        <Icon className="h-5 w-5 shrink-0" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                      {svc.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2 text-xs md:text-sm text-muted-foreground leading-normal">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/30 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      Investment
                    </span>
                    <span className="font-heading text-sm md:text-base font-extrabold text-primary">
                      {svc.priceRange}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. Work Process (Horizontal on desktop, vertical on mobile) */}
      <Section className="border-b border-border/30">
        <Container>
          <SectionHeader
            label={process.label}
            heading={process.heading}
            description={process.description}
          />

          {/* Steps Horizontal Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {process.steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start p-2 relative">
                {/* Step number badge */}
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading text-xs font-bold flex items-center justify-center mb-4 shrink-0">
                  {item.step}
                </span>
                <Heading as="h4" variant="h5" className="mb-2">
                  {item.title}
                </Heading>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. FAQ (Accordion) */}
      <Section className="bg-muted/10 border-b border-border/30">
        <Container className="max-w-3xl">
          <SectionHeader
            label={faq.label}
            heading={faq.heading}
            description={faq.description}
          />

          <Accordion className="w-full space-y-4">
            {faq.questions.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="bg-card border border-border/60 rounded-xl px-5 py-0.5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-heading text-sm md:text-base font-semibold py-4 focus-visible:outline-none hover:no-underline hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      {/* 7. Final CTA (Centered, Brand Primary Color background, generous spacing) */}
      <Section className="bg-primary text-primary-foreground">
        <Container className="max-w-4xl text-center flex flex-col items-center py-6">
          <Heading as="h2" variant="h2" className="mb-4 text-primary-foreground font-bold">
            {cta.heading}
          </Heading>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
            {cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${cta.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-background px-6 font-semibold text-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>Email Booking Desk</span>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
