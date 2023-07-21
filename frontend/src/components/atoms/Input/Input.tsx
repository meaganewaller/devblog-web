import React from 'react';
import { cn } from "@lib/utils/tailwind";

import type { InputProps } from "./Input.types";
import { BaseInput, WithIcon } from "./Input.styles";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      id,
      long,
      full,
      icon,
      success,
      warning,
      error,
      number,
      address,
      className,
    } = props;

    const inputClasses = cn({
      long: long || address,
      full,
      sucess,
      warning,
      error,
      number: number || address,
    });

    if (icon) {
      const wrapperClasses = cn({
        long: long || address,
        full,
      });
      const Icon = icon;

      return (
      <WithIcon className={wrapperClasses}>
          <BaseInput
            name={id}
            className={`${inputClasses} ${className}`}
            ref={ref}
            {...props}
          />
          <Icon size="2rem" />
        </WithIcon>
      );
    }
    return (
      <BaseInput
        key={id}
        name={id}
        className={`${inputClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
// import React, { InputHTMLAttributes, ReactElement } from "react";
//
// export default function Input({
//   className,
//   ...props
// }: InputHTMLAttributes<HTMLInputElement>): ReactElement {
//   return <input className={className} ${className || ''}`} {...props} />;
// }
// // import React, { FunctionComponent } from "react";
// //
// // interface Props {
// //   placeholder?: string;
// //   value: string;
// //   type: string;
// //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// // }
// //
// // const Input: FunctionComponent<Props> = ({
// //   placeholder = '', value, type, onChange,
// // }) => {
// //   return (
// //     <input
// //       type={type}
// //       placeholder={placeholder}
// //       value={value}
// //       onChange={onChange}
// //     />
// //   )
// // }
// //
// // export default Input;
// // // import { cn } from "@lib/utils/tailwind";
// // // import React from 'react';
// // //
// // // export enum InputSize {
// // //   small = "small",
// // //   default = "default",
// // //   large = "large",
// // // }
// // //
// // // export enum InputVariant {
// // //   primary = "primary",
// // //   error = "error",
// // //   disabled = "disabled",
// // // }
// // //
// // // const INPUT_SIZE_STYLES: Record<InputSize, string> = {
// // //   [InputSize.small]: "text-sm",
// // //   [InputSize.default]: "text-base",
// // //   [InputSize.large]: "text-lg",
// // // }
// // //
// // // const INPUT_VARIANT_STYLES: Record<InputVariant, string> = {
// // //   [InputVariant.primary]: "text-primary-400 dark:text-accent-first-200 hover:text-primary-600 dark:hover:text-accent-first-400",
// // //   [InputVariant.error]: "text-accent-first-500 dark:text-accent-second-light-00 hover:text-accent-first-800 dark:hover:text-accent-second-lighter-100",
// // //   [InputVariant.disabled]: "text-secondary-700 dark:text-accent-second-200 hover:text-secondary-900 dark:hover:text-accent-second-400",
// // // }
// // //
// // // export interface InputProps {
// // //   size?: InputSize;
// // //   variant?: InputVariant;
// // //   id: string;
// // //   name: string;
// // //   label?: string;
// // //   type?: string;
// // //   placeholder: string;
// // //   error?: boolean;
// // //   errorMessage?: string;
// // // }
// // //
// // // export default function InputComponent(props: InputProps) {
// // //   const {
// // //     size = InputSize.default,
// // //     variant = InputVariant.primary,
// // //     name,
// // //     label,
// // //     id,
// // //     placeholder,
// // //     type = "text",
// // //     error = false,
// // //     errorMessage = "",
// // //   } = props;
// // //
// // //   return (
// // //     <div className="mt-4 block">
// // //       <label className="mb-3 block" htmlFor={id}>
// // //         {label}
// // //       </label>
// // //       <input
// // //         {...props}
// // //         type={type}
// // //         id={id}
// // //         name={name}
// // //         placeholder={placeholder}
// // //         className="block w-full rounded-md border-primary-400 py-3 pl-7 pr-12 focus:border-primary-500 sm:text-sm"
// // //       />
// // //       {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
// // //     </div>
// // //   )
// // // }
// // //
// // // //   return (
// // // //     <div className="mt-4 block">
// // // //       <label className="mb-3 block" htmlFor={id}>
// // // //         {label}
// // // //       </label>
// // // //       <input
// // // //         {...props}
// // // //         type={type}
// // // //         id={id}
// // // //         name={name}
// // // //         placeholder={placeholder}
// // // //         className="block w-full rounded-md border-primary-400 py-3 pl-7 pr-12 focus:border-primary-500 sm:text-sm"
// // // //       />
// // // //       {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
// // // //     </div>
// // // //   );
// // // // };
// // // //
// // // // export default Input;
