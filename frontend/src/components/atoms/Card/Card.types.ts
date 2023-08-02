import React from 'react';

export type cardVariant = "primary" | "secondary" | "tertiary" | "accent-one" | "accent-two"

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
  width?: string;
  variant: cardVariant;
}
