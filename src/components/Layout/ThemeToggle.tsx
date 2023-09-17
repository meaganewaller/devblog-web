'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='flex justify-end'>
      <button
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        className='justify-center rounded-full bg-accent p-1 text-on-accent'
      >
        {currentTheme === 'dark' ? <HiSun size={15} /> : <HiMoon size={15} />}
      </button>
    </div>
  )
}

export default ThemeToggle
