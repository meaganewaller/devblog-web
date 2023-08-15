import React from 'react';
import { cn } from "@/lib/utils/tailwind";

import type { CardProps } from './Card.types';

export const Card = ({
  className,
  width = 'fit-content',
  variant = 'primary',
  children,
  ...props
}: CardProps) => {
  const baseClasses = `relative flex-col min-w-0 bg-white bg-clip-border border rounded-[0.8rem] border-solid border-[#00000020] mb-3`;
  const variantClasses = {
    primary: ``,
    secondary: ``,
    tertiary: ``,
    "accent-one": ``,
    "accent-two": ``,
  };
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className,
        width,
      )}
    >
      {children}
    </div>
  )
}
