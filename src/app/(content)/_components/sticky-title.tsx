"use client";

import { m } from "framer-motion";
import { useLayoutEffect, useState } from "react";

import { min } from "@/lib/screens";
import { useMediaQuery, useOnScroll } from "@/hooks";

import tw from "@/utils/tw";

interface StickyTitleProps {
  title: string;
  elementRef: React.RefObject<HTMLDivElement | null>;
  gap?: number;
}

const StickyTitle = ({ title, elementRef, gap = -64 }: StickyTitleProps) => {
  const [threshold, setThreshold] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (elementRef.current !== null) {
        setThreshold(elementRef.current.clientHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef]);

  const isScrolled = useOnScroll(threshold + gap);

  const transition = { duration: 0.3, ease: "easeInOut" };
  const variants = {
    initial: { opacity: isScrolled ? 0 : 1, y: isScrolled ? gap : 0 },
    animate: { opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : gap },
  };

  const isMinMd = useMediaQuery(min("md"));

  const scrollToTop = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (err) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {isMinMd && (
        <>
          {isScrolled ? (
            <m.div
              className={tw(
                "fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-center bg-background px-4 text-center shadow-sm backdrop-blur",
              )}
              initial="initial"
              animate="animate"
              variants={variants}
              transition={transition}
            >
              <h1
                className={tw(
                  "cursor-pointer font-venice text-lg font-semibold",
                )}
              >
                <button onClick={scrollToTop}>{title}</button>
              </h1>
            </m.div>
          ) : (
            <m.div
              className={tw(
                "fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-center bg-background px-4 text-center shadow-sm backdrop-blur",
              )}
              initial={{ opacity: 0, y: gap }}
              transition={transition}
            >
              <h1 className={tw("font-mono text-lg font-semibold")}>{title}</h1>
            </m.div>
          )}
        </>
      )}
    </>
  );
};
export default StickyTitle;
