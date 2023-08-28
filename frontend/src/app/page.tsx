'use client'
// import type { Metadata } from "next"
import React, { Suspense } from 'react'

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
  const postsData = await PostService.getAll()
  const posts = postsData.data.slice(0, 5)
  return (
    <>
      <Intro />
      <Connections />
      <Suspense>
        <RecentPosts posts={posts} />
      </Suspense>
    </>
  )
}
