import '@/styles/globals.scss';

import { type PropsWithChildren } from 'react';

import { BackToTop } from '@/components/molecules/back-to-top';
import { Main } from '@/components/molecules/main';
import { Providers } from '@/providers';
import { MenuProvider } from '@/providers/menu-provider';
import Navbar from "@/components/Navbar";
// import { navConfig } from "@/config/menu";
import { getStaticMetadata } from '@/utils/metadata';

import { Meta } from './meta';

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
      className={`font-sans debug-screens`}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body>
        <Providers>
          <div className="apply h-full w-full bg-[center_center] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.2),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] overflow-auto flex flex-col rounded-lg bg-clouds dark:bg-nightsky">
            <MenuProvider>
              <Navbar />
            </MenuProvider>
            <Main>{props.children}</Main>
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
