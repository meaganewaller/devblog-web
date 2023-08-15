import '@/styles/fonts.css'
import '@/styles/globals.css'
import '@/styles/nprogress.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import PlausibleProvider from 'next-plausible'
import { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Main = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <PlausibleProvider domain="meaganwaller.com">
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default Main
