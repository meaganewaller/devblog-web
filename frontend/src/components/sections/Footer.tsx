import { format } from "date-fns/esm"
import Link from "next/link"
import { cxm } from "@/lib/helpers/cxm"

export default function Footer() {
  const currentYear = format(new Date(), "yyyy")

  return (
    <footer
      className={cxm(
        "flex w-full flex-col items-center justify-center",
        "p-4 text-center tracking-widest",
        "md:py-0",
      )}
    >
      <div
        className={cxm(
          "w-full max-w-3xl",
          "md:border-t-[1.5px] md:border-t-pink-300",
          "md:py-3 md:dark:border-t-pink-500"
        )}
      >
        <p className="text-center text-base font-semibold md:text-left">
          2013-{currentYear} Meagan Waller. <br className="block md:hidden" /> See the source code on{" "}
          <Link
            className={cxm(
              "cursor-pointer font-bold",
              "text-sm underline decoration-dashed underline-offset-[5px]",
              "hover:text-viking-500 hover:decoration-viking-500"
            )}
            href="https://github.com/meaganewaller/meaganwaller.com/"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  )
}
