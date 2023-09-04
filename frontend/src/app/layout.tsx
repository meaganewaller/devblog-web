// import type { Metadata } from "next";
import '@/styles/globals.scss'

import Analytics from '@/components/Analytics'
import Layout from '@/components/Layout'
import Navbar from '@/components/Layout/Navbar'
import Toaster from '@/components/Toaster'

import { Providers } from '@/providers'
import GlobalStyles from '@/styles/GlobalStyles'

// import { site } from "@/config/site";

type RootLayoutProps = {
  children: React.ReactNode
}

// export const metadata: Metadata = {
//   metadataBase: new URL(site.url),
//   title: {
//     default: site.title,
//     template: `%s ${site.titleTemplate}`,
//   },
//   description: site.description,
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   manifest: "/favicon/site.webmanifest",
//   twitter: {
//     card: "summary_large_image",
//     title: site.name,
//     description: site.description,
//     site: site.twitter,
//     siteId: site.twitterId,
//     creator: site.twitter,
//     creatorId: site.twitterId,
//     images: [`${site.url}/images/og.png`],
//   },
//   keywords: site.keywords,
//   themeColor: [
//     {
//       media: "(prefers-color-scheme: light)",
//       color: "#ffffff",
//     },
//     {
//       media: "(prefers-color-scheme: dark)",
//       color: "#000000",
//     },
//   ],
//   creator: "meaganewaller",
//   openGraph: {
//     url: site.url,
//     type: "website",
//     title: site.title,
//     siteName: site.title,
//     description: site.description,
//     locale: "en-US",
//     images: [
//       {
//         url: `${site.url}/images/og.png`,
//         width: 1200,
//         height: 630,
//         alt: site.description,
//         type: "image/png",
//       },
//     ],
//   },
//   icons: {
//     icon: "/favicon/favicon.ico",
//     shortcut: "/favicon/favicon.svg",
//     apple: [
//       {
//         url: "/favicon/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png",
//       },
//     ],
//     other: [...site.favicons],
//   },
// };

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html suppressHydrationWarning lang='en-US'>
      <head />
      <body className="debug-screens">
        <Providers>
          <GlobalStyles />
          <Navbar />
          <Layout>{children}</Layout>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
