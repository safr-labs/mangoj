import * as React from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';
import { Heading } from './heading';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = 'An unexpected error occurred while loading this page.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-card border border-border/60 rounded-3xl max-w-md mx-auto w-full shadow-xs">
      <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center text-destructive mb-5 shrink-0">
        <AlertCircle className="h-7 w-7 shrink-0" />
      </div>
      <Heading as="h3" variant="h4" className="mb-2">
        Something went wrong
      </Heading>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {message}
      </p>
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 shrink-0" />
            <span>Try Again</span>
          </button>
        )}
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:scale-[1.02] hover:bg-muted/40 active:scale-[0.98]"
        >
          <Home className="h-4 w-4 shrink-0" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
