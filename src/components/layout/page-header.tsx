import * as React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { Heading } from '@/components/shared/heading';
import { Container } from './container';

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  image?: string;
  alignment?: 'left' | 'center';
}

export function PageHeader({
  label,
  title,
  description,
  image,
  alignment = 'center',
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 bg-gradient-to-b from-accent/25 to-background border-b border-border/30">
      <Container
        className={clsx(
          'grid grid-cols-1 gap-12 items-center',
          image ? 'lg:grid-cols-12' : 'max-w-4xl'
        )}
      >
        <div
          className={clsx(
            'flex flex-col items-start',
            image ? 'lg:col-span-7' : 'w-full',
            alignment === 'center' && !image ? 'items-center text-center' : 'items-start text-left'
          )}
        >
          {label && (
            <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              {label}
            </span>
          )}
          <Heading as="h1" variant="h1" className="mb-6">
            {title}
          </Heading>
          {description && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {image && (
          <div className="lg:col-span-5 relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-md border bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </Container>
    </section>
  );
}
