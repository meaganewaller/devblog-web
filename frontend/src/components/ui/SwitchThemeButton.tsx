'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function SwitchThemeButton() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => setCurrentTheme(theme), [theme]);

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <>
      <button
        className={`rounded-sm bg-transparent swap swap-rotate transition-all hover:opacity-80 ${
          currentTheme === 'dark' ? 'swap-active' : null
        } transition-none`}
        onClick={changeTheme}
        aria-label={`Switch to ${
          currentTheme === 'dark' ? 'light' : 'dark'
        } mode`}
      >
        <BsFillSunFill className="swap-on" size={14} />
        <BsFillMoonFill className="swap-off" size={14} />
      </button>
    </>
  );
}
