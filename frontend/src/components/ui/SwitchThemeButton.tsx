"use client";

import { useTheme } from 'next-themes'
import { useEffect, useState } from "react"
import  { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function SwitchThemeButton() {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => setCurrentTheme(theme), [theme]);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <button
        className={`rounded-sm swap swap-rotate transition-all ${currentTheme === "dark" ? "swap-active" : null} transition-none`}
        onClick={changeTheme}
        aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      >
        <BsFillSunFill className="swap-on h-5 w-5" size={15} />
        <BsFillMoonFill className="swap-off h-5 w-5" size={15} />
      </button>
    </>
  );
}
