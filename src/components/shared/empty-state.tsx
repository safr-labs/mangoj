import * as React from 'react';
import Link from 'next/link';
import { Inbox, ArrowRight } from 'lucide-react';
import { Heading } from './heading';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-card border border-border/60 rounded-3xl max-w-md mx-auto w-full shadow-xs">
      <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground mb-5 shrink-0">
        <Inbox className="h-7 w-7 shrink-0" />
      </div>
      <Heading as="h3" variant="h4" className="mb-2">
        {title}
      </Heading>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      )}
    </div>
  );
}
