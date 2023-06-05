import { SwitchThemeButton } from "@ui/SwitchThemeButton"
import { ThemeProvider } from "@/components/ThemeProvider"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"
// import NextTopLoader from "nextjs-toploader"
// import { cxm } from "@/lib/helpers/cxm"
// import Footer from "@sections/Footer"
// import Navbar from "@sections/Navbar"
import { ChildrenProps } from "@/models/index"
import "@/styles/globals.css"
// import ProviderWrapper from "./providerWrapper"

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Split checks with friends',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'Meagan Waller',
      url: siteConfig.links.twitter,
    },
  ],
  creator: 'Meagan Waller',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: '@meaganewaller',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className='min-h-screen bg-background font-sans antialiased'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className="container">{children}</main>
          <div className='group fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24'>
            <SwitchThemeButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
//
// export default function RootLayout({ children }: ChildrenProps)  {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <NextTopLoader color="#F84B3E" showSpinner={false} />
//         <ProviderWrapper>
//           <div
//             className={cxm(
//               "min-h-screen w-full",
//               "bg-purple-50 bg-fixed bg-center text-purple-800",
//               "dark:bg-purple-700 dark:text-purple-100"
//             )}
//           >
//             <Navbar />
//             <div className="px-4">{children}</div>
//             <Footer />
//           </div>
//         </ProviderWrapper>
//       </body>
//     </html>
//   )
// }
