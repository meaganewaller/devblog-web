/* eslint-disable react/no-danger */

import { Post } from '@/types'
import { transformMarkdown } from "@/utils/markdown-to-html"

export const PostContent = async ({ post }: { post: Post }) => {
  const renderedHtml = await transformMarkdown(post.content)
  return (
    <div
      className="e-content prose dark:prose-invert mx-auto"
      dangerouslySetInnerHTML={{ __html: renderedHtml || '' }}
    />
  )
}
