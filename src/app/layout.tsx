import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.scss'

import Navbar from '@/components/Layout/Navbar'

import { DEFAULT_META } from '@/constants/metadata'
import { Providers } from '@/providers'

export interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  ...DEFAULT_META,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning className={'font-sans 2xl:text-[24px]'}>
      <body className='debug-screens flex flex-col bg-clouds'>
        <Providers>
          <Navbar />
          <main className='mt-12'>{children}</main>
        </Providers>
        <Script
          id='xlog-umami-analytics'
          strategy='afterInteractive'
          async
          defer
          src={`${process.env.NEXT_PUBLIC_UMAMI_URL}`}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          data-auto-track='false'
          data-do-not-track='true'
        ></Script>
      </body>
    </html>
  )
}
