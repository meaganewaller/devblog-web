import { PostService } from '@/lib/api'
import { notFound } from 'next/navigation'
import ContentMeta from '@/app/(content)/_components/content-meta'
import { convertPost } from "@/utils/blogs"
import Engagement from '@/app/(content)/_components/engagement'
import TagLink from '@/app/(content)/_components/tag'
import { PostContent } from '@/components/Blog/PostContent'
import { Container } from '@/components/ui'
import { ROUTES } from '@/constants/links'
import { tw } from '@/utils/tw'
import { getJsonLd, getMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils'
import { formatDate } from '@/utils/date'
import type { RequestContext } from '@/types/request'
import Image from 'next/image'
import { Tag } from '@/types'

interface PostPageProps extends RequestContext<{ slug?: string }> { }

export const generateMetadata = async ({ params }: PostPageProps) => {
  let post
  if (params && params.slug) {
    const postData = await PostService.getBySlug(params?.slug)
    post = convertPost(postData)
  }

  if (!post) return

  return getMetadata({
    title: post.title,
    description: post.metaDescription,
    keywords: post.metaKeywords ?? [],
    openGraph: {
      type: 'article',
      images: post.coverImage,
      publishedTime: post.publishedDate ? formatDate(post.publishedDate) : '',
      title: post.title,
    },
  })
}

const PostPage = async ({ params }: PostPageProps) => {
  let post
  if (params && params.slug) {
    const postData = await PostService.getBySlug(params?.slug)
    post = convertPost(postData)
  }

  if (!post) return notFound()

  return (
    <>
      <ContentMeta
        title={post?.title}
        timestamp={post.lastEdited}
        readingTime={post?.readingTime}
        slug={post?.slug}
      />
      <Container>
        <div id="image-cover">
          <Image src={post.coverImage} alt={post.title} priority className='object-cover' width="800" height="600" />
        </div>
        <div className={tw('prose max-w-full', 'dark:prose-dark')}>
          {await PostContent({ post })}
        </div>
        {post.tags && (
          <div className={tw('flex items-center text-sm gap-1 mt-16')}>
            Tags:
            <div className={tw('flex flex-wrap gap-1')}>
              {post.tags?.map((tag: Tag) => <TagLink key={tag.name} tag={tag} />)}
            </div>
          </div>
        )}
        <Engagement slug={post.slug} />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getJsonLd({
            title: post.title,
            description: post.description,
            headline: post.title,
            datePublished: post.publishedDate,
            dateModified: post.lastEdited,
            image: post.coverImage,
            url: `${getBaseUrl()}${ROUTES.blog}/${post.slug}`,
          }),
        }}
        key="post-jsonld"
      />
    </>
  )
}
export default PostPage
