"use client";
import { useCallback, useState } from "react";

export const useToolbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prevState) => !prevState);
  }, []);

  return {
    isOpenMenu,
    handleToggleMenu,
  };
};
