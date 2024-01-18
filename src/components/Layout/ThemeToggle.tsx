"use client";
import { useTheme } from "next-themes";
import React from "react";
import { HiSun } from "react-icons/hi";
import { PiMoonStarsFill } from "react-icons/pi";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-end">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="rounded-full text-deep-sky-blue hover:text-deep-purple"
      >
        {currentTheme === "dark" ? (
          <HiSun size={25} />
        ) : (
          <PiMoonStarsFill size={25} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
