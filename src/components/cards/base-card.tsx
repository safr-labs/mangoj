import * as React from 'react';
import { clsx } from 'clsx';

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverLift?: boolean;
  bordered?: boolean;
  padding?: 'none' | 'sm' | 'default' | 'lg';
}

export function BaseCard({
  children,
  hoverLift = true,
  bordered = true,
  padding = 'default',
  className,
  ...props
}: BaseCardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  return (
    <div
      className={clsx(
        'bg-card text-card-foreground rounded-2xl transition-all duration-200',
        bordered && 'border border-border/60',
        hoverLift && 'hover-lift shadow-xs hover:shadow-md',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
