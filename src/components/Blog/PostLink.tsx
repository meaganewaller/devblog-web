import clsx from 'clsx'
import { useMemo } from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { FaStar } from 'react-icons/fa'

import { Link } from '@/components/Layout/Link'

import { formatReadableDate } from '@/utils/date'

import { Post } from '@/types'

export interface PostLinkProps {
  post: Post
}

export const PostLink = ({ post }: PostLinkProps) => {
  const publishedDate = useMemo(
    () => post.publishedDate ? formatReadableDate(post.publishedDate) : null,
    [post.publishedDate],
  )
  const isHighlighted = useMemo(() => {
    return post.tags?.length && post.tags.length > 0
      ? post.tags.map((t) => t.name).indexOf('highlights') !== -1
      : false
  }, [post.tags])

  return (
    <div
      className={clsx(
        'my-2 flex justify-between p-1',
        isHighlighted ? 'bg-yellow-100 rounded' : '',
      )}
    >
      <div className='flex flex-col'>
        <div className='flex flex-row items-center space-x-4'>
          {post.external ? (
            <a
              href={post.href}
              className='link--blue flex-grow text-lg font-semibold'
              target='_blank'
              rel='noreferrer'
            >
              <span>{post.title}</span>
              <LiaExternalLinkAltSolid size={24} className='ml-2 inline max-w-[24px]' />
              {isHighlighted && (
                <FaStar size={24} className='ml-2 inline max-w-[24px]' />
              )}
            </a>
          ) : (
            <Link
              href={`/blog/${post.slug}`}
              className='link--blue flex-grow text-lg font-semibold'
            >
              <span>{post.title}</span>
              {isHighlighted && (
                <FaStar size={18} className='ml-2 inline max-w-[18px]' />
              )}
            </Link>
          )}
        </div>
        {isHighlighted && (post.description?.length || 0) > 0 && (
          <p className='text-gray-600 ml-[48px]'>{post.description}</p>
        )}
      </div>
      <p className='text-ablue-500 hidden space-x-2 whitespace-nowrap text-right text-sm md:block'>
        <span>{publishedDate}</span>
      </p>
    </div>
  )
}
