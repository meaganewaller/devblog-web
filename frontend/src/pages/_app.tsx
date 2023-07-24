import '@/styles/fonts.css';
import '@/styles/globals.css';
import '@/styles/nprogress.css';

import SEO from '@/next-seo.config';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import { useRef } from 'react';
import { useScroll } from 'react-use';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import useAppLoading from '@/hooks/useAppLoading';

import ScrollToTop from '@ui/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  useAppLoading();
  NProgress.configure({ showSpinner: false });

  const scrollRef = useRef<HTMLDivElement>(null);
  const { y: scrollY } = useScroll(scrollRef);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="min-h-screen w-full bg-clouds bg-repeat dark:bg-nightsky bg-center rounded-sm overflow-hidden flex flex-col shadow-sm">
          <Component {...pageProps} />
          <ScrollToTop scrollRef={scrollRef} y={scrollY} />
        </div>
      </ThemeProvider>
      <Analytics />
      <div className="breakpoint-indicator fixed left-0 top-0 px-3 text-sm"></div>
    </>
  );
}
