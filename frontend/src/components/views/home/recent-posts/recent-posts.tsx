'use client'

import Link from 'next/link'

import { useWindowSize } from '@/hooks/use-window-size'

import { Window } from '@/components/core/window'
import { formatDate } from '@/utils'

interface Category {
  id: string
  name: string
  description: string
  slug: string
}

type Props = {
  posts: Post[]
}

interface Post {
  id: string
  title: string
  category: Category
  content: string
  description: string
  cover_image: string
  tags: string[]
  published_date: string
  slug: string
}

export function RecentPosts({ posts }: Props) {
  const size = useWindowSize()
  if (!size.width) return null

  return (
    <Window
      id='recent-posts-window'
      title='recent-posts.txt'
      x={size.width / 35}
      y={200}
      width={`${size.width / 2 < 520 ? size.width / 2 : 520}px`}
      zIndex='3'
      active={true}
    >
      <div className='flex max-w-3xl flex-col'>
        <ul className='px-6 py-2'>
          {posts.map((post: Post, index: number) => (
            <li key={index} className='wavy w-full px-2'>
              <Link
                href={`/blog/${post.slug}`}
                className='block no-underline outline-none hover:no-underline'
              >
                <h2 className='break-normal font-extra lowercase text-primary-txt hover:italic active:italic'>
                  {post.title}
                </h2>
                <span className='text-info-500 font-extra text-xs font-bold lowercase tracking-wide'>
                  {formatDate(post.published_date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Window>
  )
}
