import Script from 'next/script'
import { Providers } from '@/providers'
import Navbar from '@/components/Layout/Navbar'
import Toaster from '@/components/Toaster'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { metadataBase } from '@/constants/metadata'

export interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "meagan waller",
    template: "%s | meagan waller",
  },
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`2xl:text-[24px] font-sans`}
    >
      <body className="debug-screens flex flex-col">
        <Providers>
          <Navbar />
          <main className="mt-12">{children}</main>
          <Toaster />
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
