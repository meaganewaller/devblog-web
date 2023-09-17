import { useMemo } from 'react'

import { formatReadableDate } from '@/utils/date'
import { Link } from '@/components/Layout/Link'
import { Post } from '@/types'
import { FaSquareUpRight, FaComment, FaStar } from 'react-icons/fa'
import clsx from 'clsx'

export interface PostLinkProps {
  post: Post
}

export const PostLink = ({ post }: PostLinkProps) => {
  const publishedDate = useMemo(() => formatReadableDate(post.publishedDate), [post.publishedDate])
  const isHighlighted = useMemo(() => {
    return post.tags?.length && post.tags.length > 0
      ? post.tags.map((t) => t.slug).indexOf('highlights') !== -1
      : false
  }, [post.tags])

  return (
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded bg-yellow-100' : '')}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-4">
          {post.external ? (
            <a
              href={post.href}
              className="text-lg link--blue font-semibold flex-grow"
              target="_blank"
              rel="noreferrer"
            >
              <span>{post.title}</span>
              <FaSquareUpRight size={24} className="inline ml-2 max-w-[24px]" />
              {isHighlighted && <FaStar size={24} className="inline ml-2 max-w-[24px]" />}
            </a>
          ) : (
              <Link href={`/blog/${post.slug}`} className="text-lg link--blue font-semibold flex-grow">
                <span>{post.title}</span>
                {isHighlighted && <FaStar size={18} className="inline ml-2 max-w-[18px]" />}
              </Link>
            )}
        </div>
        {isHighlighted && (post.description?.length || 0) > 0 && (
          <p className="text-gray-600 ml-[48px]">{post.description}</p>
        )}
      </div>
      <p className="hidden md:block text-ablue-500 text-sm text-right whitespace-nowrap space-x-2">
        <span>{publishedDate}</span>
      </p>
    </div>
  )
}
