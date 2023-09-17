'use client'

import { Analytics } from '@vercel/analytics/react'
import PlausibleProvider from 'next-plausible'
import { NextSeo } from 'next-seo'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

import GlobalStateProvider from '@/providers/GlobalStateProvider'
import { ReactQueryProvider } from '@/providers/react-query-provider'

interface Props {
  children?: React.ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>
        <NextSeo
          title={'Meagan Waller'}
          description={'Meagan Waller is a software engineer and web developer based in northeast Florida'}
        />
        <NextThemeProvider attribute='class' defaultTheme={'system'} enableSystem>
          <PlausibleProvider domain='meaganwaller.com'>
            <GlobalStateProvider>{children}</GlobalStateProvider>
            <ToastContainer />
            <Analytics />
          </PlausibleProvider>
        </NextThemeProvider>
      </ReactQueryProvider>
    </>
  )
}
