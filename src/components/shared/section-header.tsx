import * as React from 'react';
import { clsx } from 'clsx';
import { Heading } from './heading';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2' | 'h3';
}

export function SectionHeader({
  label,
  heading,
  description,
  align = 'center',
  level = 'h2',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'mb-8 md:mb-12 max-w-3xl w-full flex flex-col',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className
      )}
      {...props}
    >
      {label && (
        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-2 md:mb-3">
          {label}
        </span>
      )}
      <Heading as={level} variant={level} className="mb-3 md:mb-4">
        {heading}
      </Heading>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
