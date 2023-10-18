import { PostContent } from './PostContent'
import { PostHeader } from './PostHeader'
import { PostFooter } from './PostFooter'
import Engagement from '@/app/(content)/_components/engagement'
import { Comments } from './Comments'
import { Post } from '@/types'
import Image from 'next/image'

interface PostProps {
  post: Post
}

export const PostDetail = async ({ post }: PostProps) => {
  return (
    <article className="h-entry">
      <PostHeader post={post} />
      <div id="image-cover">
        <Image src={post.coverImage} alt={post.title} priority className="object-cover" width="800" height="600" />
      </div>
      {await PostContent({ post })}
      <PostFooter />
      <div className="mt-4 md:pt-4 pb-8">
        <div className="h-16 md:h-24 lg:h-32 overflow-hidden md:-mt-[40px] relative rotate-180">
          <div className="md:hidden bg-ivory absolute bottom-0 h-8 md:h-2 w-full" />
        </div>
        {/* <Engagement slug={post.slug} /> */}
        {/* <Comments /> */}
      </div>
    </article>
  )
}
