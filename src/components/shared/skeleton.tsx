import * as React from 'react';
import { clsx } from 'clsx';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx(
        'animate-pulse rounded-md bg-muted/60 dark:bg-muted/30',
        className
      )}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="border border-border/60 rounded-2xl overflow-hidden bg-card shadow-xs flex flex-col h-full">
      {/* Image aspect-16/9 skeleton */}
      <Skeleton className="aspect-16/9 w-full rounded-t-2xl rounded-b-none" />
      <div className="p-5 flex flex-col flex-1 space-y-4">
        {/* Category tag */}
        <Skeleton className="h-4 w-20 rounded-full" />
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
        {/* Description */}
        <div className="space-y-2 pt-2">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-11/12" />
        </div>
        {/* Footer info */}
        <div className="pt-4 mt-auto border-t border-border/30 flex justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}

export function TextSkeleton() {
  return (
    <div className="space-y-3 w-full">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="py-12 space-y-8 w-full max-w-4xl mx-auto px-6">
      {/* Title block */}
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <Skeleton className="h-3 w-28 rounded-full" />
        <Skeleton className="h-10 w-3/4 max-w-md" />
        <Skeleton className="h-5 w-4/5 max-w-lg" />
      </div>
      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="border border-border/60 rounded-3xl p-6 md:p-8 space-y-6 bg-card shadow-xs">
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="space-y-5 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-28" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-28" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-28" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  );
}

