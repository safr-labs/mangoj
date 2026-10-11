import * as React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Heading } from '@/components/shared/heading';
import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16 text-center">
      <Container className="flex flex-col items-center max-w-md">
        <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
          Error 404
        </span>
        <Heading as="h1" variant="h1" className="mb-4">
          Page Not Found
        </Heading>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98]"
        >
          <Home className="h-4 w-4 shrink-0" />
          <span>Back to Home</span>
        </Link>
      </Container>
    </div>
  );
}
