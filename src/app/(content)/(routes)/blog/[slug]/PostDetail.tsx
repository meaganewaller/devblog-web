import { useDetailStore } from "@/store/post.store"
import ContentMeta from '@/app/(content)/_components/content-meta'
import Tag from '@/app/(content)/_components/tag'
import Engagement from '@/app/(content)/_components/engagement'
import { Container } from '@/components/ui'
import tw from '@/utils/tw'
import { formatDate, formatReadableDate, getBaseUrl } from '@/utils'
import Image from "next/image"

export default function PostDetail() {
  const { post } = useDetailStore()
  return (
    <div>
      {post && (
        <>
          <Container>
          <ContentMeta
            title={post.title}
            timestamp={post.publishedDate}
            readingTime={post.readingTime}
            slug={post.slug}
          />
          <div id='image-cover'>
            <Image src={post.coverImage} alt={post.title} priority className={tw('object-cover')} width="800" height="600" />
          </div>
          <div className={tw('prose max-w-full')}>
            {post.tags && (
              <div className={tw('flex items-center text-sm gap-1 mt-16')}>
                Tags:
                <div className={tw('flex flex-wrap gap-1')}>
                  {post.tags?.map((tag) => <Tag key={tag} tag={tag} />)}
                </div>
              </div>
            )}
              <Engagement slug={post.slug} />
          </div>
          </Container>
        </>
      )}
    </div>
  )
}
