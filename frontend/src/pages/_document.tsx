import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-neutral">
          <Main />
          <NextScript />
          <Script src="cards.js" strategy="lazyOnload" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
