/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import Link from 'next/link'
import { Post } from '@/types'
import { formatDate, formatReadableDate } from '@/utils/date'
import { ImPointLeft, ImPointDown } from 'react-icons/im'
import Tags from './Tags'
import pluralize from '@/utils/pluralize'

export interface PostProps {
  post: Post
}

export const PostHeader = ({ post }: PostProps) => {
  return (
    <div className="mb-6 px-2">
      <div className="max-w-5xl mx-auto mb-2">
        <p className="flex flex-row justify-between mb-6 w-full">
          <Link href="/blog" className="text-primary-txt text-sm flex items-center">
            <ImPointLeft size="10" className="w-4 h-4 inline" />
            <span className="pl-1">Blog</span>
          </Link>
          <Link href={`${String(process.env.NEXT_PUBLIC_BASE_URL)}/blog/${post.slug}`} className="u-url">
            {post.publishedDate &&
              <time
                className="text-sm ml-2 text-deep-sky-blue font-extra font-semibold dt-published"
                dateTime={formatDate(post.publishedDate)}
              >
                {formatReadableDate(post.publishedDate)}
              </time>
            }
          </Link>
          {post.commentCount > 0 && (
            <a href="#comments" className="text-sm text-inverse font-extra ml-2 font-semibold flex items-center">
              <span>
                {post.commentCount} {pluralize('comment', post.commentCount)}
              </span>
              <ImPointDown size="10" className="w-4 h-4 inline pl-1 text-primary-txt" />
            </a>
          )}
        </p>
        <h1 className="sm:text-center text-3xl md:text-5xl font-venice text-primary-txt leading-tight p-name">
          {post.title}
        </h1>
        {post.description && post.description.length > 0 && <div className="hidden p-summary">{post.description}</div>}

        {post.coverImage && post.coverImage.length > 0 && (
          <img
            className="u-photo hidden"
            alt={`${post.title} poster`}
            loading="lazy"
            src={post.coverImage}
          />
        )}
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="mx-auto sm:text-center max-w-4xl mt-6">
          <Tags tags={post.tags} />
        </div>
      )}
    </div>
  )
}
