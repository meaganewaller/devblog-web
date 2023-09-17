import { Suspense } from 'react'

import { PostService } from '@/lib/api'

import { Connections } from '@/components/views/home/connections'
import { Intro } from '@/components/views/home/intro'
import { RecentPosts } from '@/components/views/home/recent-posts'

import { createMetadata } from "@/utils/create-metadata"

export const metadata = createMetadata({
  title: 'welcome to my digital home',
  description:
    'Meagan Waller is a software engineer and web developer based in northeast Florida',
  keywords: [
    'software',
    'engineer',
    'developer',
    'javascript',
    'react',
    'typescript',
    'node',
    'nextjs',
    'gatsby',
    'florida',
    'remote',
    'work',
    'hire',
    'meagan',
    'waller',
  ],
  canonical: '',
  openGraph: {
    images: [
      {
        url: '/static/images/og.png',
      },
    ],
    url: 'https://meaganwaller.com',
    title: 'Meagan Waller',
    type: 'website',
    siteName: 'meaganwaller.com',
    description:
      'Meagan Waller is a software engineer and web developer based in northeast Florida',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Meagan Waller is a software engineer and web developer based in northeast Florida',
    site: 'https://meaganwaller.com',
    creator: '@meaganewaller',
    creatorId: '',
    siteId: '',
    title: 'Meagan Waller',
    images: [
      {
        url: '/static/images/og.png',
      },
    ],
  },
})

const Page = async () => {
  const posts = await PostService.getRecent()

  return (
    <>
      <Suspense>
        <RecentPosts posts={posts.slice(0, 5)} />
      </Suspense>
      <Intro />
      <Connections />
    </>
  )
}

export default Page
