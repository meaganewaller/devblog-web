import { useMemo } from 'react'
import { Post } from '@/types'
import Pagination from '@/components/Layout/Pagination'
import { PostLink } from './PostLink'
import { PostService } from '@/lib/api'

interface PostsCountProps {
  posts: Post[]
  year: number
}

export const PostsCount = ({ posts, year }: PostsCountProps) => {
  const count = useMemo(() => {
    return posts.filter((a) => new Date(a.publishedDate).getFullYear() === year).length
  }, [posts, year])

  return (
    <span className="text-sm font-semibold text-accent block">
      {count} post{count === 1 ? '' : 's' }
    </span>
  )
}

interface PostTimelineSeparatorProps {
  posts: Post[]
  currentPost: Post
  previousPost: Post | null
}

export const PostTimelineSeparator = ({ posts, currentPost, previousPost }: PostTimelineSeparatorProps) => {
  const currentPostDate = new Date(currentPost.publishedDate)
  const currentPostYear = currentPostDate.getFullYear()

  const previousPostDate = previousPost ? new Date(previousPost.publishedDate) : null
  const previousPostYear = previousPostDate ? previousPostDate.getFullYear() : null

  if (!Number.isNaN(currentPostYear) && currentPostYear !== previousPostYear) {
    return (
      <div className="mt-8 md:mt-12 flex justify-between items-baseline border-secondary-txt border-b-4">
        <span className="text-accent-dark font-bold text-4xl font-venice">
          {currentPostYear}
        </span>
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
}

export const PostsList = ({ posts, page = 1, totalPages = 1, url, showSeparator = true }: PostTimelineProps) => {
  return (
    <div>
      {posts.map((post: Post, index: number) => (
        <div key={`${post.slug}-${post.title}-${post.publishedDate}`}>
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

      {page && totalPages && <Pagination page={page} totalPages={totalPages} url={url} />}
    </div>
  )
}