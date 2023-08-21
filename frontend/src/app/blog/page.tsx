'use client';

import { Suspense } from 'react';
import { Section } from '@/components/core/section';
import React, { useEffect, useState } from 'react';
import { PostService } from "@/lib/api";
import Link from 'next/link';
// import { getStaticMetadata } from '@/utils/metadata';
// import { buildOgImageUrl } from '@/utils/og';
// import { BlogPosts } from '@/components/views/blog/posts';

import Loading from '../loading';
import Header from './header';

async function Blog() {
  const posts = await PostService.getAll();

  return (
      <Section id={'blog'}>
      <Header />
      <Suspense fallback={<Loading />}>
      {posts.map((post) => {
          const date = new Date(post.published_date).toLocaleString()
          const titleText = post.title

          return (
              <li key={post.id}>
              <div className='max w-sm bg-accent border border-accent-dark rounded-lg shadow m-4'>
              <Link href={`/blog/${post.slug}`}>
              <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg'>
              <img className='object-cover w-full h-full' src={"/static/images/avatar/meaganwaller.png"} alt="Image" />
              </div>
              </Link>
              <div className="p-5">
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-on-accent">
              {titleText}
              </h5>
              </Link>
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-on-accent bg-accent-dark rounded-lg hover:bg-accent focus:ring-4 focus:outline-none focus:ring-accent">
              詳細を見る
              <svg
              className='w-3.5 h-3.5 ml-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
              >
              <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
              />
              </svg>
              </Link>
              </div>
              </div>
              </li>
              )
                           })}
</Suspense>
</Section>
)
}

export default Blog;
