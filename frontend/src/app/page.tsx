'use client'
import { Suspense } from 'react'

import { PostService } from '@/lib/api'

import { Connections } from '@/components/views/home/connections'
import { Intro } from '@/components/views/home/intro'
import { RecentPosts } from '@/components/views/home/recent-posts'
// import { site } from "@/config/site"

// export const metadata: Metadata = {
//   alternates: {
//     canonical: site.url,
//   },
// }

export default async function HomePage() {
  const { data: { posts } } = await PostService.getAll()
  if (!posts) {
    return <div>LOADING</div>
  }
  return (
    <>
      <Intro />
      <Connections />
      <RecentPosts posts={posts} />
    </>
  )
}
