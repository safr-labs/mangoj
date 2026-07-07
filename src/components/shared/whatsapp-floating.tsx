'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare } from 'lucide-react';

export function WhatsappFloating() {
  const pathname = usePathname();

  // Hide on the Contact Page as explicitly required by the blueprint
  if (pathname === '/contact') {
    return null;
  }

  return (
    <a
      href="https://wa.me/971501234567" // Dubai Marina booking contact
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mango J on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-20 right-6 z-40 w-11 h-11 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 group animate-pulse"
      style={{ animationDuration: '3s' }}
    >
      <MessageSquare className="h-5 w-5 shrink-0" />
      {/* Tooltip */}
      <span className="absolute right-14 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
        Chat on WhatsApp
      </span>
    </a>
  );
}
