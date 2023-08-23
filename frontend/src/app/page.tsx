import React, { Suspense } from 'react';
import { PostService } from '@/lib/api';
import { Intro } from '@/components/views/home/intro';
import { Connections } from '@/components/views/home/connections';
import { RecentPosts } from '@/components/views/home/recent-posts';

export default async function Home() {
  'use server'
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
