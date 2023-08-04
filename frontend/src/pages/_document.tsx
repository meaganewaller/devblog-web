import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="cards.js" strategy="lazyOnload" />

          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
