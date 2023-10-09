/* eslint-disable react/no-invalid-html-attribute */
const GlobalHead = () => {
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='/favicon.ico' rel='shortcut icon' />
      <link
        rel='alternate'
        type='application/rss+xml'
        href='https://feeds.feedburner.com/meaganewaller'
      />
      <link href='https://github.com/meaganewaller' rel='me' />
      <link
        rel='webmention'
        href='https://wm.meaganwaller.com/webmention/1.0/endpoint'
      />
      <link
        rel='http://webmention.org/'
        href='https://wm.meaganwaller.com/webmention/1.0/endpoint'
      />
    </>
  )
}

export default GlobalHead
