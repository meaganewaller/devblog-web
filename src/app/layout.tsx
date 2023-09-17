import Script from 'next/script'
import '@/styles/globals.scss'

import Layout from '@/components/Layout'
import Navbar from '@/components/Layout/Navbar'
import Toaster from '@/components/Toaster'

import { Providers } from '@/providers'
import GlobalStyles from '@/styles/GlobalStyles'

type RootLayoutProps = {
  children: React.ReactNode
}
const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html suppressHydrationWarning lang='en-US'>
      <head />
      <body className='debug-screens'>
        <Providers>
          <GlobalStyles />
          <Navbar />
          <Layout>{children}</Layout>
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

export default RootLayout
