"use client";

import { useTheme } from "@/hooks";

export default function SwitchThemeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className="opacity-75 p-6 text-xl text-black dark:text-white overflow-hidden"
      type="button"
      aria-label="switch theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
