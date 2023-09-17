import { Card } from "@/components/views/blog";
import type { PostFrontMatter } from "@/utils/blogs";

import { tw } from "@/utils/tw"

export const BlogPosts = (props: { posts: PostFrontMatter[] }) => (
  <div className={tw('divide-y divide-base-200 dark:divide-base-800 mt-4 mb-8')}>
    {props.posts.map((post) => {
      return <Card key={post.slug} headingLevel='h2' {...post} />
    })}
  </div>
)

