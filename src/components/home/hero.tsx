import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';
import { homeContent } from '@/content/home';
import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/shared/reveal';

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32 bg-gradient-to-b from-accent/25 to-background">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <Reveal delay={0.1}>
            <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-4 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {hero.label}
            </span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Mango J <span className="text-primary font-extrabold">(Manganikka)</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-foreground/90">
                Top{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600 dark:to-primary">
                  Tamil YouTuber
                </span>{' '}
                & Dubai Vlogger
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {hero.description}
            </p>
          </Reveal>

          <div className="w-full flex justify-center sm:justify-start">
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center sm:justify-start">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full sm:w-auto"
                >
                  <Play className="h-4 w-4 fill-current shrink-0" />
                  <span>{hero.primaryCta.text}</span>
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 font-semibold text-foreground shadow-xs transition hover:scale-[1.02] hover:bg-muted/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full sm:w-auto"
                >
                  <span>{hero.secondaryCta.text}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5]">
          <Reveal delay={0.3} yOffset={20}>
            <div className="relative w-full h-full aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent rounded-3xl -rotate-2 scale-102" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-border/60">
                <Image
                  src="/mangoj4.webp"
                  alt="Mango J Creator Portrait"
                  width={1122}
                  height={1402}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover"
                />
                {/* Embedded creator indicator */}
                <div className="absolute bottom-5 left-5 right-5 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-border/40 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/50 bg-muted shrink-0">
                    <Image
                      src="/mangoj.webp"
                      alt="Mango J Profile"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-primary uppercase tracking-widest font-bold">Verified Tamil Creator</p>
                    <p className="text-sm font-semibold text-foreground">Mango J (Manganikka) • 104K+ Subs</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
