'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';
import { clsx } from 'clsx';
import { useScroll } from '@/hooks/use-scroll';

export function ScrollToTop() {
  const scrolled = useScroll(400);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={clsx(
        'fixed bottom-6 right-6 z-40 w-11 h-11 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUp className="h-5 w-5 shrink-0" />
    </button>
  );
}
