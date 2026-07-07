import * as React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xs">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
        <p className="font-heading text-sm font-semibold text-muted-foreground tracking-wider uppercase animate-pulse">
          Loading Manganikka...
        </p>
      </div>
    </div>
  );
}
