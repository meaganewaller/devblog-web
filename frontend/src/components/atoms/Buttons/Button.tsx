import { ButtonProps, IconProps } from "./Button.types";
import { cn } from "@/lib/utils/tailwind"

const Button = ({
  variant = "primary",
  size = "regular",
  children,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses = `flex items-center gap-3 justify-center
    dark:bg-secondary-04
    dark:text-neutral-02
    rounded-lg transition-all
    shadow-md
    border-2 border-primary-02
    hover:border-primary-01
    active:border-primary-04
    disabled:border-gray-02  disabled:cursor-not-allowed dark:disabled:bg-gray-03
    dark:disabled:text-neutral-03 dark:disabled:border-neutral-03`;

  const sizeClasses = {
    regular: `p-4 text-xl gap-4 font-bold w-full`,
    small: `p-3 text-base font-semibold gap-3 w-full`,
  };

  const variantClasses = {
    primary: `bg-primary-03
      text-neutral-01
      hover:bg-primary-01 dark:hover:bg-secondary-0
      active:bg-primary-04 dark:active:text-neutral-01 dark:active:bg-secondary-05 dark:active:border-neutral-01
      disabled:bg-gray-02`,
    secondary: `bg-neutral-01
      text-primary-03
      hover:text-primary-01 dark:hover:bg-secondary-01
      active:text-primary-04 dark:active:text-neutral-01 dark:active:bg-secondary-05 dark:active:border-neutral-01
      disabled:bg-neutral-02 disabled:text-gray-02`,
  };
  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonIcon = ({ icon: Icon, size = 24, className }: IconProps) => {
  return <Icon size={size} className={className}></Icon>;
};

Button.Icon = ButtonIcon;
export { Button };
// // import type { ElementType, ReactNode } from 'react';
// //
// // export interface IButtonProps {
// //   children: ReactNode;
// //   href?: string;
// //   renderAs?: ElementType;
// //   type?: 'button' | 'submit' | 'reset';
// //   disabled?: boolean;
// // }
// //
// // const Button = ({
// //   children,
// //   href,
// //   renderAs,
// //   type = 'submit',
// //   disabled = false,
// //   ...props
// // }: IButtonProps) => {
// //   const Component = renderAs ?? 'button';
// //   const targetLink = renderAs ? '_blank' : undefined;
// //
// //   return (
// //     <Component
// //       type={type}
// //       className="p-4 m-4 text-white transition duration-500 ease-in-out bg-primary-500 rounded hover:shadow-outline hover:bg-primary-600 disabled:opacity-50 disabled:pointer-events-node"
// //       href={href}
// //       target={targetLink}
// //       disabled={disabled}
// //       {...props}
// //     >
// //       {children}
// //     </Component>
// //   );
// // };
// //
// // export default Button;
// import { PropsWithChildren } from "react";
// import { cn } from "@/lib/utils/tailwind";
//
// export enum ButtonSize {
//   small = "small",
//   default = "default",
//   large = "large",
// }
//
// export enum ButtonVariant {
//   primary = "primary",
//   secondary = "secondary",
//   accent = "accent",
// }
//
// const BUTTON_SIZE_STYLES: Record<ButtonSize, string> = {
//   [ButtonSize.small]:
//     "w-24 h-8 after:w-24 after:h-8 after:top-[6px] text-[11px]",
//   [ButtonSize.default]:
//     "w-32 h-10 after:w-32 after:h-10 after:top-[8px] text-sm",
//   [ButtonSize.large]:
//     "w-36 h-14 after:w-36 after:h-14 after:top-[8px] text-base",
// };
//
// const BUTTON_VARIANT_STYLES: Record<ButtonVariant, string> = {
//   [ButtonVariant.primary]:
//     "bg-primary-500 text-white-100 hover:bg-primary-600 after:bg-primary-200 dark:bg-primary-lighter-200 dark:text-primary-800 after:dark:bg-primary-200",
//   [ButtonVariant.secondary]:
//     "bg-secondary-500 text-white-100 hover:bg-secondary-600 after:bg-secondary-200 dark:bg-secondary-lighter-300 dark:text-secondary-800 after:dark:bg-secondary-500",
//   [ButtonVariant.accent]:
//     "bg-accent-first-500 text-white-100 hover:bg-accent-first-600 after:bg-accent-first-200 dark:bg-accent-first-lighter-300 dark:text-accent-first-800 after:dark:bg-accent-first-500",
// };
//
// const BUTTON_DISABLED_VARIANT_STYLES: Record<ButtonVariant, string> = {
//   [ButtonVariant.primary]:
//     "bg-white-500 text-primary-dark-500 border border-primary-dark-500 border-solid after:bg-primary-dark-200 cursor-not-allowed",
//   [ButtonVariant.secondary]:
//     "bg-white-500 text-secondary-dark-500 border border-secondary-dark-500 border-solid after:bg-secondary-dark-200 cursor-not-allowed",
//   [ButtonVariant.accent]:
//     "bg-white-500 text-accent-first-dark-500 border border-accent-first-dark-500 border-solid after:bg-accent-first-dark-200 cursor-not-allowed",
// };
// interface ButtonProps extends PropsWithChildren {
//   isDisabled?: boolean;
//   size?: ButtonSize;
//   variant?: ButtonVariant;
//   onClick?: () => void;
// }
// export default function Button(props: ButtonProps) {
//   const {
//     children,
//     isDisabled = false,
//     size = ButtonSize.small,
//     variant = ButtonVariant.primary,
//   } = props;
//   if (!children) return null;
//   return (
//     <button
//       onClick={props.onClick}
//       className={cn(
//         "btn",
//         BUTTON_SIZE_STYLES[size],
//         isDisabled
//           ? BUTTON_DISABLED_VARIANT_STYLES[variant]
//           : BUTTON_VARIANT_STYLES[variant],
//       )}
//     >
//       {children}
//     </button>
//   );
// }
