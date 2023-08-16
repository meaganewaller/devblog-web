import '@/styles/globals.scss';

import { Inter, Manrope } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { BackToTop } from '@/components/molecules/back-to-top';
import { Main } from '@/components/molecules/main';
import { Providers } from '@/providers';
import { Toolbar } from '@/components/molecules/toolbar';
import { getStaticMetadata } from '@/utils/metadata';

import { Meta } from './meta';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
  display: 'fallback',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'fallback',
});

export const metadata = {
  ...getStaticMetadata({
    title: "Meagan Waller",
    description: "Meagan Waller's personal website",
    keywords: [
      'Meagan Waller',
      'Meagan',
      'meaganewaller'
    ],
  }),
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang={'en'}
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body className={'tablet-sm:overflow-y-auto'}>
        <Providers>
        <div className="apply h-full w-full bg-[center_center] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.2),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col rounded-lg bg-clouds dark:bg-nightsky">
        <Toolbar />
        <Main>{props.children}</Main>
        <BackToTop />
        </div>
        </Providers>
      </body>
    </html>
  );
}
