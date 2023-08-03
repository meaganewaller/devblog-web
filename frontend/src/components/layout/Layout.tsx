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

const HomeLayout: NextPage<Props> = ({ children, hideNavbar = false, hideFooter = false }: Props) => {
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

      <div className="flex flex-col h-screen justify-between">
        {!hideNavbar && <Navbar />}
        <main className="mb-auto mt-20 md:mt-28 pb-10">
          {children}
        </main>
        {!hideFooter && <Footer />}
      </div>
    </>
  )
}

export default HomeLayout
