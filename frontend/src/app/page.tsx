import React, { Suspense, useEffect, useState } from 'react';
import { PostService } from '@/lib/api';
import { Intro } from '@/components/views/home/intro';
import { Connections } from '@/components/views/home/connections';
import { RecentPosts } from '@/components/views/home/recent-posts';

async function getPosts() {
  const res = await PostService.getAll();

  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res;
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <>
      <Intro />
      <Connections />
      <RecentPosts posts={posts} />
    </>
  )
}
