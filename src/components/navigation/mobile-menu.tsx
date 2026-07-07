'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';
import { navigationItems } from '@/data/navigation';
import { SocialLinks } from '@/components/shared/social-links';

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="md:hidden rounded-md"
          />
        }
      >
        <Menu className="h-6 w-6 shrink-0" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] flex flex-col p-6 bg-background">
        <SheetHeader className="p-0 mb-8">
          <SheetTitle className="text-left font-heading text-xl font-bold tracking-tight">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 text-lg font-medium">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Enquire Now
          </Link>
        </nav>
        <div className="mt-auto border-t pt-6">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">
            Connect With Mango J
          </p>
          <SocialLinks iconSize={20} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
