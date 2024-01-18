import clsx from 'clsx'
import { useMemo } from 'react'
import { FaStar } from 'react-icons/fa'

import { Link } from '@/components/Layout/Link'

import { formatDate } from '@/utils/date'

import { PostResponse } from '@/types'

export interface PostLinkProps {
  post: PostResponse
}

export const PostLink = ({ post }: PostLinkProps) => {
  const publishedDate = useMemo(
    () => (post.published_date ? formatDate(post.published_date) : null),
    [post.published_date],
  )
  const isHighlighted = useMemo(() => {
    return post.tags?.length && post.tags.length > 0 ? post.tags.indexOf('highlights') !== -1 : false
  }, [post.tags])

  return (
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded bg-light-yellow' : '')}>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center space-x-4'>
          <Link
            href={`/blog/${post.slug}`}
            className='decoration-none flex-grow text-lg font-semibold text-espresso hover:text-purple'
          >
            <span>{post.title}</span>
            {isHighlighted && <FaStar size={18} className='ml-2 inline max-w-[18px]' />}
          </Link>
        </div>
        {isHighlighted && (post.description?.length || 0) > 0 && (
          <p className='ml-[48px] text-purple'>{post.description}</p>
        )}
      </div>
      <p className='hidden space-x-2 whitespace-nowrap text-right text-sm text-sky-blue md:block'>
        <span>{publishedDate}</span>
      </p>
    </div>
  )
}
