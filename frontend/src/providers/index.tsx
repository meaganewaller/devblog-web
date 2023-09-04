'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import GlobalStateProvider from '@/providers/GlobalStateProvider'
// import FramerMotionProvider from '@/providers/FramerMotionProvider'
import PlausibleProvider from "next-plausible"
import { Analytics } from "@vercel/analytics/react"

import type { PropsWithChildren } from 'react'

export function Providers({ children = null }: PropsWithChildren) {
  return (
    <NextThemeProvider attribute="class" defaultTheme={"system"}>
      <PlausibleProvider domain="meaganwaller.com">
        <GlobalStateProvider>
          {children}
          <Analytics />
        </GlobalStateProvider>
      </PlausibleProvider>
    </NextThemeProvider>
  )
}
