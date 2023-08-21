'use client';
import { useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [isToggled, setToggle] = useState(initialState);
  const toggle = () => setToggle((prevState) => !prevState);
  return { isToggled, setToggle, toggle };
};
