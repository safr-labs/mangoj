import * as React from 'react';
import { clsx } from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: 'default' | 'muted' | 'accent';
}

export function Section({
  children,
  className,
  as: Component = 'section',
  background = 'default',
  ...props
}: SectionProps) {
  const bgClasses = {
    default: 'bg-background text-foreground',
    muted: 'bg-muted/50 text-foreground',
    accent: 'bg-accent/40 text-foreground',
  };

  return (
    <Component
      className={clsx(
        'py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden',
        bgClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
