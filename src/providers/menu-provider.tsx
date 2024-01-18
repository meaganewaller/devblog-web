"use client";

import { createContext, type PropsWithChildren, useContext } from "react";

import { useToggle } from "@/hooks/useToggle";

interface MenuContextValue {
  isMenuOpen: boolean;
  toggleMenu?: () => void;
  closeMenu?: () => void;
}

const defaultContextState: MenuContextValue = {
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
};

export const MenuContext = createContext<MenuContextValue>(defaultContextState);

export const MenuProvider = (props: PropsWithChildren) => {
  const { isToggled, setToggle, toggle } = useToggle(false);
  const closeMenu = () => setToggle(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        closeMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
