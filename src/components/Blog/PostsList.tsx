import { useMemo } from 'react'

import Pagination from '@/components/Layout/Pagination'

import { PostLink } from './PostLink'

import { PostResponse } from '@/types'

interface PostsCountProps {
  posts: PostResponse[]
  year: number
}

export const PostsCount = ({ posts, year }: PostsCountProps) => {
  const count = useMemo(() => {
    return posts.filter((a) => new Date(a.published_date).getFullYear() === year).length
  }, [posts, year])

  return (
    <span className='mb-1 block rounded-full bg-raspberry-pink p-2 font-mono text-xs text-on-accent'>
      {count} post{count === 1 ? '' : 's'}
    </span>
  )
}

interface PostTimelineSeparatorProps {
  posts: PostResponse[]
  currentPost: PostResponse
  previousPost: PostResponse | null
}

export const PostTimelineSeparator = ({ posts, currentPost, previousPost }: PostTimelineSeparatorProps) => {
  const currentPostDate = new Date(currentPost.published_date)
  const currentPostYear = currentPostDate.getFullYear()

  const previousPostDate = previousPost ? new Date(previousPost.published_date) : null
  const previousPostYear = previousPostDate ? previousPostDate.getFullYear() : null

  if (!Number.isNaN(currentPostYear) && currentPostYear !== previousPostYear) {
    return (
      <div className='mt-8 flex items-baseline justify-between border-b-2 border-deep-pink md:mt-12'>
        <span className='font-venice text-4xl font-bold text-bubblegum'>{currentPostYear}</span>
        <PostsCount posts={posts} year={currentPostYear} />
      </div>
    )
  }

  return <></>
}

export interface PostTimelineProps {
  posts: Post[]
  page?: number
  totalPages?: number
  url: string
  showSeparator?: boolean
  previousPostUrl?: string
  pagination: string[]
}

export const PostsList = ({
  posts,
  page = 1,
  totalPages = 1,
  url,
  previousPostUrl,
  showSeparator = true,
  pagination,
}: PostTimelineProps) => {
  return (
    <div>
      {posts.length === 0 && <p>No Posts Found :(</p>}
      {posts.length > 0 &&
        posts.map((post: PostResponse, index: number) => (
          <div key={`${post.slug}-${post.title}-${post.published_date}`}>
            {showSeparator && (
              <PostTimelineSeparator
                posts={posts}
                currentPost={post}
                previousPost={index > 0 ? posts[index - 1] : null}
              />
            )}
            <PostLink post={post} />
          </div>
        ))}

      {page && totalPages && (
        <Pagination
          series={pagination}
          page={page}
          totalPages={totalPages}
          url={url}
          previousPostUrl={previousPostUrl}
        />
      )}
    </div>
  )
}
