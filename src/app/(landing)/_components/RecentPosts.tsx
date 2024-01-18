'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { useWindowSize } from '@/hooks/use-window-size'

import { Window } from '@/components/core/window'

import { getRecentPosts } from '@/services/posts'

import { PostItem, PostList, PostListContainer } from './recent-posts.styles'

import { Post } from '@/types'

async function fetchRecentPosts() {
  return await getRecentPosts()
}

export default function RecentPosts() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: fetchRecentPosts,
  })
  const size = useWindowSize()
  if (!size.width) return null

  return (
    <Window
      id='recent-posts-window'
      title='recent-posts.txt'
      x={Number(size.width / 2 < 520 ? size.width / 5 : size.width / 13)}
      y={Number(size.height / 4)}
      width={`${size.width / 2 < 520 ? size.width / 2 : 420}px`}
      zIndex='7'
      active={true}
      draggable={size.width > 767}
    >
      <PostListContainer>
        <PostList className='mx-auto'>
          {isLoading && <div>Loading...</div>}
          {isFetching && <div>Fetching...</div>}
          {data?.map((post: Post) => (
            <PostItem key={post.slug} className='wavy'>
              <Link href={`/blog/${post.slug}`} className='no-underline outline-none hover:no-underline'>
                <h2 className='break-normal text-start font-extra lowercase text-primary-txt hover:italic active:italic'>
                  {post.title}
                </h2>
              </Link>
            </PostItem>
          ))}
        </PostList>
      </PostListContainer>
    </Window>
  )
}
