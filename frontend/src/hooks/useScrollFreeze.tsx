'use client';
import { useLayoutEffect } from "react";

export const useScrollFreeze = (isMenuOpen: boolean) => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);
};
