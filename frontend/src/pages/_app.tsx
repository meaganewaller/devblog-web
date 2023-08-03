import { ReactElement, ReactNode } from 'react';

import useActions from '@/lib/useActions';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';

import '@/styles/fonts.css';
import '@/styles/globals.css';
import '@/styles/nprogress.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Main = ({ Component, pageProps }: AppPropsWithLayout) => {
  const actions = useActions();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
  <PlausibleProvider domain="meaganwaller.com">
  <ThemeProvider attribute="class">
  {getLayout(<Component {...pageProps} />)}
  </ThemeProvider>
  </PlausibleProvider>
  )
}

export default Main;
