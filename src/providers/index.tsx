'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import PlausibleProvider from 'next-plausible'
import { NextSeo } from 'next-seo'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React, { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStateProvider from '@/providers/GlobalStateProvider'

import { QueryClientProvider } from './QueryProvider'

export const Providers = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <QueryClientProvider>
    <NextSeo
      title={'Meagan Waller'}
      description={'Meagan Waller is a software engineer and web developer based in northeast Florida'}
    />
    <NextThemeProvider attribute='class' defaultTheme={'system'} enableSystem>
      <PlausibleProvider domain='meaganwaller.com'>
        <GlobalStateProvider>{children}</GlobalStateProvider>
        <ToastContainer />
        <Suspense fallback={null}>
          <ProgressBar height='4px' color='#810ca8' options={{ showSpinner: false }} shallowRouting />
        </Suspense>
      </PlausibleProvider>
    </NextThemeProvider>
  </QueryClientProvider>
)
