import * as React from 'react';
import { clsx } from 'clsx';

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({
  label,
  error,
  required,
  children,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={clsx('flex flex-col gap-2 w-full', className)} {...props}>
      <label className="text-sm font-semibold text-foreground flex items-center gap-0.5">
        <span>{label}</span>
        {required && <span className="text-destructive">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-xs font-semibold text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </span>
      )}
    </div>
  );
}
