import { forwardRef } from "react";

import { tw } from "@/utils/tw";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
}

// eslint-disable-next-line
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ wide, children, className, ...props }, ref) => {
    return (
      <div
        className={tw(
          "mx-auto flex w-full flex-col px-4",
          "sm:px-12 md:px-10 lg:px-16 xl:px-6",
          wide ? "max-w-12xl" : "max-w-6xl",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export default Container;
