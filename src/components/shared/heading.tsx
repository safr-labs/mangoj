import * as React from 'react';
import { clsx } from 'clsx';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export function Heading({
  children,
  className,
  as = 'h2',
  variant = 'h2',
  ...props
}: HeadingProps) {
  const Tag = as;

  const sizeClasses = {
    display: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]',
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]',
    h2: 'text-3xl md:text-4xl font-semibold tracking-tight leading-[1.3]',
    h3: 'text-2xl md:text-3xl font-semibold tracking-tight leading-[1.4]',
    h4: 'text-xl md:text-2xl font-medium tracking-tight leading-[1.4]',
    h5: 'text-lg md:text-xl font-medium tracking-tight leading-[1.5]',
  };

  return (
    <Tag
      className={clsx(
        'font-heading text-foreground',
        sizeClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
