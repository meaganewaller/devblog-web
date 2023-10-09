/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Post } from "@/types"

const PostMetadata = ({ post }: { post: Post }) => (
  <>
    <meta property="og:title" content={post.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`} />

    {post.coverImage && (
      <>
        <meta property="og:image" content={post.coverImage} />
      </>
    )}
    <meta property="og:description" content={post.description} />
    <meta name="description" content={post.content} />

    <meta property="article:published_time" content={post.publishedDate} />
    <meta property="article:author" content="Meagan Waller" />
    <meta property="article:section" content="Technology" />
    {post.tags && post.tags.length > 0 && (
      <meta property="article:tag" content={post.tags?.map((t) => t.name).join(',')} />
    )}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@meaganewaller" />
  </>
)

export default PostMetadata;
