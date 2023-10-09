import Script from 'next/script'
import { Providers } from '@/providers'
import Navbar from '@/components/Layout/Navbar'
import Toaster from '@/components/Toaster'
import '@/styles/globals.scss'
import GlobalStyles from '@/styles/GlobalStyles'

export interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] font-sans`}>
      <body className="debug-screens flex flex-col">
        <Providers>
          <GlobalStyles />
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
