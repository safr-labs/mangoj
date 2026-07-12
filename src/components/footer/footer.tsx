import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationItems } from '@/data/navigation';
import { SocialLinks } from '@/components/shared/social-links';
import { Container } from '@/components/layout/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-muted/20">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 mb-4"
            >
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Mango J Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span>Mango</span>
              <span className="text-primary font-extrabold">J</span>
            </Link>
            <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed mb-6">
              Vibrant Tamil lifestyle, food, travel and real estate content based out of Dubai, UAE. Bringing the Middle East experience to Tamil audiences worldwide.
            </p>
            <SocialLinks iconSize={20} />
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider text-foreground uppercase mb-4">
              Explore Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dubai Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider text-foreground uppercase mb-4">
              Collaborations
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              For business and branding inquiries in Dubai and globally:
            </p>
            <a
              href="mailto:mangoj.business@gmail.com"
              className="text-sm font-bold text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md block mb-1"
            >
              mangoj.business@gmail.com
            </a>
            <span className="text-xs text-muted-foreground">Dubai, UAE</span>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Manganikka. All rights reserved.
          </p>
          <div className="text-xs md:text-sm">
            <span>
              Developed by{' '}
              <a
                href="https://safrlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition"
              >
                Safr Labs
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
