import type { Metadata } from 'next'

import { site } from '@/config/site'

type Meta = Metadata & {
  templateTitle?: string
  canonical: string
}

export const createMetadata = ({
  templateTitle,
  canonical,
  ...meta
}: Meta): Metadata => {
  const title = `${meta.title} - ${templateTitle ?? site.title}`
  const canonicalURL = new URL(canonical, site.url)

  return {
    ...meta,
    title,
    alternates: {
      ...meta.alternates,
      canonical: canonicalURL.toString(),
    },
  }
}
