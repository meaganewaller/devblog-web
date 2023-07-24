// import type { ElementType, ReactNode } from 'react';
//
// export interface IButtonProps {
//   children: ReactNode;
//   href?: string;
//   renderAs?: ElementType;
//   type?: 'button' | 'submit' | 'reset';
//   disabled?: boolean;
// }
//
// const Button = ({
//   children,
//   href,
//   renderAs,
//   type = 'submit',
//   disabled = false,
//   ...props
// }: IButtonProps) => {
//   const Component = renderAs ?? 'button';
//   const targetLink = renderAs ? '_blank' : undefined;
//
//   return (
//     <Component
//       type={type}
//       className="p-4 m-4 text-white transition duration-500 ease-in-out bg-primary-500 rounded hover:shadow-outline hover:bg-primary-600 disabled:opacity-50 disabled:pointer-events-node"
//       href={href}
//       target={targetLink}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// };
//
// export default Button;
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
    "bg-primary-500 text-white-100 hover:bg-primary-600 after:bg-primary-200 dark:bg-primary-lighter-200 dark:text-primary-800 after:dark:bg-primary-200",
  [ButtonVariant.secondary]:
    "bg-secondary-500 text-white-100 hover:bg-secondary-600 after:bg-secondary-200 dark:bg-secondary-lighter-300 dark:text-secondary-800 after:dark:bg-secondary-500",
  [ButtonVariant.accent]:
    "bg-accent-first-500 text-white-100 hover:bg-accent-first-600 after:bg-accent-first-200 dark:bg-accent-first-lighter-300 dark:text-accent-first-800 after:dark:bg-accent-first-500",
};

const BUTTON_DISABLED_VARIANT_STYLES: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    "bg-white-500 text-primary-dark-500 border border-primary-dark-500 border-solid after:bg-primary-dark-200 cursor-not-allowed",
  [ButtonVariant.secondary]:
    "bg-white-500 text-secondary-dark-500 border border-secondary-dark-500 border-solid after:bg-secondary-dark-200 cursor-not-allowed",
  [ButtonVariant.accent]:
    "bg-white-500 text-accent-first-dark-500 border border-accent-first-dark-500 border-solid after:bg-accent-first-dark-200 cursor-not-allowed",
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
