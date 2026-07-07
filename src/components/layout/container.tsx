import * as React from 'react';
import { clsx } from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full max-w-[1240px] px-6 md:px-8 lg:px-10',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
