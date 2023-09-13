import { site } from '@/config/site'
import type { Metadata } from 'next'

type Meta = Metadata & {
  templateTitle?: string
  canonical: string
}

export const createMetadata = ({ templateTitle, canonical, ...meta }: Meta): Metadata => {
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
