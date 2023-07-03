import { PropsWithChildren } from "react";
import { cn } from "@lib/utils/tailwind";
import Link from "next/link";

export enum LinkSize {
  small = "small",
  default = "default",
  large = "large",
}

export enum LinkVariant {
  underlined = "underlined",
  wavy = "wavy",
  primary = "primary",
  accent = "accent",
}

const LINK_SIZE_STYLES: Record<LinkSize, string> = {
  [LinkSize.small]: "text-sm",
  [LinkSize.default]: "text-base",
  [LinkSize.large]: "text-lg",
}

const LINK_VARIANT_STYLES: Record<LinkVariant, string> = {
  [LinkVariant.accent]: "text-accent-first-500 dark:text-accent-second-light-300 hover:text-accent-first-800 dark:hover:text-accent-second-lighter-100",
  [LinkVariant.primary]: "text-primary-400 dark:text-accent-first-200 hover:text-primary-600 dark:hover:text-accent-first-400",
  [LinkVariant.underlined]: "text-secondary-700 dark:text-accent-second-200 hover:text-secondary-900 dark:hover:text-accent-second-400",
  [LinkVariant.wavy]: "animated-wave",
}

interface LinkProps extends PropsWithChildren {
  size?: LinkSize;
  variant?: LinkVariant;
  href: string;
  target?: string;
}

export default function LinkComponent(props: LinkProps) {
  const { children, size = LinkSize.default, variant = LinkVariant.underlined, href, target = "" } = props;
  if (!children) return null;

  return (
    <Link
      href={href}
      target={target}
      className={cn(
        LINK_SIZE_STYLES[size],
        LINK_VARIANT_STYLES[variant])}
    >
      {children}
    </Link>
  )
}
