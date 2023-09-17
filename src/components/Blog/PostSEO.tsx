import { NextSeo } from 'next-seo'
import * as React from 'react'

import { baseUrl } from '@/config/seo'
import { Post } from '@/types'

interface Props {
  post: Post
}

export function PostSEO({ post }: Props) {
  return (
    <NextSeo
      title={post.title}
      description={post.metaDescription}
      openGraph={{
        title: post.title,
        url: `${baseUrl}/writing/${post.slug}`,
        description: post.metaDescription,
        images: [
          {
            url:
              post.coverImage ||
              `${baseUrl}/static/img/writing/${post.slug}.png`,
            alt: post.title,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
