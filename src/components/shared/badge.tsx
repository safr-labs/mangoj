import * as React from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'muted';
}

export function Badge({ children, variant = 'primary', className, ...props }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary/10 text-primary border-primary/25',
    secondary: 'bg-secondary/10 text-secondary border-secondary/25',
    outline: 'bg-transparent text-foreground border-border',
    muted: 'bg-muted text-muted-foreground border-transparent',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border tracking-wide transition-colors',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
