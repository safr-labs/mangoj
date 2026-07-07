'use client';

import * as React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import { Heading } from '@/components/shared/heading';
import { Container } from '@/components/layout/container';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled App Router error caught:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16 text-center">
      <Container className="flex flex-col items-center max-w-md">
        <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-4 shrink-0">
          <AlertCircle className="h-6 w-6 shrink-0" />
        </div>
        <span className="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">
          System Error
        </span>
        <Heading as="h1" variant="h2" className="mb-4">
          Something went wrong
        </Heading>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
          An unexpected error occurred while rendering this page. If this problem persists, please contact support.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <RotateCcw className="h-4 w-4 shrink-0" />
          <span>Try Again</span>
        </button>
      </Container>
    </div>
  );
}
