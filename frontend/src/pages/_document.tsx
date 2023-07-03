import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-pt-16 overflow-auto overscroll-none h-full antialiased scroll-smooth" lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#18181b" />
      </Head>
      <body className="flex h-full flex-col bg-white-500 dark:bg-accent-first-800 text-primary-800 dark:text-accent-first-100 bg-clouds dark:bg-nightsky">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
