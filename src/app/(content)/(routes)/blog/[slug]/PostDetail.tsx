import Image from 'next/image'

import { Container } from '@/components/ui'

import BlogComments from '@/app/(content)/_components/blog-comments'
import ContentMeta from '@/app/(content)/_components/content-meta'
import { PostFooter } from '@/app/(content)/_components/post-footer'
import Tag from '@/app/(content)/_components/tag'
import { useDetailStore } from '@/store/post.store'
import tw from '@/utils/tw'

export default function PostDetail() {
  const { post } = useDetailStore()
  return (
    <div>
      {post && (
        <>
          <aside data-referer data-slug={post.slug} data-title={post.title}></aside>
          <Container>
            {post.publishedDate && post.readingTime && (
              <ContentMeta
                title={post.title}
                timestamp={post.publishedDate}
                readingTime={post.readingTime}
                slug={post.slug}
              />
            )}
            <div id='image-cover'>
              <Image
                src={post.coverImage}
                alt={post.title}
                priority
                className={tw('object-cover')}
                width='800'
                height='600'
              />
            </div>
            <div
              className='e-content prose mx-auto dark:prose-invert'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {post.tags && (
              <div className={tw('mt-16 flex items-center gap-1 text-sm')}>
                Tags:
                <div className={tw('flex flex-wrap gap-1')}>
                  {post.tags?.map((tag) => <Tag key={tag.name} tag={tag} />)}
                </div>
              </div>
            )}
            <PostFooter />
            <BlogComments />
          </Container>
        </>
      )}
    </div>
  )
}
