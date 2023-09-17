export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://meaganwaller.com' : ''
export const baseEmail = 'meagan@meaganwaller.com'

export const defaultSEO = {
  title: 'Meagan Waler',
  description: 'Meagan Waler is a software engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Meagan Waler',
    images: [
      {
        url: `${baseUrl}/static/images/og/og.png`,
        alt: 'Meagan Waler',
      },
    ],
  },
  twitter: {
    handle: '@meaganewaller',
    site: '@meaganewaller',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image ? [{ url: `${baseUrl}/static/images/${options.image}` }] : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}${options.url}`,
      title: options.title || defaultSEO.title,
    },
  }
}
