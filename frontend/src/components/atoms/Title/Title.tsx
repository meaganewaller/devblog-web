import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/tailwind";

export enum TitleSize {
  small = "small",
  default = "default",
  large = "large",
}

export enum TitleVariant {
  primary = "primary",
  secondary = "secondary",
  accent = "accent",
}

const TITLE_SIZE_STYLES: Record<TitleSize, string> = {
  [TitleSize.small]: "text-xl",
  [TitleSize.default]: "text-2xl",
  [TitleSize.large]: "text-4xl",
};

const TITLE_VARIANT_STYLES: Record<TitleVariant, string> = {
  [TitleVariant.primary]: "text-primary-500 dark:text-accent-first-100",
  [TitleVariant.secondary]: "text-secondary-500 dark:text-accent-second-200",
  [TitleVariant.accent]: "text-accent-first-500 dark:text-primary-200",
};

interface TitleProps extends PropsWithChildren {
  size?: TitleSize;
  variant?: TitleVariant;
}

export default function Title(props: TitleProps) {
  const { children, size = TitleSize.small, variant = TitleVariant.primary } = props;
  if (!children) return null;

  return <h1 className={cn(
    "font-mono tracking-tight",
    TITLE_SIZE_STYLES[size],
    TITLE_VARIANT_STYLES[variant])}>{children}</h1>;
}
