import type { NextPage } from 'next'
import Head from 'next/head'

import { getAbsoluteURL } from '@lib/utils/browser'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar';

type Props = {
  children: JSX.Element,
  hideNavbar?: boolean,
  hideFooter?: boolean
}

const HomeLayout: NextPage<Props> = ({ children, hideNavbar = false, hideFooter = true }: Props) => {
  return (
    <>
      <Head>
        <title>Meagan Waller</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Meagan Waller" />
        <meta property="og:title" content="Meagan Waller" />
        <meta property="og:description" content="Meagan Waller" />
        <meta property="og:url" content={`${getAbsoluteURL()}`} />
        <meta property="og:image" content={`${getAbsoluteURL()}/logo.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="apply h-full w-full bg-[center_center] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.2),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col rounded-lg bg-clouds dark:bg-nightsky">
        {!hideNavbar && <Navbar />}
        <main className="min-h-screen border-none bg-transparent">
          {children}
        </main>
        {!hideFooter && <Footer />}
      </div>
    </>
  )
}

export default HomeLayout
