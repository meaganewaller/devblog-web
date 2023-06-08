import "@/styles/globals.css"
import "@fontsource/prata"
import "@fontsource/dm-sans"
import "@fontsource/ibm-plex-mono"

import { ThemeProvider } from "next-themes"
import Head from 'next/head'
import React, { useEffect, useRef } from "react"
import Script from "next/script"


import type { AppProps } from "next/app"

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function usePrevious(value: string) {
  let ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <ThemeProvider attribute="class" defaultLight='light'>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component previousPathname={previousPathname} {...pageProps} />
    </ThemeProvider>
  );
};

