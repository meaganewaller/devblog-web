'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="flex justify-end">
  <button
    onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    className='justify-center p-1 rounded-full bg-accent text-on-accent'
      >
    {currentTheme === 'dark' ? ( <HiSun size={15} />) : ( <HiMoon size={15} />)}
    </button>
    </div>
  )
}

export default ThemeToggle
