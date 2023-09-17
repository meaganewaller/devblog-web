import { cxm } from "@/lib/helpers/cxm";
import { ChildrenProps } from "@/models";

export function UnderlineSpan({ children }: ChildrenProps) {
  return (
    <span
      className={cxm(
        "cursor-pointer font-bold",
        "text-base leading-[1.75] underline decoration-dashed underline-offset-[5px]",
        "hover:text-pink-600 hover:decoration-pink-500",
        "md:text-lg md:leading-[1.7777778]"
      )}
    >
      {children}
    </span>
  );
}
