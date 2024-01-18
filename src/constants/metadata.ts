import { Metadata } from 'next'

export const METADATA = {
  title: "meagan waller | it's a blog!",
  desc: 'meagan waller is a software engineer based in jacksonville, fl. she loves to write about code, life, and everything in between.',
  twitter: '@meaganewaller',
  domain: {
    prod: 'https://meaganwaller.com',
  },
  blog: 'https://meaganwaller.com/blog',
  github: 'https://github.com/meaganewaller',
}

export const DEFAULT_META: Metadata = {
  metadataBase: new URL(METADATA.domain.prod),
  robots: {
    index: true,
    follow: true,
  },
  title: METADATA.title,
  description: METADATA.desc,
  openGraph: {
    title: METADATA.title,
    description: METADATA.desc,
    url: METADATA.domain.prod,
    siteName: METADATA.title,
    locale: 'en_US',
    type: 'website',
    images: ['/static/images/meta/og-image.png'],
  },
  twitter: {
    title: METADATA.title,
    description: METADATA.desc,
    card: 'summary_large_image',
    creator: METADATA.twitter,
  },
}
