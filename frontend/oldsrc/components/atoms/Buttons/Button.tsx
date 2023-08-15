import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/tailwind";

export enum ButtonSize {
  small = "small",
  default = "default",
  large = "large",
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  accent = "accent",
}

const BUTTON_SIZE_STYLES: Record<ButtonSize, string> = {
  [ButtonSize.small]:
    "w-24 h-8 after:w-24 after:h-8 after:top-[6px] text-[11px]",
  [ButtonSize.default]:
    "w-32 h-10 after:w-32 after:h-10 after:top-[8px] text-sm",
  [ButtonSize.large]:
    "w-36 h-14 after:w-36 after:h-14 after:top-[8px] text-base",
};

const BUTTON_VARIANT_STYLES: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    "bg-primary-300 text-primary-600 hover:bg-primary-400 hover:text-primary-700 after:bg-primary-500 hover:after:bg-primary-600",
  [ButtonVariant.secondary]:
    "bg-secondary-300 text-secondary-600 hover:bg-secondary-400 hover:text-secondary-700 after:bg-secondary-500 hover:after:bg-secondary-600",
  [ButtonVariant.accent]:
    "bg-tertiary-300 text-tertiary-600 hover:bg-tertiary-400 hover:text-tertiary-700 after:bg-tertiary-500 hover:after:bg-tertiary-600",
};

const BUTTON_DISABLED_VARIANT_STYLES: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    "bg-white text-primary-four border border-primary-three border-solid after:bg-primary-two cursor-not-allowed",
  [ButtonVariant.secondary]:
    "bg-white text-secondary-four border border-secondary-three border-solid after:bg-secondary-two cursor-not-allowed",
  [ButtonVariant.accent]:
    "bg-white text-accent-first-four border border-accent-first-three border-solid after:bg-accent-first-two cursor-not-allowed",
};
interface ButtonProps extends PropsWithChildren {
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  const {
    children,
    isDisabled = false,
    size = ButtonSize.small,
    variant = ButtonVariant.primary,
  } = props;
  if (!children) return null;
  return (
    <button
      onClick={props.onClick}
      className={cn(
        "btn",
        BUTTON_SIZE_STYLES[size],
        isDisabled
          ? BUTTON_DISABLED_VARIANT_STYLES[variant]
          : BUTTON_VARIANT_STYLES[variant],
      )}
    >
      {children}
    </button>
  );
}
