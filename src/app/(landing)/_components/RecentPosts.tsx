'use client'

import { getRecentPosts } from '@/services/posts'
import { useQuery } from "@tanstack/react-query"
import { Window } from "@/components/core/window"
import { useWindowSize } from "@/hooks/use-window-size"
import { PostItem, PostList, PostListContainer } from './recent-posts.styles'
import Link from 'next/link'
import { Post } from "@/types"

async function fetchRecentPosts() {
  return await getRecentPosts()
}

export default function RecentPosts() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["recentPosts"],
    queryFn: fetchRecentPosts,
  })
  const size = useWindowSize()
  if (!size.width) return null

  return (
    <Window
      id='recent-posts-window'
      title='recent-posts.txt'
      x={size.width / 35}
      y={100}
      width={`${size.width / 2 < 520 ? size.width / 2 : 520}px`}
      zIndex='3'
      active={true}
      draggable={size.width > 897}
    >
      <PostListContainer>
        <PostList>
          {data?.map((post: Post) => (
            <PostItem key={post.slug} className='wavy'>
              <Link href={`/blog/${post.slug}`} className="no-underline outline-none hover:no-underline">
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
