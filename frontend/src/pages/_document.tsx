import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="dark:bg-black-800 dark:text-gray-200">
          <Main />
          <NextScript />
          <Script src="cards.js" strategy="lazyOnload" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
