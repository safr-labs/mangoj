'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { navigationItems } from '@/data/navigation';
import { useScroll } from '@/hooks/use-scroll';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Container } from '@/components/layout/container';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScroll(10);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full transition-all duration-200',
        isScrolled
          ? 'border-b border-border/80 bg-background/90 backdrop-blur-md shadow-xs'
          : 'border-b border-transparent bg-background/0'
      )}
    >
      <Container className="h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
            <Image
              src="/mangoj.webp"
              alt="Mango J Logo"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <span>Mango</span>
          <span className="text-primary font-extrabold">J</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'link-underline py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md',
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-foreground/75 hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Enquire Now
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
