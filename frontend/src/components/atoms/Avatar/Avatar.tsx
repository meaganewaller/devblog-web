import Image from "next/image";
import { AvatarProps } from "./Avatar.types";
import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";

const Avatar = ({
  name,
  size = "regular",
  variant = "primary",
  className,
  ...props
}: AvatarProps) => {
  const baseClasses = `box-border overflow-hidden shadow-[0_5px_15px_0px] hover:animate-float rounded-[50%] border-[5px] border-solid`;
  const sizeClasses = {
    regular: `border-[6px] w-[150px] h-[150px]`,
    small: `border-4 w-[75px] h-[75px]`
  };
  const variantClasses = {
    primary: `shadow-primary-700 dark:shadow-primary-300 border-primary-700 dark:border-primary-300 hover:before:shadow-secondary-300 hover:shadow-secondary-300 overlay-primary-500 bg-primary-500 dark:hover:shadow-secondary-100 dark:bg-primary-200`,
    secondary: `shadow-secondary-700 dark:shadow-secondary-300 border-secondary-700 dark:border-secondary-300 hover:before:shadow-primary-300 hover:shadow-primary-300 dark:hover:shadow-primary-100 bg-secondary-500 dark:bg-secondary-200`,
  };
  const sizes = {
    regular: 150,
    small: 75,
  };

  return (
    <div
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}>
      <Link href="/">
        <Image
          className="w-full h-auto opacity-80"
          alt={name}
          src={`/static/images/avatar/${name.toLowerCase().split(" ").join("")}.png`}
          width={sizes[size]}
          height={sizes[size]}
          {...props}
        />
      </Link>
    </div>
  );
};

export { Avatar };
