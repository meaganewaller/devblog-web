import clsx from 'clsx'
import { useMemo } from 'react'
import { FaStar } from 'react-icons/fa'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

import { Link } from '@/components/Layout/Link'

import { formatDate } from '@/utils/date'

import { Post } from '@/types'

export interface PostLinkProps {
  post: Post
}

export const PostLink = ({ post }: PostLinkProps) => {
  const publishedDate = useMemo(
    () => (post.publishedDate ? formatDate(post.publishedDate) : null),
    [post.publishedDate],
  )
  const isHighlighted = useMemo(() => {
    return post.tags?.length && post.tags.length > 0 ? post.tags.map((t) => t.name).indexOf('highlights') !== -1 : false
  }, [post.tags])

  return (
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded bg-light-yellow' : '')}>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center space-x-4'>
          {post.external ? (
            <a
              href={post.href}
              className='flex-grow text-lg font-semibold text-primary-txt'
              target='_blank'
              rel='noreferrer'
            >
              <span>{post.title}</span>
              <LiaExternalLinkAltSolid size={24} className='ml-2 inline max-w-[24px]' />
              {isHighlighted && <FaStar size={24} className='ml-2 inline max-w-[24px]' />}
            </a>
          ) : (
            <Link href={`/blog/${post.slug}`} className='decoration-none flex-grow text-lg font-semibold'>
              <span>{post.title}</span>
              {isHighlighted && <FaStar size={18} className='ml-2 inline max-w-[18px]' />}
            </Link>
          )}
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
