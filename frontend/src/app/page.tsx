import { Suspense } from 'react'

import { PostService } from '@/lib/api'

import { Connections } from '@/components/views/home/connections'
import { Intro } from '@/components/views/home/intro'
import { RecentPosts } from '@/components/views/home/recent-posts'

const Page = async () => {
  const posts = await PostService.getAll()

  return (
    <>
      <Intro />
      <Connections />
      <Suspense>
        <RecentPosts posts={posts.slice(0, 5)} />
      </Suspense>
    </>
  )
}

export default Page
